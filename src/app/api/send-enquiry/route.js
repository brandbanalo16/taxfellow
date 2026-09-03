import nodemailer from 'nodemailer';

// ─── Helpers ────────────────────────────────────────────────────────────────

function cleanStr(v = '', maxLen = 4000) {
  let s = String(v).trim().replace(/\s+/g, ' ');
  return s.length > maxLen ? s.slice(0, maxLen) : s;
}

function cleanEmail(v = '') {
  return String(v).trim().toLowerCase();
}

function cleanPhone(v = '') {
  return String(v).trim().replace(/\D/g, ''); // keep only digits
}

function isValidEmail(e) {
  if (!e) return true; // email is optional
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

// ─── Email Templates ─────────────────────────────────────────────────────────

function adminEmailHtml({ name, email, phone, city, message }) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f6fb;font-family:'Segoe UI',Arial,sans-serif;">
  <div style="background:#ffffff; max-width: 600px; margin: 40px auto; padding: 30px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <h2 style="color: #1e3a8a; margin-top: 0;">New Website Enquiry</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Phone Number:</strong> ${phone}</p>
    ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
    <p><strong>City:</strong> ${city}</p>
    ${message ? `<br/><p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>` : ''}
  </div>
</body>
</html>`;
}

// ─── Mailer setup ─────────────────────────────────────────────────────────────

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: process.env.SMTP_PORT !== '587',  // true for 465, false for 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
}

// ─── Rate-limit store (in-memory, resets on server restart) ──────────────────

const lastSubmit = new Map();

function checkRateLimit(ip) {
  const now = Date.now();
  const last = lastSubmit.get(ip) || 0;
  if (now - last < 8000) return false; // 8 seconds between submissions
  lastSubmit.set(ip, now);
  return true;
}

function getClientIp(req) {
  const cf = req.headers.get('cf-connecting-ip');
  const xff = req.headers.get('x-forwarded-for');
  const ra = req.headers.get('x-real-ip');
  if (cf) return cf.trim();
  if (xff) return xff.split(',')[0].trim();
  if (ra) return ra.trim();
  return 'unknown';
}

// ─── API Route Handler ────────────────────────────────────────────────────────

export async function POST(req) {
  try {
    let body = {};
    const ct = req.headers.get('content-type') || '';
    if (ct.includes('application/json')) {
      body = await req.json();
    } else {
      const fd = await req.formData();
      fd.forEach((val, key) => { body[key] = val; });
    }

    // Rate limit
    const ip = getClientIp(req);
    if (!checkRateLimit(ip)) {
      return Response.json({ ok: false, error: 'Please wait a moment before submitting again.' }, { status: 429 });
    }

    // Sanitise inputs
    const name     = cleanStr(body.name || '', 120);
    const email    = cleanEmail(body.email || '');
    const phone    = cleanPhone(body.phone || '');
    const city     = cleanStr(body.city || '', 120);
    const message  = cleanStr(body.message || '', 4000);

    // Validate strictly
    if (!name) return Response.json({ ok: false, error: 'Name is required.' }, { status: 400 });
    if (!city) return Response.json({ ok: false, error: 'City is required.' }, { status: 400 });
    if (!phone || phone.length !== 10) return Response.json({ ok: false, error: 'Please enter a valid 10-digit phone number.' }, { status: 400 });
    if (email && !isValidEmail(email)) return Response.json({ ok: false, error: 'Please enter a valid email address.' }, { status: 400 });

    const payload = { name, email, phone, city, message };

    const mailTo = process.env.MAIL_TO || 'support@taxfello.com';
    const mailBcc = process.env.MAIL_BCC || 'brandbanalo16@gmail.com';
    const fromEmail = process.env.SMTP_USER || 'support@taxfello.com';
    
    const subject = `New Website Enquiry - ${name}`;

    const transporter = createTransporter();

    // Admin notification
    const mailOptions = {
      from: fromEmail,
      to: mailTo,
      bcc: mailBcc,
      subject,
      html: adminEmailHtml(payload),
      text: `New Website Enquiry\n\nName: ${name}\nPhone Number: ${phone}\n${email ? 'Email: ' + email + '\n' : ''}City: ${city}\n${message ? '\nMessage:\n' + message : ''}`,
    };

    if (email) {
      mailOptions.replyTo = email;
    }

    await transporter.sendMail(mailOptions);

    return Response.json({ ok: true, message: 'Thank you! Your enquiry has been submitted successfully.' });

  } catch (err) {
    console.error('[Contact API Error]', err);
    return Response.json({
      ok: false,
      error: 'Something went wrong. Please try again.',
    }, { status: 500 });
  }
}

export async function GET() {
  return Response.json({ ok: false, error: 'Method not allowed' }, { status: 405 });
}
