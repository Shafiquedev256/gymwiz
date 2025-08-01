import Link from "next/link";
import OurFacilities from "./components/features";
import { FooterSection } from "./components/footer";
import HeaderSection from "./components/header";
import HeroSection from "./components/hero";
import Testimonial from "./components/testimonial";
import WhyChooseUs from "./components/whyChooseUs";
import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: `Wizz Gym Kampala | Affordable Fitness & Personal Training in Uganda  ${new Date().getFullYear()}`,
    description:
      "Discover Wizz Gym, Kampala's top destination for affordable fitness, personal training, and wellness programs. Train with certified experts in Uganda.",
  };
}

export default function Home() {
  return (
    <>
      <HeaderSection />
      <section className='w-[100%] overflow-x-hidden bg-white text-black'>
        <HeroSection />
        <WhyChooseUs />
        <OurFacilities />
        <section className='bg-[url("/bg-8.jpg")] bg-center font-body bg-cover bg-no-repeat '>
          <div className='py-16 px-8 bg-[#0b0b0b79] text-center text-white '>
            <h2 className='text-2xl md:text-3xl font-bold title  mb-2'>
              Ready to Join Us Today?
            </h2>
            <h3 className=' text-white  '>
              <span className=' w-fit'>
                We’re all about good vibes, great workouts, and even better
                people. No judgment. No pressure.
              </span>
            </h3>

            <div className='text-white'>
              <p>
                Just a bunch of awesome humans lifting each other up (sometimes
                literally).
              </p>
              <p>
                Our friendly coaches will guide you, cheer you on, and help you
                smash your goals your way.
              </p>
              <p className='mb-4'>
                So, what do you say? <br />
                <b>Come sweat, smile, and thrive with us.</b>
              </p>
              <a
                target='blank'
                href='https://www.google.com/maps/dir//SitiGym+Mwanga+II+Rd+Kampala/@0.3039633,32.5699984,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x177dbd75455a4a39:0x79e240ed20b9021d!2m2!1d32.5699984!2d0.3039633?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D'
                className='bg-red-600 my-5 text-sm  text-center hover:bg-[#850b0b] text-white py-3 px-6 rounded-full '
              >
                VISIT US NOW
              </a>
            </div>
          </div>
        </section>
        <Testimonial />

        <div className='md:h-[30%]'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.765779931804!2d32.60261527403775!3d0.29404126406153863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f17!3m3!1m2!1s0x177dbd39c034e6cb%3A0x967e07aca4b42153!2sWizz%20Gym!5e0!3m2!1sen!2sug!4v1744286971703!5m2!1sen!2sug'
            className='w-full h-[30vh]'
            loading='lazy'
          ></iframe>
        </div>

        <div className='w-screen overflow-hidden font-body'>
          <div className='md:hidden w-screen overflow-hidden bg-black py-2'>
            <div className='md:hidden  slide-track flex flex-row items-center justify-center'>
              <Link href={"/"} className='slideel'>
                <img
                  src='/zzz1-removebg-preview.png'
                  alt='logo'
                  className=' w-22 '
                />
              </Link>
              <Link href={"/"} className='slideel'>
                <img src='/matrix2.png' alt='logo' className=' w-36 ' />
              </Link>
              <Link href={"/"} className='slideel'>
                <img
                  src='/gym80.png'
                  alt='USN l
              ogo'
                  className='w-20 '
                />
              </Link>

              <Link href={"/"} className='slideel'>
                <img
                  src='/openflow-removebg-preview.png'
                  alt='Open 
                flow logo'
                  className='w-28  '
                />
              </Link>
            </div>
          </div>
        </div>
        <FooterSection />
      </section>
    </>
  );
}
