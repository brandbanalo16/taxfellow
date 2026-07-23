"use client"
import React, { useState } from 'react'

const faqData = [
    {
        question: "Who should file an ITR?",
        answer: "An Individual whose annual income is more than the basic exemption limit of Rs 2.5 lakh should file an ITR. The basic exemption limit for senior citizens (60 years onwards and less than 80 years) is Rs 3 lakh, and for super senior citizens is Rs 5 lakh."
    },
    {
        question: "How can I claim deductions for tax saving?",
        answer: "You can claim deductions under various sections of the Income Tax Act, such as Section 80C (for life insurance, PPF, ELSS, etc.), Section 80D (for health insurance premium), and Section 24 (for home loan interest) by submitting proof of investment during your filing."
    },
    {
        question: "I receive my salary income after deduction of TDS. Am I required to file an income tax return?",
        answer: "Yes. Even if TDS is deducted, you must file an ITR if your total gross income exceeds the basic exemption limit. Filing returns allows you to declare total income, claim eligible deductions, and claim refunds for any excess TDS deducted."
    },
    {
        question: "How do I check TDS details from my Form 26AS?",
        answer: "You can download Form 26AS from the TRACES portal or via the e-filing portal. It shows all tax deducted at source (TDS) by your employer, bank, or clients, which can be cross-verified before filing your tax return."
    },
    {
        question: "How can I claim an income tax refund?",
        answer: "If the tax paid or TDS deducted is higher than your actual tax liability calculated on your return, you can claim a refund. Ensure you provide correct bank account details (pre-validated) when submitting your ITR for direct refund credit."
    },
    {
        question: "Is my data filed with Tax Fello secure?",
        answer: "Absolutely. Security is our top priority. We use bank-grade 256-bit encryption, strict data access controls, and secure server hosting to ensure all your financial documents, PAN/TAN information, and accounting files remain completely private and secure."
    },
    {
        question: "What are the GST services offered by Tax Fello?",
        answer: "Tax Fello offers end-to-end GST support: including GST registration, monthly/quarterly return filings (GSTR-1, GSTR-3B), annual returns (GSTR-9), input tax credit (ITC) reconciliation, and handling department queries or notices."
    },
    {
        question: "How to e-verify my ITR?",
        answer: "You can easily e-verify your filed income tax return using Aadhaar OTP, EVC through your pre-validated bank account, net banking, or Demat account. E-verification must be done within 30 days of filing."
    },
    {
        question: "How does Tax Fello help small businesses and startups?",
        answer: "We provide complete registration packages (Private Limited, LLP, GST, MSME, Trademark) and manage your ongoing compliance, payroll, monthly accounting, tax returns, and corporate filings under a single, cost-effective retainer."
    }
];

export default function CustomFaq() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="custom-faq-section">
            <style>{`
                .custom-faq-section {
                    padding: 90px 0;
                    background-color: #ffffff;
                    font-family: 'Gilroy', sans-serif;
                }
                .faq-layout-grid {
                    display: grid;
                    grid-template-columns: 320px 1fr;
                    gap: 60px;
                }
                .faq-left-column h2 {
                    font-size: 38px;
                    font-weight: 700;
                    color: #2c3255;
                    line-height: 1.2;
                    margin-bottom: 16px;
                }
                .faq-left-column p {
                    font-size: 15px;
                    color: #64748b;
                    margin: 0;
                }
                .faq-left-column p a {
                    color: #2563eb;
                    text-decoration: underline;
                    font-weight: 500;
                }
                .faq-list {
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                }
                .faq-item {
                    border-bottom: 1px solid #e2e8f0;
                    padding: 24px 0;
                }
                .faq-item:first-child {
                    padding-top: 0;
                }
                .faq-question-btn {
                    width: 100%;
                    background: none;
                    border: none;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    text-align: left;
                    padding: 0;
                    cursor: pointer;
                    gap: 20px;
                }
                .faq-question-text {
                    font-size: 17px;
                    font-weight: 600;
                    color: #2c3255;
                    transition: color 0.2s ease;
                }
                .faq-item.active .faq-question-text {
                    color: #2563eb;
                }
                .faq-toggle-icon {
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    background-color: #f1f5f9;
                    color: #64748b;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 15px;
                    font-weight: bold;
                    flex-shrink: 0;
                    transition: all 0.25s ease;
                }
                .faq-item.active .faq-toggle-icon {
                    background-color: #2563eb;
                    color: #ffffff;
                    transform: rotate(180deg);
                }
                .faq-answer-panel {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s cubic-bezier(0, 1, 0, 1);
                }
                .faq-item.active .faq-answer-panel {
                    max-height: 1000px;
                    transition: max-height 0.5s cubic-bezier(1, 0, 1, 0);
                }
                .faq-answer-inner {
                    padding-top: 16px;
                    font-size: 15px;
                    line-height: 1.65;
                    color: #64748b;
                }
                @media (max-width: 991px) {
                    .faq-layout-grid {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }
                }
            `}</style>

            <div className="container">
                <div className="faq-layout-grid">
                    {/* Left static sidebar header */}
                    <div className="faq-left-column">
                        <h2>Frequently Asked Questions</h2>
                        <p>Can't find your question? <a href="#contact">Email us</a>.</p>
                    </div>

                    {/* Right collapsible items */}
                    <div className="faq-list">
                        {faqData.map((item, index) => {
                            const isActive = openIndex === index;
                            return (
                                <div key={index} className={`faq-item ${isActive ? 'active' : ''}`}>
                                    <button 
                                        className="faq-question-btn" 
                                        onClick={() => toggleFaq(index)}
                                        aria-expanded={isActive}
                                    >
                                        <span className="faq-question-text">{item.question}</span>
                                        <span className="faq-toggle-icon">
                                            {isActive ? '−' : '+'}
                                        </span>
                                    </button>
                                    <div className="faq-answer-panel">
                                        <div className="faq-answer-inner">
                                            {item.answer}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
