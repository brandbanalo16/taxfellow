"use client"
import React from 'react';
import Link from 'next/link';
import HeaderTwo from '@/components/header/HeaderTwo';
import Breadcrumb from '@/components/Breadcrumb';
import FooterTwo from '@/components/footer/FooterTwo';
import BackToTop from '@/components/BackToTop';

export default function MISReportingPage() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'CFO', link: '#' },
        { label: 'MIS Reporting' }
    ];
    return (
        <div>
            <HeaderTwo />
            <Breadcrumb title="MIS Reporting" breadcrumbs={breadcrumbs} />
            <div className="rts-service-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="title-area-center">
                                <span className="pre-title">CFO Services</span>
                                <h2 className="title">MIS Reporting</h2>
                                <p className="disc" style={{ maxWidth: 680, margin: '0 auto' }}>
                                    Management Information System (MIS) reports that give business leaders timely, accurate financial and operational data to make confident strategic decisions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-5">
                        {[
                            { title: 'Monthly MIS Reports', desc: 'Comprehensive monthly reports covering P&L, balance sheet, cash flows and key metrics.' },
                            { title: 'Sales & Revenue Analysis', desc: 'Detailed analysis of revenue trends, product-wise performance and sales pipeline.' },
                            { title: 'Cost & Expense Reports', desc: 'Department-wise cost analysis and overhead tracking to identify savings.' },
                            { title: 'Executive Dashboard', desc: 'Visual management dashboards for board meetings and leadership reviews.' },
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
