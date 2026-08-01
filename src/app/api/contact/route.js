import nodemailer from 'nodemailer';

// ─── Helpers ────────────────────────────────────────────────────────────────

function cleanStr(v = '', maxLen = 200) {
  let s = String(v).trim().replace(/\s+/g, ' ');
  return s.length > maxLen ? s.slice(0, maxLen) : s;
}

function cleanEmail(v = '') {
  return String(v).trim().toLowerCase();
}

function cleanPhone(v = '', maxLen = 30) {
  let s = String(v).trim().replace(/[^\d+\-\s().]/g, '');
  return s.length > maxLen ? s.slice(0, maxLen) : s;
}

function isValidEmail(e) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

// ─── Email Templates ─────────────────────────────────────────────────────────

function adminEmailHtml({ formType, name, email, phone, service, message, submittedAt, ip }) {
  const company = process.env.COMPANY_NAME || 'Taxfello';
  const rows = [
    ['Form Type', formType],
    ['Full Name', name],
    ['Email', email],
    ['Phone', phone || '—'],
    ['Service', service || '—'],
    ['Message', message || '—'],
    ['Submitted At', submittedAt],
    ['IP Address', ip || '—'],
  ];

  const rowsHtml = rows.map(([label, value]) => `
    <tr>
      <td style="padding:10px 16px;font-weight:700;color:#374151;background:#f9fafb;border-bottom:1px solid #e5e7eb;width:160px;vertical-align:top;font-size:13px;">${label}</td>
      <td style="padding:10px 16px;color:#1f2937;border-bottom:1px solid #e5e7eb;font-size:14px;word-break:break-word;">${value}</td>
    </tr>`).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f6fb;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6fb;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);max-width:600px;width:100%;">
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#1e3a8a 0%,#2563eb 100%);padding:32px 40px;text-align:center;">
            <h1 style="color:#ffffff;margin:0;font-size:22px;font-weight:800;letter-spacing:-0.5px;">${company}</h1>
            <p style="color:#bfdbfe;margin:6px 0 0;font-size:13px;">New Form Submission Notification</p>
          </td>
        </tr>
        <!-- Badge -->
        <tr>
          <td style="padding:24px 40px 0;text-align:center;">
            <span style="background:#eff6ff;color:#1d4ed8;font-size:12px;font-weight:700;padding:6px 16px;border-radius:30px;text-transform:uppercase;letter-spacing:0.5px;">${formType}</span>
          </td>
        </tr>
        <!-- Table -->
        <tr>
          <td style="padding:24px 40px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;">
              ${rowsHtml}
            </table>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f9fafb;padding:20px 40px;border-top:1px solid #e5e7eb;text-align:center;">
            <p style="margin:0;font-size:12px;color:#9ca3af;">This email was sent by ${company}'s website contact system.</p>
            <p style="margin:6px 0 0;font-size:12px;color:#9ca3af;">${process.env.COMPANY_SITE || 'https://taxfello.com'}</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function userEmailHtml({ formType, name, service, submittedAt }) {
  const company = process.env.COMPANY_NAME || 'Taxfello';
  const displayName = name || 'there';

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f6fb;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6fb;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);max-width:600px;width:100%;">
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#1e3a8a 0%,#2563eb 100%);padding:32px 40px;text-align:center;">
            <h1 style="color:#ffffff;margin:0;font-size:22px;font-weight:800;">${company}</h1>
            <p style="color:#bfdbfe;margin:6px 0 0;font-size:13px;">We've received your submission!</p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:36px 40px;">
            <h2 style="margin:0 0 16px;font-size:20px;color:#1e293b;">Hi ${displayName},</h2>
            <p style="margin:0 0 16px;font-size:15px;color:#475569;line-height:1.7;">
              Thank you for reaching out to <strong>${company}</strong>! We've successfully received your <strong>${formType}</strong> 
              ${service ? `for <strong>${service}</strong>` : ''} submitted on <strong>${submittedAt}</strong>.
            </p>
            <p style="margin:0 0 24px;font-size:15px;color:#475569;line-height:1.7;">
              Our team will review your request and get back to you within <strong>24–48 business hours</strong>. 
              If you have an urgent query, feel free to reach us directly:
            </p>
            <!-- CTA Box -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#eff6ff;border-radius:12px;padding:0;margin-bottom:24px;">
              <tr>
                <td style="padding:20px 24px;">
                  <p style="margin:0 0 6px;font-size:13px;font-weight:700;color:#1d4ed8;text-transform:uppercase;letter-spacing:0.5px;">Contact Us Directly</p>
                  <p style="margin:0 0 4px;font-size:14px;color:#1e3a8a;">📞 +91 88004 85106 / +91 95604 49308</p>
                  <p style="margin:0;font-size:14px;color:#1e3a8a;">✉️ support@taxfello.com</p>
                </td>
              </tr>
            </table>
            <p style="margin:0;font-size:14px;color:#94a3b8;line-height:1.6;">Warm regards,<br><strong style="color:#1e293b;">${company} Team</strong></p>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f9fafb;padding:20px 40px;border-top:1px solid #e5e7eb;text-align:center;">
            <p style="margin:0;font-size:12px;color:#9ca3af;">© 2025 ${company}. All rights reserved.</p>
            <p style="margin:6px 0 0;font-size:12px;color:#9ca3af;">${process.env.COMPANY_SITE || 'https://taxfello.com'}</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ─── Mailer setup ─────────────────────────────────────────────────────────────

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.hostinger.com',
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: process.env.SMTP_SECURE !== 'false',  // true for 465, false for 587
    auth: {
      user: process.env.SMTP_USER || 'support@taxfello.com',
      pass: process.env.SMTP_PASS || '',
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

    // Honeypot check
    if (body.website && String(body.website).trim() !== '') {
      return Response.json({ ok: true, message: 'Submitted' });
    }

    // Rate limit
    const ip = getClientIp(req);
    if (!checkRateLimit(ip)) {
      return Response.json({ ok: false, error: 'Please wait a moment before submitting again.' }, { status: 429 });
    }

    // Sanitise inputs
    const formType = cleanStr(body.form_type || 'Contact Form', 60);
    const name     = cleanStr(body.name || '', 120);
    const email    = cleanEmail(body.email || '');
    const phone    = cleanPhone(body.phone || '');
    const service  = cleanStr(body.service || '', 120);
    const message  = cleanStr(body.message || '', 4000);

    // Validate
    if (!name) return Response.json({ ok: false, error: 'Full name is required.' }, { status: 422 });
    if (!email || !isValidEmail(email)) return Response.json({ ok: false, error: 'A valid email is required.' }, { status: 422 });

    const now = new Date();
    const submittedAt = now.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' }) + ' IST';

    const payload = { formType, name, email, phone, service, message, submittedAt, ip };

    const adminEmail = process.env.ADMIN_EMAIL || 'support@taxfello.com';
    const adminName  = process.env.ADMIN_NAME  || 'Taxfello Team';
    const fromName   = process.env.FROM_NAME   || 'Taxfello';
    const fromEmail  = process.env.FROM_EMAIL  || 'support@taxfello.com';

    const company = process.env.COMPANY_NAME || 'Taxfello';

    let subject = `[${company}] New ${formType} – ${name}`;
    if (formType === 'Consultation Request') subject = `New Consultation Request – ${name}`;

    const transporter = createTransporter();

    // Admin notification
    await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: `"${adminName}" <${adminEmail}>`,
      replyTo: isValidEmail(email) ? `"${name}" <${email}>` : undefined,
      subject,
      html: adminEmailHtml(payload),
      text: `Form: ${formType}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}\n\nSubmitted: ${submittedAt}`,
    });

    // Auto-reply to user
    if (isValidEmail(email)) {
      await transporter.sendMail({
        from: `"${fromName}" <${fromEmail}>`,
        to: `"${name}" <${email}>`,
        subject: `Thanks for contacting ${company}!`,
        html: userEmailHtml(payload),
        text: `Hi ${name},\n\nThank you for contacting ${company}. We received your submission on ${submittedAt} and will get back to you within 24–48 business hours.\n\nBest regards,\n${company} Team`,
      });
    }

    return Response.json({ ok: true, message: 'Thanks! Your submission has been received. We\'ll be in touch shortly.' });

  } catch (err) {
    console.error('[Contact API Error]', err);
    return Response.json({
      ok: false,
      error: 'We could not send your message right now. Please try again later.',
    }, { status: 500 });
  }
}

export async function GET() {
  return Response.json({ ok: false, error: 'Method not allowed' }, { status: 405 });
}
