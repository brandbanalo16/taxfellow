"use client"
import React from 'react';
import Link from 'next/link';
import HeaderTwo from '@/components/header/HeaderTwo';
import Breadcrumb from '@/components/Breadcrumb';
import FooterTwo from '@/components/footer/FooterTwo';
import BackToTop from '@/components/BackToTop';

export default function AuditPage() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Accounting', link: '#' },
        { label: 'Audit & Assurance' }
    ];
    return (
        <div>
            <HeaderTwo />
            <Breadcrumb title="Audit & Assurance" breadcrumbs={breadcrumbs} />
            <div className="rts-service-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="title-area-center">
                                <span className="pre-title">Accounting Services</span>
                                <h2 className="title">Audit & Assurance Services</h2>
                                <p className="disc" style={{ maxWidth: 680, margin: '0 auto' }}>
                                    Comprehensive audit and assurance services that provide credibility to your financial statements and build stakeholder confidence.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-5">
                        {[
                            { title: 'Statutory Audit', desc: 'Mandatory audit under the Companies Act conducted by qualified Chartered Accountants.' },
                            { title: 'Internal Audit', desc: 'Systematic review of internal controls, risk management and governance processes.' },
                            { title: 'Tax Audit (Sec 44AB)', desc: 'Income tax audit for businesses exceeding prescribed turnover limits.' },
                            { title: 'GST Audit', desc: 'Verification of GST records and reconciliation with financial statements.' },
                        ].map((item, i) => (
                            <div className="col-lg-6 col-md-6 col-12" key={i}>
                                <div className="single-service-two-inner">
                                    <div className="body" style={{ padding: '30px' }}>
                                        <h5 className="title">{item.title}</h5>
                                        <p className="disc">{item.desc}</p>
                                        <Link href="/contactus" className="rts-btn btn-border mt--20">Get Started</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row mt--50 text-center">
                        <div className="col-12">
                            <Link href="/contactus" className="rts-btn btn-primary">Contact Our Experts</Link>
                        </div>
                    </div>
                </div>
            </div>
            <FooterTwo />
            <BackToTop />
        </div>
    );
}
