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
