import React from 'react';

const RightSideContent: React.FC = () => {
  return (
    <div className="w-full md:w-1/2 bg-[#F7F9FC] flex items-center justify-center p-4">
      <div className="text-center">
        {/* Container for Logo and Company Name */}
        <div className="bg-gray-200 p-6 md:p-8 rounded-lg mb-4 flex flex-col items-center justify-center">
          <img 
            src="/assets/logo.png" 
            alt="Eco Media Player Logo" 
            className="w-32 h-32 md:w-48 md:h-40 mb-4"  // Adjusted width and height for responsiveness
          />
          <h3 className="bg-[#0E214F] text-white text-xs md:text-sm px-2 py-1 mt-2 inline-block">
            Eco Media Player
          </h3>
        </div>
        {/* Description Text */}
        <p className="text-gray-600 mt-8 md:mt-12 font-poppins text-xs md:text-sm text-center">
          watch movies and chill, <br /> you’ve got your cinema in your device
        </p>
      </div>
    </div>
  );
};

export default RightSideContent;
