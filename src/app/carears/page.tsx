"use client";

import Link from "next/link";
import { FooterSection } from "../components/footer";
import HeaderSection from "../components/header";

function Carears() {
  return (
    <>
      <HeaderSection />
      <div className='xl:py-28 md:py-20 py-10 xl:px-0 px-10'>
        <span className='w-fit mx-auto flex items-center justify-center bg-emerald-50 rounded-full text-emerald-600 text-center text-sm font-medium leading-5 px-3 py-1 mb-5'>
          Careers at Wizz Gym
        </span>
        <h1 className='text-gray-900 text-center font-manrope lg:text-3xl text-4xl font-bold  mb-8'>
          Unlock new career <br /> opportunities at Wizz Gym{" "}
        </h1>
        <div className=' flex justify-center items-center'>
          <p className='text-gray-900 text-center md:w-[60%]  font-normal leading-7'>
            We hire people with real passion, positivity and enthusiasm who
            motivate and inspire those around them. Our vision is to have a
            diverse, high performing, engaged workforce that love what they do!
            We have a brilliant team and opportunities for development and
            growth with support for success.
          </p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-between m-2'>
        <div className='relative md:w-3/6'>
          <img
            src='/jobs.jpg'
            alt='woman-teaching-yoga-pose-outdoors'
            className='rounded-md'
          />
        </div>
        <div className='flex flex-col justify-center items-center md:w-4/6'>
          <h2 className='title font-semibold text-2xl rounded text-center mb-2 py-3  md:my-3 '>
            Why Choose Us ?
          </h2>
          <p className=' mb-6 px-2 md:w-[70%] md:text-center'>
            We offer some great benefits for you and your family. Whoever you
            are and whatever your role, Siti Gym is with you and will help you
            succeed. We’ll support you every step of the way along your career
            adventure, so that you can achieve your goals. We’ll stand with you
            to remove barriers that get in the way of progress, opening doors to
            new opportunities and we will always strive to make your workplace a
            truly inclusive and friendly space to work, so that we can all feel
            proud to be a part of this family and company’s great values.
          </p>
        </div>
      </div>
      <div className='lg:py-24 md:py-16 py-10 bg-slate-50 xl:px-0 md:px-10 px-2'>
        <h2 className='text-gray-900 text-center font-manrope lg:text-4xl text-3xl font-bold leading-10 mb-14'>
          Open positions
        </h2>
        <div className='lg:max-w-3xl md:max-w-xl sm:max-w-md max-w-sm mx-auto border border-slate-200 bg-white rounded-2xl p-12'>
          {jobs.map((job) => (
            <div
              key={job.title}
              className='flex justify-between items-center mt-2 gap-x-4 md:gap-x-8 pb-6 border-b border-gray-200'
            >
              <h3 className='text-gray-900 md:text-xl whitespace-nowrap font-medium leading-8'>
                {job.title}
              </h3>
              <Link
                target='blank'
                href={`https://wa.me/+256705746131?text=${encodeURIComponent("Hello! I'm interested in working for wizz Gym.")}`}
                className='w-20 h-9 rounded-full bg-red-50 hover:bg-red-100 transition-all text-center  justify-center items-center flex duration-700 text-red-600 text-xs font-semibold leading-4'
              >
                <span>Apply</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <FooterSection />
    </>
  );
}

export default Carears;

const jobs = [
  {
    title: "Personal Trainer",
  },
  {
    title: "Fitness Instructor",
  },
  {
    title: "Gym Manager",
  },
  {
    title: "Nutrition Coach",
  },
  {
    title: "Sales Associate",
  },
];
