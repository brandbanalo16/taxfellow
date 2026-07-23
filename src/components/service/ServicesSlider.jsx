"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Link from 'next/link';

const servicesList = [
  { title: "Business Incorporation", icon: "fa-building", image: "/assets/images/service/10.jpg" },
  { title: "Startup Recognition", icon: "fa-award", image: "/assets/images/service/11.jpg" },
  { title: "GST Registration & Compliance", icon: "fa-file-invoice-dollar", image: "/assets/images/service/12.jpg" },
  { title: "Food, Trade & IP Licences", icon: "fa-certificate", image: "/assets/images/service/13.jpg" },
  { title: "State & Labour Registrations", icon: "fa-users-cog", image: "/assets/images/service/10.jpg" },
  { title: "NGO & Charitable Trust", icon: "fa-hand-holding-heart", image: "/assets/images/service/11.jpg" },
  { title: "Income Tax Filing", icon: "fa-calculator", image: "/assets/images/service/12.jpg" },
  { title: "ROC / MCA Compliance", icon: "fa-gavel", image: "/assets/images/service/13.jpg" },
  { title: "Payroll & Labour Compliance", icon: "fa-money-check-alt", image: "/assets/images/service/10.jpg" },
  { title: "Legal & Corporate Drafting", icon: "fa-file-signature", image: "/assets/images/service/11.jpg" },
  { title: "Accounting & Bookkeeping", icon: "fa-book", image: "/assets/images/service/12.jpg" },
  { title: "Financial Planning", icon: "fa-piggy-bank", image: "/assets/images/service/13.jpg" },
  { title: "Cash Flow & Working Capital", icon: "fa-funnel-dollar", image: "/assets/images/service/10.jpg" },
  { title: "Banking & Project Finance", icon: "fa-university", image: "/assets/images/service/11.jpg" },
  { title: "Fundraising & Investor Support", icon: "fa-coins", image: "/assets/images/service/12.jpg" },
  { title: "MIS & KPI Reporting", icon: "fa-chart-bar", image: "/assets/images/service/13.jpg" },
  { title: "Profitability & Cost Control", icon: "fa-percentage", image: "/assets/images/service/10.jpg" },
  { title: "Internal Controls & Risk", icon: "fa-shield-alt", image: "/assets/images/service/11.jpg" },
  { title: "Virtual CFO Retainer", icon: "fa-user-tie", image: "/assets/images/service/12.jpg" }
]

function ServicesSlider() {
  return (
    <div className="rts-service-area rts-section-gap bg-service-h2 pb--120" id="services-slider" style={{ padding: '100px 0 120px 0', backgroundColor: '#FAFBFD', marginTop: '80px' }}>
      <div className="container">
        <div className="row mb--50">
          <div className="col-12 text-center">
            <span style={{ fontSize: '16px', color: '#2c9295', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '10px' }}>Our Main Categories</span>
            <h2 className="title" style={{ fontSize: '38px', fontWeight: '700', color: '#092147' }}>
              Business Registration & Compliance Services
            </h2>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ paddingLeft: '5%', paddingRight: '5%' }}>
        <div className="row">
          <div className="col-12" style={{ overflow: 'visible' }}>
            <div className="swiper mySwiperh2_Services" style={{ overflow: 'visible' }}>
              <Swiper
                modules={[Navigation, Scrollbar, A11y, Autoplay]}
                className="mySwiperh2_Services"
                speed={800}
                slidesPerView={3}
                spaceBetween={35}
                loop={true}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                breakpoints={{
                  1200: { slidesPerView: 3 },
                  992: { slidesPerView: 2 },
                  768: { slidesPerView: 2 },
                  0: { slidesPerView: 1 }
                }}
              >
                {servicesList.map((item, idx) => (
                  <SwiperSlide key={idx} style={{ overflow: 'visible', paddingBottom: '30px' }}>
                    <div 
                      className="service-image-card" 
                      style={{ 
                        position: 'relative', 
                        height: '380px', 
                        borderRadius: '20px', 
                        overflow: 'visible',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                        transition: 'transform 0.3s ease'
                      }}
                    >
                      {/* Background Image with Overlay */}
                      <div 
                        style={{ 
                          backgroundImage: `url(${item.image})`, 
                          backgroundSize: 'cover', 
                          backgroundPosition: 'center', 
                          borderRadius: '20px', 
                          height: '100%', 
                          width: '100%',
                          position: 'relative'
                        }}
                      >
                        <div 
                          style={{ 
                            position: 'absolute', 
                            inset: 0, 
                            background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)', 
                            borderRadius: '20px'
                          }} 
                        />
                      </div>

                      {/* Icon Box (Offset with red border accents) */}
                      <div 
                        className="service-icon-box"
                        style={{ 
                          width: '68px', 
                          height: '68px', 
                          backgroundColor: '#ffffff', 
                          borderBottom: '4px solid #D21515', 
                          borderRight: '4px solid #D21515', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          position: 'absolute', 
                          bottom: '95px', 
                          left: '24px', 
                          borderRadius: '4px',
                          boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
                        }}
                      >
                        <i className={`fas ${item.icon} fa-2x`} style={{ color: '#D21515' }} />
                      </div>

                      {/* Title Text */}
                      <h4 
                        style={{ 
                          position: 'absolute', 
                          bottom: '42px', 
                          left: '24px', 
                          color: '#ffffff', 
                          fontSize: '22px', 
                          fontWeight: '700', 
                          margin: 0,
                          fontFamily: 'var(--font-sans)',
                          letterSpacing: '-0.5px'
                        }}
                      >
                        {item.title}
                      </h4>

                      {/* Read More button overlapping the bottom */}
                      <Link 
                        href="#f-contact" 
                        className="service-read-more-btn"
                        style={{ 
                          position: 'absolute', 
                          bottom: '-18px', 
                          left: '24px', 
                          backgroundColor: '#D21515', 
                          color: '#ffffff', 
                          padding: '10px 24px', 
                          borderRadius: '8px', 
                          fontSize: '14px', 
                          fontWeight: '600', 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '8px', 
                          textDecoration: 'none',
                          boxShadow: '0 4px 12px rgba(210,21,21,0.3)',
                          transition: 'background 0.3s, transform 0.3s'
                        }}
                      >
                        Read More <i className="fas fa-arrow-right" style={{ fontSize: '12px' }} />
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .service-image-card:hover {
          transform: translateY(-8px);
        }
        .service-read-more-btn:hover {
          background-color: #b91c1c !important;
          transform: scale(1.03);
        }
      `}</style>
    </div>
  )
}

export default ServicesSlider
