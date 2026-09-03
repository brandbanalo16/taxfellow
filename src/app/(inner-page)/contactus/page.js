"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import HeaderTwo from "@/components/header/HeaderTwo";
import BackToTop from "@/components/BackToTop";
import FooterTwo from "@/components/footer/FooterTwo";
import Breadcrumb from '@/components/Breadcrumb';

const UNIQUE_SERVICES = [];

const PhoneIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.29 6.29l1.62-1.62a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const MapPinIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const labelStyle = {
  display: 'block',
  fontSize: 13,
  fontWeight: 700,
  color: '#1e293b',
  marginBottom: 8,
};

const inputStyle = {
  width: '100%',
  height: 48,
  padding: '0 14px',
  borderRadius: 12,
  border: '1.5px solid #e2e8f0',
  background: '#fff',
  fontSize: 14,
  color: '#0f172a',
  outline: 'none',
  transition: 'border-color 0.2s',
  fontFamily: 'inherit',
  boxSizing: 'border-box',
};

export default function ContactUs() {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Contact Us' }
  ];

  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const [formError, setFormError] = useState('');
  const [cardHover, setCardHover] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const digits = value.replace(/\D/g, '').slice(0, 10);
      setForm(prev => ({ ...prev, phone: digits }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    setApiError('');
    if (!form.name.trim()) { setFormError('Name is required.'); return; }
    if (!form.phone || !/^[0-9]{10}$/.test(form.phone)) { setFormError('Please enter a valid 10-digit phone number.'); return; }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { setFormError('Please enter a valid email address.'); return; }
    if (!form.city.trim()) { setFormError('City is required.'); return; }
    setLoading(true);
    try {
      const res = await fetch('/api/send-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone,
          city: form.city.trim(),
          message: form.message.trim(),
        }),
      });
      const data = await res.json();
      if (data.ok) {
        setSubmitted(true);
      } else {
        setApiError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setApiError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: '#f4f7fb', minHeight: '100vh' }}>
      <HeaderTwo />
      <Breadcrumb title="Contact Us" breadcrumbs={breadcrumbs} />

      {/* ── 3 Info Cards ── */}
      <section style={{ padding: '72px 0 48px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 28
          }}>

            {/* Phone Card */}
            <div
              onMouseEnter={() => setCardHover('phone')}
              onMouseLeave={() => setCardHover(null)}
              style={{
                background: '#fff', borderRadius: 20, padding: '36px 32px',
                border: '1px solid #e8edf3',
                boxShadow: cardHover === 'phone' ? '0 16px 48px rgba(0,0,0,0.10)' : '0 4px 20px rgba(0,0,0,0.05)',
                transition: 'box-shadow 0.25s, transform 0.25s',
                transform: cardHover === 'phone' ? 'translateY(-4px)' : 'translateY(0)',
                display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
              }}
            >
              <div style={{ width: 56, height: 56, background: '#eff6ff', color: '#2563eb', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                <PhoneIcon />
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0f172a', margin: '0 0 14px', fontFamily: 'Poppins, sans-serif' }}>Mobile Number</h3>
              <Link href="tel:+918800485106" style={{ color: '#64748b', textDecoration: 'none', fontSize: 15, display: 'block', marginBottom: 6, lineHeight: 1.6 }}>+91 88004 85106</Link>
              <Link href="tel:+919560449308" style={{ color: '#64748b', textDecoration: 'none', fontSize: 15, display: 'block', lineHeight: 1.6 }}>+91 95604 49308</Link>
            </div>

            {/* Mail Card */}
            <div
              onMouseEnter={() => setCardHover('mail')}
              onMouseLeave={() => setCardHover(null)}
              style={{
                background: '#fff', borderRadius: 20, padding: '36px 32px',
                border: '1px solid #e8edf3',
                boxShadow: cardHover === 'mail' ? '0 16px 48px rgba(0,0,0,0.10)' : '0 4px 20px rgba(0,0,0,0.05)',
                transition: 'box-shadow 0.25s, transform 0.25s',
                transform: cardHover === 'mail' ? 'translateY(-4px)' : 'translateY(0)',
                display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
              }}
            >
              <div style={{ width: 56, height: 56, background: '#eef2ff', color: '#4f46e5', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                <MailIcon />
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0f172a', margin: '0 0 14px', fontFamily: 'Poppins, sans-serif' }}>Mail</h3>
              <Link href="mailto:support@taxfello.com" style={{ color: '#64748b', textDecoration: 'none', fontSize: 15, display: 'block', marginBottom: 6, lineHeight: 1.6 }}>support@taxfello.com</Link>
              <Link href="mailto:info@taxfello.com" style={{ color: '#64748b', textDecoration: 'none', fontSize: 15, display: 'block', lineHeight: 1.6 }}>info@taxfello.com</Link>
            </div>

            {/* Address Card */}
            <div
              onMouseEnter={() => setCardHover('addr')}
              onMouseLeave={() => setCardHover(null)}
              style={{
                background: '#fff', borderRadius: 20, padding: '36px 32px',
                border: '1px solid #e8edf3',
                boxShadow: cardHover === 'addr' ? '0 16px 48px rgba(0,0,0,0.10)' : '0 4px 20px rgba(0,0,0,0.05)',
                transition: 'box-shadow 0.25s, transform 0.25s',
                transform: cardHover === 'addr' ? 'translateY(-4px)' : 'translateY(0)',
                display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
              }}
            >
              <div style={{ width: 56, height: 56, background: '#f0fdf9', color: '#0d9488', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                <MapPinIcon />
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0f172a', margin: '0 0 14px', fontFamily: 'Poppins, sans-serif' }}>Address</h3>
              <p style={{ color: '#64748b', fontSize: 15, margin: 0, lineHeight: 1.65 }}>
                709, 8th Floor, Westend Mall,<br />Janakpuri, Delhi 110058
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Form + Map ── */}
      <section style={{ paddingBottom: 88 }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            background: '#fff',
            borderRadius: 28,
            overflow: 'hidden',
            boxShadow: '0 16px 56px rgba(0,0,0,0.07)',
            border: '1px solid #e4eaf2',
            display: 'flex',
            flexWrap: 'wrap',
          }}>

            {/* LEFT – Form Panel */}
            <div style={{ flex: '1 1 400px', padding: '52px 48px' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '60px 0' }}>
                  <div style={{
                    width: 72, height: 72, background: '#dcfce7', color: '#16a34a',
                    borderRadius: '50%', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', margin: '0 auto 20px', fontSize: 36
                  }}>✓</div>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: '#0f172a', marginBottom: 8, fontFamily: 'Poppins, sans-serif' }}>Message Sent!</h3>
                  <p style={{ color: '#64748b', fontSize: 15 }}>We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <>
                  <h2 style={{ fontSize: 30, fontWeight: 800, color: '#0f172a', margin: '0 0 8px', fontFamily: 'Poppins, sans-serif' }}>
                    Send us a Message
                  </h2>
                  <p style={{ color: '#64748b', fontSize: 15, margin: '0 0 36px', lineHeight: 1.6 }}>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

                    {/* Name */}
                    <div>
                      <label style={labelStyle}>Name <span style={{ color: '#ef4444' }}>*</span></label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                        onFocus={e => { e.target.style.borderColor = '#3b82f6'; e.target.style.boxShadow = '0 0 0 3px #eff6ff'; }}
                        onBlur={e => { e.target.style.borderColor = '#e2e8f0'; e.target.style.boxShadow = 'none'; }}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label style={labelStyle}>Phone Number <span style={{ color: '#ef4444' }}>*</span></label>
                      <div style={{ display: 'flex', height: 48, border: '1.5px solid #e2e8f0', borderRadius: 12, overflow: 'hidden', background: '#fff' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '0 14px', background: '#f8fafc', borderRight: '1.5px solid #e2e8f0', fontSize: 14, fontWeight: 600, color: '#334155', whiteSpace: 'nowrap' }}>
                          🇮🇳 +91
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="10-digit number"
                          value={form.phone}
                          onChange={handleChange}
                          maxLength={10}
                          inputMode="numeric"
                          style={{ flex: 1, border: 'none', outline: 'none', padding: '0 14px', fontSize: 14, color: '#0f172a', background: 'transparent' }}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label style={labelStyle}>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address (optional)"
                        value={form.email}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={e => { e.target.style.borderColor = '#3b82f6'; e.target.style.boxShadow = '0 0 0 3px #eff6ff'; }}
                        onBlur={e => { e.target.style.borderColor = '#e2e8f0'; e.target.style.boxShadow = 'none'; }}
                      />
                    </div>

                    {/* City */}
                    <div>
                      <label style={labelStyle}>City <span style={{ color: '#ef4444' }}>*</span></label>
                      <input
                        type="text"
                        name="city"
                        placeholder="Your city"
                        value={form.city}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                        onFocus={e => { e.target.style.borderColor = '#3b82f6'; e.target.style.boxShadow = '0 0 0 3px #eff6ff'; }}
                        onBlur={e => { e.target.style.borderColor = '#e2e8f0'; e.target.style.boxShadow = 'none'; }}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label style={labelStyle}>Message</label>
                      <textarea
                        name="message"
                        placeholder="How can we help you?"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        style={{ ...inputStyle, height: 'auto', padding: '12px 14px', resize: 'none' }}
                        onFocus={e => { e.target.style.borderColor = '#3b82f6'; e.target.style.boxShadow = '0 0 0 3px #eff6ff'; }}
                        onBlur={e => { e.target.style.borderColor = '#e2e8f0'; e.target.style.boxShadow = 'none'; }}
                      />
                    </div>

                    {/* Validation Error */}
                    {formError && (
                      <p style={{ color: '#ef4444', fontSize: 13, fontWeight: 600, margin: '0', background: '#fff1f2', padding: '10px 14px', borderRadius: 8, border: '1px solid #fecaca' }}>
                        {formError}
                      </p>
                    )}

                    {/* API Error */}
                    {apiError && (
                      <p style={{ color: '#ef4444', fontSize: 13, fontWeight: 600, margin: '0', background: '#fff1f2', padding: '10px 14px', borderRadius: 8, border: '1px solid #fecaca' }}>
                        {apiError}
                      </p>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      style={{ width: '100%', height: 52, background: loading ? '#93c5fd' : '#1e3a8a', color: '#fff', border: 'none', borderRadius: 12, fontSize: 16, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', marginTop: 8, fontFamily: 'Poppins, sans-serif', transition: 'background 0.2s, transform 0.1s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}
                      onMouseEnter={e => { if (!loading) { e.currentTarget.style.background = '#172554'; e.currentTarget.style.transform = 'translateY(-1px)'; } }}
                      onMouseLeave={e => { if (!loading) { e.currentTarget.style.background = '#1e3a8a'; e.currentTarget.style.transform = 'translateY(0)'; } }}
                    >
                      {loading ? (
                        <>
                          <svg style={{ animation: 'spin 1s linear infinite' }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round"/></svg>
                          Sending...
                        </>
                      ) : 'Submit'}
                    </button>
                    <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
                  </form>
                </>
              )}
            </div>

            {/* RIGHT – Map Panel */}
            <div style={{ flex: '1 1 380px', minHeight: 500 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.001872605192!2d77.07698767550066!3d28.62970597566627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05850fb921f3%3A0xdcf90824977f2349!2sTaxfello!5e0!3m2!1sen!2sin!4v1785150692284!5m2!1sen!2sin"
                style={{ width: '100%', height: '100%', minHeight: 500, border: 'none', display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

          </div>
        </div>
      </section>

      <FooterTwo />
      <BackToTop />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap');
        @media (max-width: 640px) {
          .contact-form-panel { padding: 28px 20px !important; }
        }
      `}</style>
    </div>
  );
}
