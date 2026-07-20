"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Nav from './Nav';
import SideMenu from './SideMenu';

function HeaderTwo() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>

            <header className={`header-two header--sticky  ${isSticky ? 'sticky' : ''}`}>
                <div className="header-top">
                    <div className="content">
                        <div className="left-header-top">
                            <p className="top-details">
                                Are you ready to grow up your business?{" "}
                                <Link href={'#'}>
                                    Contact Us <i className="fal fa-arrow-right" />
                                </Link>
                            </p>
                        </div>
                        <div className="right-header-top">
                            <div className="working-time">
                                <i className="fas fa-phone-alt" />
                                <Link href="tel:+256214582146" style={{ color: 'inherit' }}>
                                    <span>+256 21458.2146</span>
                                </Link>
                            </div>
                            <div className="ht-social">
                                <span>Visit Us:</span>
                                <ul>
                                    <li>
                                        <Link href={'#'}>
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'#'}>
                                            <i className="fab fa-twitter" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'#'}>
                                            <i className="fab fa-linkedin-in" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'#'}>
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-header">
                    <div className="content">
                        <div className="header-left">
                            <Link className="thumbnail" href="/">
                                <img src="/assets/images/logo/TAXFELLOW.jpg.jpeg" alt="Taxfello Logo" style={{ maxHeight: '100px', width: 'auto' }} />
                            </Link>
                            <Nav />

                        </div>
                        <div className="header-right">
                            <Link className="rts-btn btn-primary-2 menu-block-none" href={'#'}>
                                Book a Meeting
                            </Link>
                            <button
                                id="menu-btn"
                                className="menu rts-btn btn-primary-alta ml--20" onClick={toggleSidebar}
                            >
                                <img
                                    className="menu-dark"
                                    src="assets/images/icon/menu.png"
                                    alt="Menu-icon"
                                />
                                <img
                                    className="menu-light"
                                    src="assets/images/icon/menu-light.png"
                                    alt="Menu-icon"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <SideMenu isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
    )
}

export default HeaderTwo