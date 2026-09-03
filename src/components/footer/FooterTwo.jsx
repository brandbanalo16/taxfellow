"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import ConsultationModal from '../consultation/ConsultationModal';

function FooterTwo() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div>
            <>
                {/* footer area start */}
                <div className="rts-footer-area rts-section-gap footer-two footer-bg-two mt--120 mt_md--80 mt_sm--60" id='f-contact'>
                    <div className="container">
                        <div className="row g-5">
                            {/* Column 1 – Brand */}
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="footer-two-single-wized left">
                                    <div className="mb-4">
                                        <img src="/assets/images/logo/TAXFELLOW.jpg.jpeg" alt="Taxfello Logo" style={{ maxHeight: '100px', width: 'auto', marginBottom: '20px' }} />
                                    </div>
                                    <h3 className="title">
                                        <span>Ready To Work With</span> <br />
                                        Taxfello?
                                    </h3>
                                    <p className="disc">
                                        Taxfello is a trusted one-stop platform for business compliance, offering premier business registration and compliance services and online financial advisory.
                                    </p>
                                    <a 
                                        className="rts-btn btn-primary-2 color-h-black" 
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIsModalOpen(true);
                                        }}
                                    >
                                        Book a Meeting
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12 col-12 mt_sm--50">
                                <div className="footer-two-single-wized two">
                                    <div className="wized-title-area">
                                        <h5 className="wized-title">Quick Links</h5>
                                        <img src="/assets/images/footer/under-title-2.png" alt="finbiz_footer" />
                                    </div>
                                    <div className="wized-2-body">
                                        <ul>
                                            <li><Link href={'/services/registration-and-licences'}><i className="fal fa-chevron-double-right" />Registration &amp; Licences</Link></li>
                                            <li><Link href={'/services/compliances'}><i className="fal fa-chevron-double-right" />Compliances</Link></li>
                                            <li><Link href={'/services/bookkeeping-and-accounting'}><i className="fal fa-chevron-double-right" />Bookkeeping &amp; Accounting</Link></li>
                                            <li><Link href={'/services/virtual-cfo'}><i className="fal fa-chevron-double-right" />Virtual CFO</Link></li>
                                            <li><Link href={'/about-us'}><i className="fal fa-chevron-double-right" />About Company</Link></li>
                                            <li><Link href={'/contactus'}><i className="fal fa-chevron-double-right" />Contact Us</Link></li>
                                            <li><Link href={'/faq'}><i className="fal fa-chevron-double-right" />FAQ</Link></li>
                                            <li><Link href={'/blog-grid'}><i className="fal fa-chevron-double-right" />Blog</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Column 3 – Registration & Compliances */}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 mt_sm--50">
                                <div className="footer-two-single-wized two">
                                    <div className="wized-title-area">
                                        <h5 className="wized-title">Our Services</h5>
                                        <img src="/assets/images/footer/under-title-2.png" alt="finbiz_footer" />
                                    </div>
                                    <div className="wized-2-body">
                                        <ul>
                                            <li><Link href={'/services/registration-and-licences/business-incorporation'}><i className="fal fa-chevron-double-right" />Business Incorporation</Link></li>
                                            <li><Link href={'/services/registration-and-licences/startup-recognition'}><i className="fal fa-chevron-double-right" />Startup Recognition</Link></li>
                                            <li><Link href={'/services/registration-and-licences/gst-registration-and-compliance'}><i className="fal fa-chevron-double-right" />GST Registration</Link></li>
                                            <li><Link href={'/services/registration-and-licences/food-trade-ip-licences'}><i className="fal fa-chevron-double-right" />Food, Trade &amp; IP Licences</Link></li>
                                            <li><Link href={'/services/registration-and-licences/state-labour-registrations'}><i className="fal fa-chevron-double-right" />State &amp; Labour Registrations</Link></li>
                                            <li><Link href={'/services/registration-and-licences/ngo-charitable-trust'}><i className="fal fa-chevron-double-right" />NGO &amp; Charitable Trust</Link></li>
                                            <li><Link href={'/services/compliances/income-tax-filing'}><i className="fal fa-chevron-double-right" />Income Tax Filing</Link></li>
                                            <li><Link href={'/services/compliances/roc-mca-compliance'}><i className="fal fa-chevron-double-right" />ROC / MCA Compliance</Link></li>
                                            <li><Link href={'/services/compliances/payroll-labour-compliance'}><i className="fal fa-chevron-double-right" />Payroll &amp; Labour Compliance</Link></li>
                                            <li><Link href={'/services/compliances/legal-corporate-drafting'}><i className="fal fa-chevron-double-right" />Legal &amp; Corporate Drafting</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Column 4 – Virtual CFO & Contact */}
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 mt_sm--30 mt_md--30">
                                <div className="footer-two-single-wized two">
                                    <div className="wized-title-area">
                                        <h5 className="wized-title">Virtual CFO Services</h5>
                                        <img src="/assets/images/footer/under-title-2.png" alt="finbiz_footer" />
                                    </div>
                                    <div className="wized-2-body">
                                        <ul>
                                            <li><Link href={'/services/bookkeeping-and-accounting/accounting-and-bookkeeping'}><i className="fal fa-chevron-double-right" />Accounting &amp; Bookkeeping</Link></li>
                                            <li><Link href={'/services/virtual-cfo/financial-planning'}><i className="fal fa-chevron-double-right" />Financial Planning</Link></li>
                                            <li><Link href={'/services/virtual-cfo/cash-flow-working-capital'}><i className="fal fa-chevron-double-right" />Cash Flow &amp; Working Capital</Link></li>
                                            <li><Link href={'/services/virtual-cfo/banking-project-finance'}><i className="fal fa-chevron-double-right" />Banking &amp; Project Finance</Link></li>
                                            <li><Link href={'/services/virtual-cfo/fundraising-investor-support'}><i className="fal fa-chevron-double-right" />Fundraising &amp; Investor Support</Link></li>
                                            <li><Link href={'/services/virtual-cfo/mis-kpi-reporting'}><i className="fal fa-chevron-double-right" />MIS &amp; KPI Reporting</Link></li>
                                            <li><Link href={'/services/virtual-cfo/profitability-cost-control'}><i className="fal fa-chevron-double-right" />Profitability &amp; Cost Control</Link></li>
                                            <li><Link href={'/services/virtual-cfo/internal-controls-risk'}><i className="fal fa-chevron-double-right" />Internal Controls &amp; Risk</Link></li>
                                            <li><Link href={'/services/virtual-cfo/virtual-cfo-retainer'}><i className="fal fa-chevron-double-right" />Virtual CFO Retainer</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact bar - full width horizontal row using native theme styles */}
                        <div className="footer-contact-bar" style={{ marginTop: '50px', paddingTop: '40px', borderTop: '1px solid rgba(0, 0, 0, 0.08)' }}>
                            <div className="row g-4">
                                <div className="col-md-4 col-sm-12">
                                    <div className="footer-two-single-wized">
                                        <div className="wized-title-area">
                                            <h5 className="wized-title">Company Email</h5>
                                            <img src="/assets/images/footer/under-title-2.png" alt="finbiz_footer" />
                                        </div>
                                        <div className="wized-2-body" style={{ marginTop: '15px' }}>
                                            <ul>
                                                <li style={{ padding: '0', background: 'none' }}>
                                                    <Link href="mailto:support@taxfello.com">
                                                        <i className="fas fa-envelope" style={{ color: '#e8472a', marginRight: '8px' }} />
                                                        support@taxfello.com
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="footer-two-single-wized">
                                        <div className="wized-title-area">
                                            <h5 className="wized-title">Company Phone</h5>
                                            <img src="/assets/images/footer/under-title-2.png" alt="finbiz_footer" />
                                        </div>
                                        <div className="wized-2-body" style={{ marginTop: '15px' }}>
                                            <ul>
                                                <li style={{ padding: '0', background: 'none', marginBottom: '8px' }}>
                                                    <Link href="tel:+918800485106">
                                                        <i className="fas fa-phone-alt" style={{ color: '#e8472a', marginRight: '8px' }} />
                                                        +91 88004 85106
                                                    </Link>
                                                </li>
                                                <li style={{ padding: '0', background: 'none' }}>
                                                    <Link href="tel:+918800485881">
                                                        <i className="fas fa-phone-alt" style={{ color: '#e8472a', marginRight: '8px' }} />
                                                        +91 88004 85881
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="footer-two-single-wized">
                                        <div className="wized-title-area">
                                            <h5 className="wized-title">Company Location</h5>
                                            <img src="/assets/images/footer/under-title-2.png" alt="finbiz_footer" />
                                        </div>
                                        <div className="wized-2-body" style={{ marginTop: '15px' }}>
                                            <ul>
                                                <li style={{ padding: '0', background: 'none', display: 'flex', alignItems: 'flex-start', color: 'var(--color-body, #64748b)', fontSize: '14px', lineHeight: '1.6' }}>
                                                    <i className="fas fa-map-marker-alt" style={{ color: '#e8472a', marginRight: '8px', marginTop: '4px' }} />
                                                    <span>8th Floor, Westend Mall, 709, Janakpuri, Delhi, 110058</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* footer area end */}
                {/* copyright-area start */}
                <div className="rts-copy-right ptb--30">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="copyright-h-2-wrapper">
                                    <p className="disc">
                                        Taxfello - Copyright 2026. All rights reserved. Managed with Excellence by <Link href={'https://brandbanalo.com/'}>Brandbanalo</Link>
                                    </p>
                                    <div className="right">
                                        <ul>
                                            <li>
                                                <Link href="/blog-grid">Blog</Link>
                                            </li>
                                            <li>
                                                <Link href="/terms-and-conditions">Terms & Conditions</Link>
                                            </li>
                                            <li>
                                                <Link href="/privacy-policy">Privacy Policy</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* copyright-area end */}
            </>
            <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    )
}

export default FooterTwo