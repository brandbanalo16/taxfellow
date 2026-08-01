"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SUB_SERVICES = [
  // Income Tax
  "Individual ITR Filing", "Business ITR Filing", "NRI Tax Filing", "Capital Gain Filing", "Revised Return", "Defective Return Response",
  // GST
  "GST Registration", "GST Return Filing", "GST Cancellation", "GST Amendment", "GST Notice Reply", "GST Audit",
  // Business Registration & Incorporation
  "Sole Proprietorship", "Partnership Firm", "LLP Registration", "Private Limited Company", "OPC Registration", "Section 8 Company", "Producer Company",
  // Trademark
  "Trademark Search", "Trademark Filing", "Trademark Objection", "Trademark Renewal",
  // Accounting
  "Monthly Bookkeeping", "Bank Reconciliation", "MIS Reports", "Financial Statements",
  // TDS
  "TDS Return Filing", "TDS Certificate", "TDS Compliance", "TDS Notice Reply",
  // ROC
  "Annual Filing", "Director KYC", "Charge Registration", "ROC Notice Reply",
  // MSME
  "Udyam Registration", "MSME Update", "MSME Certificate", "MSME Benefits Advisory",
  // IEC
  "IEC Registration", "IEC Modification", "IEC Surrender", "Export Documentation",
  // Payroll
  "Salary Processing", "PF Compliance", "ESI Compliance", "Payslip Generation",
  // Tax Notice
  "Income Tax Notice", "GST Notice", "TDS Notice", "Scrutiny Assessment",
  // Financial & CFO
  "Business Valuation", "Project Report", "CMA Data", "Investment Advisory", "Cash Flow Planning", "Financial Strategy", "Budget Planning", "Investor Reporting",
  // Other
  "Custom Consultation", "Advisory Call", "Documentation Support"
];

// Ensure unique services
const UNIQUE_SERVICES = Array.from(new Set(SUB_SERVICES));

export default function ConsultationModal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [consent, setConsent] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!name.trim()) errs.name = "Full Name is required";
    if (!email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Invalid email";
    if (!phone.trim()) errs.phone = "Phone is required";
    else if (!/^\d{10}$/.test(phone)) errs.phone = "Invalid phone number";
    if (!service) errs.service = "Please select a service";
    if (!consent) errs.consent = "You must agree to the terms";

    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    setApiError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_type: 'Consultation Request',
          name, email,
          phone: '+91 ' + phone,
          service,
          message: `Consultation Request for: ${service}`,
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
    setName(""); setEmail(""); setPhone("");
    setService(""); setConsent(false);
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
                      <label>Full Name <span className="cmp-req">*</span></label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => { setName(e.target.value); setErrors(prev => ({ ...prev, name: "" })) }}
                        className={errors.name ? "has-error" : ""}
                      />
                      {errors.name && <span className="cmp-error">{errors.name}</span>}
                    </div>

                    <div className="cmp-field">
                      <label>Email Address <span className="cmp-req">*</span></label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setErrors(prev => ({ ...prev, email: "" })) }}
                        className={errors.email ? "has-error" : ""}
                      />
                      {errors.email && <span className="cmp-error">{errors.email}</span>}
                    </div>

                    <div className="cmp-field">
                      <label>Phone Number</label>
                      <div className={`cmp-phone-input ${errors.phone ? "has-error" : ""}`}>
                        <div className="cmp-phone-prefix">
                          <span>🇮🇳</span>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                          <strong>+91</strong>
                        </div>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => { setPhone(e.target.value.replace(/\D/g, '')); setErrors(prev => ({ ...prev, phone: "" })) }}
                          maxLength={10}
                        />
                      </div>
                      {errors.phone && <span className="cmp-error">{errors.phone}</span>}
                    </div>

                    <div className="cmp-field">
                      <label>Service Selection</label>
                      <select
                        value={service}
                        onChange={(e) => { setService(e.target.value); setErrors(prev => ({ ...prev, service: "" })) }}
                        className={`cmp-select ${errors.service ? "has-error" : ""}`}
                      >
                        <option value="">Select Service</option>
                        {UNIQUE_SERVICES.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      {errors.service && <span className="cmp-error">{errors.service}</span>}
                    </div>

                    <div className="cmp-field">
                      <label className="cmp-checkbox-label">
                        <input
                          type="checkbox"
                          checked={consent}
                          onChange={(e) => { setConsent(e.target.checked); setErrors(prev => ({ ...prev, consent: "" })) }}
                          className={errors.consent ? "has-error" : ""}
                        />
                        <span className={errors.consent ? "cmp-error-text" : ""}>
                          Confirm that you agree to our terms of service by checking this box.
                        </span>
                      </label>
                      {errors.consent && <span className="cmp-error">{errors.consent}</span>}
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
          gap: 16px;
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
        }

        .cmp-select {
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
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
        }
        
        .cmp-field input[type="text"]:focus,
        .cmp-field input[type="email"]:focus,
        .cmp-select:focus {
          border-color: #60a5fa;
          box-shadow: 0 0 0 3px #eff6ff;
        }
        
        .cmp-field input.has-error,
        .cmp-select.has-error {
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
          cursor: pointer;
        }
        .cmp-phone-prefix:hover { background: #f8fafc; }
        .cmp-phone-prefix span { font-size: 16px; }
        .cmp-phone-prefix svg { color: #64748b; }
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
        
        .cmp-checkbox-label {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-weight: normal !important;
          cursor: pointer;
        }
        
        .cmp-checkbox-label input[type="checkbox"] {
          margin-top: 3px;
          width: 16px;
          height: 16px;
          cursor: pointer;
          accent-color: #2189D9;
        }

        .cmp-checkbox-label span {
          font-size: 13px;
          color: #475569;
          line-height: 1.4;
        }
        
        .cmp-error-text {
          color: #ef4444 !important;
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
