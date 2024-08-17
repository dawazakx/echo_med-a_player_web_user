import React from 'react';

const RightSideContent: React.FC = () => {
  return (
    <div className="w-full md:w-1/2 bg-[#F7F9FC] flex items-center justify-center p-4">
      <div className="text-center">
        {/* Container for Logo and Company Name */}
        <div className="bg-gray-200 p-6 rounded-lg mb-4 flex flex-col items-center justify-center" style={{ width: '300px', height: '220px' }}>
          {/* Logo Image */}
          <img 
            src="/assets/logo.png" 
            alt="Eco Media Player Logo" 
            className="w-48 h-auto mb-2" 
          />
          {/* Company Name */}
          <h3 className="bg-[#0E214F] text-white text-sm px-2 py-1 inline-block">
            Eco Media Player
          </h3>
        </div>
        {/* Description Text */}
        <p className="text-gray-600">
          watch movies and chill
          <br />
          you have got your cinema in your device
        </p>
      </div>
    </div>
  );
};

export default RightSideContent;
