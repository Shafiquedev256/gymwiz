"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCartCount } from "../hooks/CartContext";

const HeaderSection = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const cartCount = useCartCount();
  console.log(cartCount);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section className='z-20 sticky top-0 left-0 w-[100%] '>
        <div className='bg-white py-2 flex flex-col  text-black'>
          <div className='flex flex-row items-center justify-between pr-4 '>
            <Link href={"/"} className=' w-[36%]  md:w-2/6 '>
              <img
                src='/IMG-20250210-WA0000-removebg-preview.png'
                alt='Wizz gym logo'
                className='md:w-36 w-36 ml-2'
              />
            </Link>

            <ul className='text-red-600 font-medium lg:hidden space-x-2 flex flex-row justify-center items-center md:space-x-8'>
              {/** facebook  */}

              <li className='flex flex-row   items-center   lg:hover:underline hover:text-red-600 lg:hover:text-red-600'>
                <Link href={"/"} className='hover:text-black'>
                  <svg
                    width='23px'
                    height='23px'
                    fill='currentColor'
                    viewBox='0 0 1920 1920'
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
                        d='m1416.013 791.915-30.91 225.617h-371.252v789.66H788.234v-789.66H449.808V791.915h338.426V585.137c0-286.871 176.207-472.329 449.09-472.329 116.87 0 189.744 6.205 231.822 11.845l-3.272 213.66-173.5.338c-4.737-.451-117.771-9.25-199.332 65.655-52.568 48.169-79.191 117.433-79.191 205.65v181.96h402.162Zm-247.276-304.018c44.446-41.401 113.71-36.889 118.787-36.663l289.467-.113 6.204-417.504-43.544-10.717C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l61.932-451.233H1126.66v-69.152c0-54.937 14.214-96 42.078-122.058Z'
                        fillRule='evenodd'
                      ></path>
                    </g>
                  </svg>
                </Link>
              </li>
              {/** instagram */}
              <li className='flex  flex-row   items-center   lg:hover:underline hover:text-red-600 lg:hover:text-red-600'>
                <Link
                  href={
                    "https://www.instagram.com/kampalasitigym?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  }
                  className='hover:text-black'
                >
                  <svg
                    fill='currentColor'
                    width='28px'
                    height='28px'
                    viewBox='0 0 32 32'
                    xmlns='http://www.w3.org/2000/svg'
                    stroke='currentColor'
                    strokeWidth='0.00032'
                  >
                    <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                    <g
                      id='SVGRepo_tracerCarrier'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    ></g>
                    <g id='SVGRepo_iconCarrier'>
                      <path d='M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z'></path>
                      <path d='M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z'></path>
                    </g>
                  </svg>
                </Link>
              </li>
              {/** tiktok */}

              <li className='flex flex-row   items-center   lg:hover:underline hover:text-red-600 lg:hover:text-red-600'>
                <Link
                  href={
                    "https://www.tiktok.com/@sitigym_?is_from_webapp=1&sender_device=pc"
                  }
                  className='hover:text-black'
                >
                  <svg
                    width='28px'
                    height='28px'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M16.8217 5.1344C16.0886 4.29394 15.6479 3.19805 15.6479 2H14.7293M16.8217 5.1344C17.4898 5.90063 18.3944 6.45788 19.4245 6.67608C19.7446 6.74574 20.0786 6.78293 20.4266 6.78293V10.2191C18.645 10.2191 16.9932 9.64801 15.6477 8.68211V15.6707C15.6477 19.1627 12.8082 22 9.32386 22C7.50043 22 5.85334 21.2198 4.69806 19.98C3.64486 18.847 2.99994 17.3331 2.99994 15.6707C2.99994 12.2298 5.75592 9.42509 9.17073 9.35079M16.8217 5.1344C16.8039 5.12276 16.7861 5.11101 16.7684 5.09914M6.9855 17.3517C6.64217 16.8781 6.43802 16.2977 6.43802 15.6661C6.43802 14.0734 7.73249 12.7778 9.32394 12.7778C9.62087 12.7778 9.9085 12.8288 10.1776 12.9124V9.40192C9.89921 9.36473 9.61622 9.34149 9.32394 9.34149C9.27287 9.34149 8.86177 9.36884 8.81073 9.36884M14.7244 2H12.2097L12.2051 15.7775C12.1494 17.3192 10.8781 18.5591 9.32386 18.5591C8.35878 18.5591 7.50971 18.0808 6.98079 17.3564'
                      stroke='currentColor'
                      strokeLinejoin='round'
                    />
                  </svg>
                </Link>
              </li>
              {/** whatsapp */}

              <li className='flex flex-row   items-center   lg:hover:underline hover:text-red-600 lg:hover:text-red-600'>
                <Link href={"/"} className='hover:text-black'>
                  <svg
                    fill='currentColor'
                    width='28px'
                    height='28px'
                    viewBox='0 0 256 256'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M128.00049,28A100.02594,100.02594,0,0,0,41.11475,177.53908l-9.0044,31.51661a11.99971,11.99971,0,0,0,14.835,14.834l31.5166-9.00391A100.00677,100.00677,0,1,0,128.00049,28Zm0,192a91.87082,91.87082,0,0,1-46.95264-12.86719,3.99494,3.99494,0,0,0-3.14355-.4082l-33.15723,9.47363a3.99979,3.99979,0,0,1-4.94434-4.94531l9.47266-33.15625a4.00111,4.00111,0,0,0-.4082-3.14355A92.01077,92.01077,0,1,1,128.00049,220Zm50.51123-73.457-20.45947-11.69141a12.01054,12.01054,0,0,0-12.12745.12891l-13.80664,8.28418a44.04183,44.04183,0,0,1-19.38232-19.38281l8.28369-13.80664a12.0108,12.0108,0,0,0,.12891-12.127l-11.69092-20.46A10.91584,10.91584,0,0,0,100,72a32.00811,32.00811,0,0,0-32,31.88086A84.001,84.001,0,0,0,151.999,188h.12012A32.00842,32.00842,0,0,0,184,156,10.913,10.913,0,0,0,178.51172,146.543ZM152.10791,180h-.1084A75.99972,75.99972,0,0,1,76,103.8926,23.997,23.997,0,0,1,100,80a2.89975,2.89975,0,0,1,2.51172,1.457L114.20264,101.918a4.00418,4.00418,0,0,1-.043,4.042l-9.38916,15.64844a3.9987,3.9987,0,0,0-.21826,3.69824,52.04112,52.04112,0,0,0,26.1416,26.1416,3.99707,3.99707,0,0,0,3.69873-.21875L150.04,141.84084a4.006,4.006,0,0,1,4.043-.04394l20.46045,11.69238A2.89712,2.89712,0,0,1,176,156,23.99725,23.99725,0,0,1,152.10791,180Z' />
                  </svg>
                </Link>
              </li>
            </ul>
            {/* Desktop menu */}
            <div className='md:block hidden md:w-3/5 md:px-3'>
              <ul className=' flex flex-row justify-between text-lg items-center'>
                <li>
                  <Link
                    href={"/aboutus"}
                    className={`${pathname === "/aboutus" ? " underline text-red-600" : " "} hover:underline  hover:text-red-500`}
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/pricing"}
                    className={`${pathname === "/pricing" ? " underline text-red-600" : " "} hover:underline hover:text-red-600`}
                  >
                    Pricing
                  </Link>
                </li>

                <li className=' flex flex-col-reverse   hover:underline hover:text-red-600'>
                  <div className='relative'>
                    {open && (
                      <div className=' lg:absolute lg:top-6 lg:z-20 text-black lg:bg-gray-100 shadow-md p-1 rounded mr-3 lg:shadow-lg flex-col flex'>
                        <Link
                          href={"/classes/women"}
                          className='hover:bg-red-600 hover:text-white my-2 text-center p-2 w-[100%] rounded-lg '
                        >
                          Female
                        </Link>
                      </div>
                    )}
                  </div>

                  <Link href={"/classes"} onClick={() => setOpen(!open)}>
                    Classes
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/spa"}
                    className={`${pathname === "/spa" ? " underline text-red-600" : " "} hover:underline hover:text-red-600`}
                  >
                    Spa
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/contact"}
                    className={` ${pathname === "/contact" ? " underline text-red-600" : " "} hover:underline hover:text-red-600`}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/carears"}
                    className={`${pathname === "/carears" ? " underline text-red-600" : " "} hover:underline hover:text-red-600`}
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/shop"}
                    className={` ${pathname === "/shop" ? " underline text-red-600" : " "} hover:underline hover:text-red-600`}
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/shop/cart"}
                    className={`${pathname === "/shop/cart" ? " underline text-red-600" : " "} hover:underline hover:text-red-600`}
                  >
                    <div className='flex flex-row space-x-1 items-center'>
                      <span className=' text-center font-bold text-sm'>
                        {cartCount}
                      </span>
                      <span>Cart</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            {/* Mobile Menu Button */}

            <button
              onClick={toggleMenu}
              className={`md:hidden focus:outline-none text-black `}
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>

            {/* Mobile Navigation */}

            <div
              className={`md:hidden bg-white text-gray-400 ${isOpen ? "translate-x-0" : "-translate-x-[500px]"} z-10   ease-in-out duration-300  w-[100%]  fixed top-0 left-0 flex flex-col justify-center items-center h-[100vh]    text-gray-700`}
            >
              <div
                onClick={() => {
                  setIsOpen(false);
                }}
                className='  px-6 text-center w-[100%] font-light flex items-center justify-center lg:hidden right-0 mb-4'
              >
                <svg
                  viewBox='-0.5 0 25 25'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  width='50'
                  height='50'
                >
                  <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                  <g
                    id='SVGRepo_tracerCarrier'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></g>
                  <g id='SVGRepo_iconCarrier'>
                    {" "}
                    <path
                      d='M3 21.32L21 3.32001'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    ></path>{" "}
                    <path
                      d='M3 3.32001L21 21.32'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <ul className='font-bold flex flex-col justify-between space-y-6  items-center'>
                <li>
                  <Link
                    href={"/aboutus"}
                    className={`${pathname === "/aboutus" && " bg-red-100 text-red-600 "} p-2  rounded-md hover:underline hover:text-red-600`}
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/pricing"}
                    className={`${pathname === "/pricing" && " bg-red-100 text-red-600 "} p-2  rounded-md hover:underline hover:text-red-600`}
                  >
                    Pricing
                  </Link>
                </li>
                <li className='flex justify-between items-center text-lg'>
                  <div className='relative flex flex-col-reverse items-center justify-center'>
                    {open && (
                      <div className=' text-center lg:absolute lg:top-6 lg:z-20  p-1 rounded mr-3 shadow-b-lg flex-col flex'>
                        <Link href={"/classes/women"} className=''>
                          Female classes
                        </Link>
                      </div>
                    )}

                    <Link
                      href={"/classes"}
                      onClick={() => setOpen(!open)}
                      className='font-bold    w-screen whitespace-nowrap  text-center lg:w-fit hover:underline block active:text-red-600 focus:text-red-600 hover:text-black'
                    >
                      Classes
                    </Link>
                  </div>
                </li>
                <li>
                  <Link
                    href={"/spa"}
                    className={`${pathname === "/spa" && " bg-red-100 text-red-600 "} p-2  rounded-md hover:underline hover:text-red-600`}
                  >
                    Spa
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/contact"}
                    className={` ${pathname === "/contact" && " bg-red-100 text-red-600 "} p-2  rounded-md hover:underline hover:text-red-600`}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/carears"}
                    className={`${pathname === "/carears" && " bg-red-100 text-red-600 "} p-2  rounded-md hover:underline hover:text-red-600`}
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/shop"}
                    className={` ${pathname === "/shop" && " bg-red-100 text-red-600 "} p-2  rounded-md hover:underline hover:text-red-600`}
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/shop/cart"}
                    className={`${pathname === "/shop/cart" && " bg-red-100 text-red-600 "} p-2  rounded-md hover:underline hover:text-red-600`}
                  >
                    <div className='flex flex-row space-x-1 items-center'>
                      <span className=' text-center font-bold text-sm'>
                        {cartCount}
                      </span>
                      <span>Cart</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderSection;
