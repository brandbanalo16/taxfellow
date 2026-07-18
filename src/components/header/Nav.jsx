"use client"
import React from 'react'
import Link from 'next/link';

function Nav() {
    return (
        <div>
            <nav className="nav-main mainmenu-nav d-none d-xl-block">
                <ul className="mainmenu">
                    <li>
                        <Link className="nav-item" href={'/'} >
                            Home
                        </Link>
                    </li>
                    <li className="has-droupdown">
                        <Link className="nav-link" href={'#'}>
                            Services
                        </Link>
                        <ul className="submenu">
                            <li>
                                <Link href={'/service-2'}>Service 2</Link>
                            </li>
                            <li>
                                <Link href={'/service-details'}>Service Details</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="has-droupdown">
                        <Link className="nav-link" href={'#'}>
                            Pages
                        </Link>
                        <ul className="submenu">
                            <li>
                                <Link href={'/appoinment'}>Appoinment</Link>
                            </li>
                            <li>
                                <Link href={'/about-us'}>About Us</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="has-droupdown">
                        <Link className="nav-link" href={'#'}>
                            Blog
                        </Link>
                        <ul className="submenu">
                            <li>
                                <Link href={'/blog-grid'}>Blog Grid</Link>
                            </li>
                            <li>
                                <Link href={'/blog-details'}>Blog Details</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link className="nav-item" href={'/contactus'}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav