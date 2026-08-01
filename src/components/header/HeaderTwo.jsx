"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Nav from './Nav';
import SideMenu from './SideMenu';
import ConsultationModal from '../consultation/ConsultationModal';

function HeaderTwo() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                                <Link href={'/contactus'}>
                                    Contact Us <i className="fal fa-arrow-right" />
                                </Link>
                            </p>
                        </div>
                        <div className="right-header-top">
                            <div className="working-time">
                                <i className="fas fa-phone-alt" />
                                <Link href="tel:+918800485106" style={{ color: 'inherit' }}>
                                    <span>+91 88004 85106</span>
                                </Link>
                            </div>
                            <div className="ht-social">
                                <span>Visit Us:</span>
                                <ul>
                                    <li>
                                        <Link href={'https://www.facebook.com/taxfello'}>
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'https://www.instagram.com/taxfello/'}>
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
                            <Link className="thumbnail" href="/" style={{ display: 'block', lineHeight: 0 }}>
                                <Image
                                    src="/assets/images/logo/TAXFELLOW.jpg.jpeg"
                                    alt="Taxfello Logo"
                                    width={220}
                                    height={90}
                                    style={{ width: 'auto', height: '90px', objectFit: 'contain' }}
                                    priority
                                />
                            </Link>
                            <Nav />

                        </div>
                        <div className="header-right">
                            <a 
                                className="rts-btn btn-primary-2 menu-block-none" 
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsModalOpen(true);
                                }}
                            >
                                Book a Meeting
                            </a>
                            <button
                                id="menu-btn"
                                className="menu rts-btn btn-primary-alta ml--20" onClick={toggleSidebar}
                            >
                                <img
                                    className="menu-dark"
                                    src="/assets/images/icon/menu.png"
                                    alt="Menu-icon"
                                />
                                <img
                                    className="menu-light"
                                    src="/assets/images/icon/menu-light.png"
                                    alt="Menu-icon"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <SideMenu isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    )
}

export default HeaderTwo