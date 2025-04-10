"use client";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <>
      <footer className='bg-black  w-screen overflow-hidden'>
        <div>
          <div className='flex flex-col md:flex-row md:justify-evenly items-center justify-center'>
            <div className='hidden  md:flex md:flex-row md:items-center md:justify-center md:space-x-3'>
              <Link href={"/"} className='object-center'>
                <img
                  src='/zzz1-removebg-preview.png'
                  alt='logo'
                  width={50}
                  height={50}
                  className='w-26   p-2'
                />
              </Link>
              <Link href={"/"}>
                <img
                  src={"/gym80.png"}
                  alt='logo'
                  width={50}
                  height={50}
                  className='w-20 '
                />
              </Link>
              <Link href={"/"}>
                <img
                  src={"/musc-removebg-preview.png"}
                  alt='logo'
                  width={50}
                  height={50}
                  className='w-28 '
                />
              </Link>
              <Link href={"/"}>
                <img
                  src={"/openflow-removebg-preview.png"}
                  alt='logo'
                  width={50}
                  height={50}
                  className='w-28  '
                />
              </Link>
            </div>

            <div className='font-body flex md:flex-row md:space-x-4 md:w-3/5 flex-col-reverse  justify-center items-center '>
              <div className=' text-center text-[#fdfdfddb] md:w-[90%]'>
                <div className='flex flex-row text-sm  p-3 space-x-5 justify-center items-center'>
                  <div className=' '>
                    <p className='w-full'>Monday - Saturday</p>
                    <p>6:30 AM - 10:30 PM</p>
                  </div>
                  <p className=' text-[#fdfdfddb] '>
                    Sunday <br /> Closed
                  </p>
                </div>
              </div>

              <div className='flex flex-col'>
                <ul className='text-sm md:mr-4 text-[#fdfdfddb]   flex flex-row   md:w-4/5 gap-3 '>
                  <li className='flex   items-center'>
                    <Link
                      href={"/gymrules"}
                      className='text-center whitespace-nowrap  hover:underline block   active:text-red-600 focus:text-red-600 hover:text-red-600'
                    >
                      Gym Rules
                    </Link>
                  </li>
                  <li className='flex   items-center'>
                    <Link
                      href={"/community"}
                      className=' text-center md:w-fit hover:underline block   active:text-red-600 focus:text-red-600 hover:text-red-600'
                    >
                      Community
                    </Link>
                  </li>
                  <li className='flex   items-center'>
                    <Link
                      href={"/franchise&investment"}
                      className=' flex-1 whitespace-nowrap  text-center md:w-fit hover:underline block   active:text-red-600 focus:text-red-600 hover:text-red-600'
                    >
                      Franchise & Investment
                    </Link>
                  </li>
                </ul>
                <ul className='md:text-[#fdfdfddb] md:font-medium mt-2 hidden space-x-2 md:flex md:flex-row md:justify-center md:items-center md:space-x-8'>
                  {/** facebook  */}

                  <li className='flex flex-row   items-center   md:hover:underline md:hover:text-black'>
                    <Link
                      href={
                        "https://www.instagram.com/sitigym?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      }
                      className='hover:text-red-600'
                    >
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
                  <li className='flex  flex-row   items-center   md:hover:underline md:hover:text-black'>
                    <Link
                      href={
                        "https://www.instagram.com/kampalasitigym?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      }
                      className='hover:text-red-600'
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

                  <li className='flex flex-row   items-center   md:hover:underline md:hover:text-black'>
                    <Link
                      href={
                        "https://www.tiktok.com/@sitigym_?is_from_webapp=1&sender_device=pc"
                      }
                      className='hover:text-red-600'
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

                  <li className='flex flex-row   items-center   md:hover:underline md:hover:text-black'>
                    <Link href={"/"} className='hover:text-red-600'>
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
              </div>
            </div>
          </div>

          <div className='px-4 font-body left-0 py-6 bg-[#494949] md:flex md:items-center md:justify-between'>
            <span className='text-sm text-white sm:text-center'>
              © 2025{" "}
              <Link href='/' className='hover:underline'>
                Wizz Gym Kampala, Uganda
              </Link>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};
