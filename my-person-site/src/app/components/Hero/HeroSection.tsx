import React from 'react';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-neutral-900 w-full relative flex flex-col md:flex-row items-stretch justify-center text-white py-8 px-4">
      
      <div className="bg-neutral-950 flex-grow md:w-1/2 w-full rounded-xl px-8 py-16 mb-4 md:mb-0 flex flex-col justify-center">
        <div className="flex justify-center items-center w-full">
          <HeroImage />
        </div>
        <HeroContent />
      </div>
      
      <div className="bg-custom-conic-gradient flex-grow rounded-xl flex flex-col justify-center md:w-1/2 w-full px-8 py-16">
        <h1 className="font-normal whitespace-nowrap text-5xl py-4">Your Developer</h1>
        <h1 className="font-normal whitespace-nowrap text-5xl py-4">and Designer.</h1>
        <h1 className="font-bold whitespace-nowrap text-5xl py-4">In One.</h1>
      </div>

    </section>
  );
};

export default HeroSection;
