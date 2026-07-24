"use client"
import React from 'react'
import Link from 'next/link';
function FooterTwo() {
    return (
        <div>
            <>
                {/* footer area start */}
                <div className="rts-footer-area rts-section-gap footer-two footer-bg-two mt--120 mt_md--80 mt_sm--60" id='f-contact'>
                    <div className="container">
                        <div className="row">
                            {/* single wized */}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="footer-two-single-wized left">
                                    <div className="mb-4">
                                        <img src="/assets/images/logo/TAXFELLOW.jpg.jpeg" alt="Taxfello Logo" style={{ maxHeight: '100px', width: 'auto', marginBottom: '20px' }} />
                                    </div>
                                    <h3 className="title">
                                        <span>Ready To Work With</span> <br />
                                        Taxfello?
                                    </h3>
                                    <p className="disc">
                                        Taxfello is a trusted one-stop CA firm for business compliance, offering premier business registration and compliance services and online chartered accountant services.
                                    </p>
                                    <Link className="rts-btn btn-primary-2 color-h-black" href={'#f-contact'}>
                                        Get a Quote
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12 col-12 mt_sm--50">
                                <div className="footer-two-single-wized two">
                                    <div className="wized-title-area">
                                        <h5 className="wized-title">Important Links</h5>
                                        <img
                                            src="/assets/images/footer/under-title-2.png"
                                            alt="finbiz_footer"
                                        />
                                    </div>
                                    <div className="wized-2-body">
                                        <ul>
                                            <li>
                                                <Link href={'/services'}>
                                                    <i className="fal fa-chevron-double-right" />
                                                    Registration & Licences
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={'/services'}>
                                                    <i className="fal fa-chevron-double-right" />
                                                    Compliances
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={'/services'}>
                                                    <i className="fal fa-chevron-double-right" />
                                                    Bookkeeping & Accounting
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={'/services'}>
                                                    <i className="fal fa-chevron-double-right" />
                                                    Virtual CFO
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={'/about'}>
                                                    <i className="fal fa-chevron-double-right" />
                                                    About Company
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={'/'}>
                                                    <i className="fal fa-chevron-double-right" />
                                                    Contact Us
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 mt_sm--50">
                                <div className="footer-two-single-wized two">
                                    <div className="wized-title-area">
                                        <h5 className="wized-title">Our Services</h5>
                                        <img
                                            src="/assets/images/footer/under-title-2.png"
                                            alt="finbiz_footer"
                                        />
                                    </div>
                                    <div className="wized-2-body">
                                        <div className="row g-2">
                                            <div className="col-6">
                                                <ul className="list-unstyled p-0 m-0">
                                                    <li className="mb-2"><Link href={'/services/private-limited-company-registration'} style={{ fontSize: '13px' }}><i className="fal fa-chevron-double-right me-1" />Business Incorporation</Link></li>
                                                    <li className="mb-2"><Link href={'/services/startup-india-registration'} style={{ fontSize: '13px' }}><i className="fal fa-chevron-double-right me-1" />Startup Recognition</Link></li>
                                                    <li className="mb-2"><Link href={'/services/gst-registration'} style={{ fontSize: '13px' }}><i className="fal fa-chevron-double-right me-1" />GST Registration</Link></li>
                                                    <li className="mb-2"><Link href={'/services/fssai-registration'} style={{ fontSize: '13px' }}><i className="fal fa-chevron-double-right me-1" />Food, Trade & IP Licences</Link></li>
                                                    <li className="mb-2"><Link href={'/services/shop-and-establishment-registration'} style={{ fontSize: '13px' }}><i className="fal fa-chevron-double-right me-1" />State & Labour Registrations</Link></li>
                                                    <li className="mb-2"><Link href={'/services/section-8-company-registration'} style={{ fontSize: '13px' }}><i className="fal fa-chevron-double-right me-1" />NGO & Charitable Trust</Link></li>
                                                    <li className="mb-2"><Link href={'/services/income-tax-return-filing'} style={{ fontSize: '13px' }}><i className="fal fa-chevron-double-right me-1" />Income Tax Filing</Link></li>
                                                    <li className="mb-2"><Link href={'/services/roc-annual-filing'} style={{ fontSize: '13px' }}><i className="fal fa-chevron-double-right me-1" />ROC / MCA Compliance</Link></li>
                                                    <li className="mb-2"><Link href={'/services/payroll-compliance-services'} style={{ fontSize: '13px' }}><i className="fal fa-chevron-double-right me-1" />Payroll & Labour Compliance</Link></li>
                                                    <li className="mb-2"><Link href={'/services/legal-drafting-services'} style={{ fontSize: '13px' }}><i className="fal fa-chevron-double-right me-1" />Legal & Corporate Drafting</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-6">
                                                <ul className="list-unstyled p-0 m-0">
                                                    <li className="mb-2"><Link href={'/services/gst-registration'} style={{ fontSize: '13px' }}><i className="fal fa-chevron-double-right me-1" />Compliance</Link></li>
                                                    <li className="mb-2"><Link href={'/services/bookkeeping-and-accounting-services'} style={{ fontSize: '13px' }}><i className="fal fa-chevron-double-right me-1" />Accounting & Bookkeeping</Link></li>
                                                    <li className="mb-2"><Link href={'/services/financial-planning-and-budgeting'} style={{ fontSize: '13px' }}><i className="fal fa-chevron-double-right me-1" />Financial Planning</Link></li>
                                                    <li className="mb-2"><Link href={'/services/cash-flow-management'} style={{ fontSize: '13px' }}><i className="fal fa-chevron-double-right me-1" />Cash Flow & Working Capital</Link></li>
                                                    <li className="mb-2"><Link href={'/services/project-report-and-cma-data'} style={{ fontSize: '13px' }}><i className="fal fa-chevron-double-right me-1" />Banking & Project Finance</Link></li>
                                                    <li className="mb-2"><Link href={'/services/pitch-deck-and-investor-documentation'} style={{ fontSize: '13px' }}><i className="fal fa-chevron-double-right me-1" />Fundraising & Investor Support</Link></li>
                                                    <li className="mb-2"><Link href={'/services/mis-reporting-and-dashboards'} style={{ fontSize: '13px' }}><i className="fal fa-chevron-double-right me-1" />MIS & KPI Reporting</Link></li>
                                                    <li className="mb-2"><Link href={'/services/cost-reduction-analysis'} style={{ fontSize: '13px' }}><i className="fal fa-chevron-double-right me-1" />Profitability & Cost Control</Link></li>
                                                    <li className="mb-2"><Link href={'/services/internal-audit-and-sop'} style={{ fontSize: '13px' }}><i className="fal fa-chevron-double-right me-1" />Internal Controls & Risk</Link></li>
                                                    <li className="mb-2"><Link href={'/services/virtual-cfo-monthly-retainer'} style={{ fontSize: '13px' }}><i className="fal fa-chevron-double-right me-1" />Virtual CFO Retainer</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* single wized */}
                            <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12 col-12 mt_sm--30 mt_md--30">
                                <div className="footer-two-single-wized">
                                    <div className="wized-title-area">
                                        <h5 className="wized-title">Contact Us</h5>
                                        <img
                                            src="/assets/images/footer/under-title-2.png"
                                            alt="finbiz_footer"
                                        />
                                    </div>
                                    <div className="wized-2-body">
                                        <div className="contact-info-1">
                                            <div className="icon">
                                                <i className="fas fa-phone-alt" />
                                            </div>
                                            <div className="disc">
                                                <span>Call Us 24/7</span>
                                                <Link href={'#'}>8800485106, 8800485881</Link>
                                            </div>
                                        </div>
                                        <div className="contact-info-1">
                                            <div className="icon">
                                                <i className="fas fa-envelope" />
                                            </div>
                                            <div className="disc">
                                                <span>Work with us</span>
                                                <Link href={'#'}>support@taxfello.com</Link>
                                            </div>
                                        </div>
                                        <div className="contact-info-1">
                                            <div className="icon">
                                                <i className="fas fa-map-marker-alt" />
                                            </div>
                                            <div className="disc">
                                                <span>Our Location</span>
                                                <Link href={'#'}>
                                                    8th Floor, Westend Mall, 709, Janakpuri, Delhi, 110058
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* single wized */}
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
                                                <Link href="#">Terms & Conditions</Link>
                                            </li>
                                            <li>
                                                <Link href={'#'}>Privacy Policy</Link>
                                            </li>
                                            <li>
                                                <Link href="contactus.html">FAQ</Link>
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

        </div>
    )
}

export default FooterTwo