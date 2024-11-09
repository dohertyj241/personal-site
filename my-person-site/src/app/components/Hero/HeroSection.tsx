import React from 'react';
import { motion } from 'framer-motion';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';
import GradientAnimationStyles from '../GradientAnimationStyles';

const HeroSection: React.FC = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center text-white h-screen py-8 px-4">
      <HeroBackground />
      
      <motion.div
        className="w-full max-w-5xl mx-auto p-10 rounded-3xl bg-black/80 shadow-2xl h-auto flex flex-col md:flex-row items-center justify-between gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <HeroContent />
        <HeroImage />
      </motion.div>
      
      <GradientAnimationStyles />
    </section>
  );
};

export default HeroSection;
