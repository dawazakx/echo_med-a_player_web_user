import Image from 'next/image';
import featureImage from '../assets/feature-image.png';

const Features = () => {
  return (
    <section className="bg-white text-gray-800 p-6 sm:p-10 lg:p-20 border-b border-gray-800">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-8">Features</h2>
        
        {/* Grid Layout for Features and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center justify-center">
          {/* Feature Card 1 */}
          <FeatureCard
            title="High Quality"
            description="Experience the best in streaming quality with our IPTV app. Enjoy your favorite shows and movies in stunning HD and 4K resolution. Our advanced technology ensures crystal-clear visuals and smooth playback, providing an immersive viewing experience that rivals traditional cable and satellite TV. Say goodbye to buffering and low-resolution streams—embrace the future of entertainment with our high-quality streaming service."
          />
          
          {/* Feature Image */}
          <div className="w-full lg:w-auto flex justify-center">
            <Image 
              src={featureImage} 
              alt="Feature Image" 
              className="h-auto rounded-lg shadow-md" 
            />
          </div>
          
          {/* Feature Card 2 */}
          <FeatureCard
            title="Multiple Devices"
            description="Stream seamlessly across all your devices with our versatile IPTV app. Whether you’re at home or on the go, you can access your favorite content on your TV, smartphone, tablet, or laptop. Our app is designed to provide a consistent and user-friendly experience on any device, so you never miss a moment of your favorite shows. Enjoy the flexibility and convenience of multi-device support, ensuring entertainment is always at your fingertips."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div className="p-4 sm:p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Feature Title */}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      
      {/* Feature Description */}
      <p>{description}</p>
    </div>
  );
};

export default Features;
