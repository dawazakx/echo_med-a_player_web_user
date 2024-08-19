import React from 'react';

interface FormHeaderProps {
  title: string;
  description: string;
}

const FormHeader: React.FC<FormHeaderProps> = ({ title, description }) => {
  return (
    <div className="text-center mb-6">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800">{title}</h2>
      <p className="text-xs md:text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default FormHeader;