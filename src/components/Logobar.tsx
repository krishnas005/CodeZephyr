import React from 'react';
import Image from 'next/image';
import logoImage from '@/assets/mainlogo.png';
import G20logo from '@/assets/G20logo.webp';
import Indialogo from '@/assets/75logo.webp';
import swachhbharat from '@/assets/swachhbharat.webp';

const Logobar = () => {
  return (
    <>
      <div className="p-4 flex">
        <div className='p-1 pl-4'>
          <Image
            src={logoImage}
            alt="Logo"
            width={150}
            height={110}
            // layout='responsive'
          />
        </div>
        <div className="flex ml-auto items-center">
          {/* <div className="relative w-36 mr-6">
            <input
              type="text"
              placeholder="Search"
              className="border-2 border-gray-300 bg-white h-10 px-3 rounded-2xl text-sm focus:outline-none w-full"
            />
            <button className="absolute right-2 top-2">
            </button>
          </div> */}
          
          <div>
            <Image
              src={Indialogo}
              alt="Logo"
              width={120}
              height={100}
            />
          </div>
          <Image
            src={G20logo}
            alt="logo"
            width={60}
            height={20}
          />
          <div className="mx-6 ">
            <Image
              src={swachhbharat}
              alt="logo"
              width={80}
              height={50}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Logobar;
