import projectImage1 from './images/project1.png';
import projectImage2 from './images/project2.png';
import projectImage3 from './images/project3.png';
import projectImage4 from './images/project4.png';

const projects = [
    {
      title: 'University Website',
      description: 'Demo site, designed and developed for a fictional university department to showcase courses, blogs, and information.',
      image: projectImage1,
      technologies: ['Javascript', 'HTML', 'CSS'],
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my skills, projects, and experience in web development.',
      image: projectImage2,
      technologies: ['Next.js', 'TailwindCSS', 'Vercel', 'TypeScript', 'Framer Motion', 'React' ],
    },
    {
      title: 'Booking Sytem',
      description: 'Developed a booking system for a fictional business, allowing customers to book services and view availability. With invoicing and Reports functionality.',
      image: projectImage3,
      technologies: ['C#', 'SQL' ],
    },
    {
      title: 'Smart Home Console App',
      description: 'Developed a console application that simulates a smart home system, allowing users to control lights, temperature, and security.',
      image: projectImage4,
      technologies: ['Java', 'OOP', 'MVC',],
    },
  ];

  export default projects;