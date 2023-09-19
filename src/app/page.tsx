import React from 'react';
import logoLeft from '@/assets/supreme-court.webp';
import logoRight from '@/assets/Learn.png';
import constitution from '@/assets/preamble.jpg';
import topLogo from '@/assets/Logo.png';
import Image from 'next/image';
import Link from 'next/link';

const CenterImagePage = () => {
  return (
    <div className="flex flex-col  items-center justify-center ">
      <div className="flex items-center justify-center w-full mb-5">
        <Image
        src={topLogo}
        alt="topLogo"
        width={400}
        height={120}
        className="mt-7"
        />
      </div>
      <div className="flex gap-20 justify-center ">
        {/* <img src={logoLeft} alt="Left Logo" className="w-16 h-16 mr-8" /> */}
        <div>
          <div className='border rounded-full  mr-8 mt-44'>
          <Image
        src={logoRight}
        alt="logo"
        className="mr-14"
        height={180}
        />
          </div>
          </div>
        <Image
        src={constitution}
        alt="constitution"
        className=""
        width={400}
        height={1200}
        />
        <div>
        <div className='border rounded-full  ml-10 mt-44'>
        <Image
        src={logoRight}
        alt="logo"
        className="ml-14"
        height={180}
        />
        </div>
        </div>
      </div>
    </div>
  );
};

export default CenterImagePage;
