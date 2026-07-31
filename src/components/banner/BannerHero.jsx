"use client"
import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Image from 'next/image';

const slides = [
    {
        id: 1,
        welcome: 'Trusted Tax & Compliance Experts Across India',
        hTop: "India's Trusted CA & Business Consultancy Partner",
        subtext: 'From company registration and GST compliance to income tax filing and virtual CFO services, Taxfello simplifies business compliance with expert Chartered Accountants, transparent pricing, and end-to-end professional support.',
        cta: 'Get Free Consultation',
        ctaLink: '/contactus',
        cta2: 'Explore Services',
        ctaLink2: '/services/registration-and-licences',
        bgImage: '/assets/images/banner/banner-bg5.jpg',
        rightImage: '/assets/images/banner/banner-01.jpg',
    },
    {
        id: 2,
        welcome: 'Business Registration Made Easy',
        hTop: 'Launch Your Business with Complete Legal Compliance',
        subtext: 'Start your entrepreneurial journey with confidence. Taxfello provides hassle-free company registration, LLP incorporation, MSME registration, startup recognition, trademark registration, and all essential business compliance services under one roof.',
        cta: 'Register Your Business',
        ctaLink: '/services/private-limited-company-registration',
        cta2: 'Talk to an Expert',
        ctaLink2: 'tel:+918800485106',
        bgImage: '/assets/images/banner/banner-bg5.jpg',
        rightImage: '/assets/images/banner/banner-02.jpg',
    },
    {
        id: 3,
        welcome: 'GST & Tax Solutions',
        hTop: 'Simplifying GST, Income Tax & Financial Compliance',
        subtext: 'Stay compliant with expert GST registration, GST return filing, income tax filing, TDS services, accounting, bookkeeping, and financial advisory tailored for startups, SMEs, professionals, and growing businesses.',
        cta: 'File Your GST',
        ctaLink: '/services/registration-and-licences/gst-registration-and-compliance',
        cta2: 'Know More',
        ctaLink2: '/about-us',
        bgImage: '/assets/images/banner/banner-bg5.jpg',
        rightImage: '/assets/images/banner/banner-03.jpg',
    },
    {
        id: 4,
        welcome: 'Strategic Financial Advisory',
        hTop: 'Helping Businesses Grow with Expert Financial Guidance',
        subtext: 'Our experienced Chartered Accountants and financial consultants deliver Virtual CFO services, business planning, financial reporting, compliance management, and strategic advisory to help your business achieve sustainable growth.',
        cta: 'Schedule Consultation',
        ctaLink: '/contactus',
        cta2: 'View Solutions',
        ctaLink2: '/services/compliances',
        bgImage: '/assets/images/banner/banner-bg5.jpg',
        rightImage: '/assets/images/banner/banner-04.jpg',
    },
];

