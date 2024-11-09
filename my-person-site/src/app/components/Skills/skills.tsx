import { FaCode, FaPaintBrush, FaServer, FaPlug, FaDatabase, FaChartLine } from "react-icons/fa";

const skills = [
    {
      title: 'Web Development',
      description: 'Creating responsive and high-performance web applications with modern technologies.',
      icon: <FaCode className="text-4xl text-purple-500 mb-4 mx-auto" />,
    },
    {
      title: 'UI/UX Design',
      description: 'Designing visually appealing, user-friendly interfaces to enhance user experience.',
      icon: <FaPaintBrush className="text-4xl text-purple-500 mb-4 mx-auto" />,
    },
    {
      title: 'Backend Development',
      description: 'Building robust backend systems to ensure your applications scale and perform optimally.',
      icon: <FaServer className="text-4xl text-purple-500 mb-4 mx-auto" />,
    },
    {
      title: 'API Integration',
      description: "Integrating third-party APIs to extend your software's functionality and enhance its features.",
      icon: <FaPlug className="text-4xl text-purple-500 mb-4 mx-auto" />,
    },
    {
      title: 'Database Management',
      description: 'Designing and maintaining efficient database solutions for data storage and retrieval.',
      icon: <FaDatabase className="text-4xl text-purple-500 mb-4 mx-auto" />,
    },
    {
      title: 'Sales Funnels',
      description: 'Creating effective sales funnels to optimize conversions and drive growth for your business.',
      icon: <FaChartLine className="text-4xl text-purple-500 mb-4 mx-auto" />,
    },
  ];

  export default skills;