import React from 'react';

const GradientAnimationStyles: React.FC = () => {
  return (
    <style jsx>{`
      @keyframes gradient-animation {
        0%, 100% {
          background-position: 0% 50%;
        }
        25% {
          background-position: 50% 0%;
        }
        50% {
          background-position: 100% 50%;
        }
        75% {
          background-position: 50% 100%;
        }
      }

      #gradient-bg.animate-gradient {
        background: linear-gradient(45deg, #6b46c1, #000);
        background-size: 400% 400%;
        animation: gradient-animation 8s ease infinite;
      }
    `}</style>
  );
};

export default GradientAnimationStyles;
