"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Link from 'next/link';

const servicesList = [
    { name: "Business Incorporation", category: "Legal & Setup", img: "/assets/images/business-case/04.jpg" },
    { name: "Startup Recognition", category: "Government Schemes", img: "/assets/images/business-case/05.jpg" },
    { name: "GST Registration & Compliance", category: "Taxation", img: "/assets/images/business-case/06.jpg" },
    { name: "Food, Trade & IP Licences", category: "Licensing", img: "/assets/images/business-case/04.jpg" },
    { name: "State & Labour Registrations", category: "Compliance", img: "/assets/images/business-case/05.jpg" },
    { name: "NGO & Charitable Trust", category: "Legal & Setup", img: "/assets/images/business-case/06.jpg" },
    { name: "Income Tax Filing", category: "Taxation", img: "/assets/images/business-case/04.jpg" },
    { name: "ROC / MCA Compliance", category: "Corporate", img: "/assets/images/business-case/05.jpg" },
    { name: "Payroll & Labour Compliance", category: "Compliance", img: "/assets/images/business-case/06.jpg" },
    { name: "Legal & Corporate Drafting", category: "Legal Services", img: "/assets/images/business-case/04.jpg" },
    { name: "Accounting & Bookkeeping", category: "Financials", img: "/assets/images/business-case/05.jpg" },
    { name: "Financial Planning", category: "Financials", img: "/assets/images/business-case/06.jpg" },
    { name: "Cash Flow & Working Capital", category: "Financials", img: "/assets/images/business-case/04.jpg" },
    { name: "Banking & Project Finance", category: "Finance", img: "/assets/images/business-case/05.jpg" },
    { name: "Fundraising & Investor Support", category: "Growth", img: "/assets/images/business-case/06.jpg" },
    { name: "MIS & KPI Reporting", category: "Reporting", img: "/assets/images/business-case/04.jpg" },
    { name: "Profitability & Cost Control", category: "Advisory", img: "/assets/images/business-case/05.jpg" },
    { name: "Internal Controls & Risk", category: "Governance", img: "/assets/images/business-case/06.jpg" },
    { name: "Virtual CFO Retainer", category: "CFO Services", img: "/assets/images/business-case/04.jpg" }
];

function BusinessCase() {
    return (
        <div>
            {/* business case start */}
            <div className="rts-business-case rts-section-gap business-case-bg-2">
                <div className="container">
                    <div className="row">
                        <div className="title-area text-center business-case">
                            <span>Our Core Services</span>
                            <h2 className="title">Specialist Financial & Corporate Services</h2>
                        </div>
                    </div>
                </div>
                <div className="container-cusiness-case-h2 mt--50">
                    <div className="row">
                        <div className="col-12">
                            <div className="swiper mySwiperh2_Business_Cases">

                                <Swiper
                                    // install Swiper modules
                                    modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                                    className="mySwiperh2_Business_Cases"
                                    speed={700}
                                    slidesPerView={4}
                                    spaceBetween={30}
                                    loop={true}
                                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                                    breakpoints={{
                                        1200: { slidesPerView: 4 },
                                        900: { slidesPerView: 3 },
                                        768: { slidesPerView: 2 },
                                        580: { slidesPerView: 2 },
                                        450: { slidesPerView: 1 },
                                        0: { slidesPerView: 1 },
                                    }}
                                >
                                    {servicesList.map((service, index) => (
                                        <SwiperSlide key={index}>
                                            {/* single business case */}
                                            <div className="rts-business-case-s-2">
                                                <Link href={`/services/${encodeURIComponent(service.name.toLowerCase().replace(/\s+/g, '-'))}`} className="thumbnail">
                                                    <img
                                                        src={service.img}
                                                        alt={service.name}
                                                    />
                                                </Link>
                                                <div className="inner">
                                                    <Link href={`/services/${encodeURIComponent(service.name.toLowerCase().replace(/\s+/g, '-'))}`}>
                                                        <h5 className="title">{service.name}</h5>
                                                    </Link>
                                                    <span>{service.category}</span>
                                                </div>
                                                <Link href={`/services/${encodeURIComponent(service.name.toLowerCase().replace(/\s+/g, '-'))}`} className="over_link" />
                                            </div>
                                            {/* single business case End */}
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* business case End */}
        </div>
    )
}

export default BusinessCase