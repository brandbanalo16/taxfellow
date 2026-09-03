"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import HeaderTwo from "@/components/header/HeaderTwo";
import BackToTop from "@/components/BackToTop";
import FooterTwo from "@/components/footer/FooterTwo";
import Breadcrumb from '@/components/Breadcrumb';
import TeamTwo from "@/components/team/TeamTwo";

export default function Home() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Appointment' }
    ];

    const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', message: '' });
    const [submitStatus, setSubmitStatus] = useState(''); // '', 'submitting', 'success', 'error'
    const [formError, setFormError] = useState('');

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
        if (!form.name.trim()) { setFormError('Name is required.'); return; }
        if (!form.phone || !/^[0-9]{10}$/.test(form.phone)) { setFormError('Please enter a valid 10-digit phone number.'); return; }
        if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { setFormError('Please enter a valid email address.'); return; }
        if (!form.city.trim()) { setFormError('City is required.'); return; }
        setSubmitStatus('submitting');
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
                setSubmitStatus('success');
                setForm({ name: '', email: '', phone: '', city: '', message: '' });
            } else {
                setFormError(data.error || 'Something went wrong. Please try again.');
                setSubmitStatus('error');
            }
        } catch {
            setFormError('Network error. Please try again.');
            setSubmitStatus('error');
        }
    };

    return (
        <div className="">
            <HeaderTwo />
            <Breadcrumb title="Appointment" breadcrumbs={breadcrumbs} />

            {/* rts circle progress area */}
            <div className="rts-circle-progress-area rts-section-gap">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-circle-progress-inner">
                                <div className="progress red">
                                    <span className="progress-left"><span className="progress-bar" /></span>
                                    <span className="progress-right"><span className="progress-bar" /></span>
                                    <div className="progress-value">85%</div>
                                </div>
                                <h5 className="title">Quality Service</h5>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-circle-progress-inner">
                                <div className="progress red">
                                    <span className="progress-left"><span className="progress-bar" /></span>
                                    <span className="progress-right"><span className="progress-bar" /></span>
                                    <div className="progress-value">90%</div>
                                </div>
                                <h5 className="title">Skilled Members</h5>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-circle-progress-inner">
                                <div className="progress red">
                                    <span className="progress-left"><span className="progress-bar" /></span>
                                    <span className="progress-right"><span className="progress-bar" /></span>
                                    <div className="progress-value">78%</div>
                                </div>
                                <h5 className="title">Happy Customers</h5>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-circle-progress-inner">
                                <div className="progress red">
                                    <span className="progress-left"><span className="progress-bar" /></span>
                                    <span className="progress-right"><span className="progress-bar" /></span>
                                    <div className="progress-value">79%</div>
                                </div>
                                <h5 className="title">Project Fails</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts circle progress area End */}

            {/* contact area start */}
            <div className="rts-contact-area contact-one appoinment background-contact-appoinment">
                <div className="">
                    <div className="row g-0 align-items-center">
                        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                            <div className="contact-image-one appoinment">
                                <img src="assets/images/appoinment/02.png" alt="" />
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                            <div className="contact-form-area-one">
                                <div className="rts-title-area contact-appoinment text-start">
                                    <p className="pre-title">Make An Appointment</p>
                                    <h2 className="title">Request a free quote</h2>
                                </div>
                                {submitStatus === 'success' ? (
                                    <div style={{ padding: '20px', background: '#d4edda', color: '#155724', borderRadius: '8px', fontSize: '15px', fontWeight: '600' }}>
                                        Thank you! Your enquiry has been submitted successfully. We will contact you shortly.
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit}>
                                        <div className="name-email">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your Name *"
                                                value={form.name}
                                                onChange={handleChange}
                                                required
                                            />
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email Address"
                                                value={form.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="name-email">
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone Number *"
                                                value={form.phone}
                                                onChange={handleChange}
                                                required
                                                maxLength={10}
                                                inputMode="numeric"
                                            />
                                            <input
                                                type="text"
                                                name="city"
                                                placeholder="City *"
                                                value={form.city}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <textarea
                                            name="message"
                                            placeholder="Type Your Message"
                                            value={form.message}
                                            onChange={handleChange}
                                        />
                                        {formError && (
                                            <p style={{ color: '#dc2626', fontSize: '14px', fontWeight: '600', marginBottom: '10px' }}>{formError}</p>
                                        )}
                                        <button
                                            type="submit"
                                            disabled={submitStatus === 'submitting'}
                                            className="rts-btn btn-primary"
                                            style={{ opacity: submitStatus === 'submitting' ? 0.7 : 1, cursor: submitStatus === 'submitting' ? 'not-allowed' : 'pointer' }}
                                        >
                                            {submitStatus === 'submitting' ? 'Sending...' : 'Submit Message'}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* contact area end */}

            <TeamTwo/>
            <FooterTwo />
            <BackToTop />
        </div>
    );
}
