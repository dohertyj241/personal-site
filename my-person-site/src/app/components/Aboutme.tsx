/* eslint-disable react/no-unescaped-entities */
import React from 'react';


const AboutMeSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-t from-black to-neutral-900 relative flex flex-col items-center justify-center text-white py-16 px-6 sm:px-12 overflow-hidden">
      <div className="flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 md:mb-12">
        About <span className="text-purple-500">Me</span>
      </h2>

      <div className='flex flex-col w-3/4 text-xl items-center'>
        <p className='py-4'>
        I’m Jack, a web developer and designer who helps businesses achieve big results with purpose-built apps. From day one, my work is focused on creating solutions that matter for your business—whether that’s saving you time, improving customer experiences, or simplifying your operations.
        </p>
        <p className='py-4'>
        You’ll work directly with me, so communication is fast, clear, and focused. I also offer flexible payment options to meet your needs, whether you prefer upfront or monthly pricing.
        </p>
        <p className='py-4'>
        Ready to turn your goals into results? Let’s get started on something great.
        </p>
      </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
