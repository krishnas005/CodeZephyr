"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import emblem from '@/assets/emblem.webp';
import Link from 'next/link';

export default function Topbar() {
  const [isTextFlipped, setIsTextFlipped] = useState(false);

  const handleLinkClick = () => {
    setIsTextFlipped(prev => !prev);
  };

  return (
    <>
      <div className="flex align-center bg-grey-400  shadow-lg">
        <div className="p-1">
          <Image src={emblem} alt="logo" width={13} height={20} />
        </div>
        <div className="flex mt-1.5 text-xs">
          <Link href={'https://www.india.gov.in/'} passHref target="_blank" rel="noopener noreferrer" className="">
            Government of India
          </Link>
          <h1 className=""> | </h1>
          <h1 className="">Ministry of Law & Justice</h1>
        </div>
        <div className="flex ml-auto text-xs gap-3">
          <div className="mt-1.5 flex ">
          <div className=""><Link href={'#'} className="mr-2">Skip to main content</Link></div>
          <div className="hidden lg:flex md:flex">
          <Link href={'#'} onClick={handleLinkClick}>
            -A
            <span className="bg-black text-white mx-3 p-1">
              A
            </span>
            <span className="mr-2">+A</span>
          </Link>
          </div>
          </div>
          
          <Link href={'#'} className="mr-3 mt-0 bg-blue-800 p-2 text-white">हिंदी</Link>
        </div>
      </div>
    </>
  );
}
