"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import HeaderTwo from '@/components/header/HeaderTwo';
import Breadcrumb from '@/components/Breadcrumb';
import FooterTwo from '@/components/footer/FooterTwo';
import BackToTop from '@/components/BackToTop';

/* ─── Icon maps for sections ─────────────────────────────── */
const benefitIcons = [
    'fas fa-user-tie',
    'fas fa-clock',
    'fas fa-chart-line',
    'fas fa-shield-alt',
    'fas fa-laptop-code',
    'fas fa-headset',
    'fas fa-handshake',
    'fas fa-star',
];
const whyIcons = [
    'fas fa-user-check',
    'fas fa-tags',
    'fas fa-balance-scale',
    'fas fa-calendar-check',
    'fas fa-life-ring',
    'fas fa-map-marked-alt',
];
const processIcons = [
    'fas fa-file-alt',
    'fas fa-search',
    'fas fa-paper-plane',
    'fas fa-certificate',
    'fas fa-check-double',
    'fas fa-flag-checkered',
    'fas fa-hands-helping',
    'fas fa-rocket',
];
const tocIcons = {
    overview: 'fas fa-info-circle',
    benefits: 'fas fa-star',
    documents: 'fas fa-folder-open',
    process: 'fas fa-list-ol',
    'why-taxfello': 'fas fa-award',
    faqs: 'fas fa-question-circle',
    additional: 'fas fa-lightbulb',
};

/* ─── Styles ─────────────────────────────────────────────── */
const colors = {
    primary: '#1547A0',
    primaryLight: '#EEF4FF',
    primaryMid: '#3D6FD4',
    accent: '#F59E0B',
    dark: '#0F1B2D',
    body: '#4A5568',
    light: '#F8FAFC',
    border: '#E2E8F0',
    success: '#10B981',
    white: '#FFFFFF',
};

const inputStyle = {
    width: '100%',
    padding: '11px 16px',
    borderRadius: '8px',
    border: `1.5px solid ${colors.border}`,
    fontSize: '14px',
    color: colors.dark,
    outline: 'none',
    background: '#FAFCFF',
    transition: 'border-color 0.2s',
    fontFamily: 'inherit',
};

