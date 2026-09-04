"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import HeaderTwo from '@/components/header/HeaderTwo';
import Breadcrumb from '@/components/Breadcrumb';
import FooterTwo from '@/components/footer/FooterTwo';
import BackToTop from '@/components/BackToTop';
import { getServiceBySlug } from '@/data/services-content';

export default function DynamicServicePage() {
    const params = useParams();
    const slug = params?.slug;
    const service = getServiceBySlug(slug);
    
    const [openFaq, setOpenFaq] = useState(null);
    const [activeSection, setActiveSection] = useState('overview');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        message: ''
    });
    const [submitStatus, setSubmitStatus] = useState(''); // '', 'submitting', 'success', 'error'
    const [formError, setFormError] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['overview', 'benefits', 'documents', 'process', 'why-taxfello', 'faqs'];
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!service) {
        return (
            <div>
                <HeaderTwo />
                <Breadcrumb title="Service Not Found" breadcrumbs={[{ label: 'Home', link: '/' }, { label: 'Services', link: '#' }]} />
                <div className="rts-service-area rts-section-gap text-center">
                    <div className="container">
                        <h2>Service Page Not Found</h2>
                        <p>We apologize, but the requested page does not exist or has been moved.</p>
                        <Link href="/" className="rts-btn btn-primary mt--20">Go Back Home</Link>
                    </div>
                </div>
                <FooterTwo />
            </div>
        );
    }

    const content = service.pageContent || {};
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: service.subCategory || 'Registration', link: '#' },
        { label: service.serviceName }
    ];

    const tocItems = [
        { id: 'overview', label: 'Overview' },
        { id: 'benefits', label: 'Benefits' },
        { id: 'documents', label: 'Documents Required' },
        { id: 'process', label: 'Registration Process' },
        { id: 'why-taxfello', label: 'Why Taxfello' },
        { id: 'faqs', label: 'FAQs' }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'phone') {
            const digits = value.replace(/\D/g, '').slice(0, 10);
            setFormData(prev => ({ ...prev, phone: digits }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
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
                    source: 'Registration page',
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

    return (
        <div style={{ backgroundColor: '#fafbfe' }}>
            <HeaderTwo />
            <Breadcrumb title={service.serviceName} breadcrumbs={breadcrumbs} />

            <div className="container mt--60 mb--80">
                <div className="row g-5">
                    
                    {/* LEFT COLUMN: Sticky Table of Contents */}
                    <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                        <div style={{
                            position: 'sticky',
                            top: '110px',
                            background: '#fff',
                            borderRadius: '12px',
                            padding: '24px',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                            border: '1px solid #eef2f6'
                        }}>
                            <h5 style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px' }}>
                                Table of Contents
                            </h5>
                            <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                                {tocItems.map((item) => (
                                    <li key={item.id} style={{ marginBottom: '12px' }}>
                                        <a
                                            href={`#${item.id}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                                                setActiveSection(item.id);
                                            }}
                                            style={{
                                                display: 'block',
                                                padding: '8px 12px',
                                                borderRadius: '6px',
                                                fontSize: '14px',
                                                fontWeight: activeSection === item.id ? '600' : '500',
                                                color: activeSection === item.id ? '#0056b3' : '#6c757d',
                                                backgroundColor: activeSection === item.id ? '#eef5fc' : 'transparent',
                                                transition: 'all 0.3s ease',
                                                textDecoration: 'none'
                                            }}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* CENTER COLUMN: Detailed Dynamic Service Content */}
                    <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                        <div style={{
                            background: '#fff',
                            borderRadius: '16px',
                            padding: '40px',
                            boxShadow: '0 4px 30px rgba(0,0,0,0.02)',
                            border: '1px solid #eef2f6'
                        }}>
                            
                            {/* Section 1: Overview */}
                            <section id="overview" style={{ marginBottom: '50px', scrollMarginTop: '120px' }}>
                                <span style={{
                                    fontSize: '12px',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    color: '#0056b3',
                                    letterSpacing: '1px',
                                    display: 'block',
                                    marginBottom: '10px'
                                }}>
                                    {service.subCategory}
                                </span>
                                <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#1a1a1a', marginBottom: '24px' }}>
                                    {service.serviceName}
                                </h2>
                                {content.overview ? content.overview.split('\n\n').map((para, i) => (
                                    <p key={i} style={{ fontSize: '16px', lineHeight: '1.8', color: '#4a4a4a', marginBottom: '20px' }}>
                                        {para}
                                    </p>
                                )) : (
                                    <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#4a4a4a' }}>
                                        Overview content loading...
                                    </p>
                                )}
                            </section>

                            {/* Section 2: Benefits */}
                            <section id="benefits" style={{ marginBottom: '50px', scrollMarginTop: '120px' }}>
                                <hr style={{ border: 0, borderTop: '1px solid #eee', marginBottom: '40px' }} />
                                <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px' }}>
                                    Key Benefits of {service.serviceName}
                                </h3>
                                <div className="row g-4">
                                    {content.benefits && content.benefits.map((benefit, i) => (
                                        <div className="col-12" key={i}>
                                            <div style={{
                                                padding: '20px',
                                                borderRadius: '10px',
                                                backgroundColor: '#f8fafd',
                                                borderLeft: '4px solid #0056b3'
                                            }}>
                                                <h5 style={{ fontSize: '16px', fontWeight: '700', color: '#1a1a1a', marginBottom: '8px' }}>
                                                    {benefit.point}
                                                </h5>
                                                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666', margin: 0 }}>
                                                    {benefit.detail}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Section 3: Documents Required */}
                            <section id="documents" style={{ marginBottom: '50px', scrollMarginTop: '120px' }}>
                                <hr style={{ border: 0, borderTop: '1px solid #eee', marginBottom: '40px' }} />
                                <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a1a', marginBottom: '15px' }}>
                                    Documents Required
                                </h3>
                                <p style={{ fontSize: '15px', color: '#666', marginBottom: '24px' }}>
                                    Please keep the following documents ready for a quick submission:
                                </p>
                                <div style={{
                                    background: '#fcfdfe',
                                    border: '1px solid #eef2f6',
                                    borderRadius: '12px',
                                    padding: '24px'
                                }}>
                                    <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: 0 }}>
                                        {content.documentsRequired && content.documentsRequired.map((doc, i) => (
                                            <li key={i} style={{
                                                padding: '12px 0',
                                                borderBottom: i === content.documentsRequired.length - 1 ? 'none' : '1px solid #f1f4f8',
                                                fontSize: '14.5px',
                                                color: '#4a4a4a',
                                                display: 'flex',
                                                alignItems: 'flex-start'
                                            }}>
                                                <span style={{
                                                    color: '#28a745',
                                                    fontWeight: 'bold',
                                                    marginRight: '12px',
                                                    fontSize: '16px'
                                                }}>✓</span>
                                                <span>{doc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>

                            {/* Section 4: Process */}
                            <section id="process" style={{ marginBottom: '50px', scrollMarginTop: '120px' }}>
                                <hr style={{ border: 0, borderTop: '1px solid #eee', marginBottom: '40px' }} />
                                <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a1a', marginBottom: '24px' }}>
                                    Step-by-Step Registration Process
                                </h3>
                                <div style={{ position: 'relative', paddingLeft: '24px', borderLeft: '2px dashed #e2e8f0' }}>
                                    {content.process && content.process.map((p, i) => (
                                        <div key={i} style={{ marginBottom: '35px', position: 'relative' }}>
                                            <div style={{
                                                position: 'absolute',
                                                left: '-37px',
                                                top: '2px',
                                                width: '26px',
                                                height: '26px',
                                                borderRadius: '50%',
                                                background: '#0056b3',
                                                color: '#fff',
                                                textAlign: 'center',
                                                lineHeight: '26px',
                                                fontSize: '12px',
                                                fontWeight: '700'
                                            }}>
                                                {p.step}
                                            </div>
                                            <h5 style={{ fontSize: '17px', fontWeight: '700', color: '#1a1a1a', marginBottom: '6px' }}>
                                                {p.title} <span style={{ fontSize: '13px', fontWeight: 'normal', color: '#666', marginLeft: '8px' }}>({p.timeline})</span>
                                            </h5>
                                            <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.6', margin: 0 }}>
                                                {p.detail}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Section 5: Why Taxfello */}
                            <section id="why-taxfello" style={{ marginBottom: '50px', scrollMarginTop: '120px' }}>
                                <hr style={{ border: 0, borderTop: '1px solid #eee', marginBottom: '40px' }} />
                                <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a1a', marginBottom: '24px' }}>
                                    Why Choose Taxfello?
                                </h3>
                                <div className="row g-4">
                                    {content.whyTaxfello && content.whyTaxfello.map((item, i) => (
                                        <div className="col-md-6 col-12" key={i}>
                                            <div style={{
                                                background: '#fff',
                                                padding: '20px',
                                                borderRadius: '10px',
                                                border: '1px solid #eef2f6',
                                                height: '100%'
                                            }}>
                                                <h6 style={{ fontSize: '15px', fontWeight: '700', color: '#0056b3', marginBottom: '8px' }}>
                                                    {item.point}
                                                </h6>
                                                <p style={{ fontSize: '13px', color: '#555', margin: 0, lineHeight: '1.5' }}>
                                                    {item.detail}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Section 7: Additional Section */}
                            {content.additionalSection && (
                                <section id="additional" style={{ marginBottom: '50px' }}>
                                    <hr style={{ border: 0, borderTop: '1px solid #eee', marginBottom: '40px' }} />
                                    <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a1a', marginBottom: '15px' }}>
                                        {content.additionalSection.title}
                                    </h3>
                                    <p style={{ fontSize: '15px', color: '#4a4a4a', lineHeight: '1.8' }}>
                                        {content.additionalSection.content}
                                    </p>
                                </section>
                            )}

                            {/* Section 6: FAQs */}
                            <section id="faqs" style={{ scrollMarginTop: '120px' }}>
                                <hr style={{ border: 0, borderTop: '1px solid #eee', marginBottom: '40px' }} />
                                <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a1a', marginBottom: '24px' }}>
                                    Frequently Asked Questions
                                </h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                    {content.faqs && content.faqs.map((faq, i) => (
                                        <div key={i} style={{
                                            border: '1px solid #eef2f6',
                                            borderRadius: '8px',
                                            overflow: 'hidden'
                                        }}>
                                            <div
                                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    cursor: 'pointer',
                                                    padding: '16px 20px',
                                                    background: openFaq === i ? '#f8fafd' : '#fff',
                                                    fontWeight: '600',
                                                    fontSize: '15px',
                                                    color: '#1a1a1a'
                                                }}
                                            >
                                                <span style={{ paddingRight: '15px' }}>{faq.question}</span>
                                                <span style={{ fontSize: '18px', color: '#0056b3' }}>
                                                    {openFaq === i ? '−' : '+'}
                                                </span>
                                            </div>
                                            {openFaq === i && (
                                                <div style={{
                                                    padding: '16px 20px',
                                                    backgroundColor: '#fff',
                                                    borderTop: '1px solid #eef2f6',
                                                    fontSize: '14px',
                                                    color: '#555',
                                                    lineHeight: '1.6'
                                                }}>
                                                    {faq.answer}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>

                        </div>
                    </div>

                    {/* RIGHT COLUMN: Sticky Enquiry Form */}
                    <div className="col-xl-3 col-lg-3 col-md-12 col-12">
                        <div style={{
                            position: 'sticky',
                            top: '110px',
                            background: '#fff',
                            borderRadius: '12px',
                            padding: '24px',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                            border: '1px solid #eef2f6'
                        }}>
                            <h5 style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a1a', marginBottom: '10px' }}>
                                Easy Setup Enquiry
                            </h5>
                            <p style={{ fontSize: '13px', color: '#666', marginBottom: '20px', lineHeight: '1.5' }}>
                                Fill out this form to connect with our CA/CS & Legal compliance experts.
                            </p>
                            
                            {submitStatus === 'success' ? (
                                <div style={{
                                    padding: '15px',
                                    borderRadius: '8px',
                                    backgroundColor: '#d4edda',
                                    color: '#155724',
                                    fontSize: '14px',
                                    textAlign: 'center'
                                }}>
                                    Thank you! Our expert will call you back shortly.
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                    <div>
                                        <label style={{ fontSize: '12px', fontWeight: '600', color: '#4a4a4a', display: 'block', marginBottom: '5px' }}>Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Your Name"
                                            style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }}
                                        />
                                    </div>
                                    <div>
                                        <label style={{ fontSize: '12px', fontWeight: '600', color: '#4a4a4a', display: 'block', marginBottom: '5px' }}>Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="10-digit number"
                                            maxLength={10}
                                            inputMode="numeric"
                                            style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }}
                                        />
                                    </div>
                                    <div>
                                        <label style={{ fontSize: '12px', fontWeight: '600', color: '#4a4a4a', display: 'block', marginBottom: '5px' }}>Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Email (optional)"
                                            style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }}
                                        />
                                    </div>
                                    <div>
                                        <label style={{ fontSize: '12px', fontWeight: '600', color: '#4a4a4a', display: 'block', marginBottom: '5px' }}>City *</label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Your City"
                                            style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }}
                                        />
                                    </div>
                                    <div>
                                        <label style={{ fontSize: '12px', fontWeight: '600', color: '#4a4a4a', display: 'block', marginBottom: '5px' }}>Message (Optional)</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Any additional details..."
                                            rows="3"
                                            style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none', resize: 'none' }}
                                        />
                                    </div>
                                    {formError && (
                                        <p style={{ color: '#dc2626', fontSize: '13px', margin: 0, fontWeight: 600 }}>{formError}</p>
                                    )}
                                    <button
                                        type="submit"
                                        disabled={submitStatus === 'submitting'}
                                        style={{ backgroundColor: '#0056b3', color: '#fff', border: 'none', padding: '12px', borderRadius: '6px', fontSize: '14px', fontWeight: '600', cursor: submitStatus === 'submitting' ? 'not-allowed' : 'pointer', opacity: submitStatus === 'submitting' ? 0.7 : 1 }}
                                    >
                                        {submitStatus === 'submitting' ? 'Submitting...' : 'Request Callback'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                </div>
            </div>

            <FooterTwo />
            <BackToTop />
        </div>
    );
}
