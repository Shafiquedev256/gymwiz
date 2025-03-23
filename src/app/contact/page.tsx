"use client";
import { useState } from "react";
import { FooterSection } from "../components/footer";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import HeaderSection from "../components/header";

const ContactUsPage = () => {
  const [alert, setAlert] = useState(false);
  const [error, setError] = useState<
    null | "Sorry Message not sent! Please send direct email"
  >(null);
  const form = useRef<HTMLFormElement | any>(null);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    phone: "",
    message: "",
  });

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm("service_e10cej3", "template_2scakj6", form.current, {
        publicKey: "9UH7EmkMzyrOpuGGT",
      })
      .then(
        () => {
          setAlert(true);
          console.log("SUCCESS!");
          setFormData({
            user_name: "",
            user_email: "",
            phone: "",
            message: "",
          });
          setTimeout(() => {
            setAlert(false);
          }, 5000);
        },
        (error) => {
          setError("Sorry Message not sent! Please send direct email");
          console.log("FAILED...", error.text);
          setTimeout(() => {
            setError(null);
          }, 5000);
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <header>
        <meta
          name='description'
          content="Empower your fitness journey with women's workout programs at Siti Gym in Kampala, Uganda. Our tailored fitness routines are designed to help women of all fitness levels achieve their health and wellness goals in a supportive environment."
        />

        <meta
          name='keywords'
          content="women's workouts, Siti Gym Kampala, women's fitness classes, female fitness Uganda, strength training for women, women's health and wellness, women's cardio classes, fitness programs for women, women-only workout sessions, Kampala gym for women"
        />

        <title>Contact | Siti Gym Kampala, Uganda</title>
      </header>
      <HeaderSection />

      <div className='w-[100%] overflow-hidden'>
        {alert && (
          <div className='fixed top-0 left-0 w-[100%] flex justify-center items-center  z-50'>
            <p className='bg-green-100 font-semibold text-green-800 w-fit px-3 py-2 font-body my-4 rounded-lg'>
              Thanks for reaching out! we will reply as soon as possible 😊!{" "}
            </p>
          </div>
        )}
        {error && (
          <div className='fixed top-0 left-0 w-[100%] flex justify-center items-center  z-50'>
            <p className='bg-red-100 font-semibold text-red-800 w-fit px-3 py-2 font-body my-4 rounded-lg'>
              {error}
            </p>
          </div>
        )}
        <div className='font-body'>
          <div className='p-6 bg-red-200 flex flex-col md:flex-row justify-evenly md:items-center'>
            <div>
              <h2 className='text-3xl title tracking-wide font-bold mb-4 text-center text-black'>
                Contact Us
              </h2>
              <p className='text-black mb-6 text-center'>
                Get in touch with us to learn more about our gym and services.
              </p>
              <form
                ref={form}
                onSubmit={sendEmail}
                className=' p-3 rounded-md '
              >
                <div className='mb-4'>
                  <label htmlFor='name' className='block text-black  mb-2'>
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='user_name'
                    value={formData.user_name}
                    onChange={handleChange}
                    className='w-full bg-white     text-black px-4 py-2  
             rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
                    placeholder='Your Name'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label
                    htmlFor='user_email'
                    className='block text-black  mb-2'
                  >
                    Email
                  </label>
                  <input
                    type='Email'
                    name='user_email'
                    value={formData.user_email}
                    onChange={handleChange}
                    className='w-full px-4 py-2 bg-white text-black  
             rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
                    placeholder='Your Email'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label htmlFor='phone' className='block text-black  mb-2'>
                    Phone Number
                  </label>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    className='w-full px-4 py-2 bg-white text-black  
             rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
                    placeholder='Your Phone Number'
                    required
                  />
                </div>
                <div className='mb-6'>
                  <label htmlFor='message' className='block text-black  mb-2'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    className='w-full px-4 py-2 bg-white  text-black 
             rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
                    placeholder='Your Message'
                    rows={5}
                    required
                  ></textarea>
                </div>
                <div className='text-center'>
                  <button
                    type='submit'
                    className='px-6 py-2 bg-red-700 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50'
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/**
 <div className=' md:py-1 bg-white my-5 p-4 rounded-md text-black text-center  flex flex-col justify-center items-center'>
              <div className='flex flex-col justify-center items-center'>
                <div className='w-2/3 my-6 text-sm flex flex-col justify-center items-center'>
                  <svg
                    className='my-5'
                    fill='#9c0707'
                    height='70px'
                    width='70px'
                    version='1.1'
                    id='Capa_1'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 495.32 495.32'
                    xmlSpace='preserve'
                  >
                    <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                    <g
                      id='SVGRepo_tracerCarrier'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    ></g>
                    <g id='SVGRepo_iconCarrier'>
                      <g>
                        <path d='M247.67,0C153.562,0,77.277,76.285,77.277,170.393c0,71.734,99.034,237.014,146.103,311.514 c5.254,8.34,14.418,13.406,24.274,13.414c9.851,0,19.03-5.057,24.304-13.389c47.05-74.5,146.084-239.805,146.084-311.539 C418.043,76.285,341.759,0,247.67,0z M247.67,274.418c-53.227,0-96.369-43.141-96.369-96.363c0-53.227,43.143-96.367,96.369-96.367 c53.222,0,96.365,43.141,96.365,96.367C344.035,231.277,300.892,274.418,247.67,274.418z'></path>{" "}
                        <path d='M312.004,157.488l-37.168-5.402c-2.079-0.303-3.875-1.611-4.809-3.502l-16.613-33.666c-1.08-2.184-3.307-3.566-5.744-3.566 s-4.668,1.383-5.748,3.566l-16.607,33.666c-0.934,1.891-2.736,3.199-4.814,3.502l-37.168,5.402 c-2.408,0.352-4.401,2.037-5.153,4.354c-0.757,2.324-0.131,4.859,1.62,6.563l26.889,26.213c1.504,1.471,2.195,3.59,1.832,5.662 l-6.35,37.004c-0.408,2.396,0.57,4.83,2.555,6.26c1.963,1.434,4.582,1.621,6.742,0.484l33.227-17.473 c1.861-0.973,4.088-0.973,5.955,0l33.226,17.473c2.16,1.137,4.773,0.949,6.742-0.484c1.979-1.43,2.962-3.863,2.553-6.26 l-6.354-37.004c-0.357-2.072,0.328-4.191,1.832-5.662l26.894-26.213c1.751-1.703,2.372-4.238,1.62-6.563 C316.41,159.525,314.412,157.84,312.004,157.488z'></path>{" "}
                      </g>
                    </g>
                  </svg>
                  <p className='text-black mb-6 text-center font-bold '>
                    Visit Us Today!
                  </p>
                  <p className='text-gray-700'>
                    Siti Segawa Mall, Mwanga Road || Kampala Uganda
                  </p>
                </div>
                <div className='w-2/3 my-6 text-sm flex flex-col justify-center items-center'>
                  <svg
                    className='my-5'
                    fill='#9c0707'
                    height='70px'
                    width='70px'
                    version='1.1'
                    id='Capa_1'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 495.32 495.32'
                    xmlSpace='preserve'
                  >
                    <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                    <g
                      id='SVGRepo_tracerCarrier'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    ></g>
                    <g id='SVGRepo_iconCarrier'>
                      <g>
                        <path d='M247.67,0C153.562,0,77.277,76.285,77.277,170.393c0,71.734,99.034,237.014,146.103,311.514 c5.254,8.34,14.418,13.406,24.274,13.414c9.851,0,19.03-5.057,24.304-13.389c47.05-74.5,146.084-239.805,146.084-311.539 C418.043,76.285,341.759,0,247.67,0z M247.67,274.418c-53.227,0-96.369-43.141-96.369-96.363c0-53.227,43.143-96.367,96.369-96.367 c53.222,0,96.365,43.141,96.365,96.367C344.035,231.277,300.892,274.418,247.67,274.418z'></path>{" "}
                        <path d='M312.004,157.488l-37.168-5.402c-2.079-0.303-3.875-1.611-4.809-3.502l-16.613-33.666c-1.08-2.184-3.307-3.566-5.744-3.566 s-4.668,1.383-5.748,3.566l-16.607,33.666c-0.934,1.891-2.736,3.199-4.814,3.502l-37.168,5.402 c-2.408,0.352-4.401,2.037-5.153,4.354c-0.757,2.324-0.131,4.859,1.62,6.563l26.889,26.213c1.504,1.471,2.195,3.59,1.832,5.662 l-6.35,37.004c-0.408,2.396,0.57,4.83,2.555,6.26c1.963,1.434,4.582,1.621,6.742,0.484l33.227-17.473 c1.861-0.973,4.088-0.973,5.955,0l33.226,17.473c2.16,1.137,4.773,0.949,6.742-0.484c1.979-1.43,2.962-3.863,2.553-6.26 l-6.354-37.004c-0.357-2.072,0.328-4.191,1.832-5.662l26.894-26.213c1.751-1.703,2.372-4.238,1.62-6.563 C316.41,159.525,314.412,157.84,312.004,157.488z'></path>{" "}
                      </g>
                    </g>
                  </svg>
                  <p className='text-black mb-6 text-center font-bold'>
                    Coming Soon!
                  </p>
                  <p className='text-gray-700'>
                    Siti Gym Old Kira Bukoto, Kampala Uganda
                  </p>
                </div>
              </div>
            </div>

 */}

            <div className='flex flex-col justify-evenly]'>
              {/* Email Section */}
              <section className='bg-white  rounded-lg p-4  m-3 '>
                <div className='flex flex-row justify-center items-center space-x-3 my-2'>
                  <p className='text-red-600'>
                    <svg
                      width='40px'
                      height='40px'
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
                        <g id='style=fill'>
                          <g id='email'>
                            <path
                              id='Subtract'
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M7 2.75C5.38503 2.75 3.92465 3.15363 2.86466 4.1379C1.79462 5.13152 1.25 6.60705 1.25 8.5V15.5C1.25 17.393 1.79462 18.8685 2.86466 19.8621C3.92465 20.8464 5.38503 21.25 7 21.25H17C18.615 21.25 20.0754 20.8464 21.1353 19.8621C22.2054 18.8685 22.75 17.393 22.75 15.5V8.5C22.75 6.60705 22.2054 5.13152 21.1353 4.1379C20.0754 3.15363 18.615 2.75 17 2.75H7ZM19.2285 8.3623C19.5562 8.10904 19.6166 7.63802 19.3633 7.31026C19.1101 6.98249 18.6391 6.9221 18.3113 7.17537L12.7642 11.4616C12.3141 11.8095 11.6858 11.8095 11.2356 11.4616L5.6886 7.17537C5.36083 6.9221 4.88982 6.98249 4.63655 7.31026C4.38328 7.63802 4.44367 8.10904 4.77144 8.3623L10.3185 12.6486C11.3089 13.4138 12.691 13.4138 13.6814 12.6486L19.2285 8.3623Z'
                              fill='currentColor'
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </p>

                  <h2 className='text-2xl font-semibold text-whites'>
                    Email Us
                  </h2>
                </div>
                <p className='text-gray-600'>How Can We Help?</p>
                <ul className='list-disc list-inside text-gray-600 mt-2 space-y-1'>
                  <li>Book Trainer</li>
                  <li>Customer Service</li>
                </ul>
                <p className='text-gray-600 mt-2 '>wizzgym@gmail.com</p>
              </section>
              {/* Call Section */}
              <section className='  rounded-lg p-4 m-3 bg-white flex flex-col  '>
                <div className='flex flex-row space-x-3 justify-center items-center my-2'>
                  <p className='text-red-600'>
                    <svg
                      width='40px'
                      height='40px'
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
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M17.3545 22.2323C15.3344 21.7262 11.1989 20.2993 7.44976 16.5502C3.70065 12.8011 2.2738 8.66559 1.76767 6.6455C1.47681 5.48459 2.00058 4.36434 2.88869 3.72997L5.21694 2.06693C6.57922 1.09388 8.47432 1.42407 9.42724 2.80051L10.893 4.91776C11.5152 5.8165 11.3006 7.0483 10.4111 7.68365L9.24234 8.51849C9.41923 9.1951 9.96939 10.5846 11.6924 12.3076C13.4154 14.0306 14.8049 14.5807 15.4815 14.7576L16.3163 13.5888C16.9517 12.6994 18.1835 12.4847 19.0822 13.1069L21.1995 14.5727C22.5759 15.5257 22.9061 17.4207 21.933 18.783L20.27 21.1113C19.6356 21.9994 18.5154 22.5232 17.3545 22.2323ZM8.86397 15.136C12.2734 18.5454 16.0358 19.8401 17.8405 20.2923C18.1043 20.3583 18.4232 20.2558 18.6425 19.9488L20.3056 17.6205C20.6299 17.1665 20.5199 16.5348 20.061 16.2171L17.9438 14.7513L17.0479 16.0056C16.6818 16.5182 16.0047 16.9202 15.2163 16.7501C14.2323 16.5378 12.4133 15.8569 10.2782 13.7218C8.1431 11.5867 7.46219 9.7677 7.24987 8.7837C7.07977 7.9953 7.48181 7.31821 7.99439 6.95208L9.24864 6.05618L7.78285 3.93893C7.46521 3.48011 6.83351 3.37005 6.37942 3.6944L4.05117 5.35744C3.74413 5.57675 3.64162 5.89565 3.70771 6.15943C4.15989 7.96418 5.45459 11.7266 8.86397 15.136Z'
                          fill='currentColor'
                        ></path>
                      </g>
                    </svg>
                  </p>
                  <div className='text-2xl font-semibold text-black '>
                    Call Us
                  </div>
                </div>

                <p className='text-gray-600'>
                  <strong>Customer Service:</strong>
                </p>
                <p className='text-gray-700 mb-2'>
                  256 00 0 000 / 256 111 1 111
                </p>
                <p className='text-gray-700'>
                  Questions and support for classes, delivery, and payments.
                </p>
              </section>
            </div>
          </div>
        </div>

        <FooterSection />
      </div>
    </>
  );
};

export default ContactUsPage;
