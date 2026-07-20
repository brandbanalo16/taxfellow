"use client"
import React from 'react';
import Link from 'next/link';
import HeaderTwo from '@/components/header/HeaderTwo';
import Breadcrumb from '@/components/Breadcrumb';
import FooterTwo from '@/components/footer/FooterTwo';
import BackToTop from '@/components/BackToTop';

export default function FinancialStatementsPage() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Accounting', link: '#' },
        { label: 'Financial Statements' }
    ];
    return (
        <div>
            <HeaderTwo />
            <Breadcrumb title="Financial Statements" breadcrumbs={breadcrumbs} />
            <div className="rts-service-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="title-area-center">
                                <span className="pre-title">Accounting Services</span>
                                <h2 className="title">Financial Statement Preparation</h2>
                                <p className="disc" style={{ maxWidth: 680, margin: '0 auto' }}>
                                    Professionally prepared financial statements that give you a true picture of your business performance and help you make informed decisions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 g-5">
                        {[
                            { title: 'Balance Sheet', desc: 'Accurate statement of assets, liabilities and equity as at year end.' },
                            { title: 'Profit & Loss Account', desc: 'Detailed income and expenditure statement showing business profitability.' },
                            { title: 'Cash Flow Statement', desc: 'Analysis of cash inflows and outflows across operating, investing and financing activities.' },
                            { title: 'Notes to Accounts', desc: 'Comprehensive disclosures and accounting policies in accordance with applicable standards.' },
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
