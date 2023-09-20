import React from 'react';
import Image from 'next/image';
import efiling from '@/assets/efilinglogo.jpg';
import knowrights from '@/assets/know-your-rights.jpg';
import docsgenerator from '@/assets/docs-generator.jpg';
import docsanalyzer from '@/assets/docs-analyzer.jpg';
import learning from '@/assets/multimedia.jpg';
import courts from '@/assets/courts.jpg';


const ServicesSection = () => {
  const services = [
    {
      title: 'E-Filing Platform',
      description: efiling,
      link: '/services/e-filing',
    },
    {
      title: 'Know your Rights',
      // description: 'Access concise information on your legal rights to make informed decisions and stand up for justice.',
      description: knowrights,
      link: 'https://lawmin.gov.in/acts-rules',
    },
    {
        title: 'Search for Courts',
        // description: ' Easily locate and gather essential details about courts across India for improved access to justice.',
        description:courts,
        link: 'https://districts.ecourts.gov.in/',
      },
    {
        title: 'Documents Generator',
        // description: 'Generate legally valid documents effortlessly with our LegalDoc Generator. Its the hassle-free way to create accurate legal documents in no time.',
        description: docsgenerator,
        link: '/services/documents-generator',
      },
    {
      title: 'Documents Analyzer',
      // description: 'Effortlessly analyze your legal documents. We provide keywords and a summary, providing you a quick overview of your legal content.',
      description: docsanalyzer,
      link: '/services/docs-analyzer',
    },
    
    {
      title: 'Multimodal Learning',
      // description: 'Access a range of engaging learning materials, including videos, quizzes, and more, for a dynamic and effective learning journey.',
      description:learning,
      link: '/services/learning',
    },
  ];

  return (
    <div className="flex mt-4 mb-10">
      <div className="container mx-auto p-2 lg:py-0 max-w-4xl bg-orange-100 rounded-lg shadow-xl">
        {/* <div className="text-center">
          <h1 className="text-2xl font-semibold mt-10">
            Legal Awareness: Our Commitment to Legal Empowerment
          </h1>
        </div> */}
        {/* <div className="mt-4 px-12">
          <p className="text-gray-700 hidden sm:block text-md">
            Legal awareness is the bedrock of a fair and just society. It
            empowers individuals to assert their rights, seek justice, and
            challenge inequalities. We provide the services so that everyone
            should have access to the tools that can break down these barriers
            and pave the way to justice.
          </p>
        </div> */}
        <div className="flex flex-wrap -mx-4 p-4 lg:p-10">
          {services.map((service, index) => (
            <a key={index} href={service.link}  target="_blank" rel="noopener noreferrer" className="w-full md:w-1/2 lg:w-1/3 px-4 mb-2 h-18 card transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:cursor-pointer">
              <div className="bg-white rounded-xl p-6 shadow-lg h-22">
              <p className="text-gray-700 text-xs ml-11 pl-4">
              <Image
                src={service.description}
                alt="logo"
                width={80}
                height={60}
                />
                </p>
                <h3 className="text-lg font-bold mb-2 text-center">{service.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
