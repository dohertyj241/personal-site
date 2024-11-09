import React from 'react';
import { motion } from 'framer-motion';
import skills from './skills';


const SkillsSection: React.FC = () => {
    return (
      <section className="relative flex flex-col items-center text-white py-16 px-8">
        <motion.div
          className="w-full max-w-5xl mx-auto p-8 rounded-3xl bg-black/90 shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-8">My <span className='text-purple-500'>Skills</span> </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="p-6 bg-neutral-900 rounded-lg shadow-md text-center hover:bg-purple-500 transition group hover:text-white fill-current"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-center items-center text-purple-500 group-hover:text-white transition-all duration-300 ease-in-out fill-current">{React.cloneElement(skill.icon, { className: 'w-12 h-12 group-hover:text-white transition-all duration-300 ease-in-out' })}</div>
                <h3 className="text-2xl font-semibold text-purple-500 group-hover:text-white transition-all duration-300 ease-in-out">
                  {skill.title}
                </h3>
                <p className="mt-4 text-lg text-gray-300">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    );
  };
  
  export default SkillsSection;
  