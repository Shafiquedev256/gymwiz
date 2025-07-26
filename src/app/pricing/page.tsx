import { Metadata } from "next";
import { FooterSection } from "../components/footer";
import HeaderSection from "../components/header";
import { Plans } from "../components/plans";

export function generateMetadata(): Metadata {
  return {
    title: `Wizz Gym Kampala Pricing | Affordable Memberships & Training Packages`,
    description:
      "Explore our flexible and affordable pricing options at Wizz Gym Kampala. Whether you're a beginner or a fitness pro, we have a plan that fits your goals and budget.",
  };
}

const Pricing = () => {
  return (
    <main className='max-w-screen'>
      <HeaderSection />
      <Plans />
      <FooterSection />
    </main>
  );
};

export default Pricing;
