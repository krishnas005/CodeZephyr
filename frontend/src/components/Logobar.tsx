import React from 'react';
import Image from 'next/image';
import logoImage from '@/assets/mainlogo.png';
import G20logo from '@/assets/G20logo.webp';
import Indialogo from '@/assets/75logo.webp';
import swachhbharat from '@/assets/swachhbharat.webp';
import digital from '@/assets/digital1.webp';
import SearchBar from '@/components/SearchBar';

const Logobar = () => {
  return (
    <>
      <div className="p-4 flex">
        <div className='p-1 pl-2'>
          <Image
            src={logoImage}
            alt="Logo"
            width={200}
            height={110}
            // layout='responsive'
          />
        </div>
        <div className="flex ml-auto items-center ">
          <SearchBar/>
          <div className=" hidden lg:flex md:flex">
            <Image
              src={digital}
              alt="Logo"
              width={110}
              height={100}
            />
          </div>

          <div className="hidden lg:flex md:flex">
            <Image
              src={Indialogo}
              alt="Logo"
              width={120}
              height={100}
            />
          </div>
          <div className="hidden lg:flex">
          <Image
            src={G20logo}
            alt="logo"
            width={60}
            height={20}
          />
          </div>
          <div className="hidden lg:flex mx-6">
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
