"use client";
import Link from "next/link";
import { FooterSection } from "../components/footer";
import HeaderSection from "../components/header";

const About_us_page = () => {
  return (
    <>
      <HeaderSection />
      <section className='text-black bg-white'>
        {/** Hero section on the about us page  */}
        <div className=' h-[60vh] flex items-center justify-center bg-[url("/aboutus.jpg")]  bg-cover bg-center bg-no-repeat bg-aboutsection  w-[100%]   '></div>
        <section className='my-4 bg-white text-black'>
          <h2 className='text-2xl text-center title md:text-3xl'>
            PUSH YOUR LIMITS FORWARD
          </h2>
          <div className='md:m-3 mx-2 grid grid-cols-2 grid-rows-2 md:flex md:flex-row md:space-x-5   md:justify-center py-8 gap-2.5 md:items-center '>
            <div className='md:w-[230px] text-white md:h-[280px] w-[1fr] h-[300px] py-4 md:m-3 flex flex-col justify-center items-center rounded-md p-3 bg-[#f83131]'>
              <div className='flex justify-center mb-3   items-center h-2/5'>
                <span className='bg-white rounded-full justify-center items-center p-2'>
                  <img src='/cycle.svg' alt='' />
                </span>
              </div>
              <h3 className='text-center text-lg font-semibold mb-4 font-body'>
                Modern Facilities
              </h3>
              <div className='h-3/5'>
                <p className=' text-sm text-center'>
                  Clean, Spacious and equiped with everything you need, from
                  weights to cardio to recovery
                </p>
              </div>
            </div>
            <div className='md:m-3 md:w-[230px] md:h-[280px] w-[1fr] h-[300px] py-4 flex flex-col justify-center items-center rounded-lg p-3 bg-[#f83131] text-white'>
              <div className='flex justify-center   items-center h-2/5'>
                <div className='bg-white rounded-full justify-center items-center p-2'>
                  <svg
                    width='50px'
                    height='50px'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M15 10L11 14L9 12M4 5V12.0557C4 15.0859 5.71202 17.856 8.42229 19.2111L12 21L15.5777 19.2111C18.288 17.856 20 15.0859 20 12.0557V5L19.303 5.07744C16.8542 5.34953 14.3912 4.70802 12.3863 3.27594L12 3L11.6137 3.27594C9.60878 4.70802 7.14576 5.34953 4.69699 5.07744L4 5Z'
                      stroke='red'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              </div>
              <h3 className='text-center text-lg font-semibold mb-4 font-body'>
                Certified Trainers
              </h3>
              <div className='h-3/5'>
                <p className=' text-sm text-center'>
                  You're never on your own, we've got your back. Our team is
                  here to hype you up, show you the ropes abd help you crush
                  your goals whatever they're.
                </p>
              </div>
            </div>

            <div className='md:w-[230px] md:h-[280px] m-3 py-4 col-span-full flex flex-col justify-center items-center rounded-lg p-3 bg-[#f83131] text-white'>
              <div className='flex justify-center mb-3 items-center h-2/5'>
                <div className='bg-white rounded-full justify-center items-center p-2'>
                  <img src='/trainers.svg' alt='' />
                </div>
              </div>
              <h3 className='text-center text-lg font-semibold mb-4 font-body'>
                Variety of Classes
              </h3>
              <div className='h-3/5'>
                <p className=' text-sm text-center'>
                  From sweaty HIIT to chill yoga flows, our classes are fun,
                  welcoming and never boring. There's always something for
                  everyone, no matter your fitness levels and interests.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='mb-8'>
          <div className='flex flex-col md:flex-row items-center justify-between m-2'>
            <div className='relative md:w-[60%]'>
              <div className='absolute flex justify-center items-center z-10 text-6xl top-0 left-0 w-[100%] h-[100%]'>
                <div className='bg-[#fefefe7e] hover:bg-[#fdfcfcd0] text-red-700 flex justify-center items-center w-32 h-32 rounded-full p-2'>
                  <img src='/play.svg' alt='play video' />
                </div>
              </div>
              <img
                src='/woman-teaching-yoga-pose-outdoors.jpg'
                alt='woman-teaching-yoga-pose-outdoors'
                className='rounded-md '
              />
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h2 className='title font-semibold text-2xl rounded text-center mb-2 py-3  md:my-3 '>
                Our Story
              </h2>
              <p className=' mb-6 px-2 md:w-[70%] md:text-center'>
                Wizz Gym began with a simple need. <br /> As students, we
                couldn’t find a nearby gym that was affordable, modern, or
                welcoming. <br /> Most options were too far, too expensive, or
                not student-friendly.
                <br />
                So we decided to create our own. Wizz Gym is now a space where
                anyone students, professionals, or first-timers can feel
                supported, motivated, and part of a community that’s all about
                healthy living.
              </p>
            </div>
          </div>

          <div className='flex my-4 flex-col md:flex-row-reverse md:items-center'>
            <div className='mx-3'>
              <img src='/about-us-img-2.jpg' alt='' className='rounded-md' />
            </div>
            <div className='md:w-[80%]'>
              <div className='mx-3 flex flex-col justify-center items-center'>
                <h2 className='title font-semibold text-2xl rounded text-center mb-2 py-3  md:my-3 '>
                  Where We're Headed
                </h2>
                <p className='  md:w-[70%] px-2'>
                  Wizz Gym is just getting started and we’re building more than
                  a gym, we’re creating a movement centered around accessible
                  fitness, mental wellness, and strong community.
                </p>
                <p className=' md:w-[70%] p-2'>
                  Our mission is to expand across Uganda, making modern,
                  affordable fitness available to everyone, no matter their
                  background.
                </p>
                <p className=' md:w-[70%] p-2'>
                  But our vision goes beyond gym walls, we aim to actively
                  support Uganda’s health system by promoting preventative
                  wellness, collaborating with hospitals, and creating fitness
                  programs that complement public health efforts.
                </p>
                <p className=' md:w-[70%] p-2'>
                  We’re growing with purpose, expanding locations across Kampala
                  and beyond launching new classes and wellness programs,
                  partnering with healthcare providers to bridge the gap between
                  fitness and healthcare. <br />
                  Our goal is to become one of Uganda’s most trusted fitness and
                  wellness brands supporting healthier lives, stronger
                  communities, and a better tomorrow.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='flex justify-center items-center'>
            <div className='md:w-[60%]'>
              <h2 className='title font-semibold text-2xl rounded text-center mb-2 py-3  md:my-3 '>
                Our Core Values
              </h2>
              <div className='flex md:flex-row flex-col justify-center items-center  '>
                <div className='flex flex-col justify-center px-2 my-2'>
                  <div className='flex flex-row space-x-2 justify-center my-4 w-fit'>
                    <img
                      src='/zz.jpg'
                      alt='/wizz gym logo'
                      className='w-12 h-12 rounded-full'
                    />

                    <span className='text-sm'>
                      <span className='pr-2 font-semibold text-lg'>
                        Strength in Unity
                      </span>{" "}
                      <br />
                      We believe in the power of community. <br /> Together, we
                      motivate, support, and grow turning individual goals into
                      shared success.
                    </span>
                  </div>

                  <div className='flex my-4 flex-row space-x-2 justify-center w-fit'>
                    <img
                      src='/zz.jpg'
                      alt='/wizz gym logo'
                      className='w-12 h-12 rounded-full'
                    />

                    <span className='text-sm '>
                      <span className='pr-2 font-semibold text-lg'>
                        Growth Mindset
                      </span>{" "}
                      <br />
                      We believe in constant progress. <br /> Whether you're
                      chasing your first workout or your personal best, we’re
                      here to support your journey physically, mentally, and
                      personally.
                    </span>
                  </div>
                </div>

                <div className='flex flex-col space-y-3 px-2 '>
                  <div className='my-4 flex flex-row space-x-2 justify-center w-fit'>
                    <img
                      src='/zz.jpg'
                      alt='/wizz gym logo'
                      className='w-12 h-12 rounded-full'
                    />

                    <span className='text-sm '>
                      <span className='pr-2 font-semibold text-lg'>
                        Together, Stronger
                      </span>
                      <br />
                      We’re more than a gym, we’re a family. <br /> We lift each
                      other up, we celebrate effort, consistency together, and
                      build strength as a united, supportive community.
                    </span>
                  </div>

                  <div className='my-4 flex flex-row space-x-2 justify-center  md:w-fit'>
                    <img
                      src='/zz.jpg'
                      alt='/wizz gym logo'
                      className='w-12 h-12 rounded-full'
                    />

                    <p className='text-sm '>
                      <span className='pr-2 font-semibold text-lg'>
                        Accessible Wellness
                      </span>
                      <br />
                      Fitness should be for everyone. <br /> That’s why we offer
                      affordable membership options without compromising on
                      quality, we uphold the highest standards ensuring you get
                      the best environment to thrive in.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          {/* Members Rules Section */}

          <h2 className='title font-semibold text-2xl text-center mb-2 py-3  md:my-3 '>
            Member Guidelines
          </h2>
          <div className='flex justify-center items-center'>
            <p className=' mb-2 w-[90%] md:w-[60%] md:text-center  px-2'>
              We strive to make our gym a safe and enjoyable experience for all
              members and staff. Please familiarise yourself with our Gym Rules
              to ensure a positive environment for everyone.​
              <Link
                href={"/gymrules"}
                className='underline text-[#f83131] font-semibold md:p-2'
              >
                Learn About Our Rules
              </Link>
            </p>
          </div>

          <div className='w-[95%]'>
            {/* Community Work Section */}

            <div className='w-screen bg-[url("/nature.jpg")] bg-center bg-cover bg-no-repeat my-4   w4scre4n'>
              <div className='bg-[#00000075] bg-opacity-60 p-3 flex justify-center items-center flex-col w-[100%] h-[100%]'>
                <h2 className=' font-semibold text-2xl text-center mb-2 py-3 text-white  md:my-3 '>
                  Community Work
                </h2>
                <p className=' text-gray-100   md:text-center md:w-[50%] mb-6'>
                  At Siti Gym, we believe in giving back to the community. We
                  actively contribute to local projects and initiatives that
                  support health and wellness in the broader community.
                  <Link
                    href={"/community"}
                    className='underline  text-[#f83131] m-2 md:whitespace-nowrap font-semibold '
                  >
                    Learn About Our Community Work
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='mt-4 flex flex-col justify-between items-center'>
          <div>
            <div className=' flex flex-col justify-center items-center space-y-2'>
              <h2 className='title font-semibold text-2xl rounded text-center  '>
                WHAT OUR MEMBERS NEED TO KNOW !
              </h2>
              <p className='text-center text-sm md:w-[50%]'>
                We&apos;re committed to reducing our carbon footprint and
                contributing to a healthier environment through our carbon
                net-zero strategy.
              </p>
            </div>

            <div className='md:4/5  p-8 '>
              <div className='space-y-2 text-left flex flex-col   '>
                <div className='flex flex-row space-x-2 justify-center mt-2 md:items-center w-fit'>
                  <img
                    src='/zz.jpg'
                    alt='/wizz gym logo'
                    className='w-12 h-12 rounded-full'
                  />
                  <p className=' '>
                    Purchasing renewable energy equipment to reduce our carbon
                    emissions.
                  </p>
                </div>

                <div className=' flex flex-row space-x-2 justify-center mt-2 md:items-center w-fit'>
                  <img
                    src='/zz.jpg'
                    alt='/wizz gym logo'
                    className='w-12 h-12 rounded-full'
                  />
                  <p className=' '>
                    Installing LED energy-efficient lights to reduce energy
                    consumption.
                  </p>
                </div>

                <div className='flex flex-row space-x-2 justify-center mt-2 w-fit md:items-center'>
                  <img
                    src='/zz.jpg'
                    alt='/wizz gym logo'
                    className='w-12 h-12 rounded-full'
                  />
                  <p className=' '>
                    Introducing high-efficiency showers to save water.
                  </p>
                </div>

                <div className='flex flex-row space-x-2 justify-center mt-2  w-fit md:items-center'>
                  <img
                    src='/zz.jpg'
                    alt='/wizz gym logo'
                    className='w-12 h-12 rounded-full'
                  />
                  <p className=' '>
                    Maintaining a high-quality equipment maintenance program for
                    maximum efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h2 className='title font-semibold text-lg rounded text-center  '>
              WHAT OUR MEMBERS DO TO HELP !
            </h2>
          </div>
          <div className='flex flex-col justify-center items-center  mx-2'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 md:w-[55%]'>
              <div className='flex flex-col  justify-center items-center text-center py-3'>
                <span className='bg-black rounded-full justify-center items-center p-2'>
                  {/* Replace with your SVG icon for showers */}
                  <img src='/towel.svg' alt='shower icone' />
                </span>
                <div className='ml-4'>
                  <h3 className='font-semibold text-[#f83131]'>
                    Short Showers
                  </h3>
                  <p className='text-sm'>
                    As water can be a scarce resource, even in Kampala it’s best
                    not to shower longer than necessary. Quick showers are a
                    small habit that make a big difference for sustainability.
                  </p>
                </div>
              </div>

              <div className='flex flex-col  justify-center items-center text-center py-3'>
                <span className='bg-black rounded-full justify-center items-center p-2'>
                  {/* Replace with your SVG icon for bottles */}
                  <img src='/bottle.svg' alt='bottle icone' />
                </span>
                <div className='ml-4'>
                  <h3 className='font-semibold text-[#f83131]'>
                    Recycle Your Water Bottle
                  </h3>
                  <p className='text-sm'>
                    All our gyms have a recycling point, so don’t forget to
                    always use the recycling bins provided and consider bringing
                    a reusable bottle to reduce waste. Clean up after yourself
                    and throw away any trash to keep the space tidy and
                    enjoyable for everyone.
                  </p>
                </div>
              </div>

              <div className='flex flex-col  justify-center items-center text-center py-3'>
                <span className='bg-black rounded-full justify-center items-center p-2'>
                  {/* Replace with your SVG icon for towels */}
                  <img src='/towel.svg' alt='towel icone' />
                </span>
                <div className='ml-4'>
                  <h3 className='font-semibold text-[#f83131]'>
                    Bring Your Towel
                  </h3>
                  <p className='text-sm'>
                    Using your own towel to wipe down machines after use helps
                    prevent the spread of bacteria and keeps the equipment clean
                    for the next person. Sweat left on machines isn’t just
                    unpleasant — it can lead to skin infections and damage the
                    equipment over time.
                  </p>
                </div>
              </div>

              <div className='flex flex-col  justify-center items-center text-center py-3'>
                <span className='bg-black rounded-full justify-center items-center p-2'>
                  <img src='/riding.svg' alt='cycling icone' />
                </span>
                <div className='ml-4'>
                  <h3 className='font-semibold text-[#f83131]'>
                    Avoid Driving
                  </h3>
                  <p className='text-sm'>
                    Walk or Jog: If you live nearby, turn your commute into a
                    warm-up! Walking or jogging to the gym is a great way to get
                    your body moving before your workout even begins. Cycle In:
                    Cycling is not only eco-friendly, but also a great way to
                    build stamina and burn extra calories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <div className=''>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.765779931804!2d32.60261527403775!3d0.29404126406153863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbd39c034e6cb%3A0x967e07aca4b42153!2sWizz%20Gym!5e0!3m2!1sen!2sug!4v1744286971703!5m2!1sen!2sug'
          className='w-full h-[30vh] md:h-[50vh]'
          loading='lazy'
        ></iframe>
      </div>
      <FooterSection />
    </>
  );
};

export default About_us_page;
