import { getServiceBySlug } from '@/data/services-content';
import ServicePageClient from './ServicePageClient';
import Link from 'next/link';
import HeaderTwo from '@/components/header/HeaderTwo';
import Breadcrumb from '@/components/Breadcrumb';
import FooterTwo from '@/components/footer/FooterTwo';
import BackToTop from '@/components/BackToTop';

/* ── SEO: generateMetadata reads from the service JSON ── */
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        return {
            title: 'Service Not Found | Taxfello',
            description: 'The requested service page could not be found.',
        };
    }

    const { seo, serviceName, subCategory, majorHead } = service;

    return {
        title: seo?.metaTitle || `${serviceName} | Taxfello`,
        description: seo?.metaDescription || `Expert ${serviceName} services. Fast, affordable and 100% online.`,
        keywords: seo?.keywords?.join(', ') || '',
        openGraph: {
            title: seo?.metaTitle || `${serviceName} | Taxfello`,
            description: seo?.metaDescription || `Expert ${serviceName} services.`,
            type: 'website',
            siteName: 'Taxfello',
        },
        twitter: {
            card: 'summary',
            title: seo?.metaTitle || `${serviceName} | Taxfello`,
            description: seo?.metaDescription || `Expert ${serviceName} services.`,
        },
        alternates: {
            canonical: `/services/${slug}`,
        },
    };
}

/* ── Page: renders client component ── */
export default async function DynamicServicePage({ params }) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        return (
            <div>
                <HeaderTwo />
                <Breadcrumb
                    title="Service Not Found"
                    breadcrumbs={[{ label: 'Home', link: '/' }, { label: 'Services', link: '#' }]}
                />
                <div className="rts-service-area rts-section-gap text-center">
                    <div className="container">
                        <h2>Service Page Not Found</h2>
                        <p>We apologize, but the requested page does not exist or has been moved.</p>
                        <Link href="/" className="rts-btn btn-primary mt--20">
                            Go Back Home
                        </Link>
                    </div>
                </div>
                <FooterTwo />
                <BackToTop />
            </div>
        );
    }

    return <ServicePageClient service={service} />;
}
