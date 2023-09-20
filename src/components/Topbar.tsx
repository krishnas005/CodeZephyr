import React from 'react';
import Image from 'next/image';
import emblem from '@/assets/emblem.webp';
import Link from 'next/link';

export default function Topbar() {
    return (
        <>
        <div className="flex align-center bg-grey-400 shadow-lg">
            <div className="p-1">
            <Image
            src={emblem}
            alt="logo"
            width={13}
            height={20}
            />
            </div>
        <div className="flex mt-1 text-xs">
        <Link href={'https://www.india.gov.in/'} className="">Government of India</Link>
        <h1 className=""> | </h1>
        <h1 className="">Ministry of Law & Justice</h1>
        </div>
        <div className="flex ml-auto text-xs  gap-3 mt-1                 ">
            <Link href={'#'} >Skip to main content</Link>
            <Link href={'#'}>-A  <span className="bg-black text-white mx-3 p-1">A</span>  <span className="mr-2">+A</span></Link>
        </div>
        </div>
        </>
    )
}