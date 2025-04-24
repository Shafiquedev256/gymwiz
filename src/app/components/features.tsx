import Link from "next/link";

const OurFacilities = () => {
  return (
    <section className='bg-white text-black'>
      <h3 className='text-center text-2xl md:text-4xl font-semibold title tracking-wide'>
        Experience the Best
      </h3>
      <div className='flex flex-col space-y-2 justify-center items-center'>
        <div className='md:w-[60%] flex my-2 flex-row h-[200px] md:h-[300px] justify-between items-center p-2  rounded-md to-red-400'>
          <div className='w-[70%] md:w-[70%]'>
            <h4 className=' md:w-[70%] md:text-center md:text-3xl text-lg font-semibold   md:whitespace-nowrap'>
              Expert Personal training
            </h4>
            <p className='text-sm md:text-lg md:w-[70%] md:text-center '>
              Guided sessions with certified trainers for customized fitness
              plans.
            </p>
            <div className='md:w-[70%] flex md:justify-center md:items-center'>
              <Link
                href='/classes'
                className=' bg-[#f83131] px-3 w-fit hover:bg-red-600 text-white text-center rounded-full text-sm text-semibold p-2 my-2 md:m-4'
              >
                SEE CLASSES
              </Link>
            </div>
          </div>

          <img
            src='/image1.jpg'
            alt=''
            className='h-[50%] md:h-[80%]  rounded-md'
          />
        </div>
        <div className='md:w-[70%] flex my-2 flex-row-reverse md:flex-row h-[200px] md:h-[300px] justify-between items-center p-2  rounded-md to-red-400'>
          <img
            src='/image2.jpg'
            alt=''
            className='h-[50%] md:h-[80%] rounded-md '
          />

          <div className='w-[70%] md:w-[40%]'>
            <h4 className=' md:w-[100%] md:text-center md:text-3xl text-lg font-semibold   md:whitespace-nowrap'>
              Healthy nutrition plan
            </h4>
            <p className='text-sm md:text-lg md:w-[100%] md:text-center '>
              Expert advice for healthy eating and meal planning
            </p>
            <div className='md:w-[100%] flex md:justify-center md:items-center'>
              <Link
                href='/classes'
                className=' bg-[#f83131] px-3 w-fit hover:bg-red-600 text-white text-center rounded-full text-sm text-semibold p-2 my-2 md:m-4'
              >
                SEE CLASSES
              </Link>
            </div>
          </div>
        </div>
        <div className=' flex my-2 flex-row h-[200px] md:h-[300px] justify-between items-center p-2  rounded-md to-red-400'>
          <div className='md:w-[70%]'>
            <h4 className=' md:w-[70%] md:text-center md:text-3xl text-lg font-semibold   md:whitespace-nowrap'>
              Group fitness classes
            </h4>
            <p className='text-sm md:text-lg md:w-[70%] md:text-center '>
              Sessions for cardio , strength, and flexibility training.
            </p>
            <div className='md:w-[70%] flex md:justify-center md:items-center'>
              <Link
                href='/classes'
                className=' bg-[#f83131] px-3 w-fit hover:bg-red-600 text-white text-center rounded-full text-sm text-semibold p-2 my-2 md:m-4'
              >
                SEE CLASSES
              </Link>
            </div>
          </div>
          <div className='w-3/4 mx-2'>
            <img
              src='/groupworkout.jpg'
              alt=''
              className='h-[50%] md:h-[80%] rounded-md '
            />
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center mb-4'>
        <button className='w-fit rounded-full hover:bg-red-600 bg-[#f83131] text-white text-sm text-center text-semi-bold p-2 px-6'>
          <Link
            target='blank'
            href={`https://wa.me/+256705746131?text=${encodeURIComponent("Hello! I'm interested in your services.")}`}
          >
            START NOW
          </Link>
        </button>
      </div>
    </section>
  );
};

export default OurFacilities;
