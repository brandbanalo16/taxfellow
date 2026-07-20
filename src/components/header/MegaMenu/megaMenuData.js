/**
 * MEGA MENU DATA
 * ─────────────────────────────────────────────────
 * Single source of truth for all navigation content.
 * Supports grouping services into subcategories (columns)
 * to showcase clean, structured grid layouts.
 * ─────────────────────────────────────────────────
 */

export const MEGA_MENU_DATA = [
  // ── 1. Registration & Licences ───────────────────
  {
    id: 'registration',
    label: 'Registration & Licences',
    type: 'mega',
    categories: [
      {
        id: 'business-incorporation',
        label: 'Business Incorporation',
        subcategories: [
          {
            label: 'Popular Company Setup',
            services: [
              { label: 'Private Limited Company Registration', href: '/registration/private-limited-company-registration' },
              { label: 'One Person Company Registration',      href: '/registration/one-person-company-registration' },
              { label: 'Limited Liability Partnership Registration', href: '/registration/limited-liability-partnership-registration' },
              { label: 'Partnership Firm Registration',        href: '/registration/partnership-firm-registration' },
              { label: 'Sole Proprietorship Setup',            href: '/registration/sole-proprietorship-setup' },
            ]
          },
          {
            label: 'Special Entity Setup',
            services: [
              { label: 'Producer Company Registration',        href: '/registration/producer-company-registration' },
              { label: 'Public Limited Company Registration',  href: '/registration/public-limited-company-registration' },
              { label: 'Section 8 Company Registration',       href: '/registration/section-8-company-registration' },
              { label: 'Section 8 NGO Setup',                  href: '/registration/section-8-ngo-setup' },
            ]
          },
          {
            label: 'Other Registrations',
            services: [
              { label: 'Society Registration',                 href: '/registration/society-registration' },
              { label: 'Trust Registration',                   href: '/registration/trust-registration' },
              { label: 'Indian Subsidiary Registration',       href: '/registration/indian-subsidiary-registration' },
              { label: 'Foreign Entity Setup',                 href: '#' },
            ]
          }
        ]
      },
      {
        id: 'startup-recognition',
        label: 'Startup Recognition',
        subcategories: [
          {
            label: 'Government Schemes',
            services: [
              { label: 'Startup India DPIIT Recognition',      href: '/registration/startup-india-dpiit-recognition' },
              { label: 'DPIIT Registration',                  href: '#' },
              { label: '80IAC Tax Exemption Registration',     href: '#' },
              { label: 'Project Report Preparation',          href: '#' },
            ]
          }
        ]
      },
      {
        id: 'gst-registration',
        label: 'GST Registration & Management',
        subcategories: [
          {
            label: 'GST Registration',
            services: [
              { label: 'GST Registration',                          href: '/registration/gst' },
              { label: 'Additional Place of Business GST Registration', href: '#' },
              { label: 'GST Registration Amendment',                href: '#' },
              { label: 'GST Cancellation',                          href: '#' },
              { label: 'GST Revocation of Cancellation',            href: '#' },
            ]
          },
          {
            label: 'GST Filing & Compliance',
            services: [
              { label: 'GST Return Filing',                         href: '/compliances/gst-filing' },
              { label: 'GST Annual Return (GSTR-9)',                href: '#' },
              { label: 'GST LUT Filing for Exporters',              href: '#' },
              { label: 'GST Reconciliation & ITC Matching',         href: '#' },
              { label: 'GST Appeal Filing',                         href: '#' },
              { label: 'GST Notice Reply',                          href: '#' },
              { label: 'GST Refund Application',                    href: '#' },
            ]
          }
        ]
      },
      {
        id: 'food-trade',
        label: 'Food & Trade Licences',
        subcategories: [
          {
            label: 'FSSAI License & Food Safety',
            services: [
              { label: 'FSSAI Basic Registration',              href: '#' },
              { label: 'FSSAI Central Licence',                 href: '#' },
              { label: 'FSSAI State Licence',                   href: '#' },
            ]
          },
          {
            label: 'Trade & Business Setup',
            services: [
              { label: 'Barcode Registration',                  href: '#' },
              { label: 'Trade Licence Registration',            href: '#' },
              { label: 'ISO Certification',                     href: '#' },
              { label: 'MSME Registration',                     href: '/registration/msme' },
            ]
          },
          {
            label: 'Import Export & Others',
            services: [
              { label: 'Import Export Code Registration',       href: '#' },
              { label: 'RCMC Registration',                     href: '#' },
              { label: 'Digital Signature Certificate (DSC)',   href: '#' },
              { label: 'AD Code Registration Support',         href: '/registration/ad-code-registration-support' },
              { label: 'PF & ESIC Registration',               href: '/registration/pf-and-esic-registration' },
            ]
          }
        ]
      },
      {
        id: 'ip-brand',
        label: 'IP & Brand Registrations',
        subcategories: [
          {
            label: 'Trademark Registration',
            services: [
              { label: 'Trademark Registration',       href: '/registration/trademark' },
              { label: 'Expedited TM Registration',    href: '#' },
              { label: 'Trademark Renewal',           href: '#' },
              { label: 'Trademark Search',            href: '#' },
              { label: 'TM Objection Reply',           href: '#' },
              { label: 'TM Opposition Reply',          href: '#' },
              { label: 'TM Hearing Support',           href: '#' },
              { label: 'TM Infringement',              href: '#' },
              { label: 'Trademark Transfer',           href: '#' },
            ]
          },
          {
            label: 'Copyright Registration',
            services: [
              { label: 'Copyright Registration',        href: '#' },
              { label: 'Copyright Objection',           href: '#' },
              { label: 'Copyright Infringement',        href: '#' },
              { label: 'Copyright Music',               href: '#' },
            ]
          },
          {
            label: 'Patent & Design',
            services: [
              { label: 'Provisional Patent',            href: '#' },
              { label: 'Patent Registration',           href: '#' },
              { label: 'Patent Infringement',           href: '#' },
              { label: 'Design Registration',           href: '#' },
            ]
          }
        ]
      },
      {
        id: 'tax-trade',
        label: 'Tax & Trade Registrations',
        subcategories: [
          {
            label: 'State tax setup',
            services: [
              { label: 'Professional Tax Registration',     href: '#' },
              { label: 'Shop & Establishment Registration', href: '#' },
            ]
          }
        ]
      },
      {
        id: 'ngo-trust',
        label: 'NGO & Trust',
        subcategories: [
          {
            label: 'NGO Registrations',
            services: [
              { label: 'NGO Darpan Registration',  href: '#' },
              { label: '12A & 80G Registration',   href: '#' },
              { label: 'CSR-1 Registration',       href: '#' },
              { label: 'FCRA Registration',        href: '#' },
              { label: 'Tax / Grant Registrations',href: '#' },
              { label: 'NGO Annual Compliance',    href: '#' },
            ]
          }
        ]
      },
    ],
  },

  // ── 2. Compliances ───────────────────────────────
  {
    id: 'compliances',
    label: 'Compliances',
    type: 'mega',
    categories: [
      {
        id: 'income-tax',
        label: 'Income Tax Compliance',
        subcategories: [
          {
            label: 'Business tax returns',
            services: [
              { label: 'Corporate Income Tax Return Filing',      href: '/compliances/income-tax' },
              { label: 'ITR Filing for Business / Proprietorship',href: '/compliances/income-tax' },
              { label: 'ITR Filing for LLP / Partnership Firm',   href: '/compliances/income-tax' },
              { label: 'ITR Filing for NGO / Trust',              href: '/compliances/income-tax' },
            ]
          },
          {
            label: 'Personal & NRI Tax',
            services: [
              { label: 'ITR Filing for Salaried Individual',      href: '/compliances/income-tax' },
              { label: 'NRI Income Tax Return Filing',            href: '#' },
              { label: 'Income Tax Notice Reply',                 href: '#' },
              { label: 'Income Tax Rectification Request',        href: '#' },
            ]
          },
          {
            label: 'TDS / TCS Filing',
            services: [
              { label: 'TDS Return Filing',                       href: '/compliances/tds-filing' },
              { label: 'TCS Return Filing',                       href: '#' },
              { label: 'Form 16 & Form 16A Generation',           href: '#' },
            ]
          }
        ]
      },
      {
        id: 'roc-mca',
        label: 'ROC / MCA Compliance',
        subcategories: [
          {
            label: 'Annual Filings',
            services: [
              { label: 'Company Annual Filing (AOC-4 & MGT-7)',  href: '/compliances/roc-filing' },
              { label: 'LLP Annual Filing (Form-11 & Form-8)',   href: '/compliances/roc-filing' },
              { label: 'OPC Annual Compliance',                  href: '#' },
              { label: 'Section 8 Company Annual Compliance',    href: '#' },
            ]
          },
          {
            label: 'Setup & Approvals',
            services: [
              { label: 'Auditor Appointment (ADT-1)',            href: '#' },
              { label: 'Commencement of Business (INC-20A)',     href: '#' },
              { label: 'Company Strike Off',                     href: '#' },
            ]
          },
          {
            label: 'Corporate Changes',
            services: [
              { label: 'Director Appointment / Resignation',     href: '#' },
              { label: 'Director KYC (DIR-3 KYC)',               href: '#' },
              { label: 'Increase Authorised Share Capital',      href: '#' },
              { label: 'Registered Office Change',               href: '#' },
              { label: 'Share Allotment Filing',                 href: '#' },
            ]
          }
        ]
      },
      {
        id: 'payroll-labour',
        label: 'Payroll & Labour Compliance',
        subcategories: [
          {
            label: 'Payroll Processing',
            services: [
              { label: 'Monthly Payroll Processing',       href: '/compliances/payroll' },
              { label: 'Salary Slip Generation',           href: '/compliances/payroll' },
            ]
          },
          {
            label: 'PF, ESI & PT Returns',
            services: [
              { label: 'Monthly PF & ESIC Return Filing',  href: '/compliances/payroll' },
              { label: 'Professional Tax Return Filing',   href: '#' },
              { label: 'HR Policy & Employee Documentation', href: '#' },
              { label: 'Labour Law Compliance Review',     href: '#' },
            ]
          }
        ]
      },
      {
        id: 'legal-docs',
        label: 'Legal & Corporate Documentation',
        subcategories: [
          {
            label: 'Agreements & Deeds',
            services: [
              { label: 'Founder Agreement Drafting',       href: '#' },
              { label: 'LLP Agreement Drafting',           href: '#' },
              { label: 'Partnership Deed Drafting',        href: '#' },
              { label: 'Service Agreement Drafting',       href: '#' },
              { label: 'Non-Disclosure Agreement (NDA)',   href: '#' },
            ]
          },
          {
            label: 'Legal Notices & Resolutions',
            services: [
              { label: 'Rent Agreement & NOC Drafting',    href: '#' },
              { label: 'Legal Notice Drafting',            href: '#' },
              { label: 'Reply to Legal Notice',            href: '#' },
              { label: 'Board Resolution Drafting',        href: '#' },
            ]
          }
        ]
      },
      {
        id: 'export-fema',
        label: 'Export & FEMA Compliance',
        subcategories: [
          {
            label: 'International Trade',
            services: [
              { label: 'FEMA & FDI Reporting Support', href: '#' },
            ]
          }
        ]
      },
    ],
  },

  // ── 3. Bookkeeping & Accounting (simple – no left panel) ──
  {
    id: 'bookkeeping',
    label: 'Bookkeeping & Accounting',
    type: 'simple',
    heading: 'Accounting & Bookkeeping',
    subcategories: [
      {
        label: 'Bookkeeping & Statements',
        services: [
          { label: 'Monthly Accounting & Bookkeeping', href: '/accounting/bookkeeping' },
          { label: 'Bank Reconciliation',               href: '/accounting/bookkeeping' },
          { label: 'Accounts Finalisation',             href: '/accounting/financial-statements' },
          { label: 'Financial Statement Preparation',   href: '/accounting/financial-statements' },
        ]
      },
      {
        label: 'Cloud Software Setup',
        services: [
          { label: 'Tally Setup',                        href: '/accounting/bookkeeping' },
          { label: 'Zoho Books Setup',                   href: '/accounting/bookkeeping' },
        ]
      }
    ]
  },

  // ── 4. Virtual CFO ───────────────────────────────
  {
    id: 'cfo',
    label: 'Virtual CFO',
    type: 'mega',
    categories: [
      {
        id: 'financial-projections',
        label: 'Financial Planning & Projections',
        subcategories: [
          {
            label: 'Planning & Models',
            services: [
              { label: 'Projected Financial Statements',    href: '/cfo/financial-planning' },
              { label: 'Budgeting & Forecasting',           href: '/cfo/financial-planning' },
              { label: 'Annual Budget Preparation',         href: '/cfo/financial-planning' },
              { label: 'Business Plan & Financial Model',   href: '/cfo/financial-planning' },
              { label: 'Rolling Forecast & Scenario Planning', href: '/cfo/financial-planning' },
            ]
          }
        ]
      },
      {
        id: 'cash-flow',
        label: 'Cash Flow & Working Capital',
        subcategories: [
          {
            label: 'Cash & Liquidity management',
            services: [
              { label: 'Cash Flow Monitoring',             href: '/cfo/virtual-cfo' },
              { label: 'Receivable & Payable Ageing Review',href: '/cfo/virtual-cfo' },
              { label: 'Working Capital Planning',          href: '/cfo/virtual-cfo' },
            ]
          }
        ]
      },
      {
        id: 'banking-finance',
        label: 'Banking & Project Finance',
        subcategories: [
          {
            label: 'Bank Loan Documentation',
            services: [
              { label: 'Project Report for Bank Loan',    href: '/cfo/virtual-cfo' },
              { label: 'Cash Flow Projection',            href: '/cfo/financial-planning' },
              { label: 'CMA Data Preparation',            href: '/cfo/virtual-cfo' },
              { label: 'Drawing Power Calculation',       href: '/cfo/virtual-cfo' },
              { label: 'Monthly Stock Statement',         href: '/cfo/mis-reporting' },
              { label: 'MSME Loan & Subsidy Advisory',    href: '/cfo/virtual-cfo' },
            ]
          }
        ]
      },
      {
        id: 'fundraising',
        label: 'Fundraising & Banking',
        subcategories: [
          {
            label: 'Funding Advisory',
            services: [
              { label: 'Investor Deck Financial Support',           href: '/cfo/fundraising' },
              { label: 'Loan Proposal & Bank Presentation Support', href: '/cfo/fundraising' },
              { label: 'Banking Covenants & DSCR Review',           href: '/cfo/fundraising' },
            ]
          }
        ]
      },
      {
        id: 'mis-kpi',
        label: 'MIS & KPI Reporting',
        subcategories: [
          {
            label: 'Management reports',
            services: [
              { label: 'Monthly MIS & Profit & Loss Report',         href: '/cfo/mis-reporting' },
              { label: 'Finance KPI Dashboard',                       href: '/cfo/mis-reporting' },
              { label: 'Budget vs Actual Variance Report',            href: '/cfo/mis-reporting' },
              { label: 'Department / Branch Wise Profitability Report', href: '/cfo/mis-reporting' },
            ]
          }
        ]
      },
      {
        id: 'profitability',
        label: 'Profitability & Cost Control',
        subcategories: [
          {
            label: 'Margin Optimization',
            services: [
              { label: 'Cost Optimisation Review',         href: '/cfo/virtual-cfo' },
              { label: 'Pricing & Unit Economics Advisory',href: '/cfo/virtual-cfo' },
              { label: 'Product / Service Margin Analysis',href: '/cfo/virtual-cfo' },
            ]
          }
        ]
      },
      {
        id: 'internal-controls',
        label: 'Internal Controls & Risk',
        subcategories: [
          {
            label: 'SOPs & Risk Registry',
            services: [
              { label: 'Finance SOP Drafting',              href: '/cfo/virtual-cfo' },
              { label: 'Internal Control Review',           href: '/cfo/virtual-cfo' },
              { label: 'Risk Register & Compliance Tracker',href: '/cfo/virtual-cfo' },
            ]
          }
        ]
      },
      {
        id: 'audit-dd',
        label: 'Audit & Due Diligence Support',
        subcategories: [
          {
            label: 'Audit & Data Rooms',
            services: [
              { label: 'Audit Support & Schedules',        href: '/accounting/audit' },
              { label: 'Due Diligence Data Room Support',  href: '/cfo/fundraising' },
            ]
          }
        ]
      },
      {
        id: 'vcfo-retainer',
        label: 'Virtual CFO Retainer & Review',
        subcategories: [
          {
            label: 'Ongoing CFO Support',
            services: [
              { label: 'Finance Function Setup',            href: '/cfo/virtual-cfo' },
              { label: 'Monthly Management Review Meeting', href: '/cfo/virtual-cfo' },
              { label: 'Virtual CFO Monthly Retainer',      href: '/cfo/virtual-cfo' },
            ]
          }
        ]
      },
    ],
  },
];
