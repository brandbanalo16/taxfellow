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
        <title>Taxfello — Startup registration and compliance company</title>
        <meta name="author" content="themewant" />
        <meta name="description" content="Taxfello is a premier online chartered accountant services provider and startup registration and compliance company, offering top-tier business registration and compliance services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/fav.png" />
      </Head>
      <body className='index-one'>

        {children}



      </body>
    </html>
  );
}
