"use client"
import React from 'react';
import Link from 'next/link';
import HeaderTwo from '@/components/header/HeaderTwo';
import Breadcrumb from '@/components/Breadcrumb';
import FooterTwo from '@/components/footer/FooterTwo';
import BackToTop from '@/components/BackToTop';

export default function MSMERegistrationPage() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Registration', link: '#' },
        { label: 'MSME Registration' }
    ];
    return (
        <div>
            <HeaderTwo />
            <Breadcrumb title="MSME Registration" breadcrumbs={breadcrumbs} />
            <div className="rts-service-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="title-area-center">
                                <span className="pre-title">Registration Services</span>
                                <h2 className="title">MSME / Udyam Registration</h2>
                                <p className="disc" style={{ maxWidth: 680, margin: '0 auto' }}>
                                    Register your Micro, Small or Medium Enterprise under the Udyam scheme and avail government benefits, subsidies and priority lending at lower interest rates.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-5">
                        {[
                            { title: 'Udyam Registration', desc: 'Online MSME registration on the Udyam portal with Aadhaar-based authentication.' },
                            { title: 'MSME Benefits Advisory', desc: 'Expert guidance on availing subsidies, collateral-free loans and government schemes.' },
                            { title: 'MSME Certificate', desc: 'Get your Udyam Registration Certificate instantly upon successful application.' },
                            { title: 'MSME Updation', desc: 'Update your MSME details and classification as your business grows.' },
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
