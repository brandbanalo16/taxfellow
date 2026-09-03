"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ConsultationModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const digits = value.replace(/\D/g, '').slice(0, 10);
      setForm(prev => ({ ...prev, phone: digits }));
      setErrors(prev => ({ ...prev, phone: '' }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.phone || !/^[0-9]{10}$/.test(form.phone)) errs.phone = "Please enter a valid 10-digit phone number.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Please enter a valid email address.";
    if (!form.city.trim()) errs.city = "City is required.";

    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    setApiError('');
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
      if (data.ok) { setSubmitted(true); }
      else { setApiError(data.error || 'Something went wrong. Please try again.'); }
    } catch {
      setApiError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setForm({ name: "", email: "", phone: "", city: "", message: "" });
    setErrors({}); setSubmitted(false);
    setLoading(false); setApiError('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="cmp-backdrop" onClick={handleClose}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="cmp-modal"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button className="cmp-close" onClick={handleClose}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>

            {/* Left Content */}
            <div className="cmp-left">
              <h2 className="cmp-title">
                Get Expert ITR<br />Filing at Lowest Prices
              </h2>

              <div className="cmp-badge-primary">
                Taxfello provides ITR<br />filing at lowest prices
              </div>

              <div className="cmp-badge-secondary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                <span>Lowest price guaranteed</span>
              </div>

              <div className="cmp-contact">
                <p>Chat with us on</p>
                <a href="https://wa.me/919560449308" target="_blank" rel="noopener noreferrer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
                  <span>+91 95604 49308</span>
                </a>
              </div>
            </div>

            {/* Right Form area */}
            <div className="cmp-right">
              <div className="cmp-glass-card">
                {submitted ? (
                  <div className="cmp-success">
                    <div className="cmp-success-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <h3>Request Received!</h3>
                    <p>We'll get in touch with you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="cmp-form">

                    <div className="cmp-field">
                      <label>Name <span className="cmp-req">*</span></label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={form.name}
                        onChange={handleChange}
                        className={errors.name ? "has-error" : ""}
                      />
                      {errors.name && <span className="cmp-error">{errors.name}</span>}
                    </div>

                    <div className="cmp-field">
                      <label>Phone Number <span className="cmp-req">*</span></label>
                      <div className={`cmp-phone-input ${errors.phone ? "has-error" : ""}`}>
                        <div className="cmp-phone-prefix">
                          <span>🇮🇳</span>
                          <strong>+91</strong>
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          maxLength={10}
                          inputMode="numeric"
                          placeholder="10-digit number"
                        />
                      </div>
                      {errors.phone && <span className="cmp-error">{errors.phone}</span>}
                    </div>

                    <div className="cmp-field">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email (optional)"
                        value={form.email}
                        onChange={handleChange}
                        className={errors.email ? "has-error" : ""}
                      />
                      {errors.email && <span className="cmp-error">{errors.email}</span>}
                    </div>

                    <div className="cmp-field">
                      <label>City <span className="cmp-req">*</span></label>
                      <input
                        type="text"
                        name="city"
                        placeholder="Enter your city"
                        value={form.city}
                        onChange={handleChange}
                        className={errors.city ? "has-error" : ""}
                      />
                      {errors.city && <span className="cmp-error">{errors.city}</span>}
                    </div>

                    <div className="cmp-field">
                      <label>Message</label>
                      <textarea
                        name="message"
                        placeholder="Any additional details... (optional)"
                        value={form.message}
                        onChange={handleChange}
                        rows={3}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px', resize: 'none', outline: 'none', fontFamily: 'inherit' }}
                      />
                    </div>

                    {apiError && (
                      <span className="cmp-error" style={{ display: 'block', background: '#fff1f2', padding: '8px 12px', borderRadius: 8, border: '1px solid #fecaca' }}>
                        {apiError}
                      </span>
                    )}

                    <button
                      type="submit"
                      className="cmp-submit"
                      disabled={loading}
                      style={{ opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
                    >
                      {loading ? 'Sending...' : <>Submit <span>→</span></>}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <style>{`
        .cmp-backdrop {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(4px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        
        .cmp-modal {
          position: relative;
          width: 100%;
          max-width: 850px;
          min-height: 520px;
          background-color: #F0F6FC;
          background-image: url('/assets/images/contact/emailpopup-horizontal-banner.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          border-radius: 20px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: row;
          overflow: hidden;
        }
        
        .cmp-close {
          position: absolute;
          top: 16px; right: 16px;
          width: 32px; height: 32px;
          background: #fff;
          color: #475569;
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 50;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: background 0.2s;
        }
        .cmp-close:hover { background: #f1f5f9; }
        
        .cmp-left {
          flex: 1;
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          z-index: 10;
        }
        
        .cmp-title {
          font-family: 'Poppins', sans-serif;
          font-size: 38px;
          font-weight: 800;
          color: #0B1A2E;
          line-height: 1.1;
          margin: 0 0 20px 0;
        }
        
        .cmp-badge-primary {
          background: #2189D9;
          color: #fff;
          padding: 10px 20px;
          border-radius: 12px;
          font-size: 17px;
          font-weight: 700;
          display: inline-block;
          margin-bottom: 16px;
          box-shadow: 0 4px 6px rgba(33, 137, 217, 0.2);
          width: fit-content;
        }
        
        .cmp-badge-secondary {
          background: #E4F3FF;
          color: #2189D9;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid #BDE0FF;
          width: fit-content;
        }
        
        .cmp-contact {
          margin-top: 48px;
        }
        .cmp-contact p {
          font-size: 12px;
          font-weight: 700;
          color: #1e293b;
          margin: 0 0 8px 0;
        }
        .cmp-contact a {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #fff;
          padding: 8px 20px;
          border-radius: 30px;
          text-decoration: none;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          border: 1px solid #f1f5f9;
          transition: box-shadow 0.2s;
        }
        .cmp-contact a:hover { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
        .cmp-contact img { width: 22px; height: 22px; }
        .cmp-contact span { font-size: 16px; font-weight: 800; color: #0B1A2E; }
        
        .cmp-right {
          flex: 0 0 45%;
          padding: 30px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          z-index: 10;
        }
        
        .cmp-glass-card {
          width: 100%;
          max-width: 360px;
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          max-height: 100%;
          overflow-y: auto;
        }

        .cmp-glass-card::-webkit-scrollbar {
          width: 4px;
        }
        .cmp-glass-card::-webkit-scrollbar-thumb {
          background: rgba(0,0,0,0.1);
          border-radius: 4px;
        }
        
        .cmp-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        
        .cmp-field label {
          display: block;
          font-size: 13px;
          font-weight: 700;
          color: #0B1A2E;
          margin-bottom: 6px;
        }
        
        .cmp-req {
          color: #ef4444;
        }

        .cmp-field input[type="text"],
        .cmp-field input[type="email"] {
          width: 100%;
          height: 42px;
          padding: 0 14px;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          background: #fff;
          font-size: 14px;
          color: #0B1A2E;
          outline: none;
          transition: all 0.2s;
          box-sizing: border-box;
        }
        
        .cmp-field input[type="text"]:focus,
        .cmp-field input[type="email"]:focus {
          border-color: #60a5fa;
          box-shadow: 0 0 0 3px #eff6ff;
        }
        
        .cmp-field input.has-error {
          border-color: #f87171 !important;
        }
        
        .cmp-phone-input {
          display: flex;
          align-items: center;
          height: 42px;
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.2s;
        }
        .cmp-phone-input:focus-within {
          border-color: #60a5fa;
          box-shadow: 0 0 0 3px #eff6ff;
        }
        .cmp-phone-input.has-error {
          border-color: #f87171;
        }
        
        .cmp-phone-prefix {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 0 12px;
          height: 100%;
          background: #f8fafc;
          border-right: 1px solid #e2e8f0;
        }
        .cmp-phone-prefix span { font-size: 16px; }
        .cmp-phone-prefix strong { font-size: 14px; color: #1e293b; font-weight: 600; }
        
        .cmp-phone-input input {
          flex: 1;
          height: 100%;
          border: none;
          outline: none;
          background: transparent;
          font-size: 14px;
          font-weight: 500;
          color: #0B1A2E;
          padding: 0 8px;
          width: 100%;
        }

        .cmp-error {
          display: block;
          color: #FF4A4A;
          font-size: 12px;
          font-weight: 600;
          margin-top: 4px;
        }
        
        .cmp-submit {
          width: 100%;
          height: 46px;
          background: #2189D9;
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: background 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 12px rgba(33, 137, 217, 0.2);
          margin-top: 4px;
        }
        .cmp-submit:hover {
          background: #1A73B8;
        }
        .cmp-submit span { font-size: 20px; line-height: 1; }
        
        .cmp-success {
          text-align: center;
          padding: 32px 0;
        }
        .cmp-success-icon {
          width: 64px; height: 64px;
          background: #dcfce7;
          color: #16a34a;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px auto;
        }
        .cmp-success h3 {
          font-size: 20px;
          font-weight: 700;
          color: #1e293b;
          margin: 0 0 8px 0;
        }
        .cmp-success p {
          font-size: 14px;
          color: #475569;
          margin: 0;
        }
        
        @media (max-width: 768px) {
          .cmp-modal {
            flex-direction: column;
            background-position: top;
            max-height: 90vh;
            overflow-y: auto;
          }
          .cmp-left {
            padding: 24px;
          }
          .cmp-title {
            font-size: 28px;
          }
          .cmp-right {
            padding: 24px;
            justify-content: center;
          }
          .cmp-glass-card {
            max-width: 100%;
          }
        }
      `}</style>
    </AnimatePresence>
  );
}
