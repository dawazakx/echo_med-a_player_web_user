const Hero = () => {
    return (
      <section className="bg-gray-800 text-white p-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Sparrow App</h1>
        <p className="text-lg">The best Media app available on mobile and TV.</p>
        <p className="text-lg">Stream your favorite channels live, anytime, anywhere.</p>
  
        <div className="flex justify-center mt-8 space-x-4">
          <PressableOpacity>DOWNLOAD APK (TV VERSION)</PressableOpacity>
          <PressableOpacity>HOW TO INSTALL</PressableOpacity>
          <PressableOpacity>PLAY STORE (TV VERSION)</PressableOpacity>
          <PressableOpacity>PLAYSTORE (MOBILE VERSION)</PressableOpacity>
        </div>
      </section>
    )
  }
  
  const PressableOpacity: React.FC = ({ children }) => {
    return (
      <div className="relative">
        <button className="bg-gray-900 text-white hover:bg-gray-700 border border-white border-opacity-20 px-6 py-3 rounded-full focus:outline-none transition-colors duration-300">
          {children}
        </button>
      </div>
    )
  }
  
  export default Hero
  