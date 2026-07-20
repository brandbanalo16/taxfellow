'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { MEGA_MENU_DATA } from './MegaMenu/megaMenuData'
import { initMobileAccordion } from './MegaMenu/megaMenuInit'

/* ──────────────────────────────────────────────────────
   Chevron for accordion arrows
────────────────────────────────────────────────────── */
const AccChevron = () => (
  <svg
    className="mm-mob-chevron"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M6 9L12 15L18 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

/* ──────────────────────────────────────────────────────
   Mobile accordion menu item for MEGA type menus
────────────────────────────────────────────────────── */
function MobMegaItem({ menu }) {
  const bodyId = `mm-mob-body-${menu.id}`
  return (
    <div className="mm-mob-item">
      <button
        type="button"
        className="mm-mob-trigger"
        data-target={bodyId}
        aria-expanded="false"
      >
        {menu.label}
        <AccChevron />
      </button>

      <div id={bodyId} className="mm-mob-cats">
        {menu.categories.map(cat => {
          const svcId = `mm-mob-svc-${menu.id}-${cat.id}`
          const services = cat.subcategories ? cat.subcategories.reduce((acc, sub) => [...acc, ...sub.services], []) : [];
          return (
            <div key={cat.id}>
              <button
                type="button"
                className="mm-mob-cat-trigger"
                data-target={svcId}
                aria-expanded="false"
              >
                {cat.label}
                <AccChevron />
              </button>
              <div id={svcId} className="mm-mob-services">
                {services.map((svc, i) => (
                  <a
                    key={i}
                    className="mm-mob-service-link"
                    href={svc.href || '#'}
                  >
                    {svc.label}
                  </a>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ──────────────────────────────────────────────────────
   Mobile accordion menu item for SIMPLE type menus
────────────────────────────────────────────────────── */
function MobSimpleItem({ menu }) {
  const bodyId = `mm-mob-body-${menu.id}`
  const services = menu.subcategories ? menu.subcategories.reduce((acc, sub) => [...acc, ...sub.services], []) : [];
  return (
    <div className="mm-mob-item">
      <button
        type="button"
        className="mm-mob-trigger"
        data-target={bodyId}
        aria-expanded="false"
      >
        {menu.label}
        <AccChevron />
      </button>

      <div id={bodyId} className="mm-mob-simple-services">
        {services.map((svc, i) => (
          <a
            key={i}
            className="mm-mob-service-link"
            href={svc.href || '#'}
          >
            {svc.label}
          </a>
        ))}
      </div>
    </div>
  )
}

/* ──────────────────────────────────────────────────────
   SideMenu — Mobile sidebar / hamburger drawer
────────────────────────────────────────────────────── */
function SideMenu({ isSidebarOpen, toggleSidebar }) {
  useEffect(() => {
    initMobileAccordion()
  }, [])

  return (
    <div>
      <div
        id="side-bar"
        className={`side-bar ${isSidebarOpen ? 'show' : ''}`}
      >
        <button
          className="close-icon-menu"
          aria-label="Close Menu"
          onClick={toggleSidebar}
        >
          <i className="far fa-times" />
        </button>

        {/* ── Sidebar content ── */}
        <div className="rts-sidebar-menu-desktop">

          {/* Logo variants */}
          <a href="/" className="mb-4 d-block">
            <img src="/assets/images/logo/TAXFELLOW.jpg.jpeg" alt="Taxfello Logo" style={{ maxHeight: '100px', width: 'auto' }} />
          </a>

          {/* Desktop sidebar info panel */}
          <div className="body d-none d-xl-block">
            <p className="disc">
              Your trusted partner for all business registrations, compliance, accounting and financial advisory needs across India.
            </p>
            <div className="get-in-touch">
              <div className="h6 title">Get In Touch</div>
              <div className="wrapper">
                <div className="single">
                  <i className="fas fa-phone-alt" />
                  <Link href="tel:+918001234567">+91 800 123 4567</Link>
                </div>
                <div className="single">
                  <i className="fas fa-envelope" />
                  <Link href="mailto:hello@taxfello.com">hello@taxfello.com</Link>
                </div>
                <div className="single">
                  <i className="fas fa-globe" />
                  <Link href="/">www.taxfello.com</Link>
                </div>
              </div>
              <div className="social-wrapper-two menu">
                <Link href="#"><i className="fab fa-facebook-f" /></Link>
                <Link href="#"><i className="fab fa-twitter" /></Link>
                <Link href="#"><i className="fab fa-instagram" /></Link>
                <Link href="#"><i className="fab fa-linkedin-in" /></Link>
              </div>
            </div>
          </div>

          {/* ── Mobile accordion navigation ── */}
          <div className="body-mobile d-block d-xl-none">
            <nav
              className="nav-main mainmenu-nav"
              aria-label="Mobile navigation"
            >
              <div style={{ padding: '8px 0' }}>

                {/* Home */}
                <a className="mm-mob-link" href="/">Home</a>

                {/* Dynamic mega/simple menu items */}
                {MEGA_MENU_DATA.map(menu =>
                  menu.type === 'simple'
                    ? <MobSimpleItem key={menu.id} menu={menu} />
                    : <MobMegaItem   key={menu.id} menu={menu} />
                )}

                {/* About Us */}
                <a className="mm-mob-link" href="/about-us">About Us</a>

                {/* Contact Us */}
                <a
                  className="mm-mob-link"
                  href="/contactus"
                  style={{ borderBottom: 'none' }}
                >
                  Contact Us
                </a>

              </div>
            </nav>

            {/* Social icons */}
            <div className="social-wrapper-two menu mobile-menu" style={{ marginTop: 20 }}>
              <Link href="#"><i className="fab fa-facebook-f" /></Link>
              <Link href="#"><i className="fab fa-twitter" /></Link>
              <Link href="#"><i className="fab fa-instagram" /></Link>
              <Link href="#"><i className="fab fa-whatsapp" /></Link>
            </div>

            {/* CTA button */}
            <Link
              href="/contactus"
              className="rts-btn btn-primary ml--20 ml_sm--5 header-one-btn quote-btnmenu"
              style={{ marginTop: 16, display: 'inline-block' }}
            >
              Book a Meeting
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideMenu