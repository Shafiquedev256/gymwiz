import Link from "next/link";
import { FooterSection } from "../components/footer";
import HeaderSection from "../components/header";

import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Best Spa & Sauna Experience in Kampala – Wizz Gym Uganda",
    description:
      "Treat yourself to the best spa and sauna experience in Kampala at Wizz Gym. Relax, detox, and recover in a peaceful environment designed to boost your wellness.",
  };
}

const SPAAndSauna: React.FC = () => {
  return (
    <>
      <HeaderSection />
      <div className='w-[100%] overflow-hidden'>
        <section className='p-6 bg-red-100'>
          <h2 className='text-4xl font-bold text-center text-red-800 mb-8 font-custom'>
            SPA & Sauna
          </h2>

          <div className='font-body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
            <div className='bg-red-600 shadow-lg rounded-lg overflow-hidden'>
              <img
                src='/beautiful-women-doing-self-care-treatment-home_23-2149007153.avif'
                alt='SPA Services'
                className='w-full h-48 object-cover'
              />
              <div className='p-6 bg-red-600'>
                <h3 className='text-2xl font-bold text-white mb-4'>
                  Our SPA Services
                </h3>
                <ul className='list-disc list-inside text-red-200   space-y-2'>
                  <li>Full Body Massage</li>
                  <li>Facials</li>
                  <li>Body Scrubs</li>
                  <li>Hot Stone Therapy</li>
                  <li>Aromatherapy</li>
                </ul>
              </div>
            </div>

            <div className='bg-red-600 shadow-lg rounded-lg overflow-hidden'>
              <img
                src='/strong-afroamerican-athletic-man-with-perfect-shape-musculs-brick-background-daylight-lamps-standing-white-smoke_397170-1912.avif'
                alt='Sauna Experience'
                className='w-full h-48 object-cover'
              />
              <div className='p-6 bg-red-600'>
                <h3 className='text-2xl font-bold text-white mb-4'>
                  Sauna Experience
                </h3>
                <p className='mb-4 text-red-200'>
                  Relax and rejuvenate in our sauna. Enjoy the benefits of heat
                  therapy, including improved circulation, detoxification, and
                  relaxation.
                </p>
                <h4 className='font-bold mb-2 text-lg text-white'>
                  Sauna Benefits:
                </h4>
                <ul className='list-disc list-inside text-red-200   space-y-2'>
                  <li>Stress Relief</li>
                  <li>Muscle Relaxation</li>
                  <li>Improved Skin Health</li>
                  <li>Enhanced Recovery</li>
                </ul>
              </div>
            </div>

            {/* New Steam Room Card */}
            <div className='bg-red-600 shadow-lg rounded-lg overflow-hidden'>
              <img
                src='room1.jpg'
                alt='Steam Room'
                className='w-full h-48 object-cover'
              />
              <div className='p-6 bg-red-600'>
                <h3 className='text-2xl font-bold text-white mb-4'>
                  Steam Room
                </h3>
                <p className='mb-4 text-red-200'>
                  Experience the ultimate relaxation in our steam room. The
                  warm, moist air helps improve breathing, detoxify your skin,
                  and rejuvenate your body.
                </p>
                <h4 className='font-bold mb-2 text-lg text-white'>
                  Steam Room Benefits:
                </h4>
                <ul className='list-disc list-inside text-red-200   space-y-2'>
                  <li>Improved Breathing</li>
                  <li>Detoxification</li>
                  <li>Skin Hydration</li>
                  <li>Muscle Recovery</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='text-center'>
            <Link
              target='_blank'
              href={`https://wa.me/+256705746131?text=${encodeURIComponent("Hello! I need details about your Spa and Sauna Services.")}`}
              className='bg-red-600 font-body tracking-wide font-bold text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-600 transition duration-300'
            >
              Book Your Experience!
            </Link>
          </div>
        </section>
        <FooterSection />
      </div>
    </>
  );
};

export default SPAAndSauna;
