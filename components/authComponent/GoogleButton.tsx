import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const GoogleButton: React.FC = () => {
  return (
    <button className="w-full flex items-center justify-center bg-gray-200 text-gray-700 py-2 px-4 rounded-lg mb-4 hover:bg-gray-300 transition-colors duration-300">
      <FontAwesomeIcon icon={faGoogle} className="mr-2 text-lg md:text-xl" />
      Continue with Google
    </button>
  );
};

export default GoogleButton;
