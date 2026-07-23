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
                                <span>About Us</span>
                                <h2 className="title">
                                    Tax and Compliance Services <br />
                                    <span>For Startups By Tax Fello</span>
                                </h2>
                            </div>
                            <div className="about-company-wrapper">
                                <p className="disc">
                                    We are Tax Fello, a team of expert Chartered Accountants and advisors
                                    providing top-rated business registration and compliance services across India.
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
                                                        As leading company registration consultants india, our team makes incorporating your business effortless. We handle Private Limited, LLP, and Section 8 setup.
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
                                                        href="#f-contact"
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
                                                        We are the preferred startup registration and compliance company. Stay compliant with GST registrations, monthly return filings, and ROC filings.
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
                                                        href="#f-contact"
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
                                                        Unlock financial potential with professional CA support. Our firm provides strategic planning, cash flow tracking, and MIS reports.
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
                                                        href="#f-contact"
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
                                <img src="/assets/images/about/01.png" alt="Tax Fello - startup registration and compliance company" />
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