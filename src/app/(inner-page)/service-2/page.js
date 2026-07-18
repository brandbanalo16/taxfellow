
import HeaderTwo from "@/components/header/HeaderTwo";
import BackToTop from "@/components/BackToTop";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceEleven from "@/components/service/ServiceEleven";
import FooterTwo from "@/components/footer/FooterTwo";
import PricingThree from "@/components/pricing/PricingThree";

export default function Home() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Our Service' }
    ];
    return (

        <div className="">
            <HeaderTwo />
            <Breadcrumb title="Our Service" breadcrumbs={breadcrumbs} />
            <ServiceEleven />
            <PricingThree />

            <FooterTwo />
            <BackToTop />
        </div>

    );
}
