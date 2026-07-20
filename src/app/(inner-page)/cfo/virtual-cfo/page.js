"use client"
import React from 'react';
import Link from 'next/link';
import HeaderTwo from '@/components/header/HeaderTwo';
import Breadcrumb from '@/components/Breadcrumb';
import FooterTwo from '@/components/footer/FooterTwo';
import BackToTop from '@/components/BackToTop';

export default function VirtualCFOPage() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'CFO', link: '#' },
        { label: 'Virtual CFO' }
    ];
    return (
        <div>
            <HeaderTwo />
            <Breadcrumb title="Virtual CFO" breadcrumbs={breadcrumbs} />
            <div className="rts-service-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="title-area-center">
                                <span className="pre-title">CFO Services</span>
                                <h2 className="title">Virtual CFO Services</h2>
                                <p className="disc" style={{ maxWidth: 680, margin: '0 auto' }}>
                                    Get the expertise of a seasoned Chief Financial Officer without the cost of a full-time hire. Our Virtual CFO service gives you strategic financial leadership on demand.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-5">
                        {[
                            { title: 'Financial Strategy', desc: 'Strategic financial planning aligned with your business goals and growth plans.' },
                            { title: 'Cash Flow Management', desc: 'Real-time monitoring and optimization of cash flows to prevent liquidity issues.' },
                            { title: 'Investor Relations', desc: 'Preparation of investor decks, financial projections and funding support.' },
                            { title: 'Financial Controls', desc: 'Designing and implementing robust internal financial controls and processes.' },
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
