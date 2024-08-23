import React from 'react';
import Haji from '../assets/haji.png'
import Azman from '../assets/azman.png'
import Awang from '../assets/awang.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Haji} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Dato Haji Shahrul</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>CEO</p>
                  <p className='py-2 border-b mx-8'>30+ years Experience on TM Company</p>
                  <p className='py-2 border-b mx-8'>Lead by example, inspire greatness</p>
              </div>
            <button
            className="bg-[#1c9bf0] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
            onClick={() => {
                window.location.href = "mailto:PA2haji@tijan.com";
            }}
            >
            Start Connect
            </button>

          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Azman} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Azman Yusof</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>CFO</p>
                  <p className='py-2 border-b mx-8'>26+ years experience as General Manager and Head of Finance</p>
                  <p className='py-2 border-b mx-8'>Savings pave the path to security.</p>
              </div>
              <button
            className="bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
            onClick={() => {
                window.location.href = "mailto:PA2azman@tijan.com";
            }}
            >
            Start Connect
            </button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Awang} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Haji Awang</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>COO</p>
                  <p className='py-2 border-b mx-8'>23+ years experience as Head of Operation</p>
                  <p className='py-2 border-b mx-8'>Streamline processes, drive excellence.</p>
              </div>
              <button
            className="bg-[#1c9bf0] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
            onClick={() => {
                window.location.href = "mailto:PA2awang@tijan.com";
            }}
            >
            Start Connect
            </button>
          </div>
      </div>
    </div>
  );
};

export default Cards;