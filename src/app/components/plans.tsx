"use client";

import Link from "next/link";

export const Plans = () => {
  return (
    <>
      <div className=' text-black min-h-screen py-6'>
        <div className='flex flex-col justify-center items-center mb-4'>
          <h1 className='text-2xl tracking-wide title bg-red-500 w-[95%] md:w-[60%] p-2 rounded-md  font-bold mb-3 text-center'>
            Offer: Up to <span className='text-white'>50% off</span>
          </h1>
          <p className='w-[90%] md:w-[60%] text-center'>
            You might be taking the first step on your fitness journey or
            getting back into the groove, whatever your motivation, we’re here
            to help you kickstart your fitness journey
          </p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-lg tracking-wide title w-[95%] md:w-[60%] p-2 rounded-md  font-bold mb-3 text-center'>
            OUR MEMBERSHIP PLANS
          </h2>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <p className=' txt-lg text-center p-3   md:w-[50%]'>
            Our comprehensive plans are designed to offer maximum value, giving
            you access to state-of-the-art equipment and expert guidance from
            professional coaches.
          </p>
          <p className=' txt-lg text-center  mb-8  md:w-[50%]'>
            Experience the perfect blend of affordability and excellence in a
            fitness environment tailored to help you achieve your goals!
          </p>
        </div>

        {/**men membership */}
        <div className='flex flex-row text-black  space-x-2   justify-center items-center'>
          <div
            className='text-lg  font-semibold rounded-3xl w-[46%] md:w-full max-w-sm p-2 bg-red-500 border border-gray-200 hover:border-red-600   sm:p-8 
          '
          >
            <h2 className='text-black text-bold text-lg'>ONE DAY PASS</h2>
            <div className='text-white title  text-center  p-2 w-[100%]   rounded-md my-2'>
              Ugs 20,000 /<span className='text-sm'>VISITOR</span>
            </div>

            <ul className=' text-sm md:text-lg'>
              <li className='border-0 border-b-[1px] border-b-gray-200 border-dotted p-2 text-center font-light     flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap text-black'>
                  Fitness tips
                </span>
              </li>
              <li className='border-0 border-b-[1px] border-red-100 border-dotted p-2 text-center font-light     flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap text-black'>
                  Group Classes
                </span>
              </li>
              <li className='border-0 border-b-[1px] border-red-100 border-dotted p-2 text-center font-light     flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap text-black'>
                  Free weight
                </span>
              </li>
              <li className='border-0 border-b-[1px] border-red-100 border-dotted p-2 text-center font-light     flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap text-black'>Machines</span>
              </li>
              <li className=' border-0 border-b-[1px] border-red-100 border-dotted p-2 text-center font-light  text-red-200  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className='line-through whitespace-nowrap text-red-200 '>
                  {" "}
                  Training plans
                </span>
              </li>
              <li className='p-2 text-center font-light flex flex-row text-red-200 items-center space-x-2'>
                <TickIcone />
                <span className='line-through whitespace-nowrap text-red-200 '>
                  Meal plans
                </span>
              </li>
            </ul>
            <div className='flex justify-center mt-4  items-center'>
              <button
                onClick={() => {
                  const url = `https://wa.me/+256705746131?text=${encodeURIComponent("SUBSCRIBE siti gym one day pass UGx 0")}`;
                  window.open(url, "_blank"); // Opens the WhatsApp chat in a new tab
                }}
                className='bg-white  text-red-600 md:w-[70%]  md:text-lg text-sm  p-2 rounded-md text-center   hover:bg-red-200 hover:text-red-600'
              >
                SUBSCRIBE NOW
              </button>
            </div>
          </div>
          <div
            className='text-lg font-semibold rounded-3xl w-[46%] md:w-full max-w-sm p-2 bg-red-500 border border-gray-200 hover:border-red-600   sm:p-8 
          '
          >
            <h2 className='text-black text-bold text-lg'>MEN'S PLAN</h2>
            <div className='text-white title  text-center  p-2 w-[100%]   rounded-md my-2'>
              Ugs 200,000 /<span className='text-sm'>MONTH</span>
            </div>
            <ul className=' text-sm md:text-lg'>
              <li className=' border-0 border-b-[1px] border-red-100 border-dotted p-2 text-center font-light   text-black  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap text-black'>
                  {" "}
                  Fitness tips
                </span>
              </li>
              <li className='border-0 border-b-[1px] border-red-100 border-dotted p-2 text-center font-light   text-black  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap text-black'>
                  {" "}
                  Group classes
                </span>
              </li>
              <li className='border-0 border-b-[1px] border-red-100 border-dotted p-2 text-center font-light   text-black  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap text-black'>
                  Free weight
                </span>
              </li>
              <li className='border-0 border-b-[1px] border-red-100 border-dotted p-2 text-center font-light   text-black  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap text-black'>Machines</span>
              </li>
              <li className='border-0 border-b-[1px] border-red-100 border-dotted p-2 text-center font-light   text-black  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap text-black'>
                  Training plans
                </span>
              </li>
              <li className='p-2 text-center font-light   text-black  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap text-black'>
                  Meal plans
                </span>
              </li>
            </ul>
            <div className='flex justify-center mt-4  items-center'>
              <button
                onClick={() => {
                  const url = `https://wa.me/+256705746131?text=${encodeURIComponent("SUBSCRIBE siti gym    Men's plan    Ugs 120,000")}`;
                  window.open(url, "_blank"); // Opens the WhatsApp chat in a new tab
                }}
                className='bg-white  text-red-600 md:w-[70%]  md:text-lg text-sm  p-2 rounded-md text-center   hover:bg-red-200 hover:text-red-600'
              >
                SUBSCRIBE NOW
              </button>
            </div>
          </div>
        </div>
        {/**WOmen membership */}
        <h2 className='text-center p-3 title  text-lg  '>
          Women & Students Membership Plans
        </h2>
        <div className='flex flex-row text-black space-x-2   justify-center items-center'>
          <div
            className='text-lg font-semibold rounded-3xl w-[46%] md:w-full max-w-sm p-2 bg-red-500 border border-gray-200 hover:border-red-600   sm:p-8 
          '
          >
            <h2 className='text-black text-bold md:text-lg whitespace-nowrap'>
              STUDENT PLAN
            </h2>
            <div className='text-white title    w-[100%]   rounded-md my-2'>
              Ugs 200,000 /<span className='text-sm'>MONTH</span>
            </div>
            <p className='text-xs bg-red-100 text-red-600 text-center rounded-md p-2'>
              20% off with valid student credentials
            </p>
            <ul className=' text-sm md:text-lg'>
              <li className='border-0 border-b-[1px] border-red-100 border-dotted p-2 text-center font-light   text-black  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap text-black'>
                  Fitness tips
                </span>
              </li>
              <li className='border-0 border-b-[1px] border-red-100 border-dotted p-2 text-center font-light   text-black  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap text-black'>
                  Group Classes
                </span>
              </li>
              <li className='border-0 border-b-[1px] border-red-100 border-dotted p-2 text-center font-light   text-black  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap text-black'>
                  Free weight
                </span>
              </li>

              <li className='border-0 border-b-[1px] border-red-100 border-dotted p-2 text-center font-light   text-black  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap text-black'>Machines</span>
              </li>
              <li className='border-0 border-b-[1px] border-red-100 border-dotted p-2 text-center font-light   text-black  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap text-black'>
                  Training plans
                </span>
              </li>
              <li className='border-0 border-b-[1px] border-red-100 border-dotted p-2 text-center font-light   text-black  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap text-black'>
                  Meal plans
                </span>
              </li>
              <li className='p-2 text-center font-light   text-red-100  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className='line-through whitespace-nowrap text-red-100'>
                  Private classes
                </span>
              </li>
            </ul>
            <div className='flex justify-center mt-4  items-center'>
              <button
                onClick={() => {
                  const url = `https://wa.me/+256705746131?text=${encodeURIComponent("SUBSCRIBE siti gym Student Ugs 100,000")}`;
                  window.open(url, "_blank"); // Opens the WhatsApp chat in a new tab
                }}
                className='bg-white  text-red-600 md:w-[70%]  md:text-lg text-sm  p-2 rounded-md text-center   hover:bg-red-200 hover:text-red-600'
              >
                SUBSCRIBE NOW
              </button>
            </div>
          </div>
          <div
            className='text-lg font-semibold rounded-3xl w-[46%] md:w-full max-w-sm p-2 bg-red-500 border border-gray-200 hover:border-red-600   sm:p-8 
          '
          >
            <h2 className='text-black text-bold text-lg'>WOMEN'S PLAN</h2>
            <div className='text-white title  text-center   w-[100%]   rounded-md my-2'>
              Ugs 180,000 /<span className='text-sm'>MONTH</span>
            </div>
            <p className='text-xs bg-red-500 text-red-500 rounded-md p-2'>
              00% off with valid student credentials
            </p>
            <ul className=' text-sm md:text-lg'>
              <li className=' border-0 border-b-[1px] border-red-100 border-dotted p-2 text-center font-light   text-black  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap text-black'>
                  {" "}
                  Fitness tips
                </span>
              </li>
              <li className='border-0 border-b-[1px] border-red-100 border-dotted p-2 text-center font-light   text-black  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap text-black'>
                  {" "}
                  Group classes
                </span>
              </li>
              <li className='border-0 border-b-[1px] border-red-100 border-dotted p-2 text-center font-light   text-black  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap text-black'>
                  Free weight
                </span>
              </li>
              <li className='border-0 border-b-[1px] border-red-100 border-dotted p-2 text-center font-light   text-black  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap text-black'>Machines</span>
              </li>
              <li className='border-0 border-b-[1px] border-red-100 border-dotted p-2 text-center font-light   text-black  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap text-black'>
                  Training plans
                </span>
              </li>
              <li className='border-0 border-b-[1px] border-red-100 border-dotted p-2 text-center font-light   text-black  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap text-black'>
                  Meal plans
                </span>
              </li>
              <li className='p-2 text-center font-light   text-black  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap text-black'>
                  Private clases
                </span>
              </li>
            </ul>
            <div className='flex justify-center mt-4  items-center'>
              <button
                onClick={() => {
                  const url = `https://wa.me/+256705746131?text=${encodeURIComponent("SUBSCRIBE siti gym Women Ugs 120,000")}`;
                  window.open(url, "_blank"); // Opens the WhatsApp chat in a new tab
                }}
                className='bg-white  text-red-600 md:w-[70%]  md:text-lg text-sm  p-2 rounded-md text-center   hover:bg-red-200 hover:text-red-600'
              >
                SUBSCRIBE NOW
              </button>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center p-4 mx-2'>
          <div className='md:w-[56%] flex flex-col space-y-3 md:space-y-1 text-center '>
            <p>
              You choose the option that works best for your business. To set up
              a corporate package or to find out more please email us.
            </p>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center p-6 mx-2'>
          <h2 className='font-semibold title tracking-wider'>CORPORATE </h2>
          <p className=' text-center md:w-[55%] text-black'>
            Save up to
            <span className='text-red-500 text-2xl font-bold mx-2'>30%</span> on
            memberships when you sign your employees up to one of our great
            corporate packages.
            <Link
              href='/contact'
              className='whitespace-nowrap text-red-600 underline'
            >
              Contact us for more information
            </Link>
          </p>
        </div>

        <div className='flex flex-col justify-center items-center my-3'>
          <div
            className='text-lg font-semibold rounded-3xl  md:w-full max-w-sm p-2 bg-red-500 border border-gray-200 hover:border-red-600   sm:p-8 
          '
          >
            <h2 className='text-black text-bold text-center text-lg'>
              CORPORATE PLAN
            </h2>
            <div className=' text-white title  text-center  p-2 w-[100%]   rounded-md my-2'>
              Ugs 200,000 /<span className='text-sm'>MONTH</span>
            </div>
            <p className='text-xs bg-red-100 text-red-600 text-center rounded-md p-2'>
              30% off
            </p>
            <ul className=' text-sm md:text-lg'>
              <li className=' border-0 border-b-[1px] border-red-100 border-dotted p-2 text-center font-light   text-black  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap text-black'>
                  {" "}
                  Fitness tips
                </span>
              </li>
              <li className='border-0 border-b-[1px] border-red-100 border-dotted p-2 text-center font-light   text-black  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap text-black'>
                  {" "}
                  Group classes
                </span>
              </li>
              <li className='border-0 border-b-[1px] border-red-100 border-dotted p-2 text-center font-light   text-black  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap text-black'>
                  Free weight
                </span>
              </li>
              <li className='border-0 border-b-[1px] border-red-100 border-dotted p-2 text-center font-light   text-black  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap text-black'>Machines</span>
              </li>
              <li className='border-0 border-b-[1px] border-red-100 border-dotted p-2 text-center font-light   text-black  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap text-black'>
                  Training plans
                </span>
              </li>
              <li className='border-0 border-b-[1px] border-red-100 border-dotted p-2 text-center font-light   text-black  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap text-black'>
                  Meal plans
                </span>
              </li>
              <li className='p-2 text-center font-light   text-black  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap text-black'>
                  Private clases
                </span>
              </li>
            </ul>
            <div className='flex justify-center mt-4  items-center'>
              <button
                onClick={() => {
                  const url = `https://wa.me/+256705746131?text=${encodeURIComponent("SUBSCRIBE siti gym  Corporate Ugs 120,000")}`;
                  window.open(url, "_blank"); // Opens the WhatsApp chat in a new tab
                }}
                className='bg-white  text-red-600 md:w-[70%]  md:text-lg text-sm  p-2 rounded-md text-center   hover:bg-red-200 hover:text-red-600'
              >
                SUBSCRIBE NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TickIcone = () => {
  return (
    <svg
      width='20px'
      height='20px'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        <path
          d='M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z'
          fill='currentColor'
        ></path>
        <path
          d='M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z'
          fill='currentColor'
        ></path>
      </g>
    </svg>
  );
};
