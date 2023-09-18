import Navbar from '@/components/Navbars';
import React from 'react';
import Link from 'next/link';
import rights from '@/assets/rights.webp'

const LegalRightsPage = () => {
  return (
    <main>
      <Navbar />
      <div className="bg-cover bg-center bg-gray-200 ">
        <div className="flex justify-center  bg-opacity-75">
          <div className="max-w-4xl w-full p-6 my-10 mx-4 md:mx-auto rounded-lg shadow-lg bg-white bg-opacity-75">
            <h1 className="text-2xl font-bold my-6 text-center">Legal Rights</h1>
            <p className="text-lg px-4">
              Legal rights refer to the rights and entitlements that are recognized and protected by law. These rights are granted to individuals by the legal system of a country, ensuring fairness, justice, and order within society. In India, legal rights are an essential part of the democratic framework, safeguarding the rights of citizens and promoting equality and justice.
            </p>
            <p className="text-lg px-4 mb-4">
              Here are some of the basic legal rights that every Indian should be aware of:
            </p>
            <div className="px-4 mb-10">
              <Link href={"#"}>1. Right to Equality</Link><br />
              <Link href={"#"}>2. Right to Privacy</Link><br />
              <Link href={"#"}>3. Right to Property</Link><br />
              <Link href={"#"}>4. The right to file an FIR</Link><br />
              <Link href={"#"}>5. The rights of a woman when arrested</Link><br />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LegalRightsPage;
