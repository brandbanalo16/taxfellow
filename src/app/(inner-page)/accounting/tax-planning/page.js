"use client"
import React from 'react';
import Link from 'next/link';
import HeaderTwo from '@/components/header/HeaderTwo';
import Breadcrumb from '@/components/Breadcrumb';
import FooterTwo from '@/components/footer/FooterTwo';
import BackToTop from '@/components/BackToTop';

export default function TaxPlanningPage() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Accounting', link: '#' },
        { label: 'Tax Planning' }
    ];
    return (
        <div>
            <HeaderTwo />
            <Breadcrumb title="Tax Planning" breadcrumbs={breadcrumbs} />
            <div className="rts-service-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="title-area-center">
                                <span className="pre-title">Accounting Services</span>
                                <h2 className="title">Tax Planning & Advisory</h2>
                                <p className="disc" style={{ maxWidth: 680, margin: '0 auto' }}>
                                    Strategic tax planning to minimize your tax burden legally and efficiently. Our experts identify optimal tax-saving opportunities for individuals and businesses.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-5">
                        {[
                            { title: 'Corporate Tax Planning', desc: 'Optimal structuring of business transactions to minimize corporate tax liability.' },
                            { title: 'Individual Tax Planning', desc: 'Personal tax planning using deductions under 80C, 80D, HRA and other provisions.' },
                            { title: 'Capital Gains Planning', desc: 'Strategic planning for sale of assets to minimize capital gains tax exposure.' },
                            { title: 'International Tax', desc: 'FEMA, DTAA and transfer pricing advisory for cross-border transactions.' },
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
