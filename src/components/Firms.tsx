import React from 'react';
import Link from 'next/link';

const Firms = () => {
  return (
    <main>
      <div className="container mx-auto p-6 max-w-4xl bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Attorneys with you, every step of the way
        </h1>
        <p className="text-lg text-gray-800">
          We believe in not only providing information but also facilitating access to justice for our users. To achieve this goal, we have established valuable collaborations with esteemed legal firms and professionals.
        </p>
        <div className="flex mt-4 gap-6 justify-center">
          <div className="border-black rounded-lg border-2 p-1 mx-2">
            <Link href={'#'}>Get legal help</Link>
          </div>
          <div className="underline p-1 mx-2">
            <Link href={'#'}>Attorney directory</Link>
          </div>
          <div className="underline p-1 mx-2">
            <Link href={'#'}>Schedule a call</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Firms;
