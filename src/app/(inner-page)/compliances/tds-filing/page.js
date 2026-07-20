"use client"
import React from 'react';
import Link from 'next/link';
import HeaderTwo from '@/components/header/HeaderTwo';
import Breadcrumb from '@/components/Breadcrumb';
import FooterTwo from '@/components/footer/FooterTwo';
import BackToTop from '@/components/BackToTop';

export default function TDSFilingPage() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Compliances', link: '#' },
        { label: 'TDS Filing' }
    ];
    return (
        <div>
            <HeaderTwo />
            <Breadcrumb title="TDS Filing" breadcrumbs={breadcrumbs} />
            <div className="rts-service-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="title-area-center">
                                <span className="pre-title">Compliance Services</span>
                                <h2 className="title">TDS Filing & Returns</h2>
                                <p className="disc" style={{ maxWidth: 680, margin: '0 auto' }}>
                                    Ensure accurate and timely TDS deduction, deposit and return filing. We handle all TDS compliances to keep your business penalty-free.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-5">
                        {[
                            { title: 'TDS Computation', desc: 'Accurate TDS computation on salaries, contractor payments, rent and professional fees.' },
                            { title: 'TDS Deposit (Challan)', desc: 'Timely deposit of TDS with generation of Challan 281 before due date.' },
                            { title: 'TDS Return Filing', desc: 'Quarterly TDS return filing (Form 24Q, 26Q, 27Q) with error-free data.' },
                            { title: 'TDS Certificates', desc: 'Generation and issuance of Form 16 and Form 16A to deductees on time.' },
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