export default function BannerHero() {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    return (
        <>
            <style>{`
                /* ─── BANNER HERO SECTION ─────────────────────────── */
                .bh-section {
                    width: 100%;
                    position: relative;
                    font-family: 'Inter', sans-serif;
                    background-color: #2c334b; /* fallback */
                    overflow: hidden;
                }

                .bh-section .swiper,
                .bh-section .swiper-wrapper,
                .bh-section .swiper-slide {
                    width: 100% !important;
                }

                /* ─── SLIDE LAYOUT ────────────────────────────────── */
                .bh-slide {
                    display: flex;
                    align-items: center;
                    min-height: 800px;
                    width: 100%;
                    position: relative;
                }

                /* Background Image with Overlay */
                .bh-bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                }
                .bh-bg img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 0.15; /* Opacity for the background image */
                }
                .bh-bg-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, #2b3252 0%, #3a4768 50%, #68798e 100%);
                    z-index: 0;
                }

                /* Container to hold left and right */
                .bh-container {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    align-items: center;
                    width: 100%;
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 0 40px;
                }

                /* ─── LEFT CONTENT ────────────────────────────────── */
                .bh-left {
                    flex: 0 0 50%;
                    max-width: 50%;
                    padding-right: 40px;
                    color: #ffffff;
                    text-align: left;
                }

                .bh-stats {
                    display: inline-flex;
                    align-items: center;
                    background: rgba(255, 255, 255, 0.15);
                    padding: 12px 24px;
                    border-radius: 8px;
                    margin-bottom: 40px;
                }
                .bh-stat-item {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }
                .bh-stat-item h4 {
                    margin: 0 0 4px 0;
                    font-size: 18px;
                    font-weight: 700;
                    color: #fff;
                    line-height: 1;
                }
                .bh-stat-item h4 span.stars {
                    color: #ffc107;
                    font-size: 14px;
                    margin-left: 5px;
                }
                .bh-stat-item p {
                    margin: 0;
                    font-size: 13px;
                    color: #fff;
                    opacity: 0.9;
                    line-height: 1;
                }
                .bh-stat-divider {
                    width: 1px;
                    height: 30px;
                    background: rgba(255, 255, 255, 0.3);
                    margin: 0 24px;
                }

                .bh-title {
                    font-size: clamp(36px, 4.5vw, 56px);
                    font-weight: 800;
                    line-height: 1.15;
                    margin: 0 0 24px 0;
                    letter-spacing: -0.02em;
                    color: #ffffff;
                }

                .bh-desc {
                    font-size: 20px;
                    font-weight: 400;
                    line-height: 1.5;
                    color: #ffffff;
                    opacity: 0.95;
                    margin: 0 0 40px 0;
                    max-width: 600px;
                }

                .bh-actions {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .bh-btn-primary {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    background: #ffffff;
                    color: #000000 !important;
                    font-size: 16px;
                    font-weight: 600;
                    padding: 16px 32px;
                    border-radius: 40px;
                    text-decoration: none !important;
                    transition: all 0.3s ease;
                }
                .bh-btn-primary:hover {
                    background: #f0f0f0;
                }

                .bh-btn-secondary {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    background: transparent;
                    color: #ffffff !important;
                    font-size: 16px;
                    font-weight: 600;
                    padding: 14px 32px;
                    border: 2px solid #ffffff;
                    border-radius: 40px;
                    text-decoration: none !important;
                    transition: all 0.3s ease;
                }
                .bh-btn-secondary:hover {
                    background: rgba(255, 255, 255, 0.1);
                }

                .bh-features {
                    display: flex;
                    align-items: center;
                    margin-top: 60px;
                    gap: 20px;
                }
                .bh-feature-item {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    text-align: left;
                }
                .bh-feature-icon {
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    border: 2px solid rgba(255, 255, 255, 0.8);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                    color: #fff;
                    flex-shrink: 0;
                }
                .bh-feature-icon i {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    line-height: 1;
                }
                .bh-feature-text h5 {
                    margin: 0 0 4px 0;
                    font-size: 16px;
                    font-weight: 700;
                    color: #fff;
                }
                .bh-feature-text p {
                    margin: 0;
                    font-size: 13px;
                    color: #fff;
                    opacity: 0.9;
                    line-height: 1.3;
                    max-width: 140px;
                }
                .bh-feature-divider {
                    width: 1px;
                    height: 40px;
                    background: rgba(255, 255, 255, 0.3);
                }

                /* ─── RIGHT MEDIA ─────────────────────────────────── */
                .bh-right {
                    flex: 0 0 50%;
                    max-width: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;
                    height: 800px; /* match slide height */
                }

                .bh-right img {
                    max-width: 120%;
                    max-height: 90%;
                    object-fit: contain;
                    object-position: bottom;
                    transform: translateX(10%); /* push slightly right */
                }

                /* ─── DOTS ────────────────────────────────────────── */
                .bh-dots {
                    position: absolute;
                    bottom: 40px;
                    left: 0;
                    right: 0;
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                    z-index: 10;
                }
                .bh-dot {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.3);
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    padding: 0;
                }
                .bh-dot.active {
                    width: 35px;
                    border-radius: 6px;
                    background: #00d4ff;
                }

                /* ─── RESPONSIVE ──────────────────────────────────── */
                @media (max-width: 1199px) {
                    .bh-title {
                        font-size: 48px;
                    }
                    .bh-right img {
                        max-width: 100%;
                        transform: translateX(0);
                    }
                }

                @media (max-width: 991px) {
                    .bh-container {
                        flex-direction: column;
                        padding: 100px 20px 60px;
                    }
                    .bh-left, .bh-right {
                        flex: unset;
                        max-width: 100%;
                        width: 100%;
                    }
                    .bh-left {
                        text-align: left;
                        padding-right: 0;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                    }
                    .bh-actions {
                        flex-direction: row;
                        flex-wrap: wrap;
                        gap: 20px;
                        align-items: flex-start;
                    }
                    .bh-features {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 20px;
                    }
                    .bh-feature-divider {
                        display: none;
                    }
                    .bh-stats {
                        flex-direction: row;
                        align-items: center;
                        gap: 12px;
                        padding: 12px 16px;
                    }
                    .bh-stat-divider {
                        display: block;
                        margin: 0 10px;
                        height: 24px;
                    }
                    .bh-stat-item h4 {
                        font-size: 15px;
                    }
                    .bh-stat-item p {
                        font-size: 11px;
                    }
                    .bh-stat-item h4 span.stars {
                        font-size: 11px;
                    }
                    .bh-right {
                        height: auto;
                        margin-top: 50px;
                    }
                    .bh-right img {
                        max-height: 400px;
                    }
                }

                @media (max-width: 767px) {
                    .bh-slide {
                        min-height: auto;
                    }
                    .bh-container {
                        padding: 80px 15px 40px;
                    }
                    .bh-title {
                        font-size: 32px;
                    }
                    .bh-desc {
                        font-size: 16px;
                        margin-bottom: 24px;
                    }
                    .bh-actions {
                        flex-direction: column;
                        width: 100%;
                        align-items: stretch;
                        gap: 12px;
                    }
                    .bh-btn-primary, .bh-btn-secondary {
                        width: 100%;
                        text-align: center;
                    }
                    .bh-right {
                        margin-top: 30px;
                    }
                    .bh-right img {
                        max-height: 300px;
                    }
                    .bh-feature-item {
                        align-items: flex-start;
                    }
                    .bh-feature-text p {
                        max-width: 100%;
                    }
                }

                @media (max-width: 575px) {
                    .bh-title {
                        font-size: 28px;
                    }
                    .bh-right img {
                        max-height: 250px;
                    }
                    .bh-dots {
                        bottom: 20px;
                    }
                    .bh-stat-divider {
                        margin: 0 5px;
                    }
                    .bh-stat-item h4 {
                        font-size: 13px;
                    }
                    .bh-stat-item p {
                        font-size: 9px;
                    }
                    .bh-stat-item h4 span.stars {
                        font-size: 9px;
                    }
                }
            `}</style>

            <section className="bh-section" id="banner" aria-label="Hero Banner">
                <Swiper
                    modules={[EffectFade, Autoplay]}
                    slidesPerView={1}
                    loop={true}
                    effect="fade"
                    speed={1000}
                    autoplay={{ delay: 6000, disableOnInteraction: false }}
                    onSwiper={(sw) => { swiperRef.current = sw; }}
                    onSlideChange={(sw) => setActiveIndex(sw.realIndex)}
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="bh-slide">

                                {/* Background Overlay & Image */}
                                <div className="bh-bg-overlay"></div>
                                <div className="bh-bg">
                                    <img src={slide.bgImage} alt="background" />
                                </div>

                                <div className="bh-container">
                                    {/* ── LEFT COLUMN ── */}
                                    <div className="bh-left">
                                        {/* Top Stats */}
                                        <div className="bh-stats">
                                            <div className="bh-stat-item">
                                                <h4>10,000+</h4>
                                                <p>Businesses Trust Us</p>
                                            </div>
                                            <div className="bh-stat-divider"></div>
                                            <div className="bh-stat-item">
                                                <h4>500+</h4>
                                                <p>Expert Professionals</p>
                                            </div>
                                            <div className="bh-stat-divider"></div>
                                            <div className="bh-stat-item">
                                                <h4>4.9 <span className="stars">★★★★★</span></h4>
                                                <p>Client Satisfaction</p>
                                            </div>
                                        </div>

                                        <h1 className="bh-title">
                                            {slide.hTop}
                                        </h1>

                                        <p className="bh-desc">{slide.subtext}</p>

                                        <div className="bh-actions">
                                            <a href={slide.ctaLink} className="bh-btn-primary">
                                                {slide.cta}
                                            </a>
                                            {slide.cta2 && (
                                                <a href={slide.ctaLink2} className="bh-btn-secondary">
                                                    {slide.cta2}
                                                </a>
                                            )}
                                        </div>

                                        {/* Bottom Features */}
                                        <div className="bh-features">
                                            <div className="bh-feature-item">
                                                <div className="bh-feature-icon">
                                                    <i className="fa fa-user-tie" />
                                                </div>
                                                <div className="bh-feature-text">
                                                    <h5>Expert Professionals</h5>
                                                    <p>Certified CAs & Legal Experts</p>
                                                </div>
                                            </div>
                                            <div className="bh-feature-divider"></div>
                                            <div className="bh-feature-item">
                                                <div className="bh-feature-icon">
                                                    <i className="fa fa-file-signature" />
                                                </div>
                                                <div className="bh-feature-text">
                                                    <h5>100% Compliance</h5>
                                                    <p>Stay penalty-free always</p>
                                                </div>
                                            </div>
                                            <div className="bh-feature-divider"></div>
                                            <div className="bh-feature-item">
                                                <div className="bh-feature-icon">
                                                    <i className="fa fa-tags" />
                                                </div>
                                                <div className="bh-feature-text">
                                                    <h5>Transparent Pricing</h5>
                                                    <p>No hidden fees or surprises</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ── RIGHT COLUMN ── */}
                                    <div className="bh-right">
                                        <img src={slide.rightImage} alt="Taxfello Hero" />
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Progress Dots */}
                <div className="bh-dots" role="tablist" aria-label="Slide controls">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            role="tab"
                            aria-selected={i === activeIndex}
                            className={`bh-dot${i === activeIndex ? ' active' : ''}`}
                            onClick={() => swiperRef.current?.slideToLoop(i)}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

