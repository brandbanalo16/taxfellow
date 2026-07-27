"use client"
import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
    {
        id: 1,
        badge: '+ Trusted by Businesses Across India +',
        hTop: 'Steering Your',
        hBox: 'Business Toward Full Compliance',
        hBottom: '',
        subtext: 'Taxfello is your one-stop CA firm for company registration, tax filing, GST, and compliance — trusted by startups and businesses pan-India.',
        cta: 'Get Started',
        ctaLink: '#contact',
        phone: '+91 88004 85106',
        image: '/assets/images/banner/banner-01.jpg',
    },
    {
        id: 2,
        badge: '+ Business Registration +',
        hTop: 'Launching Your',
        hBox: 'Company the Right Way',
        hBottom: '',
        subtext: 'From Private Limited to LLP, OPC, and Section 8 — we handle end-to-end company registration, fully online, with expert guidance at every step.',
        cta: 'Register Now',
        ctaLink: '#contact',
        phone: '+91 88004 85106',
        image: '/assets/images/banner/banner-02.jpg',
    },
    {
        id: 3,
        badge: '+ GST & Tax Filing +',
        hTop: 'Filing Made',
        hBox: 'Simple, Compliance Made Easy',
        hBottom: '',
        subtext: 'GST registration, returns, and income tax filing handled accurately and on time — so you never miss a deadline or face a penalty.',
        cta: 'File Now',
        ctaLink: '#contact',
        phone: '+91 88004 85106',
        image: '/assets/images/banner/banner-03.jpg',
    },
    {
        id: 4,
        badge: '+ Virtual CFO Services +',
        hTop: 'Financial',
        hBox: 'Clarity for Smarter Growth',
        hBottom: '',
        subtext: 'Get senior-level financial planning, MIS reporting, and strategic advisory — without the cost of a full-time CFO.',
        cta: 'Talk to an Expert',
        ctaLink: '#contact',
        phone: '+91 88004 85106',
        image: '/assets/images/banner/banner-04.jpg',
    },
];

