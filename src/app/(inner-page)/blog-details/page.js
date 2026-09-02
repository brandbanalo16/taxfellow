"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// This page redirects to the main blog listing page.
// Blog details are now served at: /blog-grid/[slug]
export default function BlogDetailsRedirect() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/blog-grid');
    }, [router]);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
            <p>Redirecting to blog...</p>
        </div>
    );
}
