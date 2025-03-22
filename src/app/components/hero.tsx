"use client";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <div className='relative w-[100%] h-[60vh] lg:h-[80vh] md:h-[70vh] bg-[url("/digitalgym.jpg")] bg-cover bg-center bg-no-repeat'>
        <div className=' absolute flex flex-col justify-center items-center top-0 left-0  w-[100%] h-[100%]'>
          <div className='absolute top-2 right-2'>
            <div className='w-fit relative'>
              <div className='bg-red-500 h-[120px] md:h-[150px] hexagon'></div>
              <div className='absolute text-lg  font-bold text-white   flex flex-col justify-center items-center  top-0 left-0 w-[100%] h-[100%]'>
                <span>Offer :</span>
                <span>up to</span>
                <span className='font-bold'>50% off</span>
              </div>
            </div>
          </div>

          <div className='absolute bottom-0   flex flex-col justify-center items-center w-[100%]'>
            <h1 className='text-white text-2xl md:text-4xl font-bold  mb-2  font-custom'>
              Unleash Your Potential
            </h1>
            <p className=' py-2 text-center font-body text-white'>
              Expert Training , Cutting-Edge Facilities ,<br /> and a Supportive
              Community
            </p>
            <Link
              href={`https://wa.me/+256705746131?text=${encodeURIComponent("Hello! I'm interested in your services.")}`}
              className='bg-red-700 font-bold font-body tracking-wide  text-sm my-2 w-[80%] md:w-[20%] rounded-full mb-3 text-center hover:bg-red-800 text-white p-3 '
            >
              Try One Day Pass!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
