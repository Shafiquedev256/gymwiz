const OurFacilities = () => {
  return (
    <section className='hidden md:block'>
      <h3 className='text-center text-2xl md:text-4xl font-semibold title tracking-wide'>
        Experience the Best
      </h3>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex my-3 flex-row h-[300px] justify-between items-center p-2 fit bg-stripes bg-ground-stripes-red-600 from-red-50 rounded-md to-red-400'>
          <div className='md:w-[70%]'>
            <h4 className='md:w-[70%] text-center text-3xl  whitespace-nowrap'>
              Expert Personal training
            </h4>
            <p className='text-lg md:w-[70%] text-center '>
              Guided sessions with certified trainers for customized fitness
              plans.
            </p>
            <div className='md:w-[70%] flex justify-center items-center'>
              <button className=' bg-red-700 px-3 w-fit hover:bg-red-500 text-white text-center rounded-full text-sm text-semibold p-2 m-4'>
                See Trainers
              </button>
            </div>
          </div>
          <img
            src='/pexels-jonathanborba-3076516.jpg'
            alt=''
            className='h-[80%] rounded-md'
          />
        </div>
        <div className='flex  flex-row-reverse h-[300px] justify-between items-center p-2 fit'>
          <div className='md:w-[70%]'>
            <h4 className='md:w-[70%] text-center text-3xl  '>
              Nutritional guidance and planning
            </h4>
            <p className='text-lg md:w-[70%] text-center '>
              Expert advice for healthy eating and meal planning
            </p>
            <div className='md:w-[70%] flex justify-center items-center'>
              <button className=' bg-red-700 px-3 w-fit text-white text-center rounded-full text-sm text-semibold p-2 m-4'>
                See Trainers
              </button>
            </div>
          </div>
          <img src='/digitalgym.jpg' alt='' className='h-[80%] rounded-md' />
        </div>
        <div className='flex my-3 flex-row h-[300px] space-x-3 items-center p-2 fit'>
          <div className='md:w-[70%]'>
            <h4 className='md:w-[70%] text-center text-3xl  whitespace-nowrap'>
              Group fitness classes
            </h4>
            <p className='text-lg md:w-[70%] text-center '>
              Sessions for cardio , strength, and flexibility training.
            </p>
            <div className='md:w-[70%] flex justify-center items-center'>
              <button className=' bg-red-700 text-white text-center rounded-full text-sm text-semibold p-2 px-3 w-fit m-4'>
                See Classes
              </button>
            </div>
          </div>
          <img src='/groupworkout.jpg' alt='' className='h-[80%] rounded-md' />
        </div>
      </div>
      <div className='flex justify-center items-center mb-4'>
        <button className='w-fit rounded-full hover:bg-red-500 bg-red-700 text-white text-sm text-center text-semi-bold p-2 px-6'>
          {" "}
          START NOW
        </button>
      </div>
    </section>
  );
};

export default OurFacilities;
