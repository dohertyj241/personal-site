import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projects from './projects';
import ProjectCard from './ProjectCard';
import './ProjectCarousel.css'; // Assuming you have some CSS to style the component

const ProjectCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : projects.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < projects.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="carousel-container w-full">
      <div className="carousel-wrapper">
        <button onClick={handlePrev} className="carousel-button prev-button">&#8249;</button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="carousel-slide"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectCard project={{ ...projects[currentIndex], image: projects[currentIndex].image.src }} />
          </motion.div>
        </AnimatePresence>

        <button onClick={handleNext} className="carousel-button next-button">&#8250;</button>
      </div>
      
      <div className="carousel-pagination">
        {projects.map((_, index) => (
          <span
            key={index}
            className={`pagination-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
