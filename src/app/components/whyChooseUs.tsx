const WhyChooseUs = () => {
  return (
    <section className='bg-white text-black'>
      <div className='my-8 flex flex-col justify-center items-center space-y-2'>
        <h2 className='text-3xl md:text-4xl font-bold title text-black font-custom text-center'>
          Boost your fitness training with Us
        </h2>
        <p className='text-sm text-center text-gray-900 md:w-[30%]'>
          Join a community that supports your fitness journey where progress is
          personal and everyone is welcome
        </p>
      </div>
      <div className='md:m-3 mx-2 grid grid-cols-2 grid-rows-2 md:flex md:flex-row md:space-x-5   md:justify-center py-8 gap-2.5 md:items-center '>
        <div className='md:w-[230px] text-white md:h-[280px] w-[1fr] h-[290px] py-4 md:m-3 flex flex-col justify-center items-center rounded-md p-3 bg-[#f83131]'>
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
              Clean, Spacious and equiped with everything you need, from weights
              to cardio to recovery
            </p>
          </div>
        </div>
        <div className='md:m-3 md:w-[230px] md:h-[280px] w-[1fr] h-[290px] py-4 flex flex-col justify-center items-center rounded-lg p-3 bg-[#f83131] text-white'>
          <div className='flex justify-center mb-3  items-center h-2/5'>
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
              You're never on your own, we've got your back. Our team is here to
              hype you up, show you the ropes abd help you crush your goals
              whatever they're.
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
              welcoming and never boring. There's always something for everyone,
              no matter your fitness levels and interests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
