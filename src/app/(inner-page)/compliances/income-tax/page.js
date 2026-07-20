"use client"
import React from 'react';
import Link from 'next/link';
import HeaderTwo from '@/components/header/HeaderTwo';
import Breadcrumb from '@/components/Breadcrumb';
import FooterTwo from '@/components/footer/FooterTwo';
import BackToTop from '@/components/BackToTop';

export default function IncomeTaxPage() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Compliances', link: '#' },
        { label: 'Income Tax Filing' }
    ];
    return (
        <div>
            <HeaderTwo />
            <Breadcrumb title="Income Tax Filing" breadcrumbs={breadcrumbs} />
            <div className="rts-service-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="title-area-center">
                                <span className="pre-title">Compliance Services</span>
                                <h2 className="title">Income Tax Filing</h2>
                                <p className="disc" style={{ maxWidth: 680, margin: '0 auto' }}>
                                    File your Income Tax Return accurately and on time. We handle ITR filing for individuals, firms, companies and LLPs with complete tax planning advisory.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-5">
                        {[
                            { title: 'Individual ITR Filing', desc: 'ITR-1, ITR-2, ITR-3, ITR-4 for salaried, professionals and business individuals.' },
                            { title: 'Company ITR Filing', desc: 'ITR-6 filing for companies with tax computation and Schedule AL disclosure.' },
                            { title: 'Tax Audit (44AB)', desc: 'Mandatory tax audit under section 44AB with Form 3CA/3CB and 3CD preparation.' },
                            { title: 'Advance Tax Planning', desc: 'Quarterly advance tax computation and payment to avoid interest under 234B/234C.' },
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
