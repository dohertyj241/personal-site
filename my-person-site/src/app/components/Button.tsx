import React from 'react';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="mt-8 px-6 py-3 bg-purple-600 text-white rounded-full">
      {text}
    </button>
  );
};

export default Button;
