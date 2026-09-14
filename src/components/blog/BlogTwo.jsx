"use client"
import React from 'react'
import Link from 'next/link';
import post from '../../data/Posts.json';

function BlogTwo() {
    const latestPosts = [...post].reverse().slice(0, 3);

    return (
        <div>
            {/* Blog Section */}
            <div className="rts-blog-area rts-section-gapTop" id="blog-section">
                <div className="container">

                    {/* Section Heading */}
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <span style={{
                            display: 'inline-block',
                            background: 'linear-gradient(135deg, #2c9295 0%, #2c3255 100%)',
                            color: '#fff',
                            fontSize: '12px',
                            fontWeight: '700',
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            padding: '6px 18px',
                            borderRadius: '50px',
                            marginBottom: '16px'
                        }}>
                            Blog &amp; Article
                        </span>
                        <h2 style={{
                            fontSize: '36px',
                            fontWeight: '700',
                            color: '#2c3255',
                            margin: '0',
                            lineHeight: '1.2'
                        }}>
                            Recent Blog Posts
                        </h2>
                    </div>

                    {/* 3-Column Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '28px',
                    }}>
                        {latestPosts.map((data, index) => {
                            const dateParts = data.publishedDate ? data.publishedDate.split(' ') : ['', ''];
                            const day = dateParts[0];
                            const month = dateParts[1];

                            return (
                                <div key={index} style={{
                                    background: '#fff',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 24px rgba(44, 50, 85, 0.08)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = 'translateY(-6px)';
                                        e.currentTarget.style.boxShadow = '0 16px 48px rgba(44, 50, 85, 0.16)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 24px rgba(44, 50, 85, 0.08)';
                                    }}
                                >
                                    {/* Image */}
                                    <div style={{ position: 'relative', overflow: 'hidden', height: '220px' }}>
                                        <Link href={`/blog-grid/${data.slug}`}>
                                            <img
                                                src={`/assets/images/blog/${data.image}`}
                                                alt={data.title}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    transition: 'transform 0.4s ease',
                                                    display: 'block'
                                                }}
                                                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                                                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                            />
                                        </Link>
                                        {/* Date Badge */}
                                        <div style={{
                                            position: 'absolute',
                                            bottom: '12px',
                                            right: '12px',
                                            background: '#e8472a',
                                            color: '#fff',
                                            borderRadius: '8px',
                                            padding: '6px 12px',
                                            textAlign: 'center',
                                            lineHeight: '1.2',
                                            minWidth: '48px'
                                        }}>
                                            <div style={{ fontSize: '18px', fontWeight: '700' }}>{day}</div>
                                            <div style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase' }}>{month}</div>
                                        </div>
                                        {/* Category Badge */}
                                        {data.category && (
                                            <div style={{
                                                position: 'absolute',
                                                top: '12px',
                                                left: '12px',
                                                background: 'rgba(44, 146, 149, 0.92)',
                                                backdropFilter: 'blur(4px)',
                                                color: '#fff',
                                                fontSize: '11px',
                                                fontWeight: '600',
                                                padding: '4px 12px',
                                                borderRadius: '50px',
                                                letterSpacing: '0.5px'
                                            }}>
                                                {data.category}
                                            </div>
                                        )}
                                    </div>

                                    {/* Body */}
                                    <div style={{
                                        padding: '24px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        flex: 1,
                                        gap: '12px'
                                    }}>
                                        {/* Author */}
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            color: '#2c9295',
                                            fontSize: '13px',
                                            fontWeight: '600'
                                        }}>
                                            <i className="fal fa-user-circle" style={{ fontSize: '15px' }} />
                                            <span>by {data.author || 'TaxFello'}</span>
                                        </div>

                                        {/* Title */}
                                        <Link href={`/blog-grid/${data.slug}`} style={{ textDecoration: 'none' }}>
                                            <h4 style={{
                                                fontSize: '17px',
                                                fontWeight: '700',
                                                color: '#2c3255',
                                                lineHeight: '1.45',
                                                margin: '0',
                                                transition: 'color 0.2s ease',
                                            }}
                                                onMouseEnter={e => e.currentTarget.style.color = '#2c9295'}
                                                onMouseLeave={e => e.currentTarget.style.color = '#2c3255'}
                                            >
                                                {data.title}
                                            </h4>
                                        </Link>

                                        {/* Description */}
                                        {data.descripTion && (
                                            <p style={{
                                                fontSize: '13px',
                                                color: '#64748b',
                                                lineHeight: '1.6',
                                                margin: '0',
                                                overflow: 'hidden',
                                                display: '-webkit-box',
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: 'vertical'
                                            }}>
                                                {data.descripTion}
                                            </p>
                                        )}

                                        {/* Divider */}
                                        <div style={{ height: '1px', background: '#f0f0f0', margin: '4px 0' }} />

                                        {/* Read More */}
                                        <Link
                                            href={`/blog-grid/${data.slug}`}
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                color: '#2c3255',
                                                fontWeight: '700',
                                                fontSize: '13px',
                                                textDecoration: 'none',
                                                transition: 'gap 0.2s ease, color 0.2s ease',
                                            }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.color = '#2c9295';
                                                e.currentTarget.style.gap = '12px';
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.color = '#2c3255';
                                                e.currentTarget.style.gap = '8px';
                                            }}
                                        >
                                            Read More <i className="far fa-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* View All Button */}
                    <div style={{ textAlign: 'center', marginTop: '48px' }}>
                        <Link href="/blog-grid" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            background: '#2c3255',
                            color: '#fff',
                            padding: '14px 36px',
                            borderRadius: '8px',
                            fontWeight: '700',
                            fontSize: '14px',
                            textDecoration: 'none',
                            letterSpacing: '0.5px',
                            transition: 'background 0.3s ease, transform 0.2s ease',
                        }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = '#2c9295';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = '#2c3255';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            View All Posts <i className="far fa-arrow-right" />
                        </Link>
                    </div>

                </div>
            </div>
            {/* Blog Section End */}
        </div>
    );
}

export default BlogTwo;