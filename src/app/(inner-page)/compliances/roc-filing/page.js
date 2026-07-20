"use client"
import React from 'react';
import Link from 'next/link';
import HeaderTwo from '@/components/header/HeaderTwo';
import Breadcrumb from '@/components/Breadcrumb';
import FooterTwo from '@/components/footer/FooterTwo';
import BackToTop from '@/components/BackToTop';

export default function ROCFilingPage() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Compliances', link: '#' },
        { label: 'ROC Filing' }
    ];
    return (
        <div>
            <HeaderTwo />
            <Breadcrumb title="ROC Filing" breadcrumbs={breadcrumbs} />
            <div className="rts-service-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="title-area-center">
                                <span className="pre-title">Compliance Services</span>
                                <h2 className="title">ROC Filing & MCA Compliance</h2>
                                <p className="disc" style={{ maxWidth: 680, margin: '0 auto' }}>
                                    Stay compliant with the Registrar of Companies. We handle all MCA filings, annual returns and event-based compliances for companies and LLPs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-5">
                        {[
                            { title: 'Annual Return (MGT-7)', desc: 'Filing of annual return containing details of company, shareholders and directors.' },
                            { title: 'Financial Statements (AOC-4)', desc: 'Filing of balance sheet, P&L account and Board report with MCA.' },
                            { title: 'Director KYC (DIR-3 KYC)', desc: 'Annual KYC filing for all directors holding DIN to maintain active status.' },
                            { title: 'Event-Based Filings', desc: 'MGT-14, SH-7, PAS-3 and other event-based MCA forms filed timely.' },
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
