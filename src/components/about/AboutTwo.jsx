"use client"
import React from 'react';



function AboutTwo() {
    return (
        <section className="about-pro-section" id='about'>
            <style>{`
                .about-pro-section {
                    padding: 100px 0;
                    background-color: #ffffff;
                    font-family: 'Inter', sans-serif;
                }
                .about-pro-container {
                    max-width: 1320px;
                    margin: 0 auto;
                    padding: 0 24px;
                }
                .about-pro-grid {
                    display: grid;
                    grid-template-columns: 1.1fr 0.9fr;
                    gap: 60px;
                    align-items: center;
                }
                
                /* Subtitle */
                .about-pro-subtitle {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    color: #0b2545;
                    font-size: 18px;
                    font-weight: 700;
                    margin-bottom: 16px;
                }
                .about-pro-subtitle i {
                    color: #5abcb9;
                    font-size: 20px;
                }
                
                /* Titles */
                .about-pro-title-wrapper {
                    position: relative;
                    margin-bottom: 24px;
                }
                .about-pro-title-dark {
                    font-size: clamp(36px, 4vw, 54px);
                    font-weight: 800;
                    color: #111111;
                    line-height: 1.1;
                    margin: 0;
                }
                .about-pro-title-light {
                    font-size: clamp(36px, 4vw, 54px);
                    font-weight: 700;
                    color: #5abcb9;
                    line-height: 1.2;
                    margin: 0;
                }
                .about-title-watermark {
                    position: absolute;
                    right: 0;
                    top: 0;
                    font-size: 100px;
                    color: #f0f4f8;
                    z-index: -1;
                    opacity: 0.6;
                }
                
                /* Description */
                .about-pro-desc {
                    font-size: 18px;
                    color: #444444;
                    line-height: 1.6;
                    margin-bottom: 30px;
                }
                .about-pro-desc strong {
                    color: #111111;
                    font-weight: 700;
                }
                
                /* List Card */
                .about-pro-list-card {
                    background: #f8fafb;
                    border-radius: 16px;
                    padding: 30px;
                    margin-bottom: 40px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.02);
                }
                .about-pro-list-item {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-size: 17px;
                    color: #444444;
                    margin-bottom: 14px;
                }
                .about-pro-list-item:last-child {
                    margin-bottom: 0;
                }
                .about-pro-list-icon {
                    color: #5abcb9;
                    font-size: 18px;
                }
                
                /* Button */
                .about-pro-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #5abcb9;
                    color: #ffffff !important;
                    font-size: 18px;
                    font-weight: 600;
                    padding: 10px 10px 10px 28px;
                    border-radius: 40px;
                    text-decoration: none !important;
                    transition: all 0.3s ease;
                    gap: 16px;
                }
                .about-pro-btn:hover {
                    background-color: #4aa8a5;
                }
                .about-pro-btn-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 44px;
                    height: 44px;
                    background-color: #ffffff;
                    color: #5abcb9;
                    border-radius: 50%;
                    font-size: 16px;
                }
                
                /* Right Content / Image */
                .about-pro-image-wrapper {
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                }
                .about-pro-image {
                    width: 100%;
                    aspect-ratio: 1 / 1;
                    object-fit: cover;
                    display: block;
                }
                
                /* Responsive */
                @media (max-width: 991px) {
                    .about-pro-grid {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }
                    .about-title-watermark {
                        display: none;
                    }
                }
            `}</style>

            <div className="about-pro-container">
                <div className="about-pro-grid">
                    <div className="about-pro-content">

                        <div className="about-pro-subtitle">
                            <i className="fa fa-briefcase" /> About Taxfello
                        </div>

                        <div className="about-pro-title-wrapper">
                            <h2 className="about-pro-title-dark">Your Trusted Partner for</h2>
                            <h2 className="about-pro-title-light">Tax, Compliance & Business Growth</h2>
                            <div className="about-title-watermark">
                                <i className="fa fa-user-tie" />
                            </div>
                        </div>

                        <p className="about-pro-desc">
                            <strong>Taxfello</strong> is a leading CA and Business Consultancy firm committed to simplifying taxation, financial management, and legal compliance for startups, entrepreneurs, SMEs, and established businesses across India. With a team of experienced <strong>Chartered Accountants, tax professionals, and business advisors</strong>, we deliver reliable, transparent, and end-to-end solutions that help businesses stay compliant and grow confidently.
                        </p>
                        <p className="about-pro-desc" style={{ marginTop: '-15px' }}>
                            From Company Registration, GST Registration & Return Filing, Income Tax Filing, Trademark Registration, MSME Registration, ROC Compliance, and Accounting & Bookkeeping to Virtual CFO Services, we provide <strong>comprehensive support under one roof</strong>. Our client-centric approach, industry expertise, and commitment to excellence ensure seamless execution, timely compliance, and long-term business success.
                        </p>

                        <a href="#f-contact" className="about-pro-btn">
                            More About Us
                            <span className="about-pro-btn-icon">
                                <i className="fa fa-arrow-right" style={{ transform: 'rotate(-45deg)' }} />
                            </span>
                        </a>

                    </div>

                    <div className="about-pro-image-col">
                        <div className="about-pro-image-wrapper">
                            <img
                                src="/assets/images/about/01.png"
                                alt="Taxfello - startup registration and compliance company"
                                className="about-pro-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutTwo;