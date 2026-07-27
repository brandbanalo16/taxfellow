import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/**
 * ServiceHero renders the banner/hero section for a service page.
 * It uses the existing banner design (background gradient) to maintain consistency.
 * Props:
 * - service: object containing title, tagline, heroImage (optional), slug.
 */
export default function ServiceHero({ service, title, tagline }) {
  let displayTitle = '';
  let displayTagline = '';
  let heroImage = undefined;
  if (service) {
    displayTitle = service.title;
    displayTagline = service.tagline;
    heroImage = service.heroImage;
  } else {
    displayTitle = title || '';
    displayTagline = tagline || '';
  }
  const backgroundStyle = heroImage
    ? { backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { background: 'linear-gradient(135deg, #1e6fd9, #0a3d8a)' };

  return (
    <section className="service-hero" style={{ ...backgroundStyle, padding: '120px 0', color: '#fff' }}>
      <div className="container">
        <h1 style={{ fontSize: 'clamp(32px,4vw,48px)', fontWeight: 800, marginBottom: '20px' }}>{displayTitle}</h1>
        <p style={{ fontSize: '18px', marginBottom: '30px' }}>{displayTagline}</p>
        <Link
          href="/contactus"
          className="rts-btn btn-primary"
          style={{
            borderRadius: '8px',
            padding: '15px 30px',
            fontWeight: '600',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#fff',
            color: '#1E5EFF',
          }}
        >
          Get Started Today <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