export default function BannerHero() {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    const goNext = () => swiperRef.current?.slideNext();
    const goPrev = () => swiperRef.current?.slidePrev();

    return (
        <>
            <style>{`
                /* ─── BANNER HERO SECTION ─────────────────────────── */
                .bh-section {
                    width: 100%;
                    position: relative;
                    background: #f4f6f9;
                    overflow: visible;
                }

                .bh-section .swiper,
                .bh-section .swiper-wrapper,
                .bh-section .swiper-slide {
                    width: 100% !important;
                }

                /* ─── SLIDE LAYOUT ────────────────────────────────── */
                .bh-slide {
                    display: flex;
                    align-items: stretch;
                    min-height: 600px;
                    width: 100%;
                    background: #f4f6f9;
                    position: relative;
                }

                .bh-slide::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(112deg, #ffffff 42%, #eef1f6 42%);
                    pointer-events: none;
                    z-index: 0;
                }

                /* ─── LEFT CONTENT ────────────────────────────────── */
                .bh-left {
                    position: relative;
                    z-index: 2;
                    flex: 0 0 52%;
                    max-width: 52%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    text-align: left;
                    padding: 80px 60px 80px 8%;
                }

                .bh-badge {
                    display: inline-block;
                    background: #ffffff;
                    border: 1px solid #dce0e8;
                    border-radius: 30px;
                    padding: 8px 20px;
                    font-size: 13px;
                    font-weight: 600;
                    color: #555f72;
                    letter-spacing: 0.03em;
                    margin-bottom: 28px;
                    white-space: nowrap;
                }

                .bh-title {
                    font-size: clamp(36px, 3.8vw, 60px);
                    font-weight: 800;
                    line-height: 1.18;
                    color: #1a1d23;
                    margin: 0 0 22px 0;
                    letter-spacing: -0.02em;
                }

                .bh-box-word {
                    display: inline;
                    color: #2c9295;
                }

                .bh-desc {
                    font-size: 15.5px;
                    line-height: 1.72;
                    color: #616978;
                    margin: 0 0 40px 0;
                    max-width: 490px;
                }

                .bh-actions {
                    display: flex;
                    align-items: center;
                    gap: 28px;
                    flex-wrap: wrap;
                }

                .bh-cta {
                    display: inline-flex;
                    align-items: center;
                    gap: 11px;
                    background: #1a1d23;
                    color: #fff !important;
                    font-size: 15px;
                    font-weight: 700;
                    padding: 15px 28px;
                    border-radius: 50px;
                    text-decoration: none !important;
                    transition: background 0.25s ease, transform 0.2s ease;
                    letter-spacing: 0.01em;
                }
                .bh-cta:hover {
                    background: #2c9295;
                    transform: translateY(-2px);
                }
                .bh-cta-icon {
                    width: 24px;
                    height: 24px;
                    background: rgba(255,255,255,0.18);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 11px;
                }

                .bh-phone {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    text-decoration: none !important;
                }
                .bh-phone-icon {
                    width: 48px;
                    height: 48px;
                    background: #ffffff;
                    border: 2px solid #dce0e8;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #2c3255;
                    font-size: 17px;
                    transition: border-color 0.2s, color 0.2s;
                    flex-shrink: 0;
                }
                .bh-phone:hover .bh-phone-icon {
                    border-color: #2c9295;
                    color: #2c9295;
                }
                .bh-phone-lbl {
                    display: block;
                    font-size: 11px;
                    color: #8a94a6;
                    margin-bottom: 2px;
                }
                .bh-phone-num {
                    display: block;
                    font-size: 15px;
                    font-weight: 700;
                    color: #1a1d23;
                }

                /* ─── RIGHT MEDIA ─────────────────────────────────── */
                .bh-right {
                    position: relative;
                    z-index: 2;
                    flex: 0 0 48%;
                    max-width: 48%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 80px 6% 80px 20px;
                }

                .bh-media-wrap {
                    position: relative;
                    margin-top: 50px;
                    margin-left: 50px;
                }

                .bh-img-wrap {
                    width: 100%;
                    border-radius: 22px;
                    overflow: hidden;
                    box-shadow: 0 18px 48px rgba(0,0,0,0.10);
                    border: 1px solid #e2e6ef;
                }
                .bh-img-wrap img {
                    width: 100%;
                    height: 460px;
                    object-fit: cover;
                    display: block;
                    transition: transform 0.6s ease;
                }
                .bh-img-wrap:hover img {
                    transform: scale(1.02);
                }

                /* ─── ROTATING STAMP ──────────────────────────────── */
                .bh-stamp {
                    position: absolute;
                    top: -55px;
                    left: -55px;
                    width: 128px;
                    height: 128px;
                    background: #ffffff;
                    border-radius: 50%;
                    box-shadow: 0 6px 24px rgba(0,0,0,0.10);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10;
                }

                .bh-stamp-svg {
                    width: 100%;
                    height: 100%;
                    animation: bhStampSpin 16s linear infinite;
                }

                @keyframes bhStampSpin {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }

                .bh-stamp-star {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 26px;
                    color: #1a1d23;
                    line-height: 1;
                }

                /* ─── NAV ARROWS ──────────────────────────────────── */
                .bh-nav {
                    display: flex;
                    gap: 10px;
                    margin-top: 22px;
                    justify-content: flex-end;
                }
                .bh-nav-btn {
                    width: 42px;
                    height: 42px;
                    border-radius: 50%;
                    border: 1.5px solid #dce0e8;
                    background: #ffffff;
                    color: #1a1d23;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.22s ease;
                    box-shadow: 0 3px 10px rgba(0,0,0,0.06);
                    font-size: 13px;
                }
                .bh-nav-btn:hover {
                    background: #2c9295;
                    border-color: #2c9295;
                    color: #ffffff;
                    transform: translateY(-2px);
                }

                /* ─── DOTS ────────────────────────────────────────── */
                .bh-dots {
                    position: absolute;
                    bottom: 26px;
                    left: 0;
                    right: 0;
                    display: flex;
                    justify-content: center;
                    gap: 8px;
                    z-index: 10;
                }
                .bh-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: rgba(0,0,0,0.18);
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    padding: 0;
                }
                .bh-dot.active {
                    width: 28px;
                    border-radius: 5px;
                    background: #2c9295;
                }

                /* ─── RESPONSIVE ──────────────────────────────────── */
                @media (max-width: 1199px) {
                    .bh-left {
                        padding: 70px 40px 70px 5%;
                    }
                }

                @media (max-width: 991px) {
                    .bh-slide {
                        flex-direction: column;
                        min-height: unset;
                    }
                    .bh-slide::before {
                        background: linear-gradient(180deg, #ffffff 50%, #eef1f6 50%);
                    }
                    .bh-left, .bh-right {
                        flex: unset;
                        max-width: 100%;
                        width: 100%;
                    }
                    .bh-left {
                        padding: 60px 5% 30px 5%;
                        align-items: center;
                        text-align: center;
                    }
                    .bh-desc {
                        margin-left: auto;
                        margin-right: auto;
                    }
                    .bh-actions {
                        justify-content: center;
                    }
                    .bh-right {
                        padding: 20px 5% 70px 5%;
                    }
                    .bh-media-wrap {
                        margin-top: 40px;
                        margin-left: 40px;
                    }
                    .bh-img-wrap img {
                        height: 360px;
                    }
                    .bh-nav {
                        justify-content: center;
                    }
                }

                @media (max-width: 575px) {
                    .bh-title {
                        font-size: 32px;
                    }
                    .bh-img-wrap img {
                        height: 260px;
                    }
                    .bh-stamp {
                        width: 90px;
                        height: 90px;
                        top: -35px;
                        left: -30px;
                    }
                    .bh-stamp-star {
                        font-size: 20px;
                    }
                }
            `}</style>

            <section className="bh-section" id="banner" aria-label="Hero Banner">
                <Swiper
                    modules={[EffectFade, Autoplay]}
                    slidesPerView={1}
                    loop={true}
                    effect="fade"
                    speed={800}
                    autoplay={{ delay: 5500, disableOnInteraction: false }}
                    onSwiper={(sw) => { swiperRef.current = sw; }}
                    onSlideChange={(sw) => setActiveIndex(sw.realIndex)}
                    style={{ width: '100%' }}
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="bh-slide">

                                {/* ── LEFT COLUMN ── */}
                                <div className="bh-left">
                                    <span className="bh-badge">{slide.badge}</span>

                                    <h1 className="bh-title">
                                        {slide.hTop} <br />
                                        <span className="bh-box-word">{slide.hBox}</span> <br />
                                        {slide.hBottom}
                                    </h1>

                                    <p className="bh-desc">{slide.subtext}</p>

                                    <div className="bh-actions">
                                        <a href={slide.ctaLink} className="bh-cta">
                                            {slide.cta}
                                            <span className="bh-cta-icon">
                                                <i className="fa fa-long-arrow-right" />
                                            </span>
                                        </a>

                                        <a href={`tel:${slide.phone}`} className="bh-phone">
                                            <div className="bh-phone-icon">
                                                <i className="fa fa-phone" />
                                            </div>
                                            <div>
                                                <span className="bh-phone-lbl">Need help?</span>
                                                <span className="bh-phone-num">{slide.phone}</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                {/* ── RIGHT COLUMN ── */}
                                <div className="bh-right">
                                    <div className="bh-media-wrap">

                                        {/* Rotating Circular Stamp */}
                                        <div className="bh-stamp">
                                            <svg className="bh-stamp-svg" viewBox="0 0 120 120" aria-hidden="true">
                                                <defs>
                                                    <path
                                                        id={`bh-stamp-path-${slide.id}`}
                                                        d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0"
                                                    />
                                                </defs>
                                                <text fontSize="10" fontWeight="700" fill="#1a1d23" letterSpacing="2.5">
                                                    <textPath href={`#bh-stamp-path-${slide.id}`}>
                                                        {'• START A PROJECT • START A PROJECT •'}
                                                    </textPath>
                                                </text>
                                            </svg>
                                            <span className="bh-stamp-star">★</span>
                                        </div>

                                        {/* Main Image */}
                                        <div className="bh-img-wrap">
                                            <img
                                                src={slide.image}
                                                alt={`${slide.hTop} ${slide.hBox} ${slide.hBottom}`}
                                                onError={(e) => {
                                                    e.target.src = '/assets/images/banner/banner-04.jpg';
                                                }}
                                            />
                                        </div>

                                        {/* Nav arrows */}
                                        <div className="bh-nav">
                                            <button className="bh-nav-btn" onClick={goPrev} aria-label="Previous slide">
                                                <i className="fa fa-chevron-left" />
                                            </button>
                                            <button className="bh-nav-btn" onClick={goNext} aria-label="Next slide">
                                                <i className="fa fa-chevron-right" />
                                            </button>
                                        </div>
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
