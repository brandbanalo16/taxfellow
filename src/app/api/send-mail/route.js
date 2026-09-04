import nodemailer from 'nodemailer';

const FAIL_MESSAGE = 'Unable to send enquiry';

function cleanStr(v = '', maxLen = 4000) {
  let s = String(v).trim().replace(/\s+/g, ' ');
  return s.length > maxLen ? s.slice(0, maxLen) : s;
}

function cleanEmail(v = '') {
  return String(v).trim().toLowerCase();
}

function cleanPhone(v = '') {
  return String(v).trim().replace(/\D/g, '');
}

function isValidEmail(e) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function row(label, value) {
  if (!value) return '';
  return `<tr>
    <td style="padding:10px 12px;border-bottom:1px solid #eef2f6;color:#64748b;font-size:13px;width:160px;vertical-align:top;">${escapeHtml(label)}</td>
    <td style="padding:10px 12px;border-bottom:1px solid #eef2f6;color:#0f172a;font-size:14px;">${escapeHtml(value).replace(/\n/g, '<br/>')}</td>
  </tr>`;
}

function buildEmailHtml(fields) {
  const rows = [
    row('Name', fields.name),
    row('Email', fields.email),
    row('Phone', fields.phone),
    row('City', fields.city),
    row('Company', fields.company),
    row('Subject', fields.subject),
    row('Service', fields.service),
    row('Source', fields.source),
    row('Message', fields.message),
  ].join('');

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f6fb;font-family:'Segoe UI',Arial,sans-serif;">
  <div style="background:#ffffff;max-width:640px;margin:40px auto;padding:32px;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.05);">
    <h2 style="color:#1e3a8a;margin:0 0 8px;">New Website Enquiry</h2>
    <p style="color:#64748b;margin:0 0 24px;font-size:14px;">A new enquiry was submitted on taxfello.com.</p>
    <table style="width:100%;border-collapse:collapse;border:1px solid #eef2f6;border-radius:8px;">${rows}</table>
  </div>
</body>
</html>`;
}

function buildEmailText(fields) {
  const lines = [
    'New Website Enquiry',
    '',
    fields.name && `Name: ${fields.name}`,
    fields.email && `Email: ${fields.email}`,
    fields.phone && `Phone: ${fields.phone}`,
    fields.city && `City: ${fields.city}`,
    fields.company && `Company: ${fields.company}`,
    fields.subject && `Subject: ${fields.subject}`,
    fields.service && `Service: ${fields.service}`,
    fields.source && `Source: ${fields.source}`,
    fields.message && `\nMessage:\n${fields.message}`,
  ].filter(Boolean);
  return lines.join('\n');
}

function createTransporter() {
  const user = process.env.GMAIL_USER;
  const pass = (process.env.GMAIL_APP_PASSWORD || '').replace(/\s+/g, '');

  if (!user || !pass) {
    throw new Error('Missing Gmail environment variables');
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  });
}

const lastSubmit = new Map();

function checkRateLimit(ip) {
  const now = Date.now();
  const last = lastSubmit.get(ip) || 0;
  if (now - last < 8000) return false;
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

function fail(status, message) {
  return Response.json({ success: false, message }, { status });
}

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

    const ip = getClientIp(req);
    if (!checkRateLimit(ip)) {
      return fail(429, 'Please wait a moment before submitting again.');
    }

    const name = cleanStr(body.name || '', 120);
    const email = cleanEmail(body.email || '');
    const phone = cleanPhone(body.phone || '');
    const city = cleanStr(body.city || '', 120);
    const company = cleanStr(body.company || '', 160);
    const subject = cleanStr(body.subject || '', 200);
    const service = cleanStr(body.service || '', 200);
    const source = cleanStr(body.source || '', 160);
    const message = cleanStr(body.message || '', 4000);

    if (!name) return fail(400, 'Name is required.');
    if (!phone || phone.length !== 10) return fail(400, 'Please enter a valid 10-digit phone number.');
    if (email && !isValidEmail(email)) return fail(400, 'Please enter a valid email address.');

    const fields = { name, email, phone, city, company, subject, service, source, message };
    const gmailUser = process.env.GMAIL_USER;
    const gmailBcc = process.env.GMAIL_BCC;

    if (!gmailUser) {
      console.error('[Contact API Error] GMAIL_USER is not set');
      return fail(500, FAIL_MESSAGE);
    }

    const transporter = createTransporter();
    const mailSubject = service
      ? `New Website Enquiry - ${name} (${service})`
      : `New Website Enquiry - ${name}`;

    const mailOptions = {
      from: gmailUser,
      to: gmailUser,
      bcc: gmailBcc || undefined,
      subject: mailSubject,
      html: buildEmailHtml(fields),
      text: buildEmailText(fields),
    };

    if (email) {
      mailOptions.replyTo = email;
    }

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true });
  } catch (err) {
    console.error('[Contact API Error]', err);
    return fail(500, FAIL_MESSAGE);
  }
}

export async function GET() {
  return fail(405, 'Method not allowed');
}
