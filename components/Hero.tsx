const Hero = () => {
  return (
    <section className="bg-[#0E214F] text-white p-10 sm:p-20 text-center">
      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Welcome to Sparrow App</h1>
      {/* Subheading */}
      
      <p className="text-base sm:text-lg mb-6">Stream your favorite channels live, anytime, anywhere.</p>

      {/* Buttons Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 mt-8 space-y-4 sm:space-y-0">
        <PressableOpacity>DOWNLOAD APK (TV VERSION)</PressableOpacity>
        <PressableOpacity>HOW TO INSTALL</PressableOpacity>
        <PressableOpacity>PLAY STORE (TV VERSION)</PressableOpacity>
        <PressableOpacity>PLAYSTORE (MOBILE VERSION)</PressableOpacity>
      </div>
    </section>
  );
};

const PressableOpacity: React.FC = ({ children }) => {
  return (
    <div className="relative w-full sm:w-auto">
      {/* Button */}
      <button className="w-full sm:w-auto bg-[#122E5D] text-white hover:bg-blue-700 border border-white border-opacity-20 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 transition-colors duration-300">
        {children}
      </button>
    </div>
  );
};

export default Hero;
