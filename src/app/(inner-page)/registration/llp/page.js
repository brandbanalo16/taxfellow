"use client"
import React from 'react';
import Link from 'next/link';
import HeaderTwo from '@/components/header/HeaderTwo';
import Breadcrumb from '@/components/Breadcrumb';
import FooterTwo from '@/components/footer/FooterTwo';
import BackToTop from '@/components/BackToTop';

export default function LLPRegistrationPage() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Registration', link: '#' },
        { label: 'LLP Registration' }
    ];
    return (
        <div>
            <HeaderTwo />
            <Breadcrumb title="LLP Registration" breadcrumbs={breadcrumbs} />
            <div className="rts-service-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="title-area-center">
                                <span className="pre-title">Registration Services</span>
                                <h2 className="title">LLP Registration</h2>
                                <p className="disc" style={{ maxWidth: 680, margin: '0 auto' }}>
                                    Limited Liability Partnership (LLP) combines the flexibility of a partnership with the benefits of limited liability, making it a popular choice for professionals and small businesses.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-5">
                        {[
                            { title: 'LLP Incorporation', desc: 'Complete LLP registration with MCA filing, DSC, DPIN and all government approvals.' },
                            { title: 'LLP Agreement Drafting', desc: 'Custom LLP agreement tailored to your business needs and partner requirements.' },
                            { title: 'Partner Addition/Removal', desc: 'Smooth partner onboarding and exit processes with required MCA filings.' },
                            { title: 'LLP Annual Compliance', desc: 'Annual returns, Statement of Accounts and Solvency filing as required by law.' },
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
