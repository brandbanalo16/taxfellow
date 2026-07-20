"use client"
import React from 'react';
import Link from 'next/link';
import HeaderTwo from '@/components/header/HeaderTwo';
import Breadcrumb from '@/components/Breadcrumb';
import FooterTwo from '@/components/footer/FooterTwo';
import BackToTop from '@/components/BackToTop';

export default function FundraisingPage() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'CFO', link: '#' },
        { label: 'Fundraising Advisory' }
    ];
    return (
        <div>
            <HeaderTwo />
            <Breadcrumb title="Fundraising Advisory" breadcrumbs={breadcrumbs} />
            <div className="rts-service-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="title-area-center">
                                <span className="pre-title">CFO Services</span>
                                <h2 className="title">Fundraising Advisory</h2>
                                <p className="disc" style={{ maxWidth: 680, margin: '0 auto' }}>
                                    From seed funding to Series rounds, we guide startups and growing businesses through the fundraising journey with financial expertise and investor-ready documentation.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-5">
                        {[
                            { title: 'Investor Pitch Deck', desc: 'Compelling financial pitch decks with projections and valuation models for investors.' },
                            { title: 'Due Diligence Support', desc: 'Comprehensive financial data room preparation for investor due diligence.' },
                            { title: 'Valuation Services', desc: 'Business valuation using DCF, comparable transactions and asset-based methods.' },
                            { title: 'Term Sheet Negotiation', desc: 'Expert advisory on term sheets, cap table management and equity structuring.' },
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
