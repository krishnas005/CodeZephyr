import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: 'E-Filing Platform',
      description: 'Swiftly file your pleas, simplifying your legal journey with our efficient E-Filing platform.',
      link: '/services/e-filing',
    },
    {
      title: 'Know your Rights',
      description: 'Access concise information on your legal rights to make informed decisions and stand up for justice.',
      link: '#',
    },
    {
        title: 'Explore Courts',
        description: ' Easily locate and gather essential details about courts across India for improved access to justice.',
        link: '#',
      },
    {
        title: 'Documents Generator',
        description: 'Generate legally valid documents effortlessly with our LegalDoc Generator. Its the hassle-free way to create accurate legal documents in no time.',
        link: '#',
      },
    {
      title: 'Docs Analyzer',
      description: 'Effortlessly analyze your legal documents.We provide keywords and a summary, providing you a quick overview of your legal content.',
      link: '#',
    },
    
    {
      title: 'Multimodal Learning',
      description: 'Access a range of engaging learning materials, including videos, quizzes, and more, for a dynamic and effective learning journey.',
      link: '/services/learning',
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen mt-8 mb-10">
      <div className="container mx-auto p-4 lg:py-12 max-w-screen-lg bg-gray-100 rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mt-10">
            Legal Awareness: Our Commitment to Legal Empowerment
          </h1>
        </div>
        <div className="mt-4 px-12">
          <p className="text-gray-700 hidden sm:block text-md">
            Legal awareness is the bedrock of a fair and just society. It
            empowers individuals to assert their rights, seek justice, and
            challenge inequalities. We provide the services so that everyone
            should have access to the tools that can break down these barriers
            and pave the way to justice.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4 p-4 lg:p-10">
          {services.map((service, index) => (
            <a key={index} href={service.link} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 h-18 card transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:cursor-pointer">
              <div className="bg-white rounded-lg p-6 shadow-lg h-22">
                <h3 className="text-lg font-bold mb-2 text-center">{service.title}</h3>
                <p className="text-gray-700 text-xs">{service.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
