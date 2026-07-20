"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const servicesData = [
  {
    category: "Registration & Licences",
    subCategories: [
      {
        title: "Business Incorporation",
        items: ["Private Limited Company Registration", "One Person Company Registration", "Limited Liability Partnership Registration", "Partnership Firm Registration", "Sole Proprietorship Setup", "Producer Company Registration", "Public Limited Company Registration", "Section 8 Company Registration"]
      },
      {
        title: "Startup Recognition",
        items: ["Startup India DPIIT Recognition", "DPIIT Registration", "Project Report Preparation", "80IAC Registration"]
      },
      {
        title: "GST Registration & Management",
        items: ["GST Registration", "GST Registration Amendment", "Additional Place of Business GST Registration", "GST Return Filing", "GST Annual Return (GSTR-9)", "GST Cancellation", "GST Revocation of Cancellation", "GST LUT Filing", "GST Refund Application", "GST Appeal Filing", "GST Notice Reply", "GST Reconciliation & ITC Matching"]
      },
      {
        title: "Food & Trade Licences",
        items: ["FSSAI Basic Registration", "FSSAI State Licence", "FSSAI Central Licence", "Trade Licence Registration", "MSME Registration", "ISO Certification", "Barcode Registration", "Import Export Code Registration", "RCMC Registration", "Digital Signature Certificate (DSC)"]
      },
      {
        title: "IP & Brand Registrations",
        items: ["Trademark Registration", "Copyright Registration", "Patent & Design Registration", "Trademark Objection Reply"]
      },
      {
        title: "Tax & Trade Registrations",
        items: ["Professional Tax Registration", "Shop & Establishment Registration", "AD Code Registration Support", "PF & ESIC Registration"]
      },
      {
        title: "NGO & Trust",
        items: ["Section 8 NGO Setup", "Society Registration", "Trust Registration", "NGO Darpan Registration", "12A & 80G Registration", "CSR-1 Registration", "FCRA Registration", "Tax / Grant Registrations", "NGO Annual Compliance"]
      }
    ]
  },
  {
    category: "Compliances",
    subCategories: [
      {
        title: "Income Tax Compliance",
        items: ["Corporate Income Tax Return Filing", "ITR Filing for Business / Proprietorship", "ITR Filing for LLP / Partnership Firm", "ITR Filing for NGO / Trust", "ITR Filing for Salaried Individual", "NRI Income Tax Return Filing", "Income Tax Notice Reply", "Income Tax Rectification Request", "Form 16 & Form 16A Generation", "TDS Return Filing", "TCS Return Filing"]
      },
      {
        title: "ROC / MCA Compliance",
        items: ["Company Annual Filing (AOC-4 & MGT-7)", "LLP Annual Filing (Form-11 & Form-8)", "OPC Annual Compliance", "Section 8 Company Annual Compliance", "Auditor Appointment (ADT-1)", "Commencement of Business (INC-20A)", "Director Appointment / Resignation", "Director KYC (DIR-3 KYC)", "Increase Authorised Share Capital", "Registered Office Change", "Share Allotment Filing", "Company Strike Off"]
      },
      {
        title: "Payroll & Labour Compliance",
        items: ["Monthly Payroll Processing", "Salary Slip Generation", "Monthly PF & ESIC Return Filing", "Professional Tax Return Filing", "HR Policy & Employee Documentation", "Labour Law Compliance Review"]
      },
      {
        title: "Legal & Corporate Documentation",
        items: ["Founder Agreement", "LLP Agreement", "Partnership Deed", "Service Agreement", "Non-Disclosure Agreement (NDA)", "Rent Agreement & NOC", "Legal Notice Drafting", "Reply to Legal Notice", "Board Resolution Drafting"]
      },
      {
        title: "Export & FEMA Compliance",
        items: ["FEMA & FDI Reporting Support"]
      }
    ]
  },
  {
    category: "Bookkeeping & Accounting",
    subCategories: [
      {
        title: "Accounting & Bookkeeping",
        items: ["Monthly Accounting & Bookkeeping", "Bank Reconciliation", "Accounts Finalisation", "Financial Statement Preparation", "Tally Setup", "Zoho Books Setup"]
      }
    ]
  },
  {
    category: "Virtual CFO",
    subCategories: [
      {
        title: "Financial Planning & Projections",
        items: ["Projected Financial Statements"]
      },
      {
        title: "Budgeting & Forecasting",
        items: ["Annual Budget Preparation", "Business Plan & Financial Model", "Rolling Forecast & Scenario Planning"]
      },
      {
        title: "Cash Flow & Working Capital",
        items: ["Cash Flow Monitoring", "Receivable & Payable Ageing Review", "Working Capital Planning"]
      },
      {
        title: "Banking & Project Finance",
        items: ["Project Report for Bank Loan", "Cash Flow Projection", "CMA Data Preparation", "Drawing Power Calculation", "Monthly Stock Statement", "MSME Loan & Subsidy Advisory"]
      },
      {
        title: "Fundraising & Banking",
        items: ["Investor Deck Financial Support", "Loan Proposal & Bank Presentation", "Banking Covenants & DSCR Review"]
      },
      {
        title: "MIS & KPI Reporting",
        items: ["Monthly MIS & Profit & Loss Report", "Finance KPI Dashboard", "Budget vs Actual Variance Report", "Department / Branch Wise Profitability Report"]
      },
      {
        title: "Profitability & Cost Control",
        items: ["Cost Optimisation Review", "Pricing & Unit Economics Advisory", "Product / Service Margin Analysis"]
      },
      {
        title: "Internal Controls & Risk",
        items: ["Finance SOP Drafting", "Internal Control Review", "Risk Register & Compliance Tracker"]
      },
      {
        title: "Audit & Due Diligence Support",
        items: ["Audit Support & Schedules", "Due Diligence Data Room Support"]
      },
      {
        title: "Virtual CFO Retainer & Review",
        items: ["Finance Function Setup", "Monthly Management Review Meeting", "Virtual CFO Monthly Retainer"]
      }
    ]
  }
];

