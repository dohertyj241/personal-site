/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { motion } from 'framer-motion';

const HeroContent: React.FC = () => {
  return (
    <motion.div
      className="flex-1 flex flex-col justify-center items-start mb-8 md:mb-0 text-center md:text-left"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
    >
      <h1 className="text-6xl font-extrabold mt-6 leading-tight">
        Hey, I'm <span className="text-purple-500">Jack</span>
      </h1>
      <p className="mt-6 text-2xl">
        I create <span className="text-purple-300">visually stunning</span> software solutions that sell.
      </p>
      <p className="mt-4 text-lg text-gray-400 max-w-lg">
        Learn how I can help your business make money by creating tailored software solutions and sales funnels.
      </p>
      <div className="mt-10 flex justify-center md:justify-start w-full">
        <motion.button
          className="px-8 py-4 bg-purple-600 rounded-full font-semibold text-white hover:bg-purple-700 transition-transform transform hover:scale-105 focus:outline-none shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};

export default HeroContent;
