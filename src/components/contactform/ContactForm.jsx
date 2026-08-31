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
                                <form onSubmit={handleSubmit} className="space-y-4 max-w-md w-full mt-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Name *</label>
                                        <input name="name" value={form.name} onChange={handleChange} required className="border w-full p-2 rounded" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Email (optional)</label>
                                        <input type="email" name="email" value={form.email} onChange={handleChange} className="border w-full p-2 rounded" />
                                    </div>
                                    <div className="flex gap-2">
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Code</label>
                                            <input value="+91" disabled className="border p-2 rounded bg-gray-100 w-16 text-center" />
                                        </div>
                                        <div className="flex-1">
                                            <label className="block text-sm font-medium mb-1">Phone Number *</label>
                                            <input type="tel" name="phone" value={form.phone} onChange={handleChange} required maxLength={10} className="border w-full p-2 rounded" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">City *</label>
                                        <input name="city" value={form.city} onChange={handleChange} required className="border w-full p-2 rounded" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Message (optional)</label>
                                        <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="border w-full p-2 rounded" />
                                    </div>
                                    <button type="submit" disabled={status.loading} className="bg-blue-600 text-white px-4 py-2 rounded">
                                        {status.loading ? "Sending..." : "Send Enquiry"}
                                    </button>
                                    {status.success === true && <p className="text-green-600 mt-2">Thanks! We'll get back to you soon.</p>}
                                    {status.success === false && (
                                        <ul className="text-red-600 text-sm mt-2">
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