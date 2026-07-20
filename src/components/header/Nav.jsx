'use client'
import React, { useEffect } from 'react'
import { initMegaMenu } from './MegaMenu/megaMenuInit'

/* ──────────────────────────────────────────────────────
   Chevron SVG (reusable)
────────────────────────────────────────────────────── */
const Chevron = () => (
  <svg
    className="mm-chevron"
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
   Nav — Desktop mega-menu navigation
   (hidden on < xl via d-none d-xl-block)
────────────────────────────────────────────────────── */
function Nav() {
  useEffect(() => {
    /* Initialise vanilla-JS mega menu engine and get cleanup fn */
    const cleanup = initMegaMenu()
    return cleanup
  }, [])

  return (
    <nav
      className="mm-nav d-none d-xl-block"
      id="mega-nav"
      aria-label="Main navigation"
    >
      <ul className="mm-nav-list">

        {/* ── Home ── */}
        <li className="mm-nav-item">
          <a className="mm-nav-link" href="/">Home</a>
        </li>

        {/* ── Registration & Licences ── */}
        <li className="mm-nav-item mm-has-menu" data-menu="registration">
          <button
            type="button"
            className="mm-nav-btn"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Registration &amp; Licences <Chevron />
          </button>
        </li>

        {/* ── Compliances ── */}
        <li className="mm-nav-item mm-has-menu" data-menu="compliances">
          <button
            type="button"
            className="mm-nav-btn"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Compliances <Chevron />
          </button>
        </li>

        {/* ── Bookkeeping & Accounting ── */}
        <li className="mm-nav-item mm-has-menu" data-menu="bookkeeping">
          <button
            type="button"
            className="mm-nav-btn"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Bookkeeping &amp; Accounting <Chevron />
          </button>
        </li>

        {/* ── Virtual CFO ── */}
        <li className="mm-nav-item mm-has-menu" data-menu="cfo">
          <button
            type="button"
            className="mm-nav-btn"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Virtual CFO <Chevron />
          </button>
        </li>

        {/* ── About Us ── */}
        <li className="mm-nav-item">
          <a className="mm-nav-link" href="/about-us">About Us</a>
        </li>

        {/* ── Contact Us ── */}
        <li className="mm-nav-item">
          <a className="mm-nav-link" href="/contactus">Contact Us</a>
        </li>

      </ul>
    </nav>
  )
}

export default Nav