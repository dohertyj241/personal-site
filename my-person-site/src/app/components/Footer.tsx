import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

const FooterSection: React.FC = () => {
    return (
      <footer className="relative flex flex-col items-center text-white py-8 px-4 sm:px-8 bg-black/90">
        <motion.div
          className="w-full max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="text-lg text-gray-300 mb-4">
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
          <div className="flex space-x-6 justify-center text-purple-500">
            <Link href="\$1" passHref>
              <FaGithub className="w-6 h-6" />
            </Link>
            <Link href="\$1" passHref>
              <FaLinkedin className="w-6 h-6" />
            </Link>
            <Link href="\$1" passHref>
              <FaTwitter className="w-6 h-6" />
            </Link>
          </div>
        </motion.div>
      </footer>
    );
};

export default FooterSection;
