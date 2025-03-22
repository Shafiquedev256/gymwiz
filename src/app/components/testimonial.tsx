"use client";
import { FiveStars } from "./fivestars";
const Testimonial = () => {
  return (
    <section className='flex flex-col justify-center items-center'>
      <div>
        <h2 className='title tracking-wide text-2xl font-semibold font-custom text-center'>
          Real People, Real Results
        </h2>
        <p className='font-body text-center mb-6'>
          Be inspired on what our members achieved
        </p>
      </div>
      <div className='flex flex-row my-3 justify-between items-center w-[80%] '>
        <div className='flex flex-row items-center text-black w-[300px]  h-[200px] rounded-md bg-[#f4e1e12f]'>
          <div className=''>
            <div className=' rounded-md flex flex-col   items-center'>
              <div className='flex flex-row justify-between items-center space-x-5 mt-2'>
                <FiveStars />
                <div className='ml-3'>
                  <img
                    src='/2149278023.jpg'
                    alt=''
                    className='w-12 h-12 rounded-full'
                  />
                </div>
              </div>
              <p className='font-body text-sm p-2 text-black '>
                Wizz Gym offers a welcoming atmosphere and excellent equipment.
                The group classes are fun yet challenging, and the trainers
                truly motivate you. I’ve seen amazing results!
              </p>
              <p className=' text-lg font-bold font-body tracking-wide'>
                - Josh
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-row items-center text-black w-[300px]  h-[200px] rounded-md bg-[#f4e1e12f]'>
          <div className=''>
            <div className=' rounded-md flex flex-col   items-center'>
              <div className='flex flex-row justify-between items-center space-x-5 mt-2'>
                <FiveStars />
                <div className='ml-3'>
                  <img
                    src='/2149278023.jpg'
                    alt=''
                    className='w-12 h-12 rounded-full'
                  />
                </div>
              </div>
              <p className='font-body text-sm p-2 text-black '>
                Wizz Gym offers a welcoming atmosphere and excellent equipment.
                The group classes are fun yet challenging, and the trainers
                truly motivate you. I’ve seen amazing results!
              </p>
              <p className=' text-lg font-bold font-body tracking-wide'>
                - Josh
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-row items-center text-black w-[300px]  h-[200px] rounded-md bg-[#f4e1e12f]'>
          <div className=''>
            <div className=' rounded-md flex flex-col   items-center'>
              <div className='flex flex-row justify-between items-center space-x-5 mt-2'>
                <FiveStars />
                <div className='ml-3'>
                  <img
                    src='/2149278023.jpg'
                    alt=''
                    className='w-12 h-12 rounded-full'
                  />
                </div>
              </div>
              <p className='font-body text-sm p-2 text-black '>
                Wizz Gym offers a welcoming atmosphere and excellent equipment.
                The group classes are fun yet challenging, and the trainers
                truly motivate you. I’ve seen amazing results!
              </p>
              <p className=' text-lg font-bold font-body tracking-wide'>
                - Josh
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
