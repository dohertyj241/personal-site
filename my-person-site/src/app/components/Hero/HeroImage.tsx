import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';


const HeroImage: React.FC = () => {
  return (
    <motion.div
      className="flex-1 flex justify-center md:justify-end"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
    >
      <div className="w-full max-w-xs md:max-w-md lg:max-w-lg relative">
        <Image
          src='/me.png'
          alt="Developer working on a laptop"
          layout="responsive"
          width={400}
          height={500}
          className="rounded-lg object-cover"
        />
      </div>
    </motion.div>
  );
};

export default HeroImage;
