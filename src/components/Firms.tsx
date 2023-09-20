import React from 'react';
import Link from 'next/link';

const Firms = () => {
  return (
    <main className="mb-8">
      <div className="container mx-auto p-4 max-w-4xl bg-blue-200 rounded-lg shadow-2xl mb-16">
        <div className="p-10">
        <h1 className="text-2xl font-bold mb-4 text-center">
         Lawyers by your side, guiding you at every stage
        </h1>
        <p className="text-md text-gray-800 text-center">
          We believe in not only providing information but also facilitating access to justice for our users. To achieve this goal, we have established valuable collaborations with esteemed legal firms and professionals.
        </p>
        <div className="flex mt-4 gap-6 justify-center">
          <div className="hover:underline p-1 mx-2 font-bold">
            <Link href={'https://www.legalserviceindia.com/lawyers/lawyers_home.htm'} passHref target="_blank" rel="noopener noreferrer">Get legal help</Link>
          </div>
          <div className="transition duration-300  mx-2 font-bold hover:underline p-1">
            <Link href={'https://www.legalserviceindia.com/lawyers/lawyers_home.htm'} passHref target="_blank" rel="noopener noreferrer">Lawyers directory</Link>
          </div>
          <div className=" transition duration-300 font-bold hover:underline p-1 mx-2">
            <Link href={'#'}>Schedule a call</Link>
          </div>
        </div>
        </div>
      </div>
    </main>
  );
};

export default Firms;
