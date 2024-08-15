import React from 'react';

const RightSideContent: React.FC = () => {
  return (
    <div className="w-full md:w-1/2 bg-[#F7F9FC] flex items-center justify-center p-4">
      <div className="text-center">
        {/* Logo Image */}
        <img 
          src="/assets/logo.png" 
          alt="Eco Media Player Logo" 
          className="w-40 h-40 mx-auto mb-4" 
        />
        {/* Company Name */}
        <h3 className="bg-[#0E214F] text-white text-sm px-2 py-1 mt-2 inline-block">
          Eco Media Player
        </h3>
        {/* Description Text */}
        <p className="text-gray-600 mt-12">
          watch movies and chill, you have got your cinema in your device
        </p>
      </div>
    </div>
  );
};

export default RightSideContent;
