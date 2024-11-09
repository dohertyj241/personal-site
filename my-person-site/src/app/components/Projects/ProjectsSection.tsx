import React from 'react';
import { motion } from 'framer-motion';
import ProjectCarousel from './ProjectCarousel';
import Header from '../UI/Header';
import './BackgroundAnimation.css';

const ProjectsSection: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center text-white py-20 px-10 overflow-hidden">
      {/* Updated background with a more modern and professional look */}
      <div className="absolute inset-0 bg-radial-gradient animate-noise"></div>
      <motion.div
        className="relative w-full max-w-7xl mx-auto p-12 rounded-3xl bg-black shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <Header />
        <ProjectCarousel />
      </motion.div>
    </section>
  );
};

export default ProjectsSection;

