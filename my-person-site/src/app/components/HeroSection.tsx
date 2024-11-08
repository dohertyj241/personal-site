import Image from 'next/image';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-gradient-to-t from-purple-600 to-black text-white py-16 px-8">
      <div className="w-full max-w-5xl mx-auto p-8 rounded-3xl backdrop-blur-md bg-black/75 shadow-lg">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 mb-8 md:mb-0 md:mr-8">
            <div className="text-2xl font-bold">
              SOFTWARE ENGINEER // DIGITAL ARTIST
            </div>
            <h1 className="text-5xl font-bold mt-6">
              Hey, Im <span className="text-purple-300">YourName</span>
            </h1>
            <p className="mt-4 text-xl">
              I Create <span className="text-purple-300">Visually Stunning</span> Software Solutions That Sell
            </p>
            <p className="mt-4 text-lg text-gray-400">
              I help businesses make money by creating tailored software solutions and sales funnels
            </p>
            <div className="mt-8 flex justify-center">
              <button className="px-12 py-3 bg-purple-600 rounded-lg font-semibold text-white hover:bg-purple-700 transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-md md:max-w-none md:w-[400px] relative">
              <Image
                src="/hero-image.jpg" 
                alt="Developer working on a laptop"
                layout="responsive"
                width={400}
                height={500}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
