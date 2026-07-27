/**
 * MEGA MENU DATA
 * ─────────────────────────────────────────────────
 * Single source of truth for all navigation content.
 * Individual service links use /services/[slug]
 * Category pages use /services/[main-slug]/[sub-slug]
 * Main pages use /services/[main-slug]
 * ─────────────────────────────────────────────────
 */

// Helper: build a service link using the universal /services/[slug] route
const svc = (label, slug) => ({ label, href: `/services/${slug}` });

export const MEGA_MENU_DATA = [
  // ── 1. Registration & Licences ───────────────────
  {
    id: 'registration',
    label: 'Registration & Licences',
    viewAllHref: '/services/registration-and-licences',
    type: 'mega',
    categories: [
      {
        id: 'business-incorporation',
        label: 'Business Incorporation',
        href: '/services/registration-and-licences/business-incorporation',
        subcategories: [
          {
            label: 'Popular Company Setup',
            services: [
              svc('Private Limited Company Registration', 'private-limited-company-registration'),
              svc('One Person Company Registration',      'one-person-company-registration'),
              svc('Limited Liability Partnership (LLP)',  'limited-liability-partnership-registration'),
              svc('Partnership Firm Registration',        'partnership-firm-registration'),
              svc('Sole Proprietorship Setup',            'sole-proprietorship-setup'),
            ]
          },
          {
            label: 'Special Entities',
            services: [
              svc('Producer Company Registration',        'producer-company-registration'),
              svc('Public Limited Company Registration',  'public-limited-company-registration'),
              svc('Section 8 Company Registration',       'section-8-company-registration'),
              svc('Section 8 NGO Setup',                  'section-8-ngo-setup'),
              svc('Society Registration',                 'society-registration'),
              svc('Trust Registration',                   'trust-registration'),
            ]
          },
          {
            label: 'Foreign & Subsidiary',
            services: [
              svc('Indian Subsidiary Registration',       'indian-subsidiary-registration'),
              svc('Foreign Entity Setup',                 'foreign-entity-setup'),
              svc('AD Code Registration Support',         'ad-code-registration-support'),
              svc('PF & ESIC Registration',               'pf-and-esic-registration'),
            ]
          }
        ]
      },
      {
        id: 'startup-recognition',
        label: 'Startup Recognition',
        href: '/services/registration-and-licences/startup-recognition',
        subcategories: [
          {
            label: 'Government Schemes',
            services: [
              svc('Startup India DPIIT Recognition',      'startup-india-dpiit-recognition'),
              svc('DPIIT Registration',                   'dpiit-registration'),
              svc('80IAC Tax Exemption',                  '80iac'),
              svc('Project Report Preparation',           'project-report-preparation'),
            ]
          }
        ]
      },
      {
        id: 'gst',
        label: 'GST Registration & Compliance',
        href: '/services/registration-and-licences/gst-registration-and-compliance',
        subcategories: [
          {
            label: 'GST Registration',
            services: [
              svc('GST Registration',                     'gst-registration'),
              svc('Additional Place of Business GST',     'additional-place-of-business-gst-registration'),
              svc('GST Registration Amendment',           'gst-registration-amendment'),
              svc('GST Cancellation',                     'gst-cancellation'),
              svc('GST Revocation of Cancellation',       'gst-revocation-of-cancellation'),
            ]
          },
          {
            label: 'GST Filing & Returns',
            services: [
              svc('GST Return Filing',                    'gst-return-filing'),
              svc('GST Annual Return (GSTR-9)',           'gst-annual-return-gstr-9'),
              svc('GST LUT Filing for Exporters',         'gst-lut-filing-for-exporters'),
              svc('GST Reconciliation & ITC Matching',    'gst-reconciliation-and-itc-matching'),
              svc('GST Appeal Filing',                    'gst-appeal-filing'),
              svc('GST Notice Reply',                     'gst-notice-reply'),
              svc('GST Refund Application',               'gst-refund-application'),
            ]
          }
        ]
      },
      {
        id: 'food-trade',
        label: 'Food, Trade & IP Licences',
        href: '/services/registration-and-licences/food-trade-ip-licences',
        subcategories: [
          {
            label: 'FSSAI & Food Safety',
            services: [
              svc('FSSAI Basic Registration',             'fssai-basic-registration'),
              svc('FSSAI Central Licence',                'fssai-central-licence'),
              svc('FSSAI State Licence',                  'fssai-state-licence'),
            ]
          },
          {
            label: 'Trade & Business',
            services: [
              svc('Barcode Registration',                 'barcode-registration'),
              svc('Trade Licence Registration',           'trade-licence-registration'),
              svc('ISO Certification',                    'iso-certification'),
              svc('MSME Registration',                    'msme-registration'),
              svc('Import Export Code (IEC)',             'import-export-code-registration'),
              svc('RCMC Registration',                    'rcmc-registration'),
              svc('Digital Signature Certificate (DSC)',  'digital-signature-certificate-dsc'),
            ]
          },
          {
            label: 'IP & Brand Protection',
            services: [
              svc('Trademark Registration',               'trademark'),
              svc('TM Objection Reply',                   'objection-reply'),
              svc('Copyright Registration',               'copyright-registration'),
              svc('Patent & Design Registration',         'patent-design'),
            ]
          }
        ]
      },
      {
        id: 'state-tax',
        label: 'State & Labour Registrations',
        href: '/services/registration-and-licences/state-labour-registrations',
        subcategories: [
          {
            label: 'State Tax Setup',
            services: [
              svc('Professional Tax Registration',        'professional-tax-registration'),
              svc('Shop & Establishment Registration',    'shop-and-establishment-registration'),
            ]
          }
        ]
      },
      {
        id: 'ngo-trust',
        label: 'NGO & Charitable Trust',
        href: '/services/registration-and-licences/ngo-charitable-trust',
        subcategories: [
          {
            label: 'NGO Registrations & Grants',
            services: [
              svc('NGO Darpan Registration',              'ngo-darpan-registration'),
              svc('12A & 80G Registration',               '12a-and-80g-registration'),
              svc('CSR-1 Registration',                   'csr-1-registration'),
              svc('FCRA Registration',                    'fcra-registration'),
              svc('Tax / Grant Registrations',            'tax-grant-registrations'),
              svc('NGO Annual Compliance',                'ngo-annual-compliance'),
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
    viewAllHref: '/services/compliances',
    type: 'mega',
    categories: [
      {
        id: 'income-tax',
        label: 'Income Tax Filing',
        href: '/services/compliances/income-tax-filing',
        subcategories: [
          {
            label: 'Business & Corporate Returns',
            services: [
              svc('Corporate Income Tax Return Filing',       'corporate-income-tax-return-filing'),
              svc('ITR Filing for Business / Proprietorship', 'itr-filing-for-business-or-proprietorship'),
              svc('ITR Filing for LLP / Partnership Firm',    'itr-filing-for-llp-or-partnership-firm'),
              svc('ITR Filing for NGO / Trust',               'itr-filing-for-ngo-or-trust'),
            ]
          },
          {
            label: 'Personal & NRI Tax',
            services: [
              svc('ITR Filing for Salaried Individual',       'itr-filing-for-salaried-individual'),
              svc('NRI Income Tax Return Filing',             'nri-income-tax-return-filing'),
              svc('Income Tax Notice Reply',                  'income-tax-notice-reply'),
              svc('Income Tax Rectification Request',         'income-tax-rectification-request'),
            ]
          },
          {
            label: 'TDS / TCS Filing',
            services: [
              svc('TDS Return Filing',                        'tds-return-filing'),
              svc('TCS Return Filing',                        'tcs-return-filing'),
              svc('Form 16 & Form 16A Generation',            'form-16-and-form-16a-generation'),
            ]
          }
        ]
      },
      {
        id: 'roc-mca',
        label: 'ROC / MCA Compliance',
        href: '/services/compliances/roc-mca-compliance',
        subcategories: [
          {
            label: 'Annual Filings',
            services: [
              svc('Company Annual Filing (AOC-4 & MGT-7)',    'company-annual-filing-aoc-4-and-mgt-7'),
              svc('LLP Annual Filing (Form-11 & Form-8)',     'llp-annual-filing-form-11-and-form-8'),
              svc('OPC Annual Compliance',                    'opc-annual-compliance'),
              svc('Section 8 Company Annual Compliance',      'section-8-company-annual-compliance'),
            ]
          },
          {
            label: 'Setup & Event Filings',
            services: [
              svc('Auditor Appointment (ADT-1)',              'auditor-appointment-filing-adt-1'),
              svc('Commencement of Business (INC-20A)',       'commencement-of-business-filing-inc-20a'),
              svc('Company Strike Off',                       'company-strike-off'),
            ]
          },
          {
            label: 'Corporate Changes',
            services: [
              svc('Director Appointment / Resignation',       'director-appointment-or-resignation-dir-12'),
              svc('Director KYC (DIR-3 KYC)',                 'director-kyc-dir-3-kyc'),
              svc('Increase Authorised Share Capital',        'increase-authorised-share-capital-sh-7'),
              svc('Registered Office Change',                 'registered-office-change-inc-22'),
              svc('Share Allotment Filing (PAS-3)',           'share-allotment-filing-pas-3'),
            ]
          }
        ]
      },
      {
        id: 'payroll-labour',
        label: 'Payroll & Labour Compliance',
        href: '/services/compliances/payroll-labour-compliance',
        subcategories: [
          {
            label: 'Payroll Processing',
            services: [
              svc('Monthly Payroll Processing',               'monthly-payroll-processing'),
              svc('Salary Slip Generation',                   'salary-slip-generation'),
            ]
          },
          {
            label: 'PF, ESI & PT',
            services: [
              svc('Monthly PF & ESIC Return Filing',          'monthly-pf-and-esic-return-filing'),
              svc('Professional Tax Return Filing',           'professional-tax-return-filing'),
              svc('HR Policy & Employee Documentation',       'hr-policy-and-employee-document-drafting'),
              svc('Labour Law Compliance Review',             'labour-law-compliance-review'),
            ]
          }
        ]
      },
      {
        id: 'legal-docs',
        label: 'Legal & Corporate Drafting',
        href: '/services/compliances/legal-corporate-drafting',
        subcategories: [
          {
            label: 'Agreements & Deeds',
            services: [
              svc('Founder Agreement Drafting',               'founder-agreement-drafting'),
              svc('LLP Agreement Drafting',                   'llp-agreement-drafting'),
              svc('Partnership Deed Drafting',                'partnership-deed-drafting'),
              svc('Service Agreement Drafting',               'service-agreement-drafting'),
              svc('Non-Disclosure Agreement (NDA)',           'non-disclosure-agreement-nda'),
              svc('Rent Agreement & NOC Drafting',            'rent-agreement-and-noc-drafting'),
            ]
          },
          {
            label: 'Legal Notices & Resolutions',
            services: [
              svc('Legal Notice Drafting',                    'legal-notice-drafting'),
              svc('Reply to Legal Notice',                    'reply-to-legal-notice'),
              svc('Board Resolution Drafting',                'board-resolution-drafting'),
              svc('FEMA & FDI Reporting Support',             'fema-and-fdi-reporting-support'),
            ]
          }
        ]
      },
    ],
  },

  // ── 3. Bookkeeping & Accounting ──────────────────
  {
    id: 'bookkeeping',
    label: 'Bookkeeping & Accounting',
    viewAllHref: '/services/bookkeeping-and-accounting',
    type: 'simple',
    heading: 'Accounting & Bookkeeping',
    headingHref: '/services/bookkeeping-and-accounting/accounting-and-bookkeeping',
    subcategories: [
      {
        label: 'Bookkeeping & Records',
        services: [
          svc('Monthly Accounting & Bookkeeping',             'monthly-accounting-and-bookkeeping'),
          svc('Bank Reconciliation',                          'bank-reconciliation'),
          svc('Accounts Finalisation',                        'accounts-finalisation'),
          svc('Financial Statement Preparation',              'financial-statement-preparation'),
        ]
      },
      {
        label: 'Audit & Due Diligence',
        services: [
          svc('Audit Support & Schedules',                    'audit-support-and-schedules'),
          svc('Due Diligence Data Room Support',              'due-diligence-data-room-support'),
        ]
      },
      {
        label: 'Cloud Software Setup',
        services: [
          svc('Tally / Zoho Books Setup',                     'tally-or-zoho-books-setup'),
        ]
      }
    ]
  },

  // ── 4. Virtual CFO ───────────────────────────────
  {
    id: 'cfo',
    label: 'Virtual CFO',
    viewAllHref: '/services/virtual-cfo',
    type: 'mega',
    categories: [
      {
        id: 'financial-planning',
        label: 'Financial Planning',
        href: '/services/virtual-cfo/financial-planning',
        subcategories: [
          {
            label: 'Budgets & Models',
            services: [
              svc('Projected Financial Statements',            'projected-financial-statements'),
              svc('Annual Budget Preparation',                 'annual-budget-preparation'),
              svc('Business Plan & Financial Model',           'business-plan-and-financial-model'),
              svc('Rolling Forecast & Scenario Planning',      'rolling-forecast-and-scenario-planning'),
            ]
          }
        ]
      },
      {
        id: 'cash-flow',
        label: 'Cash Flow & Working Capital',
        href: '/services/virtual-cfo/cash-flow-working-capital',
        subcategories: [
          {
            label: 'Liquidity Management',
            services: [
              svc('Cash Flow Monitoring',                      'cash-flow-monitoring'),
              svc('Receivable & Payable Ageing Review',        'receivable-and-payable-ageing-review'),
              svc('Working Capital Planning',                  'working-capital-planning'),
            ]
          }
        ]
      },
      {
        id: 'banking-finance',
        label: 'Banking & Project Finance',
        href: '/services/virtual-cfo/banking-project-finance',
        subcategories: [
          {
            label: 'Bank Loan Support',
            services: [
              svc('Project Report for Bank Loan',              'project-report-for-bank-loan'),
              svc('Cash Flow Projection',                      'cash-flow-projection'),
              svc('CMA Data Preparation',                      'cma-data-preparation'),
              svc('Drawing Power Calculation',                 'drawing-power-calculation'),
              svc('Monthly Stock Statement',                   'monthly-stock-statement'),
              svc('MSME Loan & Subsidy Advisory',              'msme-loan-and-subsidy-advisory'),
            ]
          }
        ]
      },
      {
        id: 'fundraising',
        label: 'Fundraising & Investor Support',
        href: '/services/virtual-cfo/fundraising-investor-support',
        subcategories: [
          {
            label: 'Investor & Bank Presentations',
            services: [
              svc('Investor Deck Financial Support',           'investor-deck-financials-support'),
              svc('Loan Proposal & Bank Presentation',         'loan-proposal-and-bank-presentation-support'),
              svc('Banking Covenants & DSCR Review',           'banking-covenants-and-dscr-review'),
            ]
          }
        ]
      },
      {
        id: 'mis-kpi',
        label: 'MIS & KPI Reporting',
        href: '/services/virtual-cfo/mis-kpi-reporting',
        subcategories: [
          {
            label: 'Management Reports',
            services: [
              svc('Monthly MIS & Profit & Loss Report',        'monthly-mis-and-profit-loss-report'),
              svc('Finance KPI Dashboard',                     'finance-kpi-dashboard'),
              svc('Budget vs Actual Variance Report',          'budget-vs-actual-variance-report'),
              svc('Dept / Branch Profitability Report',        'department-branch-wise-profitability-report'),
            ]
          }
        ]
      },
      {
        id: 'profitability',
        label: 'Profitability & Cost Control',
        href: '/services/virtual-cfo/profitability-cost-control',
        subcategories: [
          {
            label: 'Margin Optimization',
            services: [
              svc('Cost Optimisation Review',                  'cost-optimisation-review'),
              svc('Pricing & Unit Economics Advisory',         'pricing-and-unit-economics-advisory'),
              svc('Product / Service Margin Analysis',         'product-service-margin-analysis'),
            ]
          }
        ]
      },
      {
        id: 'internal-controls',
        label: 'Internal Controls & Risk',
        href: '/services/virtual-cfo/internal-controls-risk',
        subcategories: [
          {
            label: 'SOPs & Risk Registry',
            services: [
              svc('Finance SOP Drafting',                      'finance-sop-drafting'),
              svc('Internal Control Review',                   'internal-control-review'),
              svc('Risk Register & Compliance Tracker',        'risk-register-and-compliance-tracker'),
            ]
          }
        ]
      },
      {
        id: 'vcfo-retainer',
        label: 'Virtual CFO Retainer',
        href: '/services/virtual-cfo/virtual-cfo-retainer',
        subcategories: [
          {
            label: 'Ongoing CFO Support',
            services: [
              svc('Finance Function Setup',                    'finance-function-setup'),
              svc('Monthly Management Review Meeting',         'monthly-management-review-meeting'),
              svc('Virtual CFO Monthly Retainer',              'virtual-cfo-monthly-retainer'),
            ]
          }
        ]
      },
    ],
  },
];
