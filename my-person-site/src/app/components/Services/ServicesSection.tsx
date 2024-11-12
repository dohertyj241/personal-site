import React from 'react';
import { motion } from 'framer-motion';
import services from './services';

const ServicesSection: React.FC = () => {
    return (
        <section className="relative flex flex-col items-center text-white py-16 px-4 sm:px-8">
            <motion.div
                className="w-full max-w-5xl mx-auto p-4 sm:p-8 rounded-3xl bg-black/90 shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-6 sm:mb-8">
                    My <span className='text-purple-500'>Services</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                    {services.map((tech, index) => (
                        <motion.div
                            key={index}
                            className="p-6 bg-neutral-900 rounded-lg shadow-md text-center hover:bg-purple-500 transition group hover:text-white fill-current"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.15, ease: 'easeOut' }}
                        >
                            <div className="flex justify-center items-center text-purple-500 group-hover:text-white transition-all duration-200 ease-in-out fill-current">
                                {React.cloneElement(tech.icon, { className: 'w-10 sm:w-12 h-10 sm:h-12 group-hover:text-white transition-all duration-200 ease-in-out' })}
                            </div>
                            <h3 className="text-xl sm:text-2xl font-semibold text-purple-500 group-hover:text-white transition-all duration-200 ease-in-out mt-4">
                                {tech.title}
                            </h3>
                            <p className="mt-2 sm:mt-4 text-base sm:text-lg text-gray-300">
                                {tech.description}
                            </p>
                            {tech.price && (
                                <p className="mt-4 text-lg font-semibold text-white">
                                    Starting at: £{tech.price}
                                </p>
                            )}
                            <button
                                className="mt-6 px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition"
                                onClick={() => window.location.href = tech.learnMoreLink}
                            >
                                Learn More
                            </button>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default ServicesSection;
