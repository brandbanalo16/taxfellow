"use client"
import React from 'react'

function WhyChooseUs() {
    return (
        <div>
            {/* start service area */}
            <div className="rts-service-areah2-im-3 rts-section-gap">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="image-area">
                                <img src="/assets/images/service/h2/03.jpg" alt="Service_Image" />
                                <img
                                    className="two"
                                    src="/assets/images/service/h2/02.jpg"
                                    alt="Service_Image"
                                />
                                <img
                                    className="three"
                                    src="/assets/images/service/h2/01.jpg"
                                    alt="Service_Image"
                                />
                                <div className="ratio-area">
                                    <h3 className="ratio">85%</h3>
                                    <span>Successful Ratio</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-h2-content pl--30">
                                <div className="title-area  service-h2 service">
                                    <span>Why Choose Taxfello</span>
                                    <h2 className="title">Taxfello: One-stop CA firm for business compliance</h2>
                                </div>
                                <div className="content-wrapper">
                                    <p className="disc">
                                        As a premier choice for online chartered accountant services, Taxfello takes the burden of tax filings, corporate compliance, and bookkeeping off your shoulders so you can focus entirely on scaling your business.
                                    </p>
                                    <div className="feature-one-wrapper mt--40">
                                        <div className="single-feature-one">
                                            <i className="fal fa-check" />
                                            <p>100% Legal & Compliant</p>
                                        </div>
                                        <div className="single-feature-one">
                                            <i className="fal fa-check" />
                                            <p>One-Stop Solution</p>
                                        </div>
                                        <div className="single-feature-one">
                                            <i className="fal fa-check" />
                                            <p>Expert CAs & Advisors</p>
                                        </div>
                                        <div className="single-feature-one">
                                            <i className="fal fa-check" />
                                            <p>Transparent Pricing</p>
                                        </div>
                                    </div>
                                    <div className="support-team">
                                        <a href="team-details.html" className="thumbnail">
                                            <img
                                                src="/assets/images/business-goal/team.png"
                                                alt="Image-team"
                                            />
                                        </a>
                                        <div className="details">
                                            <span>24/7 Support Team</span>
                                            <a href="team-details.html">
                                                <h6 className="title">(+214) 2158.31598</h6>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* start service area End */}

        </div>
    )
}

export default WhyChooseUs