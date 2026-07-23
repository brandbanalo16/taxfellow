"use client"
import React from 'react'
import ErrorBoundary from "@/components/ErrorBoundary";

const reviewsRow1 = [
  {
    name: "Akash",
    initials: "AK",
    avatarBg: "#3b71ca",
    review: "Filed my ITR-3 in under 30 minutes! The app pre-fills all your details via OTP, and for capital gains, you just upload your broker statement and it handles all the calculations. Super easy!"
  },
  {
    name: "Raman Rana",
    initials: "RR",
    avatarBg: "#c2410c",
    review: "Extremely grateful to the Tax Fello support team for their assistance in filing my ITR(U) with foreign assets. They ensured thorough checks and filed the right ITR-3 for me. Highly recommend Tax Fello!"
  },
  {
    name: "Radhika Maheshwari",
    initials: "RM",
    avatarBg: "#0f766e",
    review: "Very smooth filing experience. The capital gains auto-import made calculating my share market income effortless - I even discovered intraday income I hadn't accounted for. Great software!"
  },
  {
    name: "Anisha Singh",
    initials: "AS",
    avatarBg: "#b45309",
    review: "The features are really impressive - I filed my ITR in a record 10 minutes. Completely worth it! The user interface is clean, intuitive, and extremely fast."
  },
  {
    name: "Tanya Mehta",
    initials: "TM",
    avatarBg: "#6d28d9",
    review: "Tax Fello made tax filing actually enjoyable! It walked me through everything step-by-step - no jargon, no panic. Auto-imported my stock data and made the whole thing a breeze."
  },
  {
    name: "Dhanush",
    initials: "DH",
    avatarBg: "#0e7490",
    review: "My expert was outstanding - patient, proactive, and very clear in his guidance. He walked me through the ITR-U process, verified every challan, and handled portal issues without any stress."
  },
  {
    name: "Priya Sharma",
    initials: "PS",
    avatarBg: "#db2777",
    review: "Superb virtual CFO support. Helped our startup streamline financial forecasting, budgets, and investor deck preparations in a highly professional manner."
  },
  {
    name: "Rohan Dev",
    initials: "RD",
    avatarBg: "#2563eb",
    review: "Highly recommend their company registration service. Handled document collection and legal filings without any delays. The dashboard update process is excellent."
  },
  {
    name: "Sneha Gupta",
    initials: "SG",
    avatarBg: "#059669",
    review: "Excellent online tax filing and GST services. Handled complex reconciliation and matched input tax credit accurately. Saved us hours of manual math."
  },
  {
    name: "Vikram Malhotra",
    initials: "VM",
    avatarBg: "#4f46e5",
    review: "Great experience getting DPIIT recognition for our tech startup. Clear advice on tax exemption requirements and process timelines."
  }
]

const reviewsRow2 = [
  {
    name: "Neha Patel",
    initials: "NP",
    avatarBg: "#d97706",
    review: "Professional company registration consultants india. Incorporated our private limited company within a week with zero hassles or hidden fees."
  },
  {
    name: "Amit Sharma",
    initials: "AS",
    avatarBg: "#0d9488",
    review: "The GST notice reply they drafted was accurate and cleared our pending tax assessment smoothly. Their compliance tracking system is first-rate."
  },
  {
    name: "Pooja Rao",
    initials: "PR",
    avatarBg: "#7c3aed",
    review: "Wonderful monthly bookkeeping. Transparent accounts finalization on Zoho Books with zero errors. The MIS dashboard gives real-time visibility."
  },
  {
    name: "Sandeep Singh",
    initials: "SS",
    avatarBg: "#e11d48",
    review: "Fantastic team. Handled ESOP calculations and foreign asset schedule disclosures perfectly. Kept us fully compliant with RBI and FEMA guidelines."
  },
  {
    name: "Kavita Nair",
    initials: "KN",
    avatarBg: "#059669",
    review: "Super responsive customer support. Addressed our business queries regarding ESIC & PF filings immediately. Excellent compliance dashboard."
  },
  {
    name: "Manish Joshi",
    initials: "MJ",
    avatarBg: "#2563eb",
    review: "Accurate tax planning that saved our firm substantial money this financial year. Very knowledgeable CAs who take interest in your business."
  },
  {
    name: "Divya Pillai",
    initials: "DP",
    avatarBg: "#db2777",
    review: "Simple, easy onboarding. Tax Fello provides excellent bookkeeping tools, payroll support, and virtual CFO retainer services for scale."
  },
  {
    name: "Rahul Verma",
    initials: "RV",
    avatarBg: "#4f46e5",
    review: "Professional advice on MSME loans and bank project reports. Got our business financing approved quickly with precise CMA data reports."
  },
  {
    name: "Shweta Iyer",
    initials: "SI",
    avatarBg: "#d97706",
    review: "Reliable startup registration and compliance company. Guided us through corporate filings, compliance track records, and TDS returns seamlessly."
  },
  {
    name: "Deepak Goel",
    initials: "DG",
    avatarBg: "#0e7490",
    review: "Top-notch TDS return filing and payroll management. Keeps our corporate operations stress-free. Very transparent pricing structure."
  }
]

