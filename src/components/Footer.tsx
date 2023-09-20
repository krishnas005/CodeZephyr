import React from 'react';
import Image from 'next/image';
import logo from '@/assets/emblem2.webp';
import Link from 'next/link';

const Footer = () => {
  return (
    <main>
      
      <footer className="bg-gray-800 text-white">
      <Link href={'/feedback'} className="text-xs ml-14">Feedback</Link>
      <div className='pt-2 pb-6'>
      <div className="flex items-center justify-between">
      
      <div className="flex items-center ml-0 lg:ml-8 md:ml-8">
        <Image
          className='mr-4'
          src={logo}
          alt="logo"
          width={40}
        />
        <div>
          <h2 className="lg:text-lg md:text-lg text-md font-semibold">Ministry of Law & Justice</h2>
          <p className="lg:text-sm md:text-sm text-xs">Bringing Legal Awareness for All</p>
        </div>
      </div>
      <div className="flex gap-12">
        <div className="mb-2 lg:inline-block hidden">
          <h3 className="font-semibold ">Quick Links</h3>
          <ul className="text-sm list-disc">
            <li><a href="/home-page">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className='lg:inline-block hidden'>
          <h3 className="font-semibold">Service Links</h3>
          <ul className="text-sm list-disc">
            <li><a href="#">E-Filing</a></li>
            <li><a href="#">Know Your Rights</a></li>
            <li><a href="#">Courts nearby</a></li>
            <li><a href="#">Query Resolve</a></li>
          </ul>
        </div>
      </div>
      <div className=" mr-0 lg:mr-8 md:mr-8 lg:text-sm md:text-sm text-xs">
        <h3 className="font-bold">Contact Us</h3>
        <p className="">1234 Street Name, City, Country</p>
        <p className="">Phone: +123 456 789</p>
        <p className="">Email: info@example.com</p>
      </div>
    </div>
      </div>
    </footer>
    </main>
  );
};

export default Footer;
