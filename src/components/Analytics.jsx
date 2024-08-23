import React from 'react'
import Telco from '../assets/telco.png'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Telco} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#1c9bf0] font-bold text-xl '>Infrastructure maintenance</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage reliable and efficient operation of the company's services</h1>
          <p>
            Infrastructure maintenance in the telecommunications industry is a critical aspect of ensuring reliable and high-quality services.
            Effective maintenance practices help prevent technical issues and service disruptions while ensuring that infrastructure can meet the growing demands of customers and new technologies.
          </p>
          <button className='bg-black text-[#eaeef1] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics