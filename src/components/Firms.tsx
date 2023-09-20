import React from 'react';
import Link from 'next/link';

const Firms = () => {
  return (
    <main>
      <div className="container mx-auto p-6 max-w-4xl bg-orange-100 rounded-lg shadow-lg mb-12">
        <div className="p-10">
        <h1 className="text-2xl font-bold mb-4 text-center">
         Lawyers by your side, guiding you at every stage
        </h1>
        <p className="text-md text-gray-800 text-center">
          We believe in not only providing information but also facilitating access to justice for our users. To achieve this goal, we have established valuable collaborations with esteemed legal firms and professionals.
        </p>
        <div className="flex mt-4 gap-6 justify-center">
          <div className="border-black rounded-lg border-2 p-1 mx-2 hover:bg-white">
            <Link href={'https://www.legalserviceindia.com/lawyers/lawyers_home.htm'} passHref target="_blank" rel="noopener noreferrer">Get legal help</Link>
          </div>
          <div className="transition duration-300  mx-2 border-black rounded-lg border-2 p-1">
            <Link href={'https://www.legalserviceindia.com/lawyers/lawyers_home.htm'} passHref target="_blank" rel="noopener noreferrer">Lawyers directory</Link>
          </div>
          <div className=" transition duration-300  border-black rounded-lg border-2 p-1 mx-2">
            <Link href={'#'}>Schedule a call</Link>
          </div>
        </div>
        </div>
      </div>
    </main>
  );
};

export default Firms;
