"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import HeaderTwo from "@/components/header/HeaderTwo";
import BackToTop from "@/components/BackToTop";
import Breadcrumb from "@/components/Breadcrumb";
import TestimonialTwo from "@/components/testimonials/TestimonialTwo";
import FooterTwo from "@/components/footer/FooterTwo";
import Accordion from 'react-bootstrap/Accordion';
export default function Home() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'About Us' }
    ];
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    // Function to open the video overlay
    const openVideo = (e) => {
        e.preventDefault();
        setIsVideoOpen(true);
    };

    // Function to close the video overlay
    const closeVideo = (e) => {
        e.preventDefault();
        setIsVideoOpen(false);
    };

    // Effect to handle the escape key for closing the video overlay
    useEffect(() => {
        const handleKeyUp = (e) => {
            if (e.keyCode === 27) {
                setIsVideoOpen(false);
            }
        };

        // Add event listener for keyup
        document.addEventListener('keyup', handleKeyUp);

        // Cleanup function to remove event listener on component unmount
        return () => {
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, []);
    return (

        <div className="">
            <HeaderTwo />
            <Breadcrumb title="About Us" breadcrumbs={breadcrumbs} />
            {/* rts about us section start */}
            <div className="rts-about-area rts-section-gap">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-image-v-inner">
                                <div className="image-area">
                                    <img
                                        className="mt--110 img-1"
                                        src="/assets/images/about/main/about-03.jpg"
                                        alt="Taxfello"
                                    />
                                    <img
                                        className="img-over"
                                        src="/assets/images/about/main/about-04.jpg"
                                        alt="Taxfello Compliance Experts"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-progress-inner">
                                <div className="title-area">
                                    <span>ABOUT TAXFELLO</span>
                                    <h2 className="title">
                                        Your Trusted One-Stop Tax & Compliance Partner
                                    </h2>
                                </div>
                                {/* inner start */}
                                <div className="inner">
                                    <p className="disc" style={{ marginBottom: '15px' }}>
                                        Taxfello is a professional tax consultancy, accounting, financial advisory, and business compliance platform led by experienced Chartered Accountants. We serve individuals, startups, MSMEs, professionals, and growing businesses with reliable, transparent, and timely financial solutions.
                                    </p>
                                    <p className="disc" style={{ marginBottom: '15px' }}>
                                        Our services include Income Tax Return Filing, GST Registration and GST Return Filing, Company Registration, LLP Incorporation, Startup Registration, MSME Registration, ROC Compliance, Accounting and Bookkeeping, Audit Support, TDS Return Filing, Payroll Management, Tax Planning, Financial Advisory, Virtual CFO Services, Business Setup Consultancy, Financial Statement Preparation, Project Reports, Business Valuation Support, and Corporate Compliance Advisory.
                                    </p>
                                    <p className="disc" style={{ marginBottom: '15px' }}>
                                        Based in Janakpuri, we serve clients across West Delhi, including Rajouri Garden, Tilak Nagar, Paschim Vihar, Dwarka, and nearby areas. We also assist individuals and businesses across Delhi NCR, Noida, Gurgaon, and Faridabad.
                                    </p>
                                    <p className="disc">
                                        Our experienced tax and compliance consultants focus on accuracy, personalized service, timely filings, and practical financial solutions. We simplify taxation, accounting, GST, company law, and regulatory compliance while helping businesses improve financial management and achieve sustainable growth.
                                    </p>
                                    <div className="rts-progress-one-wrapper">
                                        <div className="single-progress">
                                            <div className="progress-top">
                                                <p className="progress-title">Compliance Accuracy Rate</p>
                                                <span className="persectage">99.8%</span>
                                            </div>
                                            <div className="meter cadetblue">
                                                <span data-progress={99} style={{ width: '99%' }} />
                                            </div>
                                        </div>
                                        <div className="single-progress">
                                            <div className="progress-top">
                                                <p className="progress-title">On-Time Tax Filing</p>
                                                <span className="persectage">100%</span>
                                            </div>
                                            <div className="meter">
                                                <span data-progress={100} style={{ width: '100%' }} />
                                            </div>
                                        </div>
                                    </div>
                                    <Link href={'/contactus'} className="rts-btn btn-primary">
                                        Talk to a CA Expert
                                    </Link>
                                </div>
                                {/* end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts about us section end */}


            {/* rts services area start */}
            <div className="rts-service-area rts-section-gapBottom">
                <div className="container-fluid service-main about-service-width-controler">
                    <div className="background-service service-three row">
                        <div className="row g-5">
                            <div className="rts-title-area service-four text-center pt--40 pt_md--0 mt_sm--0 mt_md--0">
                                <p className="pre-title">Our Expertise</p>
                                <h2 className="title">Core Solutions We Deliver</h2>
                            </div>
                            {/* start single Service */}
                            <div className="col-xl-4 col-md-6 col-sm-12 col-12 pt--15 mb--80 mb_md--40 mb_sm--30">
                                <div className="service-one-inner-four">
                                    <div className="big-thumbnail-area">
                                        <Link href={'/services'} className="thumbnail">
                                            <img
                                                src="/assets/images/service/07.jpg"
                                                alt="Business Incorporation"
                                            />
                                        </Link>
                                        <div className="content">
                                            <img
                                                src="/assets/images/service/icon/13.svg"
                                                alt="Business Incorporation Icon"
                                            />
                                            <h5 className="title">Business Incorporation</h5>
                                            <p className="disc">
                                                Pvt Ltd, LLP, One Person Company & Startup India DPIIT recognition with complete legal setup.
                                            </p>
                                        </div>
                                        <Link href="/services/private-limited-company-registration" className="over_link" />
                                    </div>
                                    <Link href="/services/private-limited-company-registration" className="rts-btn btn-primary">
                                        Learn More <i className="fal fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                            {/* start single Service */}
                            <div className="col-xl-4 col-md-6 col-sm-12 col-12 pt--15 mb--80 mb_md--40 mb_sm--30">
                                <div className="service-one-inner-four">
                                    <div className="big-thumbnail-area">
                                        <Link href={'/services'} className="thumbnail">
                                            <img
                                                src="/assets/images/service/08.jpg"
                                                alt="Tax & GST Compliance"
                                            />
                                        </Link>
                                        <div className="content">
                                            <img
                                                src="/assets/images/service/icon/14.svg"
                                                alt="Tax Icon"
                                            />
                                            <h5 className="title">Tax & GST Filings</h5>
                                            <p className="disc">
                                                Hassle-free Income Tax Returns, GST monthly/quarterly filings, ITC reconciliation, and ROC compliance.
                                            </p>
                                        </div>
                                        <Link href="/services/gst-registration" className="over_link" />
                                    </div>
                                    <Link href="/services/gst-registration" className="rts-btn btn-primary">
                                        Learn More <i className="fal fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                            {/* start single Service */}
                            <div className="col-xl-4 col-md-6 col-sm-12 col-12 pt--15 mb--80">
                                <div className="service-one-inner-four">
                                    <div className="big-thumbnail-area">
                                        <Link href={'/services'} className="thumbnail">
                                            <img
                                                src="/assets/images/service/09.jpg"
                                                alt="Virtual CFO Advisory"
                                            />
                                        </Link>
                                        <div className="content">
                                            <img
                                                src="/assets/images/service/icon/15.svg"
                                                alt="CFO Icon"
                                            />
                                            <h5 className="title">Virtual CFO Advisory</h5>
                                            <p className="disc">
                                                Strategic financial planning, bookkeeping, cash flow management, CMA data, and pitch decks for fundraising.
                                            </p>
                                        </div>
                                        <Link href="/services/virtual-cfo-monthly-retainer" className="over_link" />
                                    </div>
                                    <Link href="/services/virtual-cfo-monthly-retainer" className="rts-btn btn-primary">
                                        Learn More <i className="fal fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="cta-one-bg col-12">
                            <div className="cta-one-inner">
                                <div className="cta-left">
                                    <h3 className="title animated fadeIn">
                                        Let’s discuss how Taxfello can streamline your accounting and business compliance
                                    </h3>
                                </div>
                                <div className="cta-right">
                                    <Link className="rts-btn btn-white" href={'/contactus'}>
                                        Schedule Consultation
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts services area End */}

            {/* rts faq section area */}
            <div className="rts-faq-section rts-section-gap rts-faq-bg bg_image">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="faq-two-inner">
                                <div className="title-area-faq">
                                    <span className="sub">WHY CHOOSE TAXFELLO</span>
                                    <h2 className="title">
                                        Experienced Chartered Accountants &
                                        <span className="sm-title">
                                            Legal <span>Consultants</span>
                                        </span>
                                    </h2>
                                </div>
                                {/* faq accordion area */}
                                <div className="faq-accordion-area">
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header><span>01. </span> What documents are required for business registration?</Accordion.Header>
                                            <Accordion.Body>
                                                Requirements typically include PAN card, Aadhaar card, address proof (electricity bill/rent agreement) of the business premises, and passport-size photographs of directors/partners. Our team handles complete document drafting and digital signatures.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header><span>02. </span> How quickly can Taxfello incorporate a Private Limited company?</Accordion.Header>
                                            <Accordion.Body>
                                                Company incorporation typically takes 7-10 working days, subject to MCA approval and document readiness. We assist with DSC, DIN, name reservation, and SPICe+ filing end-to-end.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header><span>03. </span> What is included in Virtual CFO Retainer services?</Accordion.Header>
                                            <Accordion.Body>
                                                Our Virtual CFO retainer covers periodic financial reporting, cash flow forecasting, MIS dashboards, budgeting, investor documentation, internal controls, and ongoing CA guidance without the cost of hiring a full-time CFO.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                                {/* faq accordion area end */}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="thumbnail-faq-four">
                                <img src="/assets/images/faq/02.png" alt="Taxfello Support" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts faq section area End */}

            {/* customers feed back area start */}
            <TestimonialTwo />
            {/* customers feed back area end */}
            <FooterTwo />
            <BackToTop />
        </div>

    );
}
