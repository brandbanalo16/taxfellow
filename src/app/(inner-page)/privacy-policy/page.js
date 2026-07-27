"use client"
import React from 'react';
import HeaderTwo from '@/components/header/HeaderTwo';
import Breadcrumb from '@/components/Breadcrumb';
import FooterTwo from '@/components/footer/FooterTwo';
import BackToTop from '@/components/BackToTop';

export default function PrivacyPolicyPage() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Privacy Policy' }
    ];

    return (
        <div style={{ backgroundColor: '#fafbfc' }}>
            <HeaderTwo />
            <Breadcrumb title="Privacy Policy" breadcrumbs={breadcrumbs} />

            <div className="container" style={{ padding: '80px 15px 100px' }}>
                <div style={{
                    background: '#fff',
                    border: '1px solid #eef2f6',
                    borderRadius: '20px',
                    padding: '50px 40px',
                    boxShadow: '0 4px 30px rgba(15, 23, 42, 0.02)',
                    color: '#334155',
                    lineHeight: '1.75',
                    fontSize: '15px'
                }}>
                    <h1 style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
                        Privacy Policy
                    </h1>
                    <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '30px' }}>
                        Effective Date: July 27, 2026 | Brand: <strong>Texfello</strong> | Managed by: <strong>Clearverge Consulting Private Limited</strong>
                    </p>

                    <p>
                        At Texfello, we value your trust and are committed to protecting your personal data. This Privacy Policy explains how Clearverge Consulting Private Limited (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, stores, discloses, and protects your information when you visit our website, mobile application, dashboard, or client portal (&quot;Platform&quot;), or when you avail our professional compliance, taxation, and consulting services.
                    </p>
                    <p>
                        This policy is prepared in compliance with the Digital Personal Data Protection Act, 2023 (DPDPA), the Information Technology Act, 2000, and other applicable Indian regulations.
                    </p>

                    <hr style={{ border: 0, borderTop: '1px solid #e2e8f0', margin: '40px 0' }} />

                    {[
                        {
                            num: "1",
                            title: "Information We Collect",
                            content: (
                                <>
                                    <p>We collect personal information necessary to deliver our compliance and corporate services. This includes:</p>
                                    <ul>
                                        <li><strong>Identity Details:</strong> Full name, PAN (Permanent Account Number), Aadhaar number, DIN (Director Identification Number), CIN (Corporate Identification Number), passport size photos, and voter ID.</li>
                                        <li><strong>Contact Information:</strong> Billing address, registered office address, phone number, email address, and WhatsApp contact details.</li>
                                        <li><strong>Financial Data:</strong> Bank account numbers, IFSC codes, salary details, profit and loss statements, balance sheets, and transaction records.</li>
                                        <li><strong>Portal Credentials:</strong> GST portal logins, income tax portal logins, MCA/ROC credentials, and digital signatures (DSC), used strictly under your direct authorization.</li>
                                    </ul>
                                </>
                            )
                        },
                        {
                            num: "2",
                            title: "How We Use Your Information",
                            content: (
                                <>
                                    <p>We process your personal data for the following legitimate purposes:</p>
                                    <ul>
                                        <li>To incorporate companies, register LLPs, obtain trade/FSSAI/GST licenses, and file returns.</li>
                                        <li>To coordinate with independent licensed professionals (Chartered Accountants, Company Secretaries, and Legal Advocates) for audits or attestation services.</li>
                                        <li>To issue tax invoices, process payments, and verify transaction receipts.</li>
                                        <li>To send critical service updates, regulatory alerts, filing deadline reminders, and security notices.</li>
                                    </ul>
                                </>
                            )
                        },
                        {
                            num: "3",
                            title: "Data Retention and Security",
                            content: (
                                <>
                                    <p>Your personal data is stored in secure, encrypted cloud environments. We implement robust physical, technical, and administrative security measures to protect your documents from unauthorized access, loss, or manipulation.</p>
                                    <p>We retain your personal data and filing histories for as long as is necessary to execute the service, and thereafter for the mandatory retention periods prescribed under Indian tax and corporate laws (typically 8 years).</p>
                                </>
                            )
                        },
                        {
                            num: "4",
                            title: "Sharing of Information",
                            content: (
                                <>
                                    <p>We do not sell, rent, or trade your personal data. We only share information with:</p>
                                    <ul>
                                        <li>Government departments (Income Tax Department, GSTN, MCA, FSSAI, etc.) to file your applications.</li>
                                        <li>Partner Chartered Accountants, Company Secretaries, or legal advocates who perform audits, certifications, or representations under individual coporate engagement letters.</li>
                                        <li>Trusted technology partners (payment gateways, cloud hosting providers) bound by strict confidentiality agreements.</li>
                                    </ul>
                                </>
                            )
                        },
                        {
                            num: "5",
                            title: "Your Rights",
                            content: (
                                <>
                                    <p>Under the Digital Personal Data Protection Act, 2023, you hold the following rights:</p>
                                    <ul>
                                        <li>The right to request summaries of the personal data we hold and process for you.</li>
                                        <li>The right to correct inaccurate details, update changes, or complete pending records.</li>
                                        <li>The right to withdraw your consent to data processing (which may limit or stop our ability to file your pending returns).</li>
                                        <li>The right to seek grievance redressal through our Grievance Officer or the Data Protection Board of India.</li>
                                    </ul>
                                </>
                            )
                        },
                        {
                            num: "6",
                            title: "Grievance Redressal",
                            content: (
                                <>
                                    <p>If you have any questions, concerns, or complaints regarding this Privacy Policy or how your personal data is handled, please reach out to our Grievance Officer:</p>
                                    
                                    <table className="table table-bordered mt-3 mb-3" style={{ fontSize: '14px' }}>
                                        <thead>
                                            <tr style={{ background: '#f8fafc' }}>
                                                <th>Field</th>
                                                <th>Details</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>Designation</strong></td>
                                                <td>Grievance Officer, Texfello</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Company</strong></td>
                                                <td>Clearverge Consulting Private Limited</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Address</strong></td>
                                                <td>709, 8th Floor, Westend Mall, Janakpuri, Delhi 110058</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Email</strong></td>
                                                <td>support@taxfello.com</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Telephone</strong></td>
                                                <td>+91 88004 85106</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Working hours</strong></td>
                                                <td>Monday to Friday, 10:00 to 18:00 IST</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </>
                            )
                        }
                    ].map((sec) => (
                        <div key={sec.num} style={{ marginBottom: '35px', borderBottom: '1px solid #f1f5f9', paddingBottom: '25px' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', marginBottom: '14px' }}>
                                {sec.num}. {sec.title}
                            </h3>
                            <div style={{ color: '#475569', fontSize: '14.5px' }}>
                                {sec.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <FooterTwo />
            <BackToTop />
        </div>
    );
}