export default function ComprehensiveServices() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="rts-service-area rts-section-gap bg-service-h2 pt--100 pb--100" id='service'>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title-area service-h2 text-center mb--50">
              <span>Our Expertise</span>
              <h2 className="title">Comprehensive Services</h2>
            </div>
          </div>
        </div>

        {/* Custom Tabs */}
        <div className="row mb--40">
          <div className="col-12 d-flex justify-content-center flex-wrap gap-3">
            {servicesData.map((data, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`rts-btn btn-primary-2 ${activeTab === index ? '' : 'btn-primary-alta'} transition-all`}
                style={{ padding: '12px 24px', fontSize: '16px', fontWeight: 'bold' }}
              >
                {data.category}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="row">
          <div className="col-12">
            <div className="bg-white p-5 rounded-4 shadow-sm" style={{ border: '1px solid #f0f0f0' }}>
              <div className="row g-4">
                {servicesData[activeTab].subCategories.map((sub, idx) => (
                  <div key={idx} className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="service-category-block h-100 p-4 rounded-3" style={{ backgroundColor: '#f9f9fa', border: '1px solid #eaeaec' }}>
                      <h4 className="title mb-4" style={{ fontSize: '20px', color: '#1a1a1a', borderBottom: '2px solid #0B4DF5', paddingBottom: '10px', display: 'inline-block' }}>
                        {sub.title}
                      </h4>
                      <ul className="service-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {sub.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="mb-2 d-flex align-items-start">
                            <i className="far fa-check-circle mt-1 me-2 text-primary" style={{ color: '#0B4DF5' }} />
                            <span style={{ fontSize: '15px', color: '#4a4a4a', lineHeight: '1.4' }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
