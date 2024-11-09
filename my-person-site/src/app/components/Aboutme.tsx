/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { motion } from 'framer-motion';

const AboutMeSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-black to-neutral-900 relative flex flex-col items-center justify-center text-white min-h-screen py-16 px-6 sm:px-12 overflow-hidden">
      {/* Decorative Floating Elements */}
      <div className="absolute top-10 left-16 w-36 h-36 bg-purple-500 rounded-full opacity-30 animate-pulse blur-2xl"></div>
      <div className="absolute bottom-20 right-20 w-28 h-28 bg-purple-600 rounded-full opacity-40 animate-pulse blur-3xl"></div>

      {/* Motion Div for Main Card */}
      <motion.div
        className="w-full max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-gradient-to-t from-neutral-900 via-black to-neutral-900 shadow-2xl backdrop-blur-md border border-purple-600/30 transition-transform duration-500 hover:scale-105"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 md:mb-12">
          About <span className="text-purple-500">Me</span>
        </h2>

        <motion.div
          className="text-base sm:text-lg text-gray-300 leading-relaxed tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        >
          <p className="mb-6">
            Hi! I'm a <span className="text-purple-400 font-semibold">passionate developer</span> who loves building web applications that make a difference. With a strong background in front-end technologies and a knack for creating <span className="text-purple-400 font-semibold">intuitive user interfaces</span>, I strive to deliver high-quality and performant software solutions.
          </p>
          <p className="mb-6">
            My journey in tech started a few years ago, and since then, I've been continually learning and growing. I enjoy working with <span className="text-purple-400 font-semibold">modern tools and frameworks</span>, and I'm always eager to explore new technologies that push the boundaries of what's possible on the web.
          </p>
          <p className="mb-6">
            When I'm not coding, you can find me <span className="text-purple-400 font-semibold">exploring new places</span>, reading about the latest trends in tech, or tinkering with personal projects to sharpen my skills. I believe in lifelong learning and love to collaborate with others to solve challenging problems.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMeSection;
