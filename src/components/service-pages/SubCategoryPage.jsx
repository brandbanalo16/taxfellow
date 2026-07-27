"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import HeaderTwo from '@/components/header/HeaderTwo';
import Breadcrumb from '@/components/Breadcrumb';
import FooterTwo from '@/components/footer/FooterTwo';
import BackToTop from '@/components/BackToTop';
import TestimonialTwo from '@/components/testimonials/TestimonialTwo';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { 
  CheckCircle2, 
  Shield, 
  Clock, 
  Phone, 
  Zap, 
  Lock, 
  Globe, 
  RefreshCw, 
  HelpCircle, 
  ArrowRight, 
  Award,
  ChevronRight,
  Plus,
  Minus
} from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

// Map emojis in services-data.json to Lucide components
const getLucideIcon = (emoji, size = 28) => {
  const iconStyle = { color: '#1E5EFF', strokeWidth: 2 };
  switch (emoji) {
    case '✅': return <CheckCircle2 size={size} style={iconStyle} />;
    case '⚡': return <Zap size={size} style={iconStyle} />;
    case '🔒': return <Lock size={size} style={iconStyle} />;
    case '🌐': return <Globe size={size} style={iconStyle} />;
    case '📞': return <Phone size={size} style={iconStyle} />;
    case '🔄': return <RefreshCw size={size} style={iconStyle} />;
    case '🛡️': return <Shield size={size} style={iconStyle} />;
    case '⚖️': return <Shield size={size} style={iconStyle} />;
    case '🏛️': return <Award size={size} style={iconStyle} />;
    case '🚀': return <Zap size={size} style={iconStyle} />;
    default:
      return <span style={{ fontSize: `${size}px` }}>{emoji}</span>;
  }
};

