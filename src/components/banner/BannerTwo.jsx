"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import ErrorBoundary from "@/components/ErrorBoundary";


function BannerTwo() {
    return (
        <ErrorBoundary>
            <div>
                {/* rts banner area start */}
                <div className="rts-banner-area-two" id='banner'>
                    <div className="swiper mySwiperh2_banner">
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                            className="rts-brand__slider"
                            speed={700}
                            slidesPerView={1}
                            spaceBetween={0}
                            loop={true}
                            autoplay={true}
                            effect='fade'
                            breakpoints={{
                                1200: { slidesPerView: 1 },
                                900: { slidesPerView: 1 },
                                768: { slidesPerView: 1 },
                                580: { slidesPerView: 1 },
                                450: { slidesPerView: 1 },
                                0: { slidesPerView: 1 },
                            }}
                        >
                            <SwiperSlide>
                                <div className="banner-two">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="banner-two-content text-center">
                                                    <div className="wrapper">
                                                        <span className="sub">Tax Fello - Expert Financial & Legal Advisors</span>
                                                        <h1 className="title">
                                                            <span>CA Services</span> Online India <br />
                                                            <span>With</span> Tax Fello
                                                        </h1>
                                                        <a className="rts-btn btn-primary-2" href="#about">
                                                            Explore Services
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="banner-two slide-2">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="banner-two-content text-center">
                                                    <div className="wrapper">
                                                        <span className="sub">Your Trusted Compliance Partner</span>
                                                        <h1 className="title">
                                                            <span>Online</span> Chartered Accountant Services <br />
                                                            <span>For</span> Scaling Startups
                                                        </h1>
                                                        <a className="rts-btn btn-primary-2" href="#about">
                                                            Get Started
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="banner-two slide-3">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="banner-two-content text-center">
                                                    <div className="wrapper">
                                                        <span className="sub">Strategic Financial Growth</span>
                                                        <h1 className="title">
                                                            <span>One-Stop</span> CA Firm For <br />
                                                            <span>Business Compliance</span>
                                                        </h1>
                                                        <a className="rts-btn btn-primary-2" href="#contact">
                                                            Book Consultation
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                {/* rts banner area end */}
            </div>
        </ErrorBoundary>
    )
}

export default BannerTwo