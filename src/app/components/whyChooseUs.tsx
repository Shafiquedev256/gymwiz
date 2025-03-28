const WhyChooseUs = () => {
  return (
    <section className=''>
      <div className='my-8 flex flex-col justify-center items-center space-y-2'>
        <h2 className='text-3xl md:text-4xl font-bold title  font-custom text-center'>
          Boost your fitness training with Us
        </h2>
        <p className='text-sm text-center text-gray-900 md:w-[30%]'>
          Boost Your Fitness With Our Trainers And Enjoy Personalized Meals
          Tailored To You
        </p>
      </div>
      <div className='m-3 flex md:flex-row md:space-x-5 flex-col  justify-center py-8 items-center '>
        <div className='w-[230px] h-[280px] py-4 m-3 flex flex-col justify-center items-center rounded-md p-3 bg-[#ff37370f]'>
          <div className='flex justify-center mb-3 mx-2 items-center'>
            <span className='bg-black rounded-full justify-center items-center p-2'>
              <img src='/cycle.svg' alt='' />
            </span>
          </div>

          <div>
            <h3 className='text-center text-lg font-semibold mb-4 font-body'>
              Modern Facilities
            </h3>
            <p className=' text-sm text-center'>
              Our gym is equipped with the latest technology to help you achieve
              your fitness goals.
            </p>
          </div>
        </div>
        <div className='m-3 w-[230px] h-[280px] py-4 flex flex-col justify-center items-center rounded-lg p-3 bg-[#ff37370f]'>
          <div className='flex justify-center mb-3 mx-2 items-center'>
            <span className='bg-black rounded-full justify-center items-center p-2'>
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
            </span>
          </div>

          <div>
            <h3 className='text-center text-lg font-semibold mb-4 font-body'>
              Certified Trainers
            </h3>
            <p className=' text-sm text-center'>
              Our expert trainers are here to guide and motivate you every step
              of the way.
            </p>
          </div>
        </div>
        <div className='w-[230px] h-[280px] m-3 py-4 flex flex-col justify-center items-center rounded-lg p-3 bg-[#ff37370f]'>
          <div className='flex justify-center mb-3 mx-2 items-center'>
            <span className='bg-black rounded-full justify-center items-center p-2'>
              <img src='/trainers.svg' alt='' />
            </span>
          </div>

          <div>
            <h3 className='text-center text-lg font-semibold mb-4 font-body'>
              Variety of Classes
            </h3>
            <p className=' text-sm text-center'>
              From yoga to high-intensity interval training, we offer classes
              for all fitness levels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
