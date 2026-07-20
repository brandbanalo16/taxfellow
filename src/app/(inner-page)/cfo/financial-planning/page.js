"use client"
import React from 'react';
import Link from 'next/link';
import HeaderTwo from '@/components/header/HeaderTwo';
import Breadcrumb from '@/components/Breadcrumb';
import FooterTwo from '@/components/footer/FooterTwo';
import BackToTop from '@/components/BackToTop';

export default function FinancialPlanningPage() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'CFO', link: '#' },
        { label: 'Financial Planning' }
    ];
    return (
        <div>
            <HeaderTwo />
            <Breadcrumb title="Financial Planning" breadcrumbs={breadcrumbs} />
            <div className="rts-service-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="title-area-center">
                                <span className="pre-title">CFO Services</span>
                                <h2 className="title">Financial Planning & Analysis</h2>
                                <p className="disc" style={{ maxWidth: 680, margin: '0 auto' }}>
                                    Data-driven financial planning and analysis to help your business achieve sustainable growth and profitability through informed decision-making.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-5">
                        {[
                            { title: 'Business Budgeting', desc: 'Annual budget preparation aligned with your strategic business objectives.' },
                            { title: 'Financial Forecasting', desc: 'Forward-looking financial models and scenario analysis for business planning.' },
                            { title: 'Variance Analysis', desc: 'Monthly analysis of actual vs budget performance with actionable insights.' },
                            { title: 'KPI Dashboard', desc: 'Custom financial KPI dashboards for real-time business performance monitoring.' },
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
