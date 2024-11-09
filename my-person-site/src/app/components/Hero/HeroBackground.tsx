import React, { useEffect } from 'react';

const HeroBackground: React.FC = () => {
  useEffect(() => {
    const animateGradient = () => {
      const gradient = document.getElementById('gradient-bg');
      if (gradient) {
        gradient.classList.add('animate-gradient');
      }
    };
    animateGradient();
  }, []);

  return (
    <>
      <div id="gradient-bg" className="absolute inset-0 -z-10 w-full h-full bg-gradient-to-b from-purple-700 to-black opacity-100 transition duration-100"></div>
      <div className="absolute inset-0 -z-20 w-full h-full backdrop-blur-sm"></div>
    </>
  );
};

export default HeroBackground;
