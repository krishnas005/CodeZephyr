import React from 'react';
import logoLeft from '@/assets/supreme-court.webp';
import logoRight from '@/assets/supreme-court.webp';
import constitution from '@/assets/Constitution.webp';
import topLogo from '@/assets/mainlogo.png';
import Image from 'next/image';
import Link from 'next/link';

const CenterImagePage = () => {
  return (
    <div className="flex flex-col  items-center justify-center ">
      <div className="flex items-center justify-center w-full mb-10">
        <Image
        src={topLogo}
        alt="topLogo"
        width={300}
        height={120}
        className="mt-8"
        />
      </div>
      <div className="flex gap-20 justify-center ">
        {/* <img src={logoLeft} alt="Left Logo" className="w-16 h-16 mr-8" /> */}
        <div>
          <div className='border rounded-full bg-green-500 w-24 h-24 mr-8 mt-44'></div>
          <Link href={'/home-page'}>Main Website</Link>
          </div>
        <Image
        src={constitution}
        alt="constitution"
        className=""
        width={400}
        height={1200}
        />
        <div>
        <div className='border rounded-full bg-green-500 w-24 h-24 ml-10 mt-44'></div>
        <Link href={'/learning'} className='ml-14'>Learning</Link>
        </div>
        {/* <img src={logoRight} alt="Right Logo" className="w-16 h-16 ml-8" /> */}
      </div>
    </div>
  );
};

export default CenterImagePage;
