import OurFacilities from "./components/features";
import { FooterSection } from "./components/footer";
import HeaderSection from "./components/header";
import HeroSection from "./components/hero";
import Testimonial from "./components/testimonial";
import WhyChooseUs from "./components/whyChooseUs";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <HeroSection />
      <WhyChooseUs />
      <OurFacilities />
      <Testimonial />
      <FooterSection />
    </>
  );
}
