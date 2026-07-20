"use client"
import React from 'react';
import Link from 'next/link';
import HeaderTwo from '@/components/header/HeaderTwo';
import Breadcrumb from '@/components/Breadcrumb';
import FooterTwo from '@/components/footer/FooterTwo';
import BackToTop from '@/components/BackToTop';

export default function CompanyRegistrationPage() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Registration', link: '#' },
        { label: 'Company Registration' }
    ];

    return (
        <div>
            <HeaderTwo />
            <Breadcrumb title="Company Registration" breadcrumbs={breadcrumbs} />
            <div className="rts-service-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="title-area-center">
                                <span className="pre-title">Registration Services</span>
                                <h2 className="title">Company Registration</h2>
                                <p className="disc" style={{ maxWidth: 680, margin: '0 auto' }}>
                                    We provide end-to-end company registration services to help you start your business journey with confidence. Our expert team handles all paperwork and legal formalities.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-5">
                        {[
                            { title: 'Private Limited Company', desc: 'Most preferred structure for startups and growing businesses seeking investment.' },
                            { title: 'One Person Company', desc: 'Ideal for solo entrepreneurs who want corporate benefits with minimal compliance.' },
                            { title: 'Public Limited Company', desc: 'Best for large enterprises planning to raise funds from the general public.' },
                            { title: 'Section 8 Company', desc: 'Designed for non-profit organizations, NGOs and charitable entities.' },
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
