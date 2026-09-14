"use client"
import Link from 'next/link';
import React, { useState, useMemo } from 'react';
import HeaderTwo from "@/components/header/HeaderTwo";
import FooterTwo from "@/components/footer/FooterTwo";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import Posts from "@/data/Posts.json";

const POSTS_PER_PAGE = 9;

export default function BlogGridPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Blog' }
    ];

    const categories = useMemo(() => {
        const cats = Posts.filter(p => p.category).map(p => p.category);
        return ['All', ...Array.from(new Set(cats))];
    }, []);

    const filteredPosts = useMemo(() => {
        return [...Posts].reverse().filter(post => {
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

    const handleCategoryChange = (cat) => {
        setActiveCategory(cat);
        setCurrentPage(1);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setCurrentPage(1);
    };

    return (
        <>
            <style>{`
                .blog-page-wrapper {
                    background: #f8f9fc;
                    min-height: 100vh;
                }
                /* ── Filter Bar ── */
                .blog-filter-section {
                    background: #ffffff;
                    border-bottom: 1px solid #eef0f5;
                    padding: 28px 0;
                }
                .blog-filter-inner {
                    max-width: 1240px;
                    margin: 0 auto;
                    padding: 0 24px;
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    flex-wrap: wrap;
                }
                .blog-search-form {
                    position: relative;
                    flex: 0 0 280px;
                }
                .blog-search-form input {
                    width: 100%;
                    padding: 12px 50px 12px 18px;
                    border: 1.5px solid #e2e6f0;
                    border-radius: 50px;
                    font-size: 14px;
                    outline: none;
                    background: #f8f9fc;
                    color: #2c3255;
                    transition: border-color 0.2s;
                    font-family: inherit;
                }
                .blog-search-form input:focus { border-color: #2c9295; background: #fff; }
                .blog-search-btn {
                    position: absolute;
                    right: 5px;
                    top: 50%;
                    transform: translateY(-50%);
                    background: #2c9295;
                    border: none;
                    border-radius: 50px;
                    width: 36px;
                    height: 36px;
                    color: #fff;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background 0.2s;
                }
                .blog-search-btn:hover { background: #2c3255; }
                .category-pills {
                    display: flex;
                    gap: 10px;
                    flex-wrap: wrap;
                    flex: 1;
                }
                .cat-pill {
                    padding: 8px 20px;
                    border-radius: 50px;
                    border: 1.5px solid #e2e6f0;
                    background: #fff;
                    color: #555e7a;
                    font-size: 13px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    white-space: nowrap;
                    font-family: inherit;
                }
                .cat-pill:hover { border-color: #2c9295; color: #2c9295; }
                .cat-pill.active {
                    background: linear-gradient(135deg, #2c9295, #2c3255);
                    border-color: transparent;
                    color: #fff;
                    box-shadow: 0 4px 14px rgba(44,146,149,0.35);
                }
                .posts-count-label {
                    color: #888;
                    font-size: 13px;
                    white-space: nowrap;
                    margin-left: auto;
                }
                .posts-count-label strong { color: #2c3255; }

                /* ── Grid Section ── */
                .blog-grid-section { padding: 56px 0 80px; }
                .blog-grid-container {
                    max-width: 1240px;
                    margin: 0 auto;
                    padding: 0 24px;
                }
                .blog-3x3-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 28px;
                }

                /* ── Card ── */
                .blog-card {
                    background: #ffffff;
                    border-radius: 18px;
                    overflow: hidden;
                    box-shadow: 0 2px 16px rgba(44,50,85,0.07);
                    display: flex;
                    flex-direction: column;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    border: 1px solid #eef0f5;
                    text-decoration: none;
                }
                .blog-card:hover {
                    transform: translateY(-7px);
                    box-shadow: 0 18px 50px rgba(44,50,85,0.16);
                }

                /* Card Image */
                .blog-card-img-wrap {
                    position: relative;
                    overflow: hidden;
                    height: 240px;
                    flex-shrink: 0;
                    background: #1a1f3c;
                }
                .blog-card-img-wrap img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center top;
                    display: block;
                    transition: transform 0.45s ease;
                }
                .blog-card:hover .blog-card-img-wrap img { transform: scale(1.04); }

                /* by TaxFello bar – sits as a solid bottom strip */
                .blog-by-bar {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: rgba(28, 36, 72, 0.82);
                    backdrop-filter: blur(2px);
                    padding: 9px 14px;
                    display: flex;
                    align-items: center;
                    gap: 7px;
                    color: #fff;
                    font-size: 12px;
                    font-weight: 600;
                    z-index: 2;
                }
                .blog-by-bar i { font-size: 14px; }

                /* Category badge */
                .blog-cat-badge {
                    position: absolute;
                    top: 12px;
                    left: 12px;
                    background: rgba(44,146,149,0.92);
                    backdrop-filter: blur(4px);
                    color: #fff;
                    font-size: 11px;
                    font-weight: 700;
                    padding: 4px 13px;
                    border-radius: 50px;
                    letter-spacing: 0.5px;
                }

                /* Date badge – floated to the right, above the by-bar */
                .blog-date-badge {
                    position: absolute;
                    bottom: 44px;
                    right: 12px;
                    background: #e8472a;
                    color: #fff;
                    border-radius: 10px;
                    padding: 6px 13px;
                    text-align: center;
                    line-height: 1.2;
                    min-width: 50px;
                    box-shadow: 0 4px 14px rgba(232,71,42,0.4);
                    z-index: 3;
                }
                .blog-date-badge .bdb-day {
                    font-size: 20px;
                    font-weight: 800;
                    display: block;
                }
                .blog-date-badge .bdb-mon {
                    font-size: 11px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                /* Card Body */
                .blog-card-body {
                    padding: 22px 24px 24px;
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                    gap: 10px;
                }
                .blog-card-title {
                    font-size: 16px;
                    font-weight: 700;
                    color: #2c3255;
                    line-height: 1.45;
                    margin: 0;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    transition: color 0.2s;
                    text-decoration: none;
                }
                .blog-card-title:hover { color: #2c9295; }
                .blog-card-desc {
                    font-size: 13px;
                    color: #64748b;
                    line-height: 1.65;
                    margin: 0;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    flex: 1;
                }
                .blog-card-divider {
                    height: 1px;
                    background: #f0f2f7;
                    margin: 2px 0;
                }
                .blog-read-more {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    color: #2c3255;
                    font-size: 13px;
                    font-weight: 700;
                    text-decoration: none;
                    transition: color 0.2s, gap 0.2s;
                }
                .blog-read-more:hover { color: #2c9295; gap: 13px; }

                /* Empty state */
                .blog-empty {
                    grid-column: 1 / -1;
                    text-align: center;
                    padding: 80px 20px;
                    color: #aaa;
                }
                .blog-empty i { font-size: 52px; display: block; margin-bottom: 18px; }
                .blog-empty h4 { color: #2c3255; font-size: 20px; margin-bottom: 8px; }

                /* ── Pagination ── */
                .blog-pagination {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    margin-top: 56px;
                    flex-wrap: wrap;
                }
                .pg-btn {
                    width: 44px;
                    height: 44px;
                    border-radius: 12px;
                    border: 1.5px solid #e2e6f0;
                    background: #fff;
                    color: #2c3255;
                    font-size: 14px;
                    font-weight: 700;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s ease;
                    font-family: inherit;
                }
                .pg-btn:hover:not(:disabled) { border-color: #2c9295; color: #2c9295; }
                .pg-btn.active {
                    background: linear-gradient(135deg, #2c9295, #2c3255);
                    border-color: transparent;
                    color: #fff;
                    box-shadow: 0 4px 14px rgba(44,146,149,0.35);
                }
                .pg-btn:disabled { opacity: 0.35; cursor: not-allowed; }

                /* ── Responsive ── */
                @media (max-width: 991px) {
                    .blog-3x3-grid { grid-template-columns: repeat(2, 1fr); gap: 22px; }
                    .blog-search-form { flex: 0 0 220px; }
                }
                @media (max-width: 599px) {
                    .blog-3x3-grid { grid-template-columns: 1fr; gap: 20px; }
                    .blog-filter-inner { flex-direction: column; align-items: stretch; }
                    .blog-search-form { flex: none; width: 100%; }
                    .posts-count-label { margin-left: 0; }
                }
            `}</style>

            <div className="blog-page-wrapper">
                <HeaderTwo />
                <Breadcrumb title="Blog" breadcrumbs={breadcrumbs} />
                <BackToTop />

                {/* ── 3×3 Grid ── */}
                <div className="blog-grid-section">
                    <div className="blog-grid-container">
                        <div className="blog-3x3-grid">
                            {paginatedPosts.length > 0 ? paginatedPosts.map((post) => {
                                const parts = post.publishedDate ? post.publishedDate.split(' ') : ['', ''];
                                const day = parts[0];
                                const mon = (parts[1] || '').replace(',', '');

                                return (
                                    <article key={post.id} className="blog-card">
                                        {/* Image area */}
                                        <div className="blog-card-img-wrap">
                                            <Link href={`/blog-grid/${post.slug}`} tabIndex={-1} style={{ display: 'block', height: '100%' }}>
                                                <img
                                                    src={`/assets/images/blog/${post.image}`}
                                                    alt={post.title}
                                                />
                                            </Link>

                                            {/* "by TaxFello" bar */}
                                            <div className="blog-by-bar">
                                                <i className="fal fa-user-circle" />
                                                <span>by {post.author || 'TaxFello'}</span>
                                            </div>



                                            <div className="blog-date-badge">
                                                <span className="bdb-day">{day}</span>
                                                <span className="bdb-mon">{mon}</span>
                                            </div>
                                        </div>

                                        {/* Body */}
                                        <div className="blog-card-body">
                                            <Link href={`/blog-grid/${post.slug}`} className="blog-card-title">
                                                {post.title}
                                            </Link>

                                            {post.descripTion && (
                                                <p className="blog-card-desc">{post.descripTion}</p>
                                            )}

                                            <div className="blog-card-divider" />

                                            <Link href={`/blog-grid/${post.slug}`} className="blog-read-more">
                                                Read More <i className="far fa-arrow-right" />
                                            </Link>
                                        </div>
                                    </article>
                                );
                            }) : (
                                <div className="blog-empty">
                                    <i className="fal fa-search" />
                                    <h4>No posts found</h4>
                                    <p>Try a different search term or category.</p>
                                </div>
                            )}
                        </div>

                        {/* ── Pagination ── */}
                        {totalPages > 1 && (
                            <nav className="blog-pagination" aria-label="Blog pagination">
                                <button
                                    className="pg-btn"
                                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                    disabled={currentPage === 1}
                                    aria-label="Previous page"
                                >
                                    <i className="far fa-chevron-left" />
                                </button>

                                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                    <button
                                        key={page}
                                        className={`pg-btn${currentPage === page ? ' active' : ''}`}
                                        onClick={() => setCurrentPage(page)}
                                        aria-label={`Page ${page}`}
                                        aria-current={currentPage === page ? 'page' : undefined}
                                    >
                                        {page}
                                    </button>
                                ))}

                                <button
                                    className="pg-btn"
                                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                    disabled={currentPage === totalPages}
                                    aria-label="Next page"
                                >
                                    <i className="far fa-chevron-right" />
                                </button>
                            </nav>
                        )}
                    </div>
                </div>

                <FooterTwo />
            </div>
        </>
    );
}