function TestimonialTwo() {
  return (
    <ErrorBoundary>
      <div className="rts-client-review-two rts-section-gapTop" style={{ padding: '100px 0', backgroundColor: '#ffffff', overflow: 'hidden' }}>
        <div className="container">
          <div className="row text-center mb--60">
            <div className="col-12">
              <h2 className="title" style={{ fontSize: '40px', fontWeight: '700', color: '#092147', marginBottom: '15px', fontFamily: 'var(--font-sans)' }}>
                Loved by over <span style={{ color: '#2c9295' }}>8M+ tax payers</span>
              </h2>
              <span style={{ fontSize: '18px', color: '#5F6368', fontWeight: '500', fontFamily: 'var(--font-sans)' }}>
                ₹1766 Cr+ Refunds delivered last year
              </span>
            </div>
          </div>
        </div>

        {/* Double Row Testimonial Marquee */}
        <div className="d-flex flex-column gap-5 testimonial-marquee" style={{ width: '100%' }}>
          
          {/* Row 1: Sliding Left (Right to Left) */}
          <div className="review-marquee-wrapper" style={{ display: 'flex', overflow: 'hidden', width: '100%' }} onMouseEnter={() => { const tracks = document.querySelectorAll('.review-marquee-track-rtl, .review-marquee-track-ltr'); tracks.forEach(t => t.style.animationPlayState = 'paused'); }} onMouseLeave={() => { const tracks = document.querySelectorAll('.review-marquee-track-rtl, .review-marquee-track-ltr'); tracks.forEach(t => t.style.animationPlayState = 'running'); }}>
            <div className="review-marquee-track-rtl" style={{ display: 'flex', gap: '30px', animation: 'scrollRtlReviews 38s linear infinite' }}>
              {[...reviewsRow1, ...reviewsRow1].map((item, idx) => (
                <div 
                  key={idx} 
                  className="review-card" 
                  style={{ 
                    backgroundColor: '#ffffff', 
                    border: '1px solid #dadce0', 
                    borderRadius: '24px',
                    padding: '32px',
                    boxShadow: '0 1px 2px 0 rgba(60,64,67,0.15), 0 2px 6px 2px rgba(60,64,67,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    width: '420px',
                    flexShrink: 0,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  <div>
                    {/* Top Row: Stars and Google Branding */}
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div className="star-icon" style={{ color: '#f59e0b', fontSize: '18px', display: 'flex', gap: '3px' }}>
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <div className="d-flex align-items-center" style={{ gap: '8px' }}>
                        <img 
                          src="/assets/images/logo/logo-google.svg" 
                          alt="Google Logo" 
                          style={{ width: '18px', height: '18px', display: 'block' }} 
                        />
                        <span style={{ fontSize: '15px', fontWeight: '500', color: '#5f6368', fontFamily: 'var(--font-sans)' }}>Google</span>
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="disc" style={{ fontSize: '15px', fontWeight: '400', color: '#3c4043', lineHeight: '1.6', margin: '0 0 24px 0', fontFamily: 'var(--font-sans)' }}>
                      “{item.review}”
                    </p>
                  </div>

                  {/* Profile Section */}
                  <div className="d-flex align-items-center gap-3">
                    <div 
                      className="d-flex align-items-center justify-content-center text-white" 
                      style={{ 
                        width: '44px', 
                        height: '44px', 
                        borderRadius: '50%', 
                        backgroundColor: item.avatarBg,
                        fontSize: '15px',
                        fontWeight: '600',
                        fontFamily: 'var(--font-sans)'
                      }}
                    >
                      {item.initials}
                    </div>
                    <div className="d-flex align-items-center flex-wrap">
                      <h6 className="title m-0" style={{ fontSize: '16px', fontWeight: '600', color: '#202124', fontFamily: 'var(--font-sans)' }}>
                        {item.name}
                      </h6>
                      <span 
                        style={{ 
                          fontSize: '12px', 
                          fontWeight: '500', 
                          color: '#0f5132', 
                          backgroundColor: '#d1e7dd', 
                          padding: '4px 10px', 
                          borderRadius: '4px', 
                          marginLeft: '12px',
                          display: 'inline-block',
                          fontFamily: 'var(--font-sans)'
                        }}
                      >
                        Verified filer
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Sliding Right (Left to Right) */}
          <div className="review-marquee-wrapper" style={{ display: 'flex', overflow: 'hidden', width: '100%' }}>
            <div className="review-marquee-track-ltr" style={{ display: 'flex', gap: '30px', animation: 'scrollLtrReviews 38s linear infinite' }}>
              {[...reviewsRow2, ...reviewsRow2].map((item, idx) => (
                <div 
                  key={idx} 
                  className="review-card" 
                  style={{ 
                    backgroundColor: '#ffffff', 
                    border: '1px solid #dadce0', 
                    borderRadius: '24px',
                    padding: '32px',
                    boxShadow: '0 1px 2px 0 rgba(60,64,67,0.15), 0 2px 6px 2px rgba(60,64,67,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    width: '420px',
                    flexShrink: 0,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  <div>
                    {/* Top Row: Stars and Google Branding */}
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div className="star-icon" style={{ color: '#f59e0b', fontSize: '18px', display: 'flex', gap: '3px' }}>
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <div className="d-flex align-items-center" style={{ gap: '8px' }}>
                        <img 
                          src="/assets/images/logo/logo-google.svg" 
                          alt="Google Logo" 
                          style={{ width: '18px', height: '18px', display: 'block' }} 
                        />
                        <span style={{ fontSize: '15px', fontWeight: '500', color: '#5f6368', fontFamily: 'var(--font-sans)' }}>Google</span>
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="disc" style={{ fontSize: '15px', fontWeight: '400', color: '#3c4043', lineHeight: '1.6', margin: '0 0 24px 0', fontFamily: 'var(--font-sans)' }}>
                      “{item.review}”
                    </p>
                  </div>

                  {/* Profile Section */}
                  <div className="d-flex align-items-center gap-3">
                    <div 
                      className="d-flex align-items-center justify-content-center text-white" 
                      style={{ 
                        width: '44px', 
                        height: '44px', 
                        borderRadius: '50%', 
                        backgroundColor: item.avatarBg,
                        fontSize: '15px',
                        fontWeight: '600',
                        fontFamily: 'var(--font-sans)'
                      }}
                    >
                      {item.initials}
                    </div>
                    <div className="d-flex align-items-center flex-wrap">
                      <h6 className="title m-0" style={{ fontSize: '16px', fontWeight: '600', color: '#202124', fontFamily: 'var(--font-sans)' }}>
                        {item.name}
                      </h6>
                      <span 
                        style={{ 
                          fontSize: '12px', 
                          fontWeight: '500', 
                          color: '#0f5132', 
                          backgroundColor: '#d1e7dd', 
                          padding: '4px 10px', 
                          borderRadius: '4px', 
                          marginLeft: '12px',
                          display: 'inline-block',
                          fontFamily: 'var(--font-sans)'
                        }}
                      >
                        Verified filer
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <style jsx global>{`
          @keyframes scrollLtrReviews {
            0% {
              transform: translateX(calc(-450px * 10));
            }
            100% {
              transform: translateX(0);
            }
          }
          @keyframes scrollRtlReviews {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-450px * 10));
            }
          }
          .testimonial-marquee:hover .review-marquee-track-rtl,
.testimonial-marquee:hover .review-marquee-track-ltr,
.review-marquee-wrapper:hover .review-marquee-track-rtl,
.review-marquee-wrapper:hover .review-marquee-track-ltr,
.review-marquee-track-rtl:hover,
.review-marquee-track-ltr:hover {
  animation-play-state: paused !important;
}
          .review-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 4px 20px 0 rgba(60,64,67,0.25) !important;
          }
        `}</style>
      </div>
    </ErrorBoundary>
  )
}

export default TestimonialTwo