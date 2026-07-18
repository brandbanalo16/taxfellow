"use client"
import React, { useEffect } from 'react';
import { useState } from 'react';
import Link from 'next/link';

function SideMenu({ isSidebarOpen, toggleSidebar }) {
    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (menuhome) => {
        setOpenMenu(openMenu === menuhome ? null : menuhome);
    };
    return (
        <div>
            <div id="side-bar" className={`side-bar ${isSidebarOpen ? 'show' : ''}`}>
                <button className="close-icon-menu" aria-label="Close Menu" onClick={toggleSidebar}>
                    <i className="far fa-times"></i>
                </button>
                {/* inner menu area desktop start */}
                <div className="rts-sidebar-menu-desktop">
                    <a className="logo-1" href="/">
                        <img className="logo" src="/assets/images/logo/logo-1.svg" alt="finbiz_logo" />
                    </a>
                    <a className="logo-2" href="/">
                        <img className="logo" src="/assets/images/logo/logo-4.svg" alt="finbiz_logo" />
                    </a>
                    <a className="logo-3" href="/">
                        <img className="logo" src="/assets/images/logo/logo-3.svg" alt="finbiz_logo" />
                    </a>
                    <a className="logo-4" href="/">
                        <img className="logo" src="/assets/images/logo/logo-5.svg" alt="finbiz_logo" />
                    </a>
                    <div className="body d-none d-xl-block">
                        <p className="disc">
                            We must explain to you how all seds this mistakens idea denouncing
                            pleasures and praising account.
                        </p>
                        <div className="get-in-touch">
                            <div className="h6 title">Get In Touch</div>
                            <div className="wrapper">
                                <div className="single">
                                    <i className="fas fa-phone-alt" />
                                    <Link href="#">+8801234566789</Link>
                                </div>
                                <div className="single">
                                    <i className="fas fa-envelope" />
                                    <Link href="#">example@gmail.com</Link>
                                </div>
                                <div className="single">
                                    <i className="fas fa-globe" />
                                    <Link href="#">www.webexample.com</Link>
                                </div>
                                <div className="single">
                                    <i className="fas fa-map-marker-alt" />
                                    <Link href="#">13/A, New Pro State, NYC</Link>
                                </div>
                            </div>
                            <div className="social-wrapper-two menu">
                                <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                <Link href="#"><i className="fab fa-twitter" /></Link>
                                <Link href="#"><i className="fab fa-instagram" /></Link>
                                <Link href="#"><i className="fab fa-whatsapp" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="body-mobile d-block d-xl-none">
                        <nav className="nav-main mainmenu-nav">
                            <ul className="mainmenu metismenu" id="mobile-menu-active">
                                <li className="menu-item">
                                    <Link className="menu-link" href={'/'}>
                                        Home
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link className="menu-link" href={'/about-us'}>
                                        About Us
                                    </Link>
                                </li>
                                <li className="has-droupdown menu-item">
                                    <Link className="menu-link" href="#" onClick={() => toggleMenu(2)}>
                                        Services
                                    </Link>
                                    <ul className={`submenu ${openMenu === 2 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                                        <li>
                                            <Link href={'/service-2'}>Service 2</Link>
                                        </li>
                                        <li className="mobile-menu-link">
                                            <Link href={'/service-details'}>Service Details</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="has-droupdown menu-item">
                                    <Link className="menu-link" href="#" onClick={() => toggleMenu(3)}>
                                        Pages
                                    </Link>
                                    <ul className={`submenu ${openMenu === 3 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                                        <li className="mobile-menu-link">
                                            <Link href={'/appoinment'}>Appoinment</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="has-droupdown menu-item">
                                    <Link className="menu-link" href="#" onClick={() => toggleMenu(4)}>
                                        Blog
                                    </Link>
                                    <ul className={`submenu ${openMenu === 4 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                                        <li className="mobile-menu-link">
                                            <Link href={'/blog-grid'}>Blog Grid</Link>
                                        </li>
                                        <li className="mobile-menu-link">
                                            <Link href={'/blog-details'}>Blog Details</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item menu-item">
                                    <Link className="menu-link" href="/contactus">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="social-wrapper-two menu mobile-menu">
                            <Link href="#"><i className="fab fa-facebook-f" /></Link>
                            <Link href="#"><i className="fab fa-twitter" /></Link>
                            <Link href="#"><i className="fab fa-instagram" /></Link>
                            <Link href="#"><i className="fab fa-whatsapp" /></Link>
                        </div>
                        <Link href="#" className="rts-btn btn-primary ml--20 ml_sm--5 header-one-btn quote-btnmenu">
                            Get Quote
                        </Link>
                    </div>
                </div>
                {/* inner menu area desktop End */}
            </div>
        </div>
    )
}

export default SideMenu