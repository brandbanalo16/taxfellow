"use client"
import Link from 'next/link';
import React, { useState, useMemo } from 'react';
import HeaderTwo from "@/components/header/HeaderTwo";
import FooterTwo from "@/components/footer/FooterTwo";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import Posts from "@/data/Posts.json";

const POSTS_PER_PAGE = 6;

export default function BlogGridPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Blog' }
    ];

    // Get unique categories from posts data
    const categories = useMemo(() => {
        const cats = Posts.filter(p => p.category).map(p => p.category);
        return ['All', ...Array.from(new Set(cats))];
    }, []);

    // Filter posts by search and category
    const filteredPosts = useMemo(() => {
        return Posts.filter(post => {
            const matchesSearch = !searchQuery ||
                post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.category?.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, activeCategory]);

    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    const paginatedPosts = filteredPosts.slice(
        (currentPage - 1) * POSTS_PER_PAGE,
        currentPage * POSTS_PER_PAGE
    );

    // Recent posts - last 4
    const recentPosts = Posts.slice(-4).reverse();

    const handleSearch = (e) => {
        e.preventDefault();
        setCurrentPage(1);
    };

    return (
        <div>
            <HeaderTwo />
            <Breadcrumb title="Blog" breadcrumbs={breadcrumbs} />
            <BackToTop />

            {/* Blog Grid Area */}
            <div className="rts-blog-grid-area rts-section-gap">
                <div className="container">
                    <div className="row g-5">
                        {/* Blog Posts Column */}
                        <div className="col-xl-8 col-md-12 col-sm-12 col-12 pr--40 pr_md--0 pr_sm-controler--0">
                            <div className="row g-5">
                                {paginatedPosts.length > 0 ? paginatedPosts.map((post) => (
                                    <div key={post.id} className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="blog-grid-inner">
                                            <div className="blog-header">
                                                <Link className="thumbnail" href={`/blog-grid/${post.slug}`}>
                                                    <img
                                                        src={`/assets/images/blog/${post.image}`}
                                                        alt={post.title}
                                                        style={{ width: '100%', height: '260px', objectFit: 'cover' }}
                                                    />
                                                </Link>
                                                <div className="blog-info">
                                                    <div className="user">
                                                        <i className="fal fa-user-circle" />
                                                        <span >by {post.author || 'Admin'}</span>
                                                    </div>
                                                </div>
                                                <div className="date">
                                                    <h6 className="title">
                                                        {post.publishedDate ? post.publishedDate.split(' ')[0] : '01'}
                                                    </h6>
                                                    <span>
                                                        {post.publishedDate ? post.publishedDate.split(' ')[1] : 'Jan'}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="blog-body">
                                                <Link href={`/blog-grid/${post.slug}`}>
                                                    <h5 className="title">
                                                        {post.title}
                                                    </h5>
                                                </Link>
                                                {post.descripTion && (
                                                    <p className="disc" style={{
                                                        fontSize: '14px',
                                                        marginTop: '10px',
                                                        overflow: 'hidden',
                                                        display: '-webkit-box',
                                                        WebkitLineClamp: 3,
                                                        WebkitBoxOrient: 'vertical'
                                                    }}>
                                                        {post.descripTion}
                                                    </p>
                                                )}
                                                <Link className="rts-btn btn-border" href={`/blog-grid/${post.slug}`}
                                                    style={{ marginTop: '15px', display: 'inline-block' }}>
                                                    Read More <i className="far fa-arrow-right" style={{ marginLeft: '6px' }} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )) : (
                                    <div className="col-12">
                                        <div style={{ textAlign: 'center', padding: '60px 20px', color: '#888' }}>
                                            <i className="fal fa-search" style={{ fontSize: '48px', marginBottom: '16px', display: 'block' }} />
                                            <h5>No posts found</h5>
                                            <p>Try a different search term or category.</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Blog Grid Area End */}

            <FooterTwo />
        </div>
    );
}
