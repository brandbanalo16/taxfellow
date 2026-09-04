"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import HeaderTwo from "@/components/header/HeaderTwo";
import FooterTwo from "@/components/footer/FooterTwo";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import Posts from "@/data/Posts.json";

export default function BlogDetailsPage() {
    const { slug } = useParams();
    const [enquiry, setEnquiry] = useState({ name: '', email: '', phone: '', message: '' });
    const [enquirySubmitted, setEnquirySubmitted] = useState(false);
    const [enquiryLoading, setEnquiryLoading] = useState(false);
    const [enquiryError, setEnquiryError] = useState('');
    const [comment, setComment] = useState({ name: '', email: '', subject: '', message: '' });

    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Blog', link: '/blog-grid' },
        { label: 'Blog Details' }
    ];

    const blogPost = Posts.find(post => post.slug === slug);

    // All 19 main sub-services as sidebar categories
    const categories = [
        { title: 'Business Incorporation', href: '/services/registration-and-licences/business-incorporation' },
        { title: 'Startup Recognition', href: '/services/registration-and-licences/startup-recognition' },
        { title: 'GST Registration & Compliance', href: '/services/registration-and-licences/gst-registration-and-compliance' },
        { title: 'Food, Trade & IP Licences', href: '/services/registration-and-licences/food-trade-ip-licences' },
        { title: 'State & Labour Registrations', href: '/services/registration-and-licences/state-labour-registrations' },
        { title: 'NGO & Charitable Trust', href: '/services/registration-and-licences/ngo-charitable-trust' },
        { title: 'Income Tax Filing', href: '/services/compliances/income-tax-filing' },
        { title: 'ROC / MCA Compliance', href: '/services/compliances/roc-mca-compliance' },
        { title: 'Payroll & Labour Compliance', href: '/services/compliances/payroll-labour-compliance' },
        { title: 'Legal & Corporate Drafting', href: '/services/compliances/legal-corporate-drafting' },
        { title: 'Accounting & Bookkeeping', href: '/services/bookkeeping-and-accounting/accounting-and-bookkeeping' },
        { title: 'Financial Planning', href: '/services/virtual-cfo/financial-planning' },
        { title: 'Cash Flow & Working Capital', href: '/services/virtual-cfo/cash-flow-working-capital' },
        { title: 'Banking & Project Finance', href: '/services/virtual-cfo/banking-project-finance' },
        { title: 'Fundraising & Investor Support', href: '/services/virtual-cfo/fundraising-investor-support' },
        { title: 'MIS & KPI Reporting', href: '/services/virtual-cfo/mis-kpi-reporting' },
        { title: 'Profitability & Cost Control', href: '/services/virtual-cfo/profitability-cost-control' },
        { title: 'Internal Controls & Risk', href: '/services/virtual-cfo/internal-controls-risk' },
        { title: 'Virtual CFO Retainer', href: '/services/virtual-cfo/virtual-cfo-retainer' },
    ];

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        alert('Comment submitted! Thank you for your feedback.');
        setComment({ name: '', email: '', subject: '', message: '' });
    };

    const handleEnquirySubmit = async (e) => {
        e.preventDefault();
        setEnquiryError('');
        if (!enquiry.name.trim()) { setEnquiryError('Name is required.'); return; }
        if (!enquiry.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email)) {
            setEnquiryError('Please enter a valid email address.');
            return;
        }
        const phoneDigits = enquiry.phone.replace(/\D/g, '');
        if (!/^[0-9]{10}$/.test(phoneDigits)) {
            setEnquiryError('Please enter a valid 10-digit phone number.');
            return;
        }
        setEnquiryLoading(true);
        try {
            const res = await fetch('/api/send-mail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: enquiry.name.trim(),
                    email: enquiry.email.trim(),
                    phone: phoneDigits,
                    message: enquiry.message.trim(),
                    source: 'Blog consultation',
                    service: blogPost?.title || '',
                }),
            });
            const data = await res.json();
            if (data.success) {
                setEnquirySubmitted(true);
                setEnquiry({ name: '', email: '', phone: '', message: '' });
            } else {
                setEnquiryError(data.message || 'Unable to send enquiry');
            }
        } catch {
            setEnquiryError('Unable to send enquiry');
        } finally {
            setEnquiryLoading(false);
        }
    };

    if (!blogPost) {
        return (
            <div>
                <HeaderTwo />
                <Breadcrumb title="Blog Details" breadcrumbs={breadcrumbs} />
                <div style={{ textAlign: 'center', padding: '100px 20px' }}>
                    <i className="fal fa-exclamation-circle" style={{ fontSize: '60px', color: '#ccc', display: 'block', marginBottom: '20px' }} />
                    <h3>Post Not Found</h3>
                    <p style={{ color: '#888', marginTop: '10px', marginBottom: '24px' }}>
                        The blog post you are looking for does not exist or may have been removed.
                    </p>
                    <Link className="rts-btn btn-primary" href="/blog-grid">
                        Back to Blog
                    </Link>
                </div>
                <FooterTwo />
            </div>
        );
    }

    return (
        <>
            {/* SEO Meta Tags */}
            <title>{blogPost.metaTitle || blogPost.title}</title>
            <meta name="description" content={blogPost.metaDescription || blogPost.descripTion} />
            {blogPost.url && <link rel="canonical" href={blogPost.url} />}

            <HeaderTwo />
            <BackToTop />
            <Breadcrumb title="Blog Details" breadcrumbs={breadcrumbs} />

            {/* Blog Details Area */}
            <div className="rts-blog-list-area rts-section-gap">
                <div className="container">
                    <div className="row g-5">

                        {/* Main Content */}
                        <div className="col-xl-8 col-md-12 col-sm-12 col-12">
                            <div className="blog-single-post-listing details mb--0">

                                {/* Featured Image */}
                                <div className="thumbnail">
                                    <img
                                        src={blogPost.imageUrl ? `/assets/images/blog/${blogPost.imageUrl}` : `/assets/images/blog/${blogPost.bannerImg}`}
                                        alt={blogPost.title}
                                        style={{ width: '100%', borderRadius: '12px', objectFit: 'cover' }}
                                    />
                                </div>

                                <div className="blog-listing-content">
                                    {/* Meta Info */}
                                    <div className="user-info">
                                        <div className="single">
                                            <i className="far fa-user-circle" />
                                            <span style={{ color: 'black !important' }}>by {blogPost.author || 'Admin'}</span>
                                        </div>
                                        <div className="single">
                                            <i className="far fa-clock" />
                                            <span style={{ color: 'black !important' }}>{blogPost.publishedDate}</span>
                                        </div>
                                        <div className="single">
                                            <i className="far fa-tags" />
                                            <span style={{ color: 'black !important' }}>{blogPost.category || 'General'}</span>
                                        </div>
                                    </div>

                                    {/* Title / Page Heading */}
                                    <h2 className="title">{blogPost.pageHeading || blogPost.title}</h2>

                                    {/* Description / Content */}
                                    {blogPost.htmlContent ? (
                                        <>
                                            <div
                                                className="dynamic-blog-content"
                                                dangerouslySetInnerHTML={{ __html: blogPost.htmlContent }}
                                            />
                                            <style dangerouslySetInnerHTML={{
                                                __html: `
                                                .dynamic-blog-content h2 {
                                                    font-size: 28px;
                                                    margin-top: 40px;
                                                    margin-bottom: 20px;
                                                    color: var(--color-title, #1c2539);
                                                    font-weight: 700;
                                                    line-height: 1.3;
                                                }
                                                .dynamic-blog-content h3 {
                                                    font-size: 22px;
                                                    margin-top: 35px;
                                                    margin-bottom: 15px;
                                                    color: var(--color-title, #1c2539);
                                                    font-weight: 700;
                                                    line-height: 1.4;
                                                }
                                                .dynamic-blog-content p {
                                                    color: var(--color-body, #555555);
                                                    line-height: 1.8;
                                                    margin-bottom: 25px;
                                                    font-size: 16px;
                                                }
                                                .dynamic-blog-content ul {
                                                    list-style-type: none;
                                                    padding-left: 0;
                                                    margin-bottom: 30px;
                                                }
                                                .dynamic-blog-content ul li {
                                                    color: var(--color-body, #555555);
                                                    margin-bottom: 12px;
                                                    line-height: 1.7;
                                                    padding-left: 25px;
                                                    position: relative;
                                                }
                                                .dynamic-blog-content ul li::before {
                                                    content: '\\f058'; /* FontAwesome check-circle */
                                                    font-family: "Font Awesome 5 Pro";
                                                    position: absolute;
                                                    left: 0;
                                                    top: 2px;
                                                    color: var(--color-primary, #2c9295);
                                                    font-weight: 400;
                                                }
                                                .dynamic-blog-content strong {
                                                    color: var(--color-title, #1c2539);
                                                    font-weight: 600;
                                                }
                                            `}} />
                                        </>
                                    ) : (
                                        <p className="disc para-1">
                                            {blogPost.descripTion}
                                        </p>
                                    )}

                                    {/* Comment Form */}
                                    <div className="replay-area-details">
                                        <h4 className="title">Leave a Reply</h4>
                                        <form onSubmit={handleCommentSubmit}>
                                            <div className="row g-4">
                                                <div className="col-lg-6">
                                                    <input
                                                        type="text"
                                                        placeholder="Your Name"
                                                        value={comment.name}
                                                        onChange={e => setComment({ ...comment, name: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                                <div className="col-lg-6">
                                                    <input
                                                        type="email"
                                                        placeholder="Your Email"
                                                        value={comment.email}
                                                        onChange={e => setComment({ ...comment, email: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                                <div className="col-12">
                                                    <input
                                                        type="text"
                                                        placeholder="Subject"
                                                        value={comment.subject}
                                                        onChange={e => setComment({ ...comment, subject: e.target.value })}
                                                    />
                                                </div>
                                                <div className="col-12">
                                                    <textarea
                                                        placeholder="Write your comment here..."
                                                        value={comment.message}
                                                        onChange={e => setComment({ ...comment, message: e.target.value })}
                                                        rows={5}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <button type="submit" className="rts-btn btn-primary" style={{ marginTop: '20px' }}>
                                                Submit Comment
                                            </button>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* Main Content End */}

                        {/* Sidebar */}
                        <div className="col-xl-4 col-md-12 col-sm-12 col-12" style={{ height: '100%' }}>

                            {/* Categories Widget */}
                            <div className="rts-single-wized Categories">
                                <div className="wized-header">
                                    <h5 className="title">Our Services</h5>
                                </div>
                                <div className="wized-body">
                                    {categories.map((cat, idx) => (
                                        <ul key={idx} className="single-categories">
                                            <li>
                                                <Link href={cat.href}>
                                                    {cat.title} <i className="far fa-long-arrow-right" />
                                                </Link>
                                            </li>
                                        </ul>
                                    ))}
                                </div>
                            </div>

                            {/* Contact Widget */}
                            <div className="rts-single-wized contact">
                                <div className="wized-header">
                                    <Link href="/">
                                        <img src="/assets/images/logo/logo-tax.webp" alt="Taxfello_logo" style={{ borderRadius: '100px' }} />
                                    </Link>
                                </div>
                                <div className="wized-body">
                                    <h5 className="title">Need Help? We Are Here To Help You</h5>
                                    <Link className="rts-btn btn-primary" href="/contactus">
                                        Contact Us
                                    </Link>
                                </div>
                            </div>

                            {/* Search Widget */}
                            <div className="rts-single-wized search" style={{ position: 'sticky', top: '120px', zIndex: 10 }}>
                                <div className="wized-header">
                                    <h5 className="title">Get Free Consultation</h5>
                                </div>
                                <div className="wized-body">
                                    {enquirySubmitted ? (
                                        <div style={{ textAlign: 'center', padding: '20px 0', color: 'var(--color-primary, #2c9295)' }}>
                                            <i className="fal fa-check-circle" style={{ fontSize: '36px', display: 'block', margin: '0 auto 10px' }} />
                                            <p style={{ fontWeight: '600', margin: 0 }}>Thank you! We'll get back to you shortly.</p>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleEnquirySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                            <input
                                                type="text"
                                                placeholder="Name *"
                                                required
                                                value={enquiry.name}
                                                onChange={e => setEnquiry({ ...enquiry, name: e.target.value })}
                                                style={{
                                                    width: '100%', padding: '12px 16px', border: '1px solid #e0e0e0',
                                                    borderRadius: '6px', fontSize: '15px', outline: 'none',
                                                    background: '#f9f9f9', color: '#333'
                                                }}
                                            />
                                            <input
                                                type="email"
                                                placeholder="Email *"
                                                required
                                                value={enquiry.email}
                                                onChange={e => setEnquiry({ ...enquiry, email: e.target.value })}
                                                style={{
                                                    width: '100%', padding: '12px 16px', border: '1px solid #e0e0e0',
                                                    borderRadius: '6px', fontSize: '15px', outline: 'none',
                                                    background: '#f9f9f9', color: '#333'
                                                }}
                                            />
                                            <input
                                                type="tel"
                                                placeholder="Phone *"
                                                required
                                                value={enquiry.phone}
                                                onChange={e => setEnquiry({ ...enquiry, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                                                maxLength={10}
                                                inputMode="numeric"
                                                style={{
                                                    width: '100%', padding: '12px 16px', border: '1px solid #e0e0e0',
                                                    borderRadius: '6px', fontSize: '15px', outline: 'none',
                                                    background: '#f9f9f9', color: '#333'
                                                }}
                                            />
                                            <textarea
                                                placeholder="Message"
                                                rows={4}
                                                value={enquiry.message}
                                                onChange={e => setEnquiry({ ...enquiry, message: e.target.value })}
                                                style={{
                                                    width: '100%', padding: '12px 16px', border: '1px solid #e0e0e0',
                                                    borderRadius: '6px', fontSize: '15px', outline: 'none',
                                                    background: '#f9f9f9', color: '#333', resize: 'vertical'
                                                }}
                                            />
                                            <button type="submit" disabled={enquiryLoading} className="rts-btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                                {enquiryLoading ? 'Sending...' : 'Submit'} {!enquiryLoading && <i className="fal fa-arrow-right" style={{ marginLeft: '8px' }} />}
                                            </button>
                                            {enquiryError && (
                                                <p style={{ color: 'red', margin: 0, fontSize: '14px' }}>{enquiryError}</p>
                                            )}
                                        </form>
                                    )}
                                </div>
                            </div>

                        </div>
                        {/* Sidebar End */}

                    </div>
                </div>
            </div>
            {/* Blog Details Area End */}

            <FooterTwo />
        </>
    );
}
