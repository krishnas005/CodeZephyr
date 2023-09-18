import Navbar from '@/components/Navbars';
import React from 'react';
import Link from 'next/link';

const LegalRightsPage = () => {
  return (
    <main>
      <Navbar />
      <div className="flex justify-center bg-gray-100">
        <div className="max-w-4xl w-full p-6 bg-white my-10 mx-4 md:mx-auto rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold my-6 text-center">Legal Rights</h1>
          <p className=" lg:px-16 md:px-14 sm:px-10 xs:px-8  lg:text-lg md:text-md sm:text-sm xs:text-xs">
            Legal rights refer to the rights and entitlements that are recognized and protected by law. These rights are granted to individuals by the legal system of a country, ensuring fairness, justice, and order within society. In India, legal rights are an essential part of the democratic framework, safeguarding the rights of citizens and promoting equality and justice.
          </p>
          <p className=" lg:px-16 md:px-14 sm:px-10 xs:px-8 mb-4 lg:text-lg md:text-md sm:text-sm xs:text-xs">
            Here are some of the basic legal rights that every Indian should be aware of:
          </p>
          <div className="lg:px-16 md:px-14 sm:px-10 xs:px-8 lg:text-lg md:text-md sm:text-sm xs:text-xs mb-10">
            <Link className="space-y-3" href={"#"}>1. Right to Equality</Link><br />
            <Link className="space-y-3" href={"#"}>2. Right to Privacy</Link><br />
            <Link className="space-y-3" href={"#"}>3. Right to Property</Link><br />
            <Link className="space-y-3" href={"#"}>4. The right to file an FIR</Link><br />
            <Link className="space-y-3" href={"#"}>5. The rights of a woman when arrested</Link><br />
          </div>
        </div>
      </div>
    </main>
  );
};

export default LegalRightsPage;
