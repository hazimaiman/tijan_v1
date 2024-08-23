import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#1c9bf0] font-bold p-2'>SCALING DESPITE NETWORK CHALLENGES</p>
        <h1 className='md:text-7xl sm:text-6x1 text-4xl font-bold md:py-6'>Grow with network.</h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Increase, Efficiently Telco for</p>
          <span className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'>
            <Typewriter
              words={['CT', 'FB', 'DC']}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={120}
              deleteSpeed={140}
              delaySpeed={1000}
            />
          </span>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>
          Maintaining and upgrading the Physical Infrastructure such as Cell Tower, Fiber Optics and Data Center
        </p>
        <button className='bg-[#1c9bf0] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Read More</button>
      </div>
    </div>
  );
};

export default Hero;
