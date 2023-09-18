import Navbar from "@/components/Navbars";
import Logobar from "@/components/Logobar";
import Topbar from "@/components/Topbar";

export default function Home() {
  return (
    <main>
      <Topbar />
      <Logobar />
      <Navbar />
      <div className="flex  bg-gray-200 items-center mt-16">
        <div className="text-xl font-bold mb-4 ml-8 border bg-blue-400"><span className="">Services</span></div>
        <div className="flex flex-wrap gap-10 justify-center mx-auto">
          <ServiceCircle title="Service 1" />
          <ServiceCircle title="Service 2" />
          <ServiceCircle title="Service 3" />
          <ServiceCircle title="Service 4" />
        </div>
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
