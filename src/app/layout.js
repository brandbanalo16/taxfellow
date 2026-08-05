import Head from 'next/head';
import "../../public/assets/css/plugins/swiper.min.css";
import "../../public/assets/css/plugins/fontawesome-5.css";
import "../../public/assets/css/plugins/animate.min.css";
import "../../public/assets/css/plugins/unicons.css";

import "../../public/assets/css/vendor/bootstrap.min.css";
import "../../public/assets/css/style.css";
import "../styles/mega-menu.css";
import "../styles/fonts.css";
import Script from 'next/script';


export const metadata = {
  title: "Taxfello — Startup registration and compliance company",
  description: "Taxfello is a premier online chartered accountant services provider and startup registration and compliance company, offering top-tier business registration and compliance services.",
  icons: {
    icon: "/assets/images/fav.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Taxfello test — Startup registration and compliance company</title>
        <meta name="author" content="themewant" />
        <meta name="description" content="Taxfello is a premier online chartered accountant services provider and startup registration and compliance company, offering top-tier business registration and compliance services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="YB4JszdC5b7oLdFQTdcXsRw_iYGkIyIpJ7Ya7WgvJFE" />
        <link rel="icon" href="/assets/images/fav.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "TaxFello",
            "legalName": "Clearverge Consulting Private Limited",
            "url": "https://www.taxfello.com",
            "logo": "https://www.taxfello.com/assets/images/logo.png",
            "sameAs": [
              "https://www.facebook.com/TaxFello",
              "https://twitter.com/TaxFello",
              "https://www.linkedin.com/company/TaxFello"
            ]
          })
        }} />
  
      </Head>
      <body className='index-one'>

        {children}



      </body>
    </html>
  );
}
