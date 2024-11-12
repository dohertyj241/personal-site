import React from 'react';
import Image from 'next/image';

const HeroImage: React.FC = () => {
  return (
    
      <div className="w-8/12 max-w-xs md:max-w-md lg:max-w-lg relative">
        <Image
          src='/me.png'
          alt="Me"
          layout="responsive"
          width={400}
          height={400}
          className="rounded-full object-cover"
        />
      </div>
    
  );
};

export default HeroImage;
