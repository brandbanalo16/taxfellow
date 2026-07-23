"use client"
import React from 'react'

const row1Logos = [
  "/assets/images/logo/logo-1.svg",
  "/assets/images/logo/logo-2.svg",
  "/assets/images/logo/logo-3.svg",
  "/assets/images/logo/logo-4.svg",
  "/assets/images/logo/logo-5.svg",
  "/assets/images/logo/logo-6.svg",
  "/assets/images/logo/logo-7.svg",
  "/assets/images/logo/logo-8.svg",
  "/assets/images/logo/logo-9.svg",
  "/assets/images/logo/logo-10.svg",
  "/assets/images/logo/logo-1.svg",
  "/assets/images/logo/logo-3.svg",
  "/assets/images/logo/logo-5.svg",
  "/assets/images/logo/logo-7.svg",
  "/assets/images/logo/logo-9.svg"
]

const row2Logos = [
  "/assets/images/logo/logo-10.svg",
  "/assets/images/logo/logo-9.svg",
  "/assets/images/logo/logo-8.svg",
  "/assets/images/logo/logo-7.svg",
  "/assets/images/logo/logo-6.svg",
  "/assets/images/logo/logo-5.svg",
  "/assets/images/logo/logo-4.svg",
  "/assets/images/logo/logo-3.svg",
  "/assets/images/logo/logo-2.svg",
  "/assets/images/logo/logo-1.svg",
  "/assets/images/logo/logo-8.svg",
  "/assets/images/logo/logo-6.svg",
  "/assets/images/logo/logo-4.svg",
  "/assets/images/logo/logo-2.svg",
  "/assets/images/logo/logo-10.svg"
]

function BrandTwo() {
  return (
    <div className="rts-client-area ptb--80" style={{ backgroundColor: '#ffffff', padding: '60px 0', borderTop: '1px solid #f3f4f6', borderBottom: '1px solid #f3f4f6', overflow: 'hidden' }}>
      <div className="container">
        <div className="row text-center mb--40">
          <div className="col-12">
            <h3 style={{ fontSize: '28px', fontWeight: '600', color: '#092147', fontFamily: 'var(--font-sans)' }}>
              Trusted by employees from <span style={{ color: '#2c9295' }}>India's biggest brands</span>
            </h3>
          </div>
        </div>
      </div>

      {/* Double Row Marquee Wrapper */}
      <div className="d-flex flex-column gap-4" style={{ width: '100%' }}>
        
        {/* Row 1: Left to Right */}
        <div className="logo-marquee-wrapper" style={{ display: 'flex', overflow: 'hidden', width: '100%' }}>
          <div className="logo-marquee-track-ltr" style={{ display: 'flex', gap: '30px', animation: 'scrollLtr 35s linear infinite' }}>
            {[...row1Logos, ...row1Logos].map((logo, idx) => (
              <div 
                key={idx} 
                className="logo-capsule"
                style={{ 
                  border: '1px solid #e5e7eb', 
                  borderRadius: '50px', 
                  padding: '12px 32px', 
                  backgroundColor: '#ffffff', 
                  boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '160px',
                  height: '60px',
                  flexShrink: 0
                }}
              >
                <img 
                  src={logo} 
                  alt="Partner Logo" 
                  style={{ maxHeight: '32px', maxWidth: '100%', objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>



      </div>

      <style jsx global>{`
        @keyframes scrollLtr {
          0% {
            transform: translateX(calc(-190px * 15));
          }
          100% {
            transform: translateX(0);
          }
        }
        @keyframes scrollRtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-190px * 15));
          }
        }
        .logo-marquee-wrapper:hover .logo-marquee-track-ltr,
        .logo-marquee-wrapper:hover .logo-marquee-track-rtl {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default BrandTwo