import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbars';
import img from "@/assets/supreme-court.webp";
import Logobar from '@/components/Logobar';
import image from '@/assets/law.webp';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <>
    <Logobar />
    <Navbar />
    <div className="container mx-auto mt-10 p-5">
      <div className="text-center text-3xl font-semibold"><h1>About Ministry of Law & Justice</h1></div>
      <div>
      <div className="flex flex-col md:flex-row items-center justify-center mt-6">
        <div className="md:w-1/2 p-5 ml-0 lg:ml-16 md:ml-16">
          <p className="text-gray-700 mt-4">
            Ministry of law and Justice is the oldest limb of the Government of India dating back to 1833 when the Charter Act 1833 encated by the British Parliament. The said Act vested for the first time legislative power in a single authority, namely the Governor General in Council. With the passing of the India Independence Act 1947 India became a Dominion and the Dominion Legislature made laws from 1947 to 1949 under the provisions of section 100 of the Government of India Act 1935 as adapted by the India (Provisional Constitution) Order 1947. Under the Constitution of India which came into force on the 26th January 1950 the legislative power is vested in Parliament.
          </p>
        </div>
        <div className="md:w-1/2 p-5 flex justify-center">
          <div className="">
            <Image src={img} alt="Image" width={350} height={180} className="rounded-lg" />
          </div>
        </div>
      </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center mt-14 mb-10">
      <div className="md:w-1/2 p-5 flex justify-center ml-6">
          <div className="">
            <Image src={image} alt="Image" width={320} height={180} className="rounded-lg mt-2" />
          </div>
        </div>
        <div className="md:w-1/2 p-5 ml-0 lg:ml-10 md:ml-10">
          <p className="text-gray-700 mt-4">
            The Ministry of Law and Justice consists of three Departments, namely, the Legislative Department,the Department of Legal Affairs and the Department of Justice. The Department of Legal Affairs is concerned the various Ministries of the Central Government while the Legislative Department is concerned with drafting of principal legislation for the Central Government. International Law Division focuses on international legal matters, treaty negotiations, representing India in international legal forums, and providing legal opinions on international agreements.
          </p>
        </div>
        
      </div>

    </div>
    <Footer />
    </>
  );
};

export default AboutPage;
