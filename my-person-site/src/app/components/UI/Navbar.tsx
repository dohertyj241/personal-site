import React, { useState } from 'react';
import { FaBars, FaTimes, FaInfoCircle, FaDollarSign, FaLaptopCode, FaProjectDiagram } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const NavbarWithMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <IconContext.Provider value={{ color: "#A020F0", size: "1.5em" }}>
      <nav className="flex justify-between items-center p-6 bg-black text-white">
        <h1 className="text-xl font-bold hover:text-purple-500 cursor-pointer transition duration-300 transform hover:scale-110">
          <span className='text-purple-500'>DesignedBy</span>Jack
        </h1>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-purple-500 flex items-center transition duration-300 transform hover:scale-110">
            <FaInfoCircle className="mr-2" /> ABOUT
          </a>
          <a href="#pricing" className="hover:text-purple-500 flex items-center transition duration-300 transform hover:scale-110">
            <FaDollarSign className="mr-2" /> PRICING
          </a>
          <a href="#skills" className="hover:text-purple-500 flex items-center transition duration-300 transform hover:scale-110">
            <FaLaptopCode className="mr-2" /> SKILLS
          </a>
          <a href="#projects" className="hover:text-purple-500 flex items-center transition duration-300 transform hover:scale-110">
            <FaProjectDiagram className="mr-2" /> PROJECTS
          </a>
        </div>
        <button className="hidden md:block border-2 border-purple-500 px-4 py-2 rounded-full hover:bg-purple-500 transition duration-300 transform hover:scale-110">
          CONTACT
        </button>
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center space-y-6 py-6 md:hidden">
            <a href="#about" className="hover:text-purple-500 flex items-center transition duration-300 transform hover:scale-110" onClick={toggleMenu}>
              <FaInfoCircle className="mr-2" /> ABOUT
            </a>
            <a href="#pricing" className="hover:text-purple-500 flex items-center transition duration-300 transform hover:scale-110" onClick={toggleMenu}>
              <FaDollarSign className="mr-2" /> PRICING
            </a>
            <a href="#skills" className="hover:text-purple-500 flex items-center transition duration-300 transform hover:scale-110" onClick={toggleMenu}>
              <FaLaptopCode className="mr-2" /> SKILLS
            </a>
            <a href="#projects" className="hover:text-purple-500 flex items-center transition duration-300 transform hover:scale-110" onClick={toggleMenu}>
              <FaProjectDiagram className="mr-2" /> PROJECTS
            </a>
            <button className="border-2 border-purple-500 px-4 py-2 rounded-full hover:bg-purple-500 transition duration-300 transform hover:scale-110">
              CONTACT
            </button>
          </div>
        )}
      </nav>
    </IconContext.Provider>
  );
};

export default NavbarWithMobileMenu;
