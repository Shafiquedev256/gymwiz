"use client";
import { FiveStars } from "./fivestars";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Testimonial = () => {
  const settings = {
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
      <div className='w-[100%] md:w-[90%] '>
        <Slider {...settings}>
          <div className='flex flex-row items-center text-black w-[300px]  h-[210px] rounded-md bg-[#f4e1e12f]'>
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
                  Wizz Gym offers a welcoming atmosphere and excellent
                  equipment. The group classes are fun yet challenging, and the
                  trainers truly motivate you. I’ve seen amazing results!
                </p>
                <p className=' text-lg font-bold font-body tracking-wide'>
                  - Sarah
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-row items-center text-black w-[300px]  h-[210px] rounded-md bg-[#f4e1e12f]'>
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
                  The supportive trainers, clean facilities, and diverse classes
                  keep me motivated. Whether you're a beginner or advanced, Wizz
                  Gym is perfect for reaching your goals.
                </p>
                <p className=' text-lg font-bold font-body tracking-wide'>
                  - Ben
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-row items-center text-black w-[300px]  h-[210px] rounded-md bg-[#f4e1e12f]'>
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
                <p className='font-body text-sm px-2 text-black '>
                  I had the pleasure of visiting Wizz gym, and I can confidently
                  say it’s one of the best gyms I’ve ever been to! From the
                  moment you walk in, you can feel the energy and passion for
                  fitness that this place represents.
                </p>
                <p className=' text-lg font-bold font-body tracking-wide'>
                  - Adam
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
