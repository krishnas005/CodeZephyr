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
        <div>
          <Image
            src={logoImage}
            alt="Logo"
            width={130}
            height={90}
          />
        </div>
        <div className="flex ml-auto">
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
            width={80}
            height={30}
          />
        </div>
        <div className="mx-4 mt-4">
            <Image
            src={swachhbharat}
            alt="logo"
            width={80}
            height={50}
            />
        </div>
      </div>
    </>
  );
};

export default Logobar;
