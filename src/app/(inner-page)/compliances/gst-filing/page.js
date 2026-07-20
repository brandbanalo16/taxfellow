"use client"
import React from 'react';
import Link from 'next/link';
import HeaderTwo from '@/components/header/HeaderTwo';
import Breadcrumb from '@/components/Breadcrumb';
import FooterTwo from '@/components/footer/FooterTwo';
import BackToTop from '@/components/BackToTop';

export default function GSTFilingPage() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Compliances', link: '#' },
        { label: 'GST Filing' }
    ];
    return (
        <div>
            <HeaderTwo />
            <Breadcrumb title="GST Filing" breadcrumbs={breadcrumbs} />
            <div className="rts-service-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="title-area-center">
                                <span className="pre-title">Compliance Services</span>
                                <h2 className="title">GST Filing & Returns</h2>
                                <p className="disc" style={{ maxWidth: 680, margin: '0 auto' }}>
                                    Stay GST compliant with timely filing of all GST returns. Our experts ensure accurate and on-time submission of GSTR-1, GSTR-3B, GSTR-9 and more.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-5">
                        {[
                            { title: 'GSTR-1 Filing', desc: 'Monthly/quarterly return of outward supplies filed accurately and on time.' },
                            { title: 'GSTR-3B Filing', desc: 'Monthly summary return with tax payment filed before the due date.' },
                            { title: 'GSTR-9 Annual Return', desc: 'Annual GST return filing with complete reconciliation of transactions.' },
                            { title: 'GST Reconciliation', desc: 'Detailed reconciliation of GSTR-2A/2B with purchase records and ITC claims.' },
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
