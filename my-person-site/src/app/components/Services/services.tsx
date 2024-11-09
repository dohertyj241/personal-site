import { FaLaptopCode, FaMobileAlt, FaShoppingCart, FaSearch, FaCogs, FaDatabase } from 'react-icons/fa';

const services = [
    {
        icon: <FaLaptopCode />,
        title: "Custom Web Development",
        description: "Bespoke websites tailored to your brand and functionality needs.",
        price: 500, // Starting price
        learnMoreLink: "/services/custom-web-development"
    },
    {
        icon: <FaMobileAlt />,
        title: "Responsive Design",
        description: "Ensuring your site looks great on all devices, from desktop to mobile.",
        price: 300,
        learnMoreLink: "/services/responsive-design"
    },
    {
        icon: <FaShoppingCart />,
        title: "E-Commerce Development",
        description: "Build secure and scalable online stores with seamless user experience.",
        price: 800,
        learnMoreLink: "/services/ecommerce-development"
    },
    {
        icon: <FaSearch />,
        title: "SEO Optimization",
        description: "Improve your website's visibility on search engines with effective SEO.",
        price: 200,
        learnMoreLink: "/services/seo-optimization"
    },
    {
        icon: <FaCogs />,
        title: "API Integration",
        description: "Integrate third-party APIs to enhance your site's capabilities and functionality.",
        price: 250,
        learnMoreLink: "/services/api-integration"
    },
    {
        icon: <FaDatabase />,
        title: "Database Management",
        description: "Set up and maintain efficient databases for secure data handling.",
        price: 400,
        learnMoreLink: "/services/database-management"
    },
    // Add more services if needed
];

export default services;
