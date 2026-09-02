"use client"
import React, { useState } from 'react'

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        countryCode: "+91",
        phone: "",
        city: "",
        message: "",
    });
    const [status, setStatus] = useState({ loading: false, success: null, errors: [] });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: null, errors: [] });
        try {
            const res = await fetch("https://taxfello.com/mail/send-mail.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (data.success) {
                setStatus({ loading: false, success: true, errors: [] });
                setForm({ name: "", email: "", countryCode: "+91", phone: "", city: "", message: "" });
            } else {
                setStatus({ loading: false, success: false, errors: data.errors || [data.message] });
            }
        } catch (err) {
            setStatus({ loading: false, success: false, errors: ["Network error. Please try again."] });
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
                                    {status.success === true && <p style={{ color: 'green', marginTop: '10px' }}>Thanks! We'll get back to you soon.</p>}
                                    {status.success === false && (
                                        <ul style={{ color: 'red', marginTop: '10px', fontSize: '14px' }}>
                                            {status.errors.map((err, i) => <li key={i}>{err}</li>)}
                                        </ul>
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