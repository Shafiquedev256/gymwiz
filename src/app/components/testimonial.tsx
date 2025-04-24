"use client";
import { FiveStars } from "./fivestars";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Testimonial = () => {
  const settings = {
    autoplay: true,
    speed: 5000,
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
    <section className='flex flex-col w-[100%] overflow-x-hidden min-h-[62vh] justify-center items-center'>
      <div>
        <h2 className='title tracking-wide text-2xl font-semibold font-custom text-center'>
          Real People, Real Results
        </h2>
        <p className='font-body text-center mb-6'>
          Be inspired on what our members achieved
        </p>
      </div>
      <div className='w-[100%]  '>
        <Slider {...settings}>
          {testmonialel.map((test) => (
            <div
              key={test.message}
              className='flex flex-row items-center text-white w-[333px] p-2 h-[222px] rounded-md bg-[#f83131]'
            >
              <div className=''>
                <div className=' rounded-md '>
                  <div className='flex flex-row justify-between items-center space-x-5 mt-2'>
                    <FiveStars />
                    <div className='ml-3'>
                      <img
                        src='/zz.jpg'
                        alt=''
                        className='w-12 h-12 rounded-full'
                      />
                    </div>
                  </div>
                  <p className='font-body text-sm p-2  '>{test.message}</p>
                  <p className=' text-lg  font-bold font-body tracking-wide'>
                    - {test.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;

const testmonialel = [
  {
    name: "Musoke M",
    message:
      "Wizz GYM offers a welcoming atmosphere and excellent equipment. The group classes are fun yet challenging, and the trainers truly motivate you. I’ve seen amazing results!",
    img: "",
  },
  {
    name: "Joseph K",
    message:
      "The supportive trainers, clean facilities, and diverse classes keep me motivated. Whether you're a beginner or advanced, Wizz GYM is perfect for reaching your goals.",
    img: "",
  },
  {
    name: "Kalanzi P",
    message:
      "I had the pleasure of visiting Wizz GYM, and I can confidently say it’s one of the best gyms I’ve ever been to! From the moment you walk in, you can feel the energy and passion for fitness that this place represents.",
    img: "",
  },
  {
    name: "Okello D",
    message:
      "The trainers here don’t just guide you—they inspire you. Wizz GYM has completely changed how I view fitness. I’ve never felt stronger or more confident!",
    img: "",
  },
  {
    name: "Rachel T",
    message:
      "From day one, the staff and members made me feel right at home. The workouts are always fresh, and I’m constantly learning something new.",
    img: "",
  },
  {
    name: "Brian N",
    message:
      "I used to struggle with consistency, but since joining Wizz GYM, working out has become something I look forward to. It’s more than just a gym—it’s a community.",
    img: "",
  },
  {
    name: "Linda A",
    message:
      "Clean environment, great music, passionate trainers—Wizz GYM ticks all the boxes. It’s now a part of my weekly routine I can’t do without.",
    img: "",
  },
  {
    name: "Tendo S",
    message:
      "The variety of programs offered keeps things exciting. Whether it’s strength training or cardio classes, Wizz GYM always delivers a great experience.",
    img: "",
  },
];
