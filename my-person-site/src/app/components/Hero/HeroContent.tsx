/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaYoutube, FaGithub, FaTiktok } from 'react-icons/fa';

const HeroContent: React.FC = () => {
  return (
    <motion.div
      className="flex-1 flex flex-col justify-center items-center md:items-start mb-8 md:mb-0 text-center md:text-left"
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

      {/* Social Media Icons */}
      <div className="mt-6 flex space-x-4 justify-center mx-auto">
        {[
          { href: 'https://twitter.com', icon: <FaTwitter />, label: 'Twitter' },
          { href: 'https://youtube.com', icon: <FaYoutube />, label: 'YouTube' },
          { href: 'https://github.com', icon: <FaGithub />, label: 'GitHub' },
          { href: 'https://tiktok.com', icon: <FaTiktok />, label: 'TikTok' },
        ].map(({ href, icon, label }, index) => (
          <motion.a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-3xl text-gray-400 hover:text-purple-500 transition-colors duration-200"
          >
            {icon}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default HeroContent;
