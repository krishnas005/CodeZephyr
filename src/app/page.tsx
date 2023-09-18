import emblem from "@/assets/emblem.webp";
import Image from "next/image";
import Link from 'next/link';
import Constitution from '@/assets/Constitution.webp';
import AdditionalImage1 from '@/assets/supreme-court.webp';
import AdditionalImage2 from '@/assets/supreme-court.webp';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="mb-6">
        <Image
          src={emblem}
          alt="Logo"
          width={60}
          height={80}
          className="object-contain"
        />
      </div>
      <div className="flex items-center my-14">
        <Image
          src={Constitution}
          alt="Constitution Image"
          width={400}
          height={400}
          className="object-cover"
        />
        <Link  href={'/home-page'}  className="ml-6 flex flex-col">
          <Image
            src={AdditionalImage1}
            alt="Image 1"
            width={350}
            height={600}
            className="object-cover mb-12"
          />
          <Image
            src={AdditionalImage2}
            alt="Image 2"
            width={350}
            height={600}
            className="object-cover"
          />
        </Link>
      </div>
    </main>
  );
}
