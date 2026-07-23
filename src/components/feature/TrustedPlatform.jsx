"use client"
import React from 'react'

export default function TrustedPlatform() {
    return (
        <section className="trusted-platform-sec">
            <style>{`
                .trusted-platform-sec {
                    padding: 80px 0;
                    background-color: #ffffff;
                    font-family: 'Gilroy', sans-serif;
                }
                .trusted-title-wrap {
                    text-align: center;
                    margin-bottom: 50px;
                }
                .trusted-title {
                    font-size: 36px;
                    font-weight: 700;
                    color: #2c3255;
                }
                .trusted-title span {
                    color: #2c9295;
                }
                .trusted-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 30px;
                }
                .trusted-card {
                    background: #f8fafc;
                    border: 1px solid #e2e8f0;
                    border-radius: 20px;
                    padding: 40px 30px;
                    min-height: 220px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    position: relative;
                    transition: all 0.3s ease;
                }
                .trusted-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px rgba(44, 50, 85, 0.05);
                }
                .trusted-card-salaried {
                    background: #f0f7ff; /* Soft blue tint */
                    border-color: #cbd5e1;
                }
                .trusted-card-investors {
                    background: #f0fdf4; /* Soft green tint */
                    border-color: #bbf7d0;
                }
                .trusted-card-freelancers {
                    background: #f0fdfa; /* Soft teal/cyan tint */
                    border-color: #99f6e4;
                }
                .trusted-card-advanced {
                    background: #fff7ed; /* Soft orange/yellow tint */
                    border-color: #ffedd5;
                }
                .trusted-card-nris {
                    background: #faf5ff; /* Soft purple/indigo tint */
                    border-color: #e9d5ff;
                }
                .trusted-card-affluent {
                    background: #eff6ff; /* Soft blue-gray tint */
                    border-color: #bfdbfe;
                }
                .trusted-card-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 20px;
                }
                .trusted-card-title {
                    font-size: 24px;
                    font-weight: 600;
                    color: #2c3255;
                    line-height: 1.3;
                    max-width: 80%;
                }
                .trusted-icon-wrap {
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }
                .trusted-icon-blue {
                    background-color: #eff6ff;
                    color: #2563eb;
                }
                .trusted-icon-green {
                    background-color: #f0fdf4;
                    color: #16a34a;
                }
                .trusted-icon-teal {
                    background-color: #f0fdfa;
                    color: #0d9488;
                }
                .trusted-icon-purple {
                    background-color: #faf5ff;
                    color: #9333ea;
                }
                .trusted-icon-orange {
                    background-color: #fff7ed;
                    color: #ea580c;
                }
                .trusted-card-desc {
                    font-size: 15px;
                    line-height: 1.6;
                    color: #64748b;
                    margin: 0;
                }
                @media (max-width: 991px) {
                    .trusted-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                @media (max-width: 640px) {
                    .trusted-grid {
                        grid-template-columns: 1fr;
                    }
                    .trusted-title {
                        font-size: 28px;
                    }
                }
            `}</style>

            <div className="container">
                <div className="trusted-title-wrap">
                    <h2 className="trusted-title">
                        India's Most Trusted <span>Tax Filing Platform For</span>
                    </h2>
                </div>

                <div className="trusted-grid">
                    {/* Card 1: Salaried Professionals */}
                    <div className="trusted-card trusted-card-salaried">
                        <div className="trusted-card-header">
                            <h3 className="trusted-card-title">Salaried Professionals</h3>
                            <div className="trusted-icon-wrap trusted-icon-blue">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                </svg>
                            </div>
                        </div>
                        <p className="trusted-card-desc">Simple, accurate filing for every salaried taxpayer</p>
                    </div>

                    {/* Card 2: Investors and Traders */}
                    <div className="trusted-card trusted-card-investors">
                        <div className="trusted-card-header">
                            <h3 className="trusted-card-title">Investors and Traders</h3>
                            <div className="trusted-icon-wrap trusted-icon-green">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="18" y1="20" x2="18" y2="10"></line>
                                    <line x1="12" y1="20" x2="12" y2="4"></line>
                                    <line x1="6" y1="20" x2="6" y2="14"></line>
                                </svg>
                            </div>
                        </div>
                        <p className="trusted-card-desc">1-click capital gains import from 80+ brokers</p>
                    </div>

                    {/* Card 3: Freelancers & Professionals */}
                    <div className="trusted-card trusted-card-freelancers">
                        <div className="trusted-card-header">
                            <h3 className="trusted-card-title">Freelancers & Professionals</h3>
                            <div className="trusted-icon-wrap trusted-icon-teal">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                        </div>
                        <p className="trusted-card-desc">Consulting fees, TDS deductions, advance tax, etc...</p>
                    </div>

                    {/* Card 4: Advanced Traders */}
                    <div className="trusted-card trusted-card-advanced">
                        <div className="trusted-card-header">
                            <h3 className="trusted-card-title">Advanced Traders</h3>
                            <div className="trusted-icon-wrap trusted-icon-orange">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="8" x2="12" y2="16"></line>
                                    <line x1="8" y1="12" x2="16" y2="12"></line>
                                </svg>
                            </div>
                        </div>
                        <p className="trusted-card-desc">F&O, intraday or any complex capital gains - An expert files your return.</p>
                    </div>

                    {/* Card 5: NRIs & RSU/ESOPs holders */}
                    <div className="trusted-card trusted-card-nris">
                        <div className="trusted-card-header">
                            <h3 className="trusted-card-title">NRIs & RSU/ESOPs holders</h3>
                            <div className="trusted-icon-wrap trusted-icon-purple">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                </svg>
                            </div>
                        </div>
                        <p className="trusted-card-desc">Protect RSUs/ESOPs gains, foreign income & accurate Schedule FA filing by experts.</p>
                    </div>

                    {/* Card 6: Affluent Investors */}
                    <div className="trusted-card trusted-card-affluent">
                        <div className="trusted-card-header">
                            <h3 className="trusted-card-title">Affluent Investors</h3>
                            <div className="trusted-icon-wrap trusted-icon-blue">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="2" y1="12" x2="22" y2="12"></line>
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                </svg>
                            </div>
                        </div>
                        <p className="trusted-card-desc">From salary to global income, get year-round support from our Tax Specialists</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
