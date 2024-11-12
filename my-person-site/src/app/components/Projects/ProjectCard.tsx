import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectCardProps {
  project: {
    image: string;
    title: string;
    description: string;
    technologies: string[];
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      className="p-12 m-4 bg-gradient-to-br from-neutral-900 to-black rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out will-change-transform"
      whileHover={{ scale: 1.02 }}
    >
      <div className="w-full min-h-96 relative my-10 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <h3 className="text-4xl font-semibold text-purple-500 mb-6">{project.title}</h3>
      <p className="text-lg text-gray-300 mb-6">{project.description}</p>
      <div className="flex flex-wrap gap-3">
        {project.technologies.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
