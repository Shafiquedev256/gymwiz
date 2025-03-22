"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const HeaderSection = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <section className='z-20 sticky top-0 left-0 w-[100%] '>
        <div className='bg-red-700 flex flex-col  text-white'>
          <div className='flex flex-row items-center justify-between px-4 '>
            <div className=' w-[40%] md:w-2/6'>
              <img
                src='/wizzlogo.png'
                alt='Wizz gym logo'
                className='md:w-36'
              />
            </div>
            {/* Desktop menu */}
            <div className='md:block hidden md:w-2/5 md:px-3'>
              <ul className=' flex flex-row justify-between text-lg items-center'>
                <li>
                  <Link
                    href={"/aboutus"}
                    className={`${pathname === "/aboutus" ? "text-red-500 font-bold underline" : " "}`}
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    href={"/pricing"}
                    className={`${pathname === "/pricing" ? "text-red-500 font-bold underline" : " "}`}
                  >
                    Classes
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/pricing"}
                    className={`${pathname === "/pricing" ? "text-red-500 font-bold underline" : " "}`}
                  >
                    Spa
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/pricing"}
                    className={` ${pathname === "/pricing" ? "text-red-500 font-bold underline" : " "}`}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/pricing"}
                    className={`${pathname === "/pricing" ? "text-red-500 font-bold underline" : " "}`}
                  >
                    Carears
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/pricing"}
                    className={`${pathname === "/pricing" ? "text-red-500 font-bold underline" : " "}`}
                  >
                    Shop
                  </Link>
                </li>
              </ul>
            </div>
            {/* Mobile Menu Button */}

            <button
              onClick={toggleMenu}
              className={`md:hidden focus:outline-none z-20 ${isOpen ? "text-black" : "text-white"} `}
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                {isOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>

            {/* Mobile Navigation */}

            <div
              className={`md:hidden bg-white text-gray-400 ${isOpen ? "translate-x-0" : "-translate-x-[500px]"} z-10   ease-in-out duration-300  w-[100%]  fixed top-0 left-0 flex flex-col justify-center items-center h-[100vh]    text-gray-700`}
            >
              <ul className=' flex flex-col justify-between space-y-4 text-lg items-center'>
                <li>
                  <Link
                    href={"/aboutus"}
                    className={`${pathname === "/aboutus" ? "text-red-500 font-bold underline" : " "}`}
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    href={"/pricing"}
                    className={`${pathname === "/pricing" ? "text-red-500 font-bold underline" : " "}`}
                  >
                    Classes
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/pricing"}
                    className={`${pathname === "/pricing" ? "text-red-500 font-bold underline" : " "}`}
                  >
                    Spa
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/pricing"}
                    className={` ${pathname === "/pricing" ? "text-red-500 font-bold underline" : " "}`}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/pricing"}
                    className={`${pathname === "/pricing" ? "text-red-500 font-bold underline" : " "}`}
                  >
                    Carears
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/pricing"}
                    className={`${pathname === "/pricing" ? "text-red-500 font-bold underline" : " "}`}
                  >
                    Shop
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
