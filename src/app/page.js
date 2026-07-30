import HeaderTwo from "@/components/header/HeaderTwo";
import BannerHero from "@/components/banner/BannerHero";
import BackToTop from "@/components/BackToTop";
import AboutTwo from "@/components/about/AboutTwo";
import TrustedPlatform from "@/components/feature/TrustedPlatform";
import WorkingProcess from "@/components/workingprocess/WorkingProcess";
import WhyChooseUs from "@/components/whychooseus/WhyChooseUs";
import BusinessCase from "@/components/businesscase/BusinessCase";
import TestimonialTwo from "@/components/testimonials/TestimonialTwo";
import BrandTwo from "@/components/brand/BrandTwo";
import CustomFaq from "@/components/faq/CustomFaq";
import FooterTwo from "@/components/footer/FooterTwo";

export default function Home() {
    return (
        <div className="home-blue">
            <HeaderTwo />
            <BannerHero />
            <BrandTwo />
            <AboutTwo />
            <BusinessCase />
            <TrustedPlatform />
            <WhyChooseUs />
            <WorkingProcess />
            <TestimonialTwo />
            <CustomFaq />
            <FooterTwo />
            <BackToTop />
        </div>
    );
}
