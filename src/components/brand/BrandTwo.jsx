"use client"
import React from 'react'

const row1Logos = [
  "/assets/images/logo/client-logo-1.png",
  "/assets/images/logo/client-logo-2.png",
  "/assets/images/logo/client-logo-3.png",
  "/assets/images/logo/client-logo-4.png",
  "/assets/images/logo/client-logo-5.png",
]

function BrandTwo() {
  return (
    <div className="rts-client-area brand-section">
      <div className="container">
        <div className="row text-center mb--40">
          <div className="col-12">
            <h3 className="brand-title">
              Trusted by employees from <span style={{ color: '#2c9295' }}>India's biggest brands</span>
            </h3>
          </div>
        </div>

        {/* 5 Logos Grid Row */}
        <div className="row g-4 justify-content-center align-items-center">
          {row1Logos.map((logo, idx) => (
            <div key={idx} className="col-lg-2 col-md-4 col-sm-6 col-6 d-flex justify-content-center">
              <div className="logo-capsule w-100">
                <img
                  src={logo}
                  alt={`Partner Logo ${idx + 1}`}
                  style={{ maxHeight: '55px', maxWidth: '100%', objectFit: 'contain' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .brand-section {
          background-color: #ffffff;
          padding: 60px 0;
          border-top: 1px solid #f3f4f6;
          border-bottom: 1px solid #f3f4f6;
        }
        .brand-title {
          font-size: 28px;
          font-weight: 600;
          color: #092147;
          font-family: var(--font-sans);
        }
        .logo-capsule {
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 16px 24px;
          background-color: #ffffff;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          display: flex;
          align-items: center;
          justify-content: center;
          height: 90px;
          transition: all 0.3s ease;
        }
        .logo-capsule:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.06) !important;
          border-color: #2c9295 !important;
        }
        @media (max-width: 767px) {
          .brand-section {
            padding: 40px 0;
          }
          .brand-title {
            font-size: 22px;
          }
          .logo-capsule {
            height: 70px;
            padding: 10px 15px;
          }
        }
      `}</style>
    </div>
  )
}

export default BrandTwo