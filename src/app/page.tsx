import React from 'react';
import logoLeft from '@/assets/MainWeb.png';
import logoRight from '@/assets/Learn.png';
import constitution from '@/assets/preamble.jpg';
import topLogo from '@/assets/Logo.png';
import Image from 'next/image';
import Link from 'next/link';
import bg from '@/assets/bg.jpg';

const CenterImagePage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* <div
        className="absolute top-0 left-0 w-full h-full bg-cover opacity-20"
        style={{ backgroundImage: 'url(@/assests/bg.jpg)' }}
      /> */}
      <Image
      src={bg}
      alt="img"
      className="absolute top-0 left-0 w-full h-full bg-cover opacity-40"
      />

      <div className="flex items-center justify-center w-full mb-5 relative z-10">
        <Image
          src={topLogo}
          alt="topLogo"
          width={400}
          height={120}
          className="mt-7"
        />
      </div>
      <div className="flex gap-20 justify-center">
        <div>
          <div className="border rounded-full mr-8 mt-44">
            <Image src={logoLeft} alt="logo" className="mr-10" height={180} />
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
          <div className="border rounded-full ml-10 mt-44">
            <Image src={logoRight} alt="logo" className="ml-10" height={190} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterImagePage;