export default function SubCategoryPage({ subData, parentData }) {
    const [openFaq, setOpenFaq] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [submitStatus, setSubmitStatus] = useState('');

    if (!subData) {
        return (
            <div>
                <HeaderTwo />
                <div className="container" style={{ padding: '120px 20px', textAlign: 'center' }}>
                    <h2 style={{ fontWeight: '800', color: '#0f172a' }}>Service Not Found</h2>
                    <Link href="/" className="rts-btn btn-primary mt--20">Go Back Home</Link>
                </div>
                <FooterTwo />
            </div>
        );
    }

    const color = subData.color || '#1e5eff';
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: subData.parentTitle, link: `/services/${subData.parentSlug}` },
        { label: subData.title }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitStatus('submitting');
        setTimeout(() => {
            setSubmitStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });
        }, 1200);
    };

    const relatedServices = subData.services || [];

    return (
        <div style={{ backgroundColor: '#F8FAFC' }}>
            {/* 1. Banner (Uses the existing website layout pattern) */}
            <HeaderTwo />
            <Breadcrumb title={subData.title} breadcrumbs={breadcrumbs} />

            {/* 2. About the Service (Split Asymmetric Layout with Left Block & Right Form) */}
            <section style={{ background: '#ffffff', padding: '100px 0 80px', borderBottom: '1px solid #E2E8F0' }}>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-7">
                            <span style={{ color: color, textTransform: 'uppercase', fontWeight: '800', fontSize: '13px', letterSpacing: '1.5px', display: 'block', marginBottom: '12px' }}>
                                Specialized Advisory
                            </span>
                            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: '800', color: '#0f172a', lineHeight: '1.25', marginBottom: '20px', letterSpacing: '-0.5px' }}>
                                {subData.tagline}
                            </h2>
                            <p style={{ fontSize: '16.5px', lineHeight: '1.8', color: '#475569', fontWeight: '300', marginBottom: '35px' }}>
                                {subData.description}
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <div style={{ borderLeft: `3px solid ${color}`, paddingLeft: '16px' }}>
                                    <h5 style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a', marginBottom: '6px' }}>Online & Secure</h5>
                                    <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0 }}>100% digital flow, securely encrypted documents.</p>
                                </div>
                                <div style={{ borderLeft: `3px solid ${color}`, paddingLeft: '16px' }}>
                                    <h5 style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a', marginBottom: '6px' }}>Direct Support</h5>
                                    <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0 }}>Consult directly with verified corporate specialists.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div style={{
                                background: '#F8FAFC', borderRadius: '20px', padding: '35px 30px',
                                border: '1px solid #E2E8F0', boxShadow: '0 8px 30px rgba(0,0,0,0.02)'
                            }}>
                                <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', marginBottom: '6px' }}>
                                    Quick Enquiry Form
                                </h4>
                                <p style={{ fontSize: '12.5px', color: '#64748b', marginBottom: '20px' }}>
                                    Submit your details and get a call back within 2 hours.
                                </p>
                                {submitStatus === 'success' ? (
                                    <div style={{ padding: '20px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '10px', textAlign: 'center' }}>
                                        <span>✅</span>
                                        <p style={{ fontSize: '14.5px', fontWeight: '700', color: '#15803d', margin: '8px 0 0' }}>Request Submitted!</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Your Full Name"
                                            style={{ width: '100%', padding: '11px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '13.5px', outline: 'none' }}
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Your Email Address"
                                            style={{ width: '100%', padding: '11px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '13.5px', outline: 'none' }}
                                        />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Your Phone Number"
                                            style={{ width: '100%', padding: '11px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '13.5px', outline: 'none' }}
                                        />
                                        <button type="submit" className="rts-btn btn-primary" style={{ width: '100%', borderRadius: '8px', padding: '12px', fontWeight: '700' }}>
                                            Request Callback
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Why Choose TaxFello (Two-Column Asymmetric layout - Stats Left, Details Right) */}
            <section style={{ background: '#F8FAFC', padding: '100px 0' }}>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5">
                            <span style={{ color: color, textTransform: 'uppercase', fontWeight: '800', fontSize: '13px', letterSpacing: '1.5px', display: 'block', marginBottom: '12px' }}>
                                Unmatched Competence
                            </span>
                            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: '800', color: '#0f172a', lineHeight: '1.25', marginBottom: '20px' }}>
                                Setting New Standards in Legal Consultancy
                            </h2>
                            <p style={{ fontSize: '15.5px', color: '#64748b', lineHeight: '1.7', marginBottom: '30px' }}>
                                Our dedicated panel of company secretaries, corporate laywers, and chartered accountants deliver error-free filings.
                            </p>
                            <div style={{ padding: '24px', background: `${color}08`, border: `1px dashed ${color}30`, borderRadius: '14px' }}>
                                <h6 style={{ color: '#0f172a', fontWeight: '700', fontSize: '14px', marginBottom: '6px' }}>Pan-India Active Network</h6>
                                <p style={{ color: '#64748b', fontSize: '13px', margin: 0 }}>Serving thousands of startups and small enterprises across 28+ states.</p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
                                {[
                                    { icon: <Award size={24} style={{ color: color }} />, title: 'Seasoned Legal Specialists', desc: 'Handled by in-house corporate experts with average 10+ years experience.' },
                                    { icon: <Globe size={24} style={{ color: color }} />, title: 'Seamless Execution', desc: 'No complex paperwork. We collect details online and update you via a custom dashboard.' },
                                    { icon: <Lock size={24} style={{ color: color }} />, title: 'Zero Hidden Pricing', desc: 'Detailed upfront quotation inclusive of stamp duty, government fee, and advisory.' }
                                ].map((item, idx) => (
                                    <div key={idx} style={{
                                        background: '#fff', border: '1px solid #E2E8F0', borderRadius: '16px',
                                        padding: '25px 30px', display: 'flex', gap: '20px', alignItems: 'center'
                                    }}>
                                        <div style={{ flexShrink: 0 }}>{item.icon}</div>
                                        <div>
                                            <h5 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', margin: '0 0 4px' }}>{item.title}</h5>
                                            <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0 }}>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Service Process (Horizontal Connecting Roadmap Layout) */}
            <section style={{ background: '#ffffff', padding: '100px 0', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-8 text-center">
                            <span style={{ color: color, textTransform: 'uppercase', fontWeight: '800', fontSize: '13px', letterSpacing: '1.5px', display: 'block', marginBottom: '10px' }}>
                                Process Map
                            </span>
                            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: '800', color: '#0f172a' }}>
                                Process Checklist & Roadmap
                            </h2>
                        </div>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {subData.process.map((step, idx) => (
                            <div className="col-lg-3 col-md-6 col-12" key={idx}>
                                <div style={{
                                    border: '1px solid #E2E8F0', borderRadius: '16px', padding: '30px 24px',
                                    background: '#F8FAFC', height: '100%', display: 'flex', flexDirection: 'column'
                                }}>
                                    <div style={{
                                        width: '40px', height: '40px', borderRadius: '50%', background: color,
                                        color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontWeight: '800', fontSize: '14px', marginBottom: '16px'
                                    }}>
                                        {step.step}
                                    </div>
                                    <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
                                        {step.title}
                                    </h4>
                                    <span style={{ fontSize: '11px', color: color, fontWeight: '700', marginBottom: '12px', textTransform: 'uppercase' }}>
                                        Timeline: {step.timeline}
                                    </span>
                                    <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: '1.6', margin: 0, fontWeight: '300' }}>
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. USP / Key Benefits (2-Column Clean Text List Layout) */}
            <section style={{ background: '#F8FAFC', padding: '100px 0' }}>
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-8 text-center">
                            <span style={{ color: color, textTransform: 'uppercase', fontWeight: '800', fontSize: '13px', letterSpacing: '1.5px', display: 'block', marginBottom: '10px' }}>
                                Core Advantages
                            </span>
                            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: '800', color: '#0f172a' }}>
                                Key Benefits of Filing With Us
                            </h2>
                        </div>
                    </div>
                    <div className="row g-4">
                        {subData.benefits.map((b, i) => (
                            <div className="col-md-6" key={i}>
                                <div style={{
                                    background: '#fff', border: '1px solid #E2E8F0', borderRadius: '16px',
                                    padding: '30px', display: 'flex', gap: '20px', alignItems: 'flex-start',
                                    height: '100%'
                                }}>
                                    <div style={{ flexShrink: 0 }}>{getLucideIcon(b.icon, 30)}</div>
                                    <div>
                                        <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
                                            {b.title}
                                        </h4>
                                        <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: '1.6', margin: 0, fontWeight: '300' }}>
                                            {b.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Related Services Carousel */}
            <section style={{ background: '#ffffff', padding: '100px 0', borderTop: '1px solid #E2E8F0' }}>
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-8 text-center">
                            <span style={{ color: color, textTransform: 'uppercase', fontWeight: '800', fontSize: '13px', letterSpacing: '1.5px', display: 'block', marginBottom: '10px' }}>
                                Related Advisory
                            </span>
                            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: '800', color: '#0f172a' }}>
                                Handled Sub-Services
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Swiper
                                modules={[Navigation, Autoplay]}
                                spaceBetween={30}
                                slidesPerView={3}
                                navigation
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                breakpoints={{
                                    0: { slidesPerView: 1 },
                                    768: { slidesPerView: 2 },
                                    1200: { slidesPerView: 3 }
                                }}
                                style={{ padding: '20px 0' }}
                            >
                                {relatedServices.map((svc, i) => (
                                    <SwiperSlide key={i} style={{ height: 'auto' }}>
                                        <div style={{
                                            background: '#fff', border: '1px solid #f3f4f6', borderRadius: '28px',
                                            padding: '40px 30px', height: '100%', display: 'flex', flexDirection: 'column',
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.06)', textAlign: 'center', boxSizing: 'border-box'
                                        }}>
                                            {/* Centered circular icon with custom category color ring */}
                                            <div style={{
                                                margin: '0 auto 20px',
                                                width: '84px',
                                                height: '84px',
                                                borderRadius: '50%',
                                                border: `3px solid ${color}`,
                                                padding: '4px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                background: '#fff',
                                                flexShrink: 0
                                            }}>
                                                <div style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    borderRadius: '50%',
                                                    background: `${color}15`,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}>
                                                    <CheckCircle2 size={26} style={{ color: color, strokeWidth: 2 }} />
                                                </div>
                                            </div>

                                            <h4 style={{ fontSize: '19px', fontWeight: '800', color: '#0f172a', margin: '0 0 4px', textTransform: 'capitalize' }}>
                                                {svc.name}
                                            </h4>
                                            <span style={{ fontSize: '12px', color: color, fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '16px' }}>
                                                {subData.title}
                                            </span>

                                            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.65', marginBottom: '24px', flexGrow: 1 }}>
                                                {svc.desc}
                                            </p>

                                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
                                                <Link href="/contactus" style={{
                                                    background: color,
                                                    color: '#fff',
                                                    padding: '10px 24px',
                                                    borderRadius: '8px',
                                                    fontWeight: '700',
                                                    fontSize: '11px',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.8px',
                                                    textDecoration: 'none',
                                                    boxShadow: `0 4px 12px ${color}40`,
                                                    transition: 'all 0.2s ease',
                                                    display: 'inline-block'
                                                }}
                                                    onMouseEnter={e => {
                                                        e.currentTarget.style.opacity = '0.9';
                                                        e.currentTarget.style.transform = 'translateY(-1px)';
                                                    }}
                                                    onMouseLeave={e => {
                                                        e.currentTarget.style.opacity = '1';
                                                        e.currentTarget.style.transform = 'translateY(0)';
                                                    }}
                                                >
                                                    View More
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Testimonials */}
            <TestimonialTwo />

            {/* 8. FAQ */}
            <section style={{ padding: '100px 0 120px', background: '#F8FAFC' }}>
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-8 text-center">
                            <span style={{ color: color, textTransform: 'uppercase', fontWeight: '800', fontSize: '13px', letterSpacing: '1.5px', display: 'block', marginBottom: '10px' }}>
                                Knowledge Base
                            </span>
                            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: '800', color: '#0f172a' }}>
                                Frequently Answered Queries
                            </h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {subData.faqs.map((faq, i) => {
                                    const isOpen = openFaq === i;
                                    return (
                                        <div key={i} style={{
                                            background: '#fff', border: '1px solid #E2E8F0', borderRadius: '12px',
                                            overflow: 'hidden', transition: 'all 0.3s ease'
                                        }}>
                                            <button
                                                onClick={() => setOpenFaq(isOpen ? null : i)}
                                                style={{
                                                    width: '100%', display: 'flex', justifyContent: 'space-between',
                                                    alignItems: 'center', padding: '18px 24px', background: 'none',
                                                    border: 'none', cursor: 'pointer', textAlign: 'left', gap: '20px'
                                                }}
                                            >
                                                <span style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a' }}>
                                                    {faq.question}
                                                </span>
                                                <span style={{ color: color }}>
                                                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                                                </span>
                                            </button>
                                            {isOpen && (
                                                <div style={{
                                                    padding: '0 24px 20px', fontSize: '14px', color: '#475569',
                                                    lineHeight: '1.65', borderTop: '1px solid #F1F5F9', paddingTop: '15px'
                                                }}>
                                                    {faq.answer}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterTwo />
            <BackToTop />
        </div>
    );
}
