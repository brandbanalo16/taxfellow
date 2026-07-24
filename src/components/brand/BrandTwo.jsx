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
    <div className="rts-client-area ptb--80" style={{ backgroundColor: '#ffffff', padding: '60px 0', borderTop: '1px solid #f3f4f6', borderBottom: '1px solid #f3f4f6' }}>
      <div className="container">
        <div className="row text-center mb--40">
          <div className="col-12">
            <h3 style={{ fontSize: '28px', fontWeight: '600', color: '#092147', fontFamily: 'var(--font-sans)' }}>
              Trusted by employees from <span style={{ color: '#2c9295' }}>India's biggest brands</span>
            </h3>
          </div>
        </div>

        {/* 5 Logos Grid Row */}
        <div className="row g-4 justify-content-center align-items-center">
          {row1Logos.map((logo, idx) => (
            <div key={idx} className="col-lg-2 col-md-4 col-sm-6 col-6 d-flex justify-content-center">
              <div
                className="logo-capsule w-100"
                style={{
                  border: '1px solid #e5e7eb',
                  borderRadius: '16px',
                  padding: '16px 24px',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '90px',
                  transition: 'all 0.3s ease'
                }}
              >
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
        .logo-capsule:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.06) !important;
          border-color: #2c9295 !important;
        }
      `}</style>
    </div>
  )
}

export default BrandTwo