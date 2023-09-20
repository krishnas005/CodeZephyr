import React from 'react';
import Image from 'next/image';
import calendar from '@/assets/calendar.jpg';
import newsletter from '@/assets/Newsletter.jpg';
import ussd from '@/assets/ussd.webp';
import Link from 'next/link';
import {BiSearchAlt} from 'react-icons/bi';

const LogoSection = () => {
  return (
    <div className="flex justify-around items-center p-8">
      <div className="text-center">
        <Link className="" href={'#'}>
        <div className="rounded-full p-3 transform transition-transform duration-300 ease-in-out hover:-translate-y-2 ">
          <i className="fas fa-circle text-white text-2xl">
            <Image
            src={calendar}
            alt="logo"
            width={50}
            />
          </i>
        </div>
        <h2 className=" text-gray-700">Calendar</h2>
        </Link>
      </div>
      <Link href={'#'}>
      <div className="text-center ">
        <div className="rounded-full p-0 transform transition-transform duration-300 ease-in-out hover:-translate-y-2 ">
          <i className="fas fa-circle text-white text-2xl ">
            <Image
            src={newsletter}
            alt="logo"
            width={70}
            />
          </i>
        </div>
        <h2 className=" text-gray-700">Newsletter</h2>
      </div>
      </Link>
      <div className="text-center ">
        <Link href={'#'}><div className=" rounded-full p-2 transform transition-transform duration-300 ease-in-out hover:-translate-y-2 ">
          <i className="fas fa-circle text-white text-2xl">
          <Image
            src={ussd}
            alt="logo"
            width={50}
            />
          </i>
        </div>
        <p className=" text-gray-700">USSD system</p></Link>
      </div>
      <div className="text-center">
        <div className=" rounded-full p-2 transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:cursor-pointer">
          <i className="fas fa-circle text-2xl"><BiSearchAlt size={48}/></i>
        </div>
        <p className=" text-gray-700">What&apos;s new</p>
      </div>
    </div>
  );
};

export default LogoSection;
