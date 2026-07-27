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
    { name: "Business Incorporation", category: "Legal & Setup", img: "/assets/images/service/homepageservice/business-incorporation.webp", link: "/services/registration-and-licences/business-incorporation" },
    { name: "Startup Recognition", category: "Government Schemes", img: "/assets/images/service/homepageservice/startup-recognition.webp", link: "/services/registration-and-licences/startup-recognition" },
    { name: "GST Registration & Compliance", category: "Taxation", img: "/assets/images/service/homepageservice/gst-registration.webp", link: "/services/registration-and-licences/gst-registration-and-compliance" },
    { name: "Food, Trade & IP Licences", category: "Licensing", img: "/assets/images/service/homepageservice/food-trade-&-ip-licences.webp", link: "/services/registration-and-licences/food-trade-ip-licences" },
    { name: "State & Labour Registrations", category: "Compliance", img: "/assets/images/service/homepageservice/state-&-labour-registratio.webp", link: "/services/registration-and-licences/state-labour-registrations" },
    { name: "NGO & Charitable Trust", category: "Legal & Setup", img: "/assets/images/service/homepageservice/NGO & Charitable Trust.webp", link: "/services/registration-and-licences/ngo-charitable-trust" },
    { name: "Income Tax Filing", category: "Taxation", img: "/assets/images/service/homepageservice/Income Tax Filing.webp", link: "/services/compliances/income-tax-filing" },
    { name: "ROC / MCA Compliance", category: "Corporate", img: "/assets/images/service/homepageservice/rocmcacompliance.webp", link: "/services/compliances/roc-mca-compliance" },
    { name: "Payroll & Labour Compliance", category: "Compliance", img: "/assets/images/service/homepageservice/Payroll & Labour Compliance.webp", link: "/services/compliances/payroll-labour-compliance" },
    { name: "Legal & Corporate Drafting", category: "Legal Services", img: "/assets/images/service/homepageservice/Legal & Corporate Drafting.webp", link: "/services/compliances/legal-corporate-drafting" },
    { name: "Accounting & Bookkeeping", category: "Financials", img: "/assets/images/service/homepageservice/Financial Planning.webp", link: "/services/bookkeeping-and-accounting/accounting-and-bookkeeping" },
    { name: "Financial Planning", category: "Financials", img: "/assets/images/service/homepageservice/Financial Planning.webp", link: "/services/virtual-cfo/financial-planning" },
    { name: "Cash Flow & Working Capital", category: "Financials", img: "/assets/images/service/homepageservice/Cash Flow & Working Capital.webp", link: "/services/virtual-cfo/cash-flow-working-capital" },
    { name: "Banking & Project Finance", category: "Finance", img: "/assets/images/service/homepageservice/Banking & Project Finance.webp", link: "/services/virtual-cfo/banking-project-finance" },
    { name: "Fundraising & Investor Support", category: "Growth", img: "/assets/images/service/homepageservice/Fundraising & Investor Support.webp", link: "/services/virtual-cfo/fundraising-investor-support" },
    { name: "MIS & KPI Reporting", category: "Reporting", img: "/assets/images/service/homepageservice/MIS & KPI Reporting.webp", link: "/services/virtual-cfo/mis-kpi-reporting" },
    { name: "Profitability & Cost Control", category: "Advisory", img: "/assets/images/service/homepageservice/Profitability & Cost Control.webp", link: "/services/virtual-cfo/profitability-cost-control" },
    { name: "Internal Controls & Risk", category: "Governance", img: "/assets/images/service/homepageservice/Internal Controls & Risk.webp", link: "/services/virtual-cfo/internal-controls-risk" },
    { name: "Virtual CFO Retainer", category: "CFO Services", img: "/assets/images/service/homepageservice/Virtual CFO Retainer.webp", link: "/services/virtual-cfo/virtual-cfo-retainer" }
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
                                                <Link href={service.link} className="thumbnail">
                                                    <img
                                                        src={service.img}
                                                        alt={service.name}
                                                    />
                                                </Link>
                                                <div className="inner">
                                                    <Link href={service.link}>
                                                        <h5 className="title">{service.name}</h5>
                                                    </Link>
                                                    <span>{service.category}</span>
                                                </div>
                                                <Link href={service.link} className="over_link" />
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