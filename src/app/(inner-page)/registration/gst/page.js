"use client"
import React from 'react';
import Link from 'next/link';
import HeaderTwo from '@/components/header/HeaderTwo';
import Breadcrumb from '@/components/Breadcrumb';
import FooterTwo from '@/components/footer/FooterTwo';
import BackToTop from '@/components/BackToTop';

export default function GSTRegistrationPage() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Registration', link: '#' },
        { label: 'GST Registration' }
    ];
    return (
        <div>
            <HeaderTwo />
            <Breadcrumb title="GST Registration" breadcrumbs={breadcrumbs} />
            <div className="rts-service-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="title-area-center">
                                <span className="pre-title">Registration Services</span>
                                <h2 className="title">GST Registration</h2>
                                <p className="disc" style={{ maxWidth: 680, margin: '0 auto' }}>
                                    Get your Goods and Services Tax registration done quickly and hassle-free. We handle end-to-end GST registration for businesses of all sizes across India.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-5">
                        {[
                            { title: 'New GST Registration', desc: 'Seamless GST registration for new businesses, traders, manufacturers and service providers.' },
                            { title: 'Voluntary GST Registration', desc: 'Register voluntarily even below threshold to avail input tax credit benefits.' },
                            { title: 'GST Amendment', desc: 'Update your GST registration details including address, partners and business activities.' },
                            { title: 'GST Cancellation', desc: 'Proper GST cancellation process with final return filing and clearance.' },
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
