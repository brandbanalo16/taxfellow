"use client"
import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function FaqOne() {
    return (
        <div>
            {/* rts faq section area */}
            <div className="rts-faq-section rts-section-gap rts-faq-bg bg_image">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="faq-two-inner">
                                <div className="title-area-faq">
                                    <span className="sub">COMPLIANCE FAQS</span>
                                    <h2 className="title">
                                        Frequently Asked <br />
                                        <span className="sm-title">
                                            Compliance <span>Questions</span>
                                        </span>
                                    </h2>
                                </div>
                                {/* faq accordion area */}
                                <div className="faq-accordion-area">
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header><span>01. </span> What makes Tax Fello a reliable one-stop CA firm for business compliance?</Accordion.Header>
                                            <Accordion.Body>
                                                Tax Fello provides comprehensive business registration and compliance services across India. We manage everything from company registration to monthly filings, corporate audits, and licensing, ensuring complete compliance for your business.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                <span>02. </span> How do company registration consultants india help scaling startups?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                As experienced company registration consultants india, our experienced advisors help you navigate private limited company setup, LLP registration, and DPIIT recognition, making us the go-to startup registration and compliance company.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>
                                                <span>03. </span> Do you offer online tax filing and GST services?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                Yes! Tax Fello provides robust online tax filing and GST services. Our professional online CA team covers income tax filing, monthly GST returns, TDS filings, and continuous advisory for startups.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                                {/* faq accordion area end */}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="thumbnail-faq-four">
                                <img src="/assets/images/faq/02.png" alt="Tax Fello - Online chartered accountant services" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts faq section area End */}
        </div>
    )
}

export default FaqOne