export default function ServicePageClient({ service }) {
    const [openFaq, setOpenFaq] = useState(null);
    const [activeSection, setActiveSection] = useState('overview');
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', city: '', message: '' });
    const [submitStatus, setSubmitStatus] = useState(''); // '', 'submitting', 'success', 'error'
    const [formError, setFormError] = useState('');
    const tocSections = ['overview', 'benefits', 'documents', 'process', 'why-taxfello', 'faqs'];

    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: service.subCategory || 'Services', link: '#' },
        { label: service.serviceName },
    ];

    const tocItems = [
        { id: 'overview', label: 'Overview' },
        { id: 'benefits', label: 'Key Benefits' },
        { id: 'documents', label: 'Documents Required' },
        { id: 'process', label: 'Registration Process' },
        { id: 'why-taxfello', label: 'Why Taxfello' },
        { id: 'faqs', label: 'FAQs' },
        ...(service.pageContent?.additionalSection
            ? [{ id: 'additional', label: service.pageContent.additionalSection.title || 'Additional Info' }]
            : []),
    ];

    /* ── Scroll spy ───────────────────────── */
    useEffect(() => {
        const onScroll = () => {
            const scrollY = window.scrollY + 160;
            let found = 'overview';
            for (const id of [...tocSections, 'additional']) {
                const el = document.getElementById(id);
                if (el && scrollY >= el.offsetTop) found = id;
            }
            setActiveSection(found);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            const offset = el.getBoundingClientRect().top + window.scrollY - 130;
            window.scrollTo({ top: offset, behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    /* ── Form ─────────────────────────────── */
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'phone') {
            const digits = value.replace(/\D/g, '').slice(0, 10);
            setFormData((p) => ({ ...p, phone: digits }));
        } else {
            setFormData((p) => ({ ...p, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormError('');
        if (!formData.name.trim()) { setFormError('Name is required.'); return; }
        if (!formData.phone || !/^[0-9]{10}$/.test(formData.phone)) { setFormError('Please enter a valid 10-digit phone number.'); return; }
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { setFormError('Please enter a valid email address.'); return; }
        if (!formData.city.trim()) { setFormError('City is required.'); return; }
        setSubmitStatus('submitting');
        try {
            const res = await fetch('/api/send-mail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name.trim(),
                    email: formData.email.trim(),
                    phone: formData.phone,
                    city: formData.city.trim(),
                    message: formData.message.trim(),
                    service: service.serviceName,
                    source: 'Service page',
                }),
            });
            const data = await res.json();
            if (data.success) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', phone: '', city: '', message: '' });
            } else {
                setFormError(data.message || 'Unable to send enquiry');
                setSubmitStatus('error');
            }
        } catch {
            setFormError('Network error. Please try again.');
            setSubmitStatus('error');
        }
    };

    const content = service.pageContent || {};

    return (
        <div style={{ background: '#F0F4FA', minHeight: '100vh', fontFamily: 'inherit' }}>
            <HeaderTwo />
            <Breadcrumb title={service.serviceName} breadcrumbs={breadcrumbs} />

            <style>{`
                .sdp-toc-link { text-decoration: none !important; display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-radius: 8px; font-size: 13.5px; font-weight: 500; color: #64748B; transition: all 0.25s ease; border-left: 3px solid transparent; }
                .sdp-toc-link:hover { color: ${colors.primary}; background: ${colors.primaryLight}; }
                .sdp-toc-link.active { color: ${colors.primary}; background: ${colors.primaryLight}; border-left: 3px solid ${colors.primary}; font-weight: 700; }
                .sdp-toc-link .toc-icon { width: 26px; height: 26px; border-radius: 6px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px; background: #E2E8F0; color: #64748B; transition: all 0.25s; }
                .sdp-toc-link.active .toc-icon, .sdp-toc-link:hover .toc-icon { background: ${colors.primary}; color: #fff; }

                .sdp-benefit-card { background: #fff; border: 1.5px solid ${colors.border}; border-radius: 14px; padding: 22px 20px; transition: all 0.3s ease; height: 100%; }
                .sdp-benefit-card:hover { border-color: ${colors.primaryMid}; box-shadow: 0 6px 24px rgba(21,71,160,0.10); transform: translateY(-3px); }
                .sdp-benefit-icon { width: 50px; height: 50px; border-radius: 12px; background: ${colors.primaryLight}; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; }
                .sdp-benefit-icon i { font-size: 20px; color: ${colors.primary}; }

                .sdp-why-card { background: linear-gradient(135deg, #fff 0%, #F8FAFF 100%); border: 1.5px solid ${colors.border}; border-radius: 12px; padding: 20px 18px; transition: all 0.3s ease; display: flex; gap: 14px; align-items: flex-start; }
                .sdp-why-card:hover { border-color: ${colors.primary}; box-shadow: 0 4px 20px rgba(21,71,160,0.10); }
                .sdp-why-icon { width: 42px; height: 42px; border-radius: 10px; background: ${colors.primaryLight}; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
                .sdp-why-icon i { font-size: 18px; color: ${colors.primary}; }

                .sdp-step { display: flex; gap: 20px; position: relative; }
                .sdp-step:not(:last-child)::before { content: ''; position: absolute; left: 21px; top: 44px; bottom: -20px; width: 2px; background: linear-gradient(180deg, ${colors.primary} 0%, ${colors.border} 100%); }
                .sdp-step-num { width: 44px; height: 44px; border-radius: 12px; background: ${colors.primary}; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 15px; font-weight: 800; flex-shrink: 0; box-shadow: 0 4px 12px rgba(21,71,160,0.3); }
                .sdp-step-body { flex: 1; padding-bottom: 28px; }
                .sdp-step-timeline { display: inline-flex; align-items: center; gap: 5px; background: #FEF3C7; color: #92400E; border-radius: 20px; padding: 3px 10px; font-size: 11.5px; font-weight: 600; margin-bottom: 8px; }

                .sdp-faq-item { border: 1.5px solid ${colors.border}; border-radius: 10px; overflow: hidden; transition: border-color 0.2s; margin-bottom: 12px; }
                .sdp-faq-item.open { border-color: ${colors.primary}; }
                .sdp-faq-trigger { display: flex; justify-content: space-between; align-items: center; padding: 16px 20px; cursor: pointer; background: #fff; }
                .sdp-faq-trigger:hover { background: ${colors.primaryLight}; }
                .sdp-faq-chevron { width: 28px; height: 28px; border-radius: 50%; background: ${colors.primaryLight}; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: transform 0.3s; }
                .sdp-faq-chevron.open { background: ${colors.primary}; transform: rotate(180deg); }
                .sdp-faq-chevron i { font-size: 11px; color: ${colors.primary}; }
                .sdp-faq-chevron.open i { color: #fff; }
                .sdp-faq-answer { padding: 0 20px; max-height: 0; overflow: hidden; transition: max-height 0.35s ease, padding 0.3s; background: #FAFCFF; }
                .sdp-faq-answer.open { padding: 14px 20px 18px; max-height: 300px; }

                .sdp-doc-item { display: flex; align-items: flex-start; gap: 12px; padding: 14px 0; border-bottom: 1px solid ${colors.border}; }
                .sdp-doc-item:last-child { border-bottom: none; }
                .sdp-doc-check { width: 26px; height: 26px; border-radius: 50%; background: ${colors.success}; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; }
                .sdp-doc-check i { font-size: 11px; color: #fff; }

                .sdp-form-input:focus { border-color: ${colors.primary} !important; box-shadow: 0 0 0 3px rgba(21,71,160,0.10); }
                .sdp-submit-btn { background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryMid} 100%); color: #fff; border: none; padding: 13px; border-radius: 10px; font-size: 14.5px; font-weight: 700; cursor: pointer; width: 100%; transition: all 0.3s ease; letter-spacing: 0.3px; }
                .sdp-submit-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(21,71,160,0.4); }
                .sdp-submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }

                .sdp-section-tag { display: inline-flex; align-items: center; gap: 7px; background: ${colors.primaryLight}; color: ${colors.primary}; border-radius: 20px; padding: 5px 14px; font-size: 12px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 14px; }
                .sdp-divider { height: 1px; background: linear-gradient(90deg, ${colors.border} 0%, transparent 100%); margin: 0 0 36px; }

                html, body {
                    overflow-x: clip !important;
                    overflow-y: visible !important;
                }
                .sdp-left-col {
                    position: -webkit-sticky !important;
                    position: sticky !important;
                    top: 120px !important;
                    align-self: flex-start !important;
                    z-index: 10;
                }
                .sdp-right-col {
                    position: -webkit-sticky !important;
                    position: sticky !important;
                    top: 120px !important;
                    align-self: flex-start !important;
                    z-index: 10;
                }
                @media (max-width: 991px) {
                    .sdp-left-col, .sdp-right-col { display: none !important; }
                    .sdp-center-col { flex: 0 0 100% !important; max-width: 100% !important; }
                }
                @media (max-width: 767px) {
                    .sdp-right-col { display: block !important; position: relative !important; top: 0 !important; }
                }
            `}</style>

            <div style={{ width: '100%', padding: '40px 24px 80px', overflow: 'visible' }}>
                <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', width: '100%', overflow: 'visible' }}>

                    {/* ═══ LEFT: Table of Contents (20%) ════════════════════════ */}
                    <div className="sdp-left-col" style={{ width: '20%', flexShrink: 0 }}>
                        <div style={{
                            background: colors.white,
                            borderRadius: '16px',
                            padding: '24px 18px',
                            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                            border: `1px solid ${colors.border}`,
                            maxHeight: 'calc(100vh - 140px)',
                            overflowY: 'auto',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
                                <div style={{ width: '4px', height: '22px', borderRadius: '3px', background: `linear-gradient(180deg, ${colors.primary}, ${colors.primaryMid})` }} />
                                <p style={{ fontSize: '11px', fontWeight: '800', color: colors.primary, textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>
                                    Table of Contents
                                </p>
                            </div>
                            <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                {tocItems.map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className={`sdp-toc-link ${activeSection === item.id ? 'active' : ''}`}
                                        onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}
                                    >
                                        <span className="toc-icon">
                                            <i className={tocIcons[item.id] || 'fas fa-circle'} />
                                        </span>
                                        {item.label}
                                    </a>
                                ))}
                            </nav>

                            {/* Quick info badges */}
                            <div style={{ marginTop: '22px', paddingTop: '18px', borderTop: `1px solid ${colors.border}` }}>
                                {content.estimatedTimeline && (
                                    <div style={{ background: '#FEF3C7', borderRadius: '8px', padding: '10px 12px', marginBottom: '8px' }}>
                                        <p style={{ fontSize: '10px', fontWeight: '700', color: '#92400E', textTransform: 'uppercase', margin: '0 0 2px' }}>
                                            <i className="fas fa-clock" style={{ marginRight: '5px' }} />Timeline
                                        </p>
                                        <p style={{ fontSize: '13px', fontWeight: '600', color: '#78350F', margin: 0 }}>
                                            {content.estimatedTimeline}
                                        </p>
                                    </div>
                                )}
                                {content.regulatoryAuthority && (
                                    <div style={{ background: colors.primaryLight, borderRadius: '8px', padding: '10px 12px' }}>
                                        <p style={{ fontSize: '10px', fontWeight: '700', color: colors.primary, textTransform: 'uppercase', margin: '0 0 2px' }}>
                                            <i className="fas fa-landmark" style={{ marginRight: '5px' }} />Authority
                                        </p>
                                        <p style={{ fontSize: '12px', fontWeight: '600', color: colors.dark, margin: 0 }}>
                                            {content.regulatoryAuthority}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* ═══ CENTER: Main Content ════════════════════════════ */}
                    <div className="sdp-center-col" style={{ flex: 1, minWidth: 0 }}>
                        <div style={{
                            background: colors.white,
                            borderRadius: '20px',
                            padding: '48px 44px',
                            boxShadow: '0 2px 24px rgba(0,0,0,0.04)',
                            border: `1px solid ${colors.border}`,
                        }}>

                            {/* ── OVERVIEW ─────────────────────────────── */}
                            <section id="overview" style={{ marginBottom: '56px', scrollMarginTop: '130px' }}>
                                <div className="sdp-section-tag">
                                    <i className="fas fa-layer-group" />
                                    {service.subCategory}
                                </div>
                                <h1 style={{ fontSize: '30px', fontWeight: '800', color: colors.dark, marginBottom: '8px', lineHeight: '1.25' }}>
                                    {service.serviceName}
                                </h1>
                                {content.governingReference && (
                                    <p style={{ fontSize: '13px', color: colors.body, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <i className="fas fa-file-contract" style={{ color: colors.primaryMid }} />
                                        Governed under: <strong>{content.governingReference}</strong>
                                    </p>
                                )}

                                {/* Stat pills */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '28px' }}>
                                    {content.estimatedTimeline && (
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#FEF3C7', borderRadius: '10px', padding: '10px 16px' }}>
                                            <i className="fas fa-clock" style={{ color: '#D97706', fontSize: '16px' }} />
                                            <div>
                                                <p style={{ fontSize: '10px', fontWeight: '700', color: '#92400E', margin: 0, textTransform: 'uppercase' }}>Timeline</p>
                                                <p style={{ fontSize: '14px', fontWeight: '700', color: '#78350F', margin: 0 }}>{content.estimatedTimeline}</p>
                                            </div>
                                        </div>
                                    )}
                                    {content.regulatoryAuthority && (
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: colors.primaryLight, borderRadius: '10px', padding: '10px 16px' }}>
                                            <i className="fas fa-landmark" style={{ color: colors.primary, fontSize: '16px' }} />
                                            <div>
                                                <p style={{ fontSize: '10px', fontWeight: '700', color: colors.primary, margin: 0, textTransform: 'uppercase' }}>Regulated By</p>
                                                <p style={{ fontSize: '13px', fontWeight: '700', color: colors.dark, margin: 0 }}>{content.regulatoryAuthority}</p>
                                            </div>
                                        </div>
                                    )}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#D1FAE5', borderRadius: '10px', padding: '10px 16px' }}>
                                        <i className="fas fa-laptop-code" style={{ color: '#065F46', fontSize: '16px' }} />
                                        <div>
                                            <p style={{ fontSize: '10px', fontWeight: '700', color: '#065F46', margin: 0, textTransform: 'uppercase' }}>Mode</p>
                                            <p style={{ fontSize: '14px', fontWeight: '700', color: '#064E3B', margin: 0 }}>100% Online</p>
                                        </div>
                                    </div>
                                </div>

                                {content.overview
                                    ? content.overview.split('\n\n').map((para, i) => (
                                        <p key={i} style={{ fontSize: '15.5px', lineHeight: '1.85', color: colors.body, marginBottom: '18px' }}>
                                            {para}
                                        </p>
                                    ))
                                    : <p style={{ color: colors.body }}>Loading content…</p>
                                }
                            </section>

                            {/* ── BENEFITS ─────────────────────────────── */}
                            <section id="benefits" style={{ marginBottom: '56px', scrollMarginTop: '130px' }}>
                                <div className="sdp-divider" />
                                <div className="sdp-section-tag">
                                    <i className="fas fa-star" />Key Benefits
                                </div>
                                <h2 style={{ fontSize: '24px', fontWeight: '800', color: colors.dark, marginBottom: '28px' }}>
                                    Why Register with Taxfello?
                                </h2>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '18px' }}>
                                    {content.benefits?.map((b, i) => (
                                        <div key={i} className="sdp-benefit-card">
                                            <div className="sdp-benefit-icon">
                                                <i className={benefitIcons[i % benefitIcons.length]} />
                                            </div>
                                            <h5 style={{ fontSize: '15px', fontWeight: '700', color: colors.dark, marginBottom: '8px' }}>
                                                {b.point}
                                            </h5>
                                            <p style={{ fontSize: '13.5px', lineHeight: '1.65', color: colors.body, margin: 0 }}>
                                                {b.detail}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* ── DOCUMENTS ────────────────────────────── */}
                            <section id="documents" style={{ marginBottom: '56px', scrollMarginTop: '130px' }}>
                                <div className="sdp-divider" />
                                <div className="sdp-section-tag">
                                    <i className="fas fa-folder-open" />Documents Required
                                </div>
                                <h2 style={{ fontSize: '24px', fontWeight: '800', color: colors.dark, marginBottom: '6px' }}>
                                    Documents You'll Need
                                </h2>
                                <p style={{ fontSize: '14px', color: colors.body, marginBottom: '24px' }}>
                                    Keep the following documents ready for a smooth, quick submission.
                                </p>
                                <div style={{
                                    background: '#FAFCFF',
                                    border: `1.5px solid ${colors.border}`,
                                    borderRadius: '14px',
                                    padding: '8px 24px',
                                }}>
                                    {content.documentsRequired?.map((doc, i) => (
                                        <div key={i} className="sdp-doc-item">
                                            <div className="sdp-doc-check">
                                                <i className="fas fa-check" />
                                            </div>
                                            <span style={{ fontSize: '14.5px', color: colors.dark, lineHeight: '1.55', paddingTop: '3px' }}>
                                                {doc}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* ── PROCESS ──────────────────────────────── */}
                            <section id="process" style={{ marginBottom: '56px', scrollMarginTop: '130px' }}>
                                <div className="sdp-divider" />
                                <div className="sdp-section-tag">
                                    <i className="fas fa-list-ol" />Process
                                </div>
                                <h2 style={{ fontSize: '24px', fontWeight: '800', color: colors.dark, marginBottom: '32px' }}>
                                    Step-by-Step Registration Process
                                </h2>
                                <div>
                                    {content.process?.map((p, i) => (
                                        <div key={i} className="sdp-step">
                                            <div>
                                                <div className="sdp-step-num">
                                                    <i className={processIcons[i % processIcons.length]} style={{ fontSize: '16px' }} />
                                                </div>
                                            </div>
                                            <div className="sdp-step-body">
                                                <div className="sdp-step-timeline">
                                                    <i className="fas fa-clock" style={{ fontSize: '10px' }} />
                                                    {p.timeline}
                                                </div>
                                                <h5 style={{ fontSize: '16px', fontWeight: '700', color: colors.dark, marginBottom: '6px' }}>
                                                    {p.title}
                                                </h5>
                                                <p style={{ fontSize: '14px', color: colors.body, lineHeight: '1.65', margin: 0 }}>
                                                    {p.detail}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* ── WHY TAXFELLO ─────────────────────────── */}
                            <section id="why-taxfello" style={{ marginBottom: '56px', scrollMarginTop: '130px' }}>
                                <div className="sdp-divider" />
                                <div className="sdp-section-tag">
                                    <i className="fas fa-award" />Why Choose Us
                                </div>
                                <h2 style={{ fontSize: '24px', fontWeight: '800', color: colors.dark, marginBottom: '28px' }}>
                                    Why Clients Trust Taxfello
                                </h2>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
                                    {content.whyTaxfello?.map((item, i) => (
                                        <div key={i} className="sdp-why-card">
                                            <div className="sdp-why-icon">
                                                <i className={whyIcons[i % whyIcons.length]} />
                                            </div>
                                            <div>
                                                <h6 style={{ fontSize: '14.5px', fontWeight: '700', color: colors.dark, marginBottom: '6px' }}>
                                                    {item.point}
                                                </h6>
                                                <p style={{ fontSize: '13px', color: colors.body, lineHeight: '1.6', margin: 0 }}>
                                                    {item.detail}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* ── ADDITIONAL SECTION ───────────────────── */}
                            {content.additionalSection && (
                                <section id="additional" style={{ marginBottom: '56px', scrollMarginTop: '130px' }}>
                                    <div className="sdp-divider" />
                                    <div style={{
                                        background: `linear-gradient(135deg, ${colors.primaryLight} 0%, #EEF7FF 100%)`,
                                        border: `1.5px solid ${colors.primary}30`,
                                        borderRadius: '14px',
                                        padding: '28px 30px',
                                        position: 'relative',
                                        overflow: 'hidden',
                                    }}>
                                        <div style={{
                                            position: 'absolute',
                                            top: '-20px',
                                            right: '-20px',
                                            width: '120px',
                                            height: '120px',
                                            borderRadius: '50%',
                                            background: `${colors.primary}10`,
                                        }} />
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                                            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: colors.primary, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <i className="fas fa-lightbulb" style={{ color: '#fff', fontSize: '17px' }} />
                                            </div>
                                            <h3 style={{ fontSize: '18px', fontWeight: '800', color: colors.dark, margin: 0 }}>
                                                {content.additionalSection.title}
                                            </h3>
                                        </div>
                                        <p style={{ fontSize: '15px', color: colors.body, lineHeight: '1.8', margin: 0 }}>
                                            {content.additionalSection.content}
                                        </p>
                                    </div>
                                </section>
                            )}

                            {/* ── FAQs ─────────────────────────────────── */}
                            <section id="faqs" style={{ scrollMarginTop: '130px' }}>
                                <div className="sdp-divider" />
                                <div className="sdp-section-tag">
                                    <i className="fas fa-question-circle" />FAQs
                                </div>
                                <h2 style={{ fontSize: '24px', fontWeight: '800', color: colors.dark, marginBottom: '24px' }}>
                                    Frequently Asked Questions
                                </h2>
                                <div>
                                    {content.faqs?.map((faq, i) => (
                                        <div key={i} className={`sdp-faq-item ${openFaq === i ? 'open' : ''}`}>
                                            <div
                                                className="sdp-faq-trigger"
                                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                            >
                                                <span style={{ fontSize: '15px', fontWeight: '600', color: colors.dark, paddingRight: '12px', lineHeight: '1.4' }}>
                                                    {faq.question}
                                                </span>
                                                <div className={`sdp-faq-chevron ${openFaq === i ? 'open' : ''}`}>
                                                    <i className="fas fa-chevron-down" />
                                                </div>
                                            </div>
                                            <div className={`sdp-faq-answer ${openFaq === i ? 'open' : ''}`}>
                                                <p style={{ fontSize: '14px', color: colors.body, lineHeight: '1.7', margin: 0 }}>
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                        </div>
                    </div>

                    {/* ═══ RIGHT: Sticky Enquiry Form (20%) ══════════════════════ */}
                    <div className="sdp-right-col" style={{ width: '20%', flexShrink: 0 }}>
                        <div style={{
                            maxHeight: 'calc(100vh - 140px)',
                            overflowY: 'auto',
                        }}>
                            {/* CTA Card */}
                            <div style={{
                                background: colors.white,
                                borderRadius: '18px',
                                overflow: 'hidden',
                                boxShadow: '0 8px 40px rgba(21,71,160,0.12)',
                                border: `1px solid ${colors.border}`,
                                marginBottom: '16px',
                            }}>
                                {/* Header */}
                                <div style={{
                                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryMid} 100%)`,
                                    padding: '22px 22px 18px',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}>
                                    <div style={{
                                        position: 'absolute', top: '-30px', right: '-30px',
                                        width: '100px', height: '100px', borderRadius: '50%',
                                        background: 'rgba(255,255,255,0.08)',
                                    }} />
                                    <div style={{
                                        position: 'absolute', bottom: '-20px', left: '-20px',
                                        width: '70px', height: '70px', borderRadius: '50%',
                                        background: 'rgba(255,255,255,0.06)',
                                    }} />
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                                        <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <i className="fas fa-phone-alt" style={{ color: '#fff', fontSize: '15px' }} />
                                        </div>
                                        <h5 style={{ color: '#fff', fontWeight: '800', fontSize: '16px', margin: 0 }}>
                                            Get Free Consultation
                                        </h5>
                                    </div>
                                    <p style={{ color: 'rgba(255,255,255,0.80)', fontSize: '12.5px', margin: 0, lineHeight: '1.5' }}>
                                        Talk to a CA/CS expert for {service.serviceName}
                                    </p>
                                </div>

                                {/* Form body */}
                                <div style={{ padding: '22px' }}>
                                    {submitStatus === 'success' ? (
                                        <div style={{
                                            textAlign: 'center',
                                            padding: '24px 12px',
                                            background: '#D1FAE5',
                                            borderRadius: '10px',
                                        }}>
                                            <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: colors.success, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                                                <i className="fas fa-check" style={{ color: '#fff', fontSize: '22px' }} />
                                            </div>
                                            <h6 style={{ color: '#065F46', fontWeight: '700', marginBottom: '6px' }}>Request Received!</h6>
                                            <p style={{ color: '#047857', fontSize: '13px', margin: 0 }}>
                                                Our expert will call you within 30 minutes.
                                            </p>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                            {[
                                                { label: 'Name *', name: 'name', type: 'text', placeholder: 'Full Name', icon: 'fas fa-user' },
                                                { label: 'Email', name: 'email', type: 'email', placeholder: 'Email (optional)', icon: 'fas fa-envelope' },
                                                { label: 'City *', name: 'city', type: 'text', placeholder: 'Your City', icon: 'fas fa-map-marker-alt' },
                                            ].map((field) => (
                                                <div key={field.name}>
                                                    <label style={{ fontSize: '11.5px', fontWeight: '700', color: colors.body, display: 'block', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                                                        {field.label}
                                                    </label>
                                                    <div style={{ position: 'relative' }}>
                                                        <i className={field.icon} style={{
                                                            position: 'absolute',
                                                            left: '13px',
                                                            top: '50%',
                                                            transform: 'translateY(-50%)',
                                                            color: colors.primaryMid,
                                                            fontSize: '13px',
                                                        }} />
                                                        <input
                                                            type={field.type}
                                                            name={field.name}
                                                            value={formData[field.name]}
                                                            onChange={handleChange}
                                                            placeholder={field.placeholder}
                                                            className="sdp-form-input"
                                                            style={{ ...inputStyle, paddingLeft: '38px' }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                            <div>
                                                <label style={{ fontSize: '11.5px', fontWeight: '700', color: colors.body, display: 'block', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                                                    Phone Number *
                                                </label>
                                                <div style={{ position: 'relative' }}>
                                                    <i className="fas fa-phone" style={{ position: 'absolute', left: '13px', top: '50%', transform: 'translateY(-50%)', color: colors.primaryMid, fontSize: '13px' }} />
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        placeholder="10-digit number"
                                                        maxLength={10}
                                                        inputMode="numeric"
                                                        className="sdp-form-input"
                                                        style={{ ...inputStyle, paddingLeft: '38px' }}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label style={{ fontSize: '11.5px', fontWeight: '700', color: colors.body, display: 'block', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                                                    Message (Optional)
                                                </label>
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    placeholder="Tell us more about your requirement…"
                                                    rows="3"
                                                    className="sdp-form-input"
                                                    style={{ ...inputStyle, resize: 'none' }}
                                                />
                                            </div>
                                            {formError && (
                                                <p style={{ color: '#ef4444', fontSize: '13px', margin: 0, fontWeight: 600 }}>{formError}</p>
                                            )}
                                            <button
                                                type="submit"
                                                disabled={submitStatus === 'submitting'}
                                                className="sdp-submit-btn"
                                            >
                                                {submitStatus === 'submitting' ? (
                                                    <><i className="fas fa-spinner fa-spin" style={{ marginRight: '8px' }} />Submitting…</>
                                                ) : (
                                                    <><i className="fas fa-paper-plane" style={{ marginRight: '8px' }} />Request Free Callback</>
                                                )}
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>

                            {/* Trust badges */}
                            <div style={{
                                background: colors.white,
                                borderRadius: '14px',
                                padding: '16px',
                                border: `1px solid ${colors.border}`,
                                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                            }}>
                                {[
                                    { icon: 'fas fa-shield-alt', color: '#0F766E', bg: '#CCFBF1', text: '100% Secure & Confidential' },
                                    { icon: 'fas fa-headset', color: '#1D4ED8', bg: '#DBEAFE', text: 'Expert CA/CS Support' },
                                    { icon: 'fas fa-rupee-sign', color: '#7C3AED', bg: '#EDE9FE', text: 'Transparent Pricing' },
                                ].map((trust, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', borderBottom: i < 2 ? `1px solid ${colors.border}` : 'none' }}>
                                        <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: trust.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <i className={trust.icon} style={{ color: trust.color, fontSize: '13px' }} />
                                        </div>
                                        <span style={{ fontSize: '12.5px', fontWeight: '600', color: colors.dark }}>
                                            {trust.text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <FooterTwo />
            <BackToTop />
        </div>
    );
}
