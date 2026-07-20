"use client"
import React from 'react';
import Link from 'next/link';
import HeaderTwo from '@/components/header/HeaderTwo';
import Breadcrumb from '@/components/Breadcrumb';
import FooterTwo from '@/components/footer/FooterTwo';
import BackToTop from '@/components/BackToTop';

export default function BookkeepingPage() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Accounting', link: '#' },
        { label: 'Bookkeeping' }
    ];
    return (
        <div>
            <HeaderTwo />
            <Breadcrumb title="Bookkeeping" breadcrumbs={breadcrumbs} />
            <div className="rts-service-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="title-area-center">
                                <span className="pre-title">Accounting Services</span>
                                <h2 className="title">Bookkeeping Services</h2>
                                <p className="disc" style={{ maxWidth: 680, margin: '0 auto' }}>
                                    Accurate and organized bookkeeping is the foundation of a healthy business. Our bookkeeping services keep your accounts up-to-date and compliant.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-5">
                        {[
                            { title: 'Day-to-Day Bookkeeping', desc: 'Recording all financial transactions including sales, purchases and expenses.' },
                            { title: 'Bank Reconciliation', desc: 'Monthly reconciliation of bank statements with books of accounts.' },
                            { title: 'Accounts Payable/Receivable', desc: 'Tracking vendor payments and customer collections efficiently.' },
                            { title: 'Cloud Accounting', desc: 'Tally, QuickBooks, Zoho Books and other cloud-based accounting solutions.' },
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
