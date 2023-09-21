// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import bg from '@/assets/bg.jpg';
// import logoLeft from '@/assets/MainWeb.png';
// import logoRight from '@/assets/Learn.png';
// import constitution from '@/assets/preamble.jpg';
// import topLogo from '@/assets/Logo.png';

// const CenterImagePage = () => {
//   return (
//     <main>
//       <div className="relative flex flex-col items-center justify-center">
//       <Image src={bg} alt="img" className="absolute top-0 left-0 w-full h-full bg-cover opacity-40 z-2" />
//       <div className="flex items-center justify-center w-full mb-5 relative z-10">
//         <Image
//           src={topLogo}
//           alt="topLogo"
//           width={400}
//           height={120}
//           className="mt-7"
//         />
//       </div>
//       <div className="flex gap-20 justify-center">
//         <div>
//           <div className="border rounded-full mr-8 mt-44 transition-transform duration-300 transform hover:scale-110">
//             <Link href="/home-page" legacyBehavior>
//               <a>
//                 <Image src={logoLeft} alt="logo" className="mr-10" height={180} />
//               </a>
//             </Link>
//           </div>
//         </div>
//         <Image
//           src={constitution}
//           alt="constitution"
//           className=""
//           width={400}
//           height={1200}
//         />
        
//         <div>
//           <div className="border rounded-full ml-10 mt-44 transition-transform duration-300 transform hover:scale-110">
//           <Link href="/learning" legacyBehavior>
//               <a>
//             <Image src={logoRight} alt="logo" className="ml-10" height={190} />
//               </a>
//           </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//     </main>
//   );
// };

// export default CenterImagePage;

import Navbar from "@/components/Navbars";
import Logobar from "@/components/Logobar";
import Topbar from "@/components/Topbar";
import Services from "@/components/Services";
import Firms from "@/components/Firms";
import Footer from "@/components/Footer";
import Slider from '@/components/Slider';
import ChatBot from "@/components/Chatbot";
import LogoSection from '@/components/LogoSection';

export default function Home() {
  return (
    <main >
      <Topbar />
      <Logobar />
      <Navbar />
      <Slider />
      <LogoSection />
      <div className="bg-blue-100">
      <Services />
      <Firms />
      <ChatBot />
      <Footer />
      </div>
    </main>
  );
}

const ServiceCircle = ({ title }: any) => {
  return (
    <div className="w-24 h-24 rounded-xl bg-white m-4 flex items-center justify-center border border-black hover:bg-blue-700 transition duration-300  hover:cursor-pointer">
      {title}
    </div>
  );
};

