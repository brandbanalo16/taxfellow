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

export default function MainServicePage({ serviceData }) {
    const [openFaq, setOpenFaq] = useState(null);

    if (!serviceData) {
        return (
            <div>
                <HeaderTwo />
                <div className="container" style={{ padding: '120px 20px', textAlign: 'center' }}>
                    <h2 style={{ fontWeight: '800', color: '#0f172a' }}>Service Category Not Found</h2>
                    <Link href="/" className="rts-btn btn-primary mt--20">Go Back Home</Link>
                </div>
                <FooterTwo />
            </div>
        );
    }

    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: serviceData.title }
    ];

    return (
        <div style={{ backgroundColor: '#ffffff' }}>
            {/* 1. Banner (Uses the existing website layout pattern) */}
            <HeaderTwo />
            <Breadcrumb title={serviceData.title} breadcrumbs={breadcrumbs} />

            {/* 2. About the Service */}
            <section className="rts-about-area rts-section-gap" style={{ background: '#fff', padding: '100px 0 80px' }}>
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <div className="title-area" style={{ textAlign: 'left', marginBottom: '25px' }}>
                                <span style={{ color: '#1E5EFF', textTransform: 'uppercase', fontWeight: '700', fontSize: '13px', letterSpacing: '1.5px', display: 'block', marginBottom: '10px' }}>
                                    About Our Service
                                </span>
                                <h2 className="title" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: '800', color: '#0f172a', lineHeight: '1.25', margin: '0 0 20px' }}>
                                    {serviceData.tagline}
                                </h2>
                            </div>
                            <p style={{ fontSize: '16.5px', lineHeight: '1.8', color: '#475569', fontWeight: '400', margin: '0 0 30px' }}>
                                {serviceData.description}
                            </p>
                            <Link href="/contactus" className="rts-btn btn-primary" style={{ borderRadius: '8px', padding: '15px 30px', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                Get Started Today <ArrowRight size={16} />
                            </Link>
                        </div>
                        <div className="col-lg-6">
                            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '18px', padding: '40px' }}>
                                <h4 style={{ fontSize: '20px', fontWeight: '800', color: '#0f172a', marginBottom: '25px' }}>
                                    Key Service Advantages
                                </h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    {serviceData.stats.slice(0, 3).map((stat, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                            <div style={{
                                                width: '48px', height: '48px', borderRadius: '12px',
                                                background: '#E0EBFF', color: '#1E5EFF',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                flexShrink: 0
                                            }}>
                                                <CheckCircle2 size={20} style={{ color: '#1E5EFF', strokeWidth: 2.5 }} />
                                            </div>
                                            <div>
                                                <h5 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 4px' }}>
                                                    {stat.label}
                                                </h5>
                                                <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>
                                                    Industry-standard values of {stat.value} guaranteed.
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Why Choose TaxFello for This Service */}
            <section className="rts-service-details-area rts-section-gap" style={{ background: '#F8FAFC', padding: '100px 0' }}>
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-8 text-center">
                            <span style={{ color: '#1E5EFF', textTransform: 'uppercase', fontWeight: '700', fontSize: '13px', letterSpacing: '1.5px', display: 'block', marginBottom: '10px' }}>
                                Why Partner With Us
                            </span>
                            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: '800', color: '#0f172a' }}>
                                Expert Corporate Service Delivery
                            </h2>
                        </div>
                    </div>
                    <div className="row g-4">
                        {serviceData.whyUs.map((item, i) => (
                            <div className="col-lg-4 col-md-6 col-12" key={i}>
                                <div style={{
                                    background: '#fff', border: '1px solid #E2E8F0', borderRadius: '16px',
                                    padding: '35px 30px', height: '100%', transition: 'all 0.3s ease'
                                }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.05)';
                                        e.currentTarget.style.borderColor = '#1E5EFF';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.borderColor = '#E2E8F0';
                                    }}
                                >
                                    <div style={{ marginBottom: '16px' }}>{getLucideIcon(item.icon, 30)}</div>
                                    <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', marginBottom: '10px' }}>
                                        {item.title}
                                    </h4>
                                    <p style={{ fontSize: '14.5px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Service Process */}
            <section className="rts-working-process-area rts-section-gap" style={{ background: '#fff', padding: '100px 0' }}>
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-8 text-center">
                            <span style={{ color: '#1E5EFF', textTransform: 'uppercase', fontWeight: '700', fontSize: '13px', letterSpacing: '1.5px', display: 'block', marginBottom: '10px' }}>
                                Service Roadmap
                            </span>
                            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: '800', color: '#0f172a' }}>
                                Our 4-Step Simplified Process
                            </h2>
                        </div>
                    </div>
                    <div className="row g-4" style={{ position: 'relative' }}>
                        {[
                          { step: "01", title: "Submit Request", desc: "Share details through our quick virtual form or contact our expert helpline.", icon: <Globe size={20} style={{ color: '#1E5EFF' }} /> },
                          { step: "02", title: "Document Review", desc: "Our in-house CA/CS experts review uploaded documentation for error-free submission.", icon: <Shield size={20} style={{ color: '#1E5EFF' }} /> },
                          { step: "03", title: "Filing & Drafting", desc: "We compile all legal applications and handle submissions with regulatory authorities.", icon: <RefreshCw size={20} style={{ color: '#1E5EFF' }} /> },
                          { step: "04", title: "Final Handover", desc: "Receive formal certificates and documents directly on your portal dashboard.", icon: <Award size={20} style={{ color: '#1E5EFF' }} /> }
                        ].map((proc, i) => (
                            <div className="col-lg-3 col-md-6 col-12" key={i}>
                                <div style={{
                                    background: '#F8FAFC', borderRadius: '16px', padding: '30px 24px',
                                    border: '1px solid #E2E8F0', height: '100%', position: 'relative'
                                }}>
                                    <div style={{
                                        width: '40px', height: '40px', borderRadius: '10px',
                                        background: '#E0EBFF', display: 'flex', alignItems: 'center',
                                        justifyContent: 'center', marginBottom: '16px'
                                    }}>
                                        {proc.icon}
                                    </div>
                                    <h4 style={{ fontSize: '17px', fontWeight: '800', color: '#0f172a', marginBottom: '10px' }}>
                                        {proc.title}
                                    </h4>
                                    <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                                        {proc.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. USP (Unique Selling Points) */}
            <section style={{ background: '#F8FAFC', padding: '100px 0' }}>
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-5">
                            <span style={{ color: '#1E5EFF', textTransform: 'uppercase', fontWeight: '700', fontSize: '13px', letterSpacing: '1.5px', display: 'block', marginBottom: '10px' }}>
                                Unique Advantages
                            </span>
                            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: '800', color: '#0f172a', lineHeight: '1.25', margin: '0 0 20px' }}>
                                The TaxFello Guarantee
                            </h2>
                            <p style={{ fontSize: '16px', color: '#64748b', lineHeight: '1.7', marginBottom: '30px' }}>
                                We bridge the gap between complex legal regulations and business speed. Experience professional transparency and execution timelines.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                                    <div style={{ fontSize: '28px', fontWeight: '800', color: '#1E5EFF' }}>99.8%</div>
                                    <div style={{ fontSize: '13px', color: '#64748b', fontWeight: '600' }}>Accuracy Rate</div>
                                </div>
                                <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                                    <div style={{ fontSize: '28px', fontWeight: '800', color: '#1E5EFF' }}>15k+</div>
                                    <div style={{ fontSize: '13px', color: '#64748b', fontWeight: '600' }}>Happy Clients</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {[
                                    { icon: <Clock size={24} style={{ color: '#1E5EFF' }} />, title: 'Zero Delay SLA', desc: 'If there are any delays in filing from our side, we bear all regulatory penalties.' },
                                    { icon: <Lock size={24} style={{ color: '#1E5EFF' }} />, title: 'Absolute Data Privacy', desc: 'We execute strict NDAs. Your company financials and documents are securely encrypted.' },
                                    { icon: <Phone size={24} style={{ color: '#1E5EFF' }} />, title: 'No Automated Chatbots', desc: 'Get direct phone support from verified corporate legal and accounting consultants.' }
                                ].map((usp, i) => (
                                    <div key={i} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '24px 30px', display: 'flex', gap: '20px', alignItems: 'center' }}>
                                        <div style={{ flexShrink: 0 }}>{usp.icon}</div>
                                        <div>
                                            <h5 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', margin: '0 0 4px' }}>{usp.title}</h5>
                                            <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0 }}>{usp.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Related / Sub-Category Services Carousel */}
            <section style={{ padding: '100px 0', background: '#fff' }}>
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-8 text-center">
                            <span style={{ color: '#1E5EFF', textTransform: 'uppercase', fontWeight: '700', fontSize: '13px', letterSpacing: '1.5px', display: 'block', marginBottom: '10px' }}>
                                Sub-Category Offerings
                            </span>
                            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: '800', color: '#0f172a' }}>
                                Explore Service Offerings
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
                                autoplay={{ delay: 3500, disableOnInteraction: false }}
                                breakpoints={{
                                    0: { slidesPerView: 1 },
                                    768: { slidesPerView: 2 },
                                    1200: { slidesPerView: 3 }
                                }}
                                style={{ padding: '20px 0' }}
                            >
                                {serviceData.subcategories.map((sub, i) => (
                                    <SwiperSlide key={i} style={{ height: 'auto' }}>
                                        <div style={{
                                            background: '#fff', border: '1px solid #f3f4f6', borderRadius: '28px',
                                            padding: '40px 30px', height: '100%', display: 'flex', flexDirection: 'column',
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.06)', textAlign: 'center', boxSizing: 'border-box'
                                        }}>
                                            {/* Centered circular icon with purple ring */}
                                            <div style={{
                                                margin: '0 auto 20px',
                                                width: '84px',
                                                height: '84px',
                                                borderRadius: '50%',
                                                border: '3px solid #7c3aed',
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
                                                    background: '#f3e8ff',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}>
                                                    {getLucideIcon(sub.icon, 26)}
                                                </div>
                                            </div>

                                            <h4 style={{ fontSize: '19px', fontWeight: '800', color: '#0f172a', margin: '0 0 4px', textTransform: 'capitalize' }}>
                                                {sub.title}
                                            </h4>
                                            <span style={{ fontSize: '12px', color: '#7c3aed', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '16px' }}>
                                                {serviceData.title}
                                            </span>

                                            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.65', marginBottom: '24px', flexGrow: 1 }}>
                                                {sub.shortDesc}
                                            </p>

                                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
                                                <Link href={`/services/${serviceData.slug}/${sub.slug}`} style={{
                                                    background: '#7c3aed',
                                                    color: '#fff',
                                                    padding: '10px 24px',
                                                    borderRadius: '8px',
                                                    fontWeight: '700',
                                                    fontSize: '11px',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.8px',
                                                    textDecoration: 'none',
                                                    boxShadow: '0 4px 12px rgba(124, 58, 237, 0.25)',
                                                    transition: 'all 0.2s ease',
                                                    display: 'inline-block'
                                                }}
                                                    onMouseEnter={e => {
                                                        e.currentTarget.style.background = '#6d28d9';
                                                        e.currentTarget.style.transform = 'translateY(-1px)';
                                                    }}
                                                    onMouseLeave={e => {
                                                        e.currentTarget.style.background = '#7c3aed';
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

            {/* 7. Testimonials (Reuse exact component from homepage) */}
            <TestimonialTwo />

            {/* 8. FAQ */}
            <section style={{ padding: '100px 0 120px', background: '#F8FAFC' }}>
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-8 text-center">
                            <span style={{ color: '#1E5EFF', textTransform: 'uppercase', fontWeight: '700', fontSize: '13px', letterSpacing: '1.5px', display: 'block', marginBottom: '10px' }}>
                                Help Center
                            </span>
                            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: '800', color: '#0f172a' }}>
                                Frequently Asked Questions
                            </h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                {serviceData.faqs.map((faq, i) => {
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
                                                    alignItems: 'center', padding: '20px 24px', background: 'none',
                                                    border: 'none', cursor: 'pointer', textAlign: 'left', gap: '20px'
                                                }}
                                            >
                                                <span style={{ fontSize: '15.5px', fontWeight: '700', color: '#0f172a' }}>
                                                    {faq.question}
                                                </span>
                                                <span style={{ color: '#1E5EFF' }}>
                                                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                                                </span>
                                            </button>
                                            {isOpen && (
                                                <div style={{
                                                    padding: '0 24px 20px', fontSize: '14.5px', color: '#475569',
                                                    lineHeight: '1.7', borderTop: '1px solid #F1F5F9', paddingTop: '15px'
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
