"use client"
import React, { useState } from 'react'

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        message: "",
    });
    const [status, setStatus] = useState({ loading: false, success: null, error: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'phone') {
            // Only allow digits, max 10
            const digits = value.replace(/\D/g, '').slice(0, 10);
            setForm(prev => ({ ...prev, phone: digits }));
        } else {
            setForm(prev => ({ ...prev, [name]: value }));
        }
    };

    const validate = () => {
        if (!form.name.trim()) return 'Name is required.';
        if (!form.phone || !/^[0-9]{10}$/.test(form.phone)) return 'Please enter a valid 10-digit phone number.';
        if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Please enter a valid email address.';
        if (!form.city.trim()) return 'City is required.';
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationError = validate();
        if (validationError) {
            setStatus({ loading: false, success: false, error: validationError });
            return;
        }
        setStatus({ loading: true, success: null, error: '' });
        try {
            const res = await fetch("/api/send-enquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
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
                setStatus({ loading: false, success: true, error: '' });
                setForm({ name: "", email: "", phone: "", city: "", message: "" });
            } else {
                setStatus({ loading: false, success: false, error: data.error || 'Something went wrong. Please try again.' });
            }
        } catch (err) {
            setStatus({ loading: false, success: false, error: 'Network error. Please try again.' });
        }
    };

    return (
        <div>
            {/* contact area start */}
            <div className="rts-contact-area contact-one">
                <div className="container">
                    <div className="row align-items-center g-0">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="contact-image-one">
                                <img src="assets/images/contact/01.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                            <div className="contact-form-area-one">
                                <div className="rts-title-area contact text-start">
                                    <p className="pre-title">Make An Appointment</p>
                                    <h2 className="title">Request a free quote</h2>
                                </div>
                                <div id="form-messages" />
                                <form id="contact-form" onSubmit={handleSubmit}>
                                    <div className="name-email">
                                        <input
                                            type="text"
                                            placeholder="Your Name *"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="name-email">
                                        <input
                                            type="tel"
                                            placeholder="Phone Number *"
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            required
                                            maxLength={10}
                                            inputMode="numeric"
                                        />
                                        <input
                                            type="text"
                                            placeholder="City *"
                                            name="city"
                                            value={form.city}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <textarea
                                        placeholder="Type Your Message"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                    />
                                    <button type="submit" disabled={status.loading} className="rts-btn btn-primary">
                                        {status.loading ? "Sending..." : "Submit Message"}
                                    </button>
                                    {status.success === true && <p style={{ color: 'green', marginTop: '10px' }}>Thank you! Your enquiry has been submitted successfully.</p>}
                                    {status.success === false && status.error && (
                                        <p style={{ color: 'red', marginTop: '10px', fontSize: '14px' }}>{status.error}</p>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* contact area end */}
        </div>
    )
}