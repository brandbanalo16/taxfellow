"use client"
import React, { useState } from 'react';
import { Tabs, Tab, TabContent } from 'react-bootstrap';
function AboutTwo() {
    const [activeKey, setActiveKey] = useState('home1');
    return (
        <div>
            {/* start about our company */}
            <div className="rts-about-our-company-h2 rts-section-gap" id='about'>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 order-xl-1 order-lg-1 order-md-2 order-sm-2 order-2 mt_sm--30">
                            <div className="title-area about-company">
                                <span>About Our Company</span>
                                <h2 className="title">
                                    Professional & Dedicated <br />
                                    Consulting Services
                                </h2>
                            </div>
                            <div className="about-company-wrapper">
                                <p className="disc">
                                    We are a team of expert Chartered Accountants and Financial Advisors
                                    with years of experience in providing top-rated registration, tax,
                                    and corporate compliance services.
                                </p>
                                <div className="rts-tab-style-one">
                                    <div className=" align-items-start contoler-company">

                                        <Tabs
                                            activeKey={activeKey}
                                            onSelect={(k) => setActiveKey(k)}
                                            id="controlled-tab-example"
                                            className="mb-3 nav button-area"
                                        >
                                            <Tab eventKey="home1" title=" 01. Business Setup" />
                                            <Tab eventKey="profile1" title="02. Tax & Compliance" />
                                            <Tab eventKey="contact1" title="03. Virtual CFO" />
                                        </Tabs>
                                        {activeKey === 'home1' && (
                                            <TabContent>
                                                {/* start tab content */}
                                                <div className="rts-tab-content-one">
                                                    <p className="disc">
                                                        We make incorporating your business effortless. From Private Limited Companies and LLPs to Section 8 NGOs, we handle all the legal paperwork so you can focus on building your brand.
                                                    </p>
                                                    <div className="check-area">
                                                        <i className="fas fa-check-circle" />
                                                        <p className="disc">
                                                            Fast & legally sound company registrations
                                                        </p>
                                                    </div>
                                                    <div className="check-area">
                                                        <i className="fas fa-check-circle" />
                                                        <p className="disc">
                                                            DPIIT Startup India recognition support
                                                        </p>
                                                    </div>
                                                    <a
                                                        className="rts-btn btn-primary-2 color-h-black"
                                                        href="#"
                                                    >
                                                        Contact Us
                                                    </a>
                                                </div>
                                                {/* start tab content End */}
                                            </TabContent>
                                        )}
                                        {activeKey === 'profile1' && (
                                            <TabContent>
                                                {/* start tab content */}
                                                <div className="rts-tab-content-one">
                                                    <p className="disc">
                                                        Stay compliant with ease. We handle everything from GST registration and monthly return filings to Corporate Income Tax and MCA annual compliances.
                                                    </p>
                                                    <div className="check-area">
                                                        <i className="fas fa-check-circle" />
                                                        <p className="disc">
                                                            Accurate & timely GST, ITR, and TDS filings
                                                        </p>
                                                    </div>
                                                    <div className="check-area">
                                                        <i className="fas fa-check-circle" />
                                                        <p className="disc">
                                                            Complete ROC and Labour Law compliance
                                                        </p>
                                                    </div>
                                                    <a
                                                        className="rts-btn btn-primary-2 color-h-black"
                                                        href="#"
                                                    >
                                                        Contact Us
                                                    </a>
                                                </div>
                                                {/* start tab content End */}
                                            </TabContent>
                                        )}

                                        {activeKey === 'contact1' && (
                                            <TabContent>
                                                {/* start tab content */}
                                                <div className="rts-tab-content-one">
                                                    <p className="disc">
                                                        Unlock your business's true potential with strategic financial planning, cash flow monitoring, and detailed MIS reporting tailored for startups and scaling enterprises.
                                                    </p>
                                                    <div className="check-area">
                                                        <i className="fas fa-check-circle" />
                                                        <p className="disc">
                                                            Budgeting, Forecasting, and Financial Modeling
                                                        </p>
                                                    </div>
                                                    <div className="check-area">
                                                        <i className="fas fa-check-circle" />
                                                        <p className="disc">
                                                            Fundraising support and investor deck financials
                                                        </p>
                                                    </div>
                                                    <a
                                                        className="rts-btn btn-primary-2 color-h-black"
                                                        href="#"
                                                    >
                                                        Contact Us
                                                    </a>
                                                </div>
                                                {/* start tab content End */}
                                            </TabContent>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 order-xl-1 order-lg-1 order-md-1 order-sm-1 order-1">
                            <div className="about-company-thumbnail">
                                <img src="assets/images/about/01.png" alt="Business_company" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* start about our company End */}

        </div>
    )
}

export default AboutTwo