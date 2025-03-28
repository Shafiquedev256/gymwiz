"use client";

import { FooterSection } from "@/app/components/footer";
import HeaderSection from "@/app/components/header";
import WeeklySchedule from "@/app/components/weeklySchedule";
import Link from "next/link";

const WomenClasses = () => {
  return (
    <>
      <HeaderSection />

      <div className='w-[100%] overflow-hidden'>
        <div className='min-h-screen bg-white'>
          {/* Hero Section */}
          <div className='bg-[url("/women1.jpg")] bg-center  bg-cover bg-no-repeat w-[100%] h-[50vh] md:h-[40vh] lg:h-[70vh]'></div>

          <WeeklySchedule schedule={womenSchedule} />
          {/* Programs Section */}
          <h3 className='text-center  text-2xl md:text-3xl title tracking-wide'>
            Fit, Fierce ,and Fearless
          </h3>
          <p className='text-center'>
            Women's Fitness Programs for a stronger, Healthier You
          </p>
          <section className='box font-body px-2 pb-10 grid bg-white grid-cols-2 md:flex md:flex-row gap-2 mt-10'>
            {workouts.map((programe) => (
              <div
                key={programe.workout + programe.description}
                className=' md:w-[222px] mt-6   rounded-lg flex flex-col justify-center items-center'
              >
                <img
                  src={programe.img}
                  alt={`woman doing ${programe.workout}`}
                  className='w-full h-[50%] md:h-[60%] object-cover rounded-t-lg'
                />
                <div className=' border-0 border-x border-b p-3 bg-pink-600 border-b-pink-600 rounded-b-lg border-x-pink-600'>
                  <h2 className=' font-bold text-white'>{programe.workout}</h2>
                  <p className='text-white  text-sm'>{programe.description}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
      <section className='relative  bg-[url("/woman-teaching-yoga-pose-outside.jpg")] object-center bg-center bg-cover bg-no-repeat'>
        <div className='w-[100%] h-[100%] bg-[#4140403d] bg-opacity-60  py-12 px-6 md:px-12'>
          <div className='max-w-4xl mx-auto text-center text-gray-100  flex flex-col justify-center items-center'>
            <h3 className='text-2xl  title tracking-wide mb-4'>
              Get Started Today
            </h3>
            <div className='mb-6  lg:w-[60%] flex flex-col justify-center items-center'>
              <p>
                Ready To Glow ? Ignite your Passion ! Join Our Fitness Community
                For Women
              </p>
              <Link
                href='/contact'
                className='mt-2 text-white text-center text-sm bg-red-600 w-fit p-2 px-4 rounded-full'
              >
                JOIN NOW
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
};

export default WomenClasses;

const womenSchedule = [
  {
    day: "Monday",
    programs: [
      {
        name: "CARDIO",
        time: "12:55 PM",
        duration: "45 MIN",
        coach: "Emily",
        description:
          "An engaging cardio session tailored for women to improve endurance and burn calories.",
        finished: false,
      },
      {
        name: "LOWER BODY",
        time: "01:45 PM",
        duration: "45 MIN",
        coach: "Emily",
        description:
          "Strengthen and tone lower body muscles with targeted exercises for women.",
        finished: false,
      },
      {
        name: "AEROBIC",
        time: "02:30 PM",
        duration: "45 MIN",
        coach: "Emily",
        description:
          "A dynamic aerobic workout to boost fitness levels and improve cardiovascular health.",
        finished: false,
      },
    ],
  },
  {
    day: "Tuesday",
    programs: [
      {
        name: "CARDIO",
        time: "12:55 PM",
        duration: "45 MIN",
        coach: "Emily",
        description:
          "An engaging cardio session tailored for women to improve endurance and burn calories.",
        finished: false,
      },
      {
        name: "AEROBIC",
        time: "02:30 PM",
        duration: "45 MIN",
        coach: "Emily",
        description:
          "A dynamic aerobic workout to boost fitness levels and improve cardiovascular health.",
        finished: false,
      },
    ],
  },
  {
    day: "Wednesday",
    programs: [
      {
        name: "CARDIO",
        time: "12:55 PM",
        duration: "45 MIN",
        coach: "Emily",
        description:
          "An engaging cardio session tailored for women to improve endurance and burn calories.",
        finished: false,
      },
      {
        name: "AEROBIC",
        time: "02:30 PM",
        duration: "45 MIN",
        coach: "Emily",
        description:
          "A dynamic aerobic workout to boost fitness levels and improve cardiovascular health.",
        finished: false,
      },
    ],
  },
  {
    day: "Thursday",
    programs: [
      {
        name: "CARDIO",
        time: "12:55 PM",
        duration: "45 MIN",
        coach: "Emily",
        description:
          "An engaging cardio session tailored for women to improve endurance and burn calories.",
        finished: false,
      },
      {
        name: "AEROBIC",
        time: "02:30 PM",
        duration: "45 MIN",
        coach: "Emily",
        description:
          "A dynamic aerobic workout to boost fitness levels and improve cardiovascular health.",
        finished: false,
      },
    ],
  },
  {
    day: "Friday",
    programs: [
      {
        name: "CARDIO",
        time: "12:55 PM",
        duration: "45 MIN",
        coach: "Emily",
        description:
          "An engaging cardio session tailored for women to improve endurance and burn calories.",
        finished: false,
      },
      {
        name: "MACHINES",
        time: "02:30 PM",
        duration: "45 MIN",
        coach: "Emily",
        description:
          "A guided session on gym machines designed for strength and conditioning.",
        finished: false,
      },
    ],
  },
  {
    day: "Saturday",
    programs: [
      {
        name: "CARDIO",
        time: "12:55 PM",
        duration: "45 MIN",
        coach: "Emily",
        description:
          "An engaging cardio session tailored for women to improve endurance and burn calories.",
        finished: false,
      },
      {
        name: "AEROBIC",
        time: "02:30 PM",
        duration: "45 MIN",
        coach: "Emily",
        description:
          "A dynamic aerobic workout to boost fitness levels and improve cardiovascular health.",
        finished: false,
      },
    ],
  },
];

const workouts = [
  {
    img: "/strengthwoman.jpg",
    workout: "Strength Training",
    description:
      " Build lean muscle and increase strength with this powerful workout. ",
  },
  {
    img: "/womandoingcardio.jpg",
    workout: "Cardio Blast",
    description:
      " Boost your heart rate and burn calories with this high-intensity workout. ",
  },
  {
    img: "/women.jpg",
    workout: "Yoga Flexibility",
    description:
      "  Enhance your flexibility and reduce stress with this calming yoga routine. ",
  },
  {
    img: "/woman4.jpg",
    workout: "HIIT Challenge",
    description:
      "  Push your limits with this high-intensity interval training workout. ",
  },
  {
    img: "/cardio.jpg",
    workout: "Core Strength",
    description: " Strengthen your core with this targeted abdominal workout. ",
  },
  {
    img: "/cardio.jpg",
    workout: "Pilates Flow",
    description:
      " Improve your posture and balance with this low-impact Pilates workout. ",
  },
];
