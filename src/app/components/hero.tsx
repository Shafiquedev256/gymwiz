"use client";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className='bg-white text-black'>
      <div className='relative w-[100%] h-[70vh]  lg:h-[80vh] object-center md:h-[70vh] bg-[url("/herosection.jpeg")] bg-cover bg-center bg-no-repeat'>
        <div className=' absolute flex flex-col justify-center items-center top-0 left-0  w-[100%] h-[100%]'>
          <div className='absolute top-8 left-1 '>
            <div className='w-fit relative'>
              <div className='h-[180px]  w-[180px] md:w-[200px] md:h-[200px] bg-red-600 hexagon rounded-full'></div>
              <div className='absolute   font-bold text-black   flex flex-col justify-center items-center  top-0 left-0 w-[100%] h-[100%]'>
                <span>Hurry Up to</span>
                <span className='font-bold text-4xl md:text-5xl text-white'>
                  50% <br /> off
                </span>
                <span>& no joining fee</span>
              </div>
            </div>
          </div>

          <div className='absolute bottom-0   flex flex-col justify-center items-center w-[100%]'>
            <h1 className='text-white text-2xl md:text-4xl font-bold  mb-2  font-custom'>
              Unleash Your Potential
            </h1>
            <p className=' py-2 text-center font-body text-white'>
              Affordable Training , Cutting-Edge Facilities ,<br /> and a
              Supportive Community
            </p>
            <Link
              href={`https://wa.me/+256702329631?text=${encodeURIComponent("Hello! I'm interested in your services.")}`}
              className='bg-red-500 font-bold font-body tracking-wide  text-sm my-2 w-[80%] md:w-[20%] rounded-full mb-3 text-center hover:bg-red-600 text-white p-3 '
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
