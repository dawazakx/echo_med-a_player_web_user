const Features = () => {
    return (
      <section className="bg-white text-gray-800 p-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="High Quality"
              description="Enjoy streaming in HD and 4K quality."
            />
            <FeatureCard
              title="Multiple Devices"
              description="Stream on multiple devices including mobile and TV."
            />
            <FeatureCard
              title="Live Channels"
              description="Access to live TV channels from around the world."
            />
            <FeatureCard
              title="On-Demand"
              description="Watch on-demand shows and movies anytime."
            />
          </div>
        </div>
      </section>
    )
  }
  
  const FeatureCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
    return (
      <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    )
  }
  
  export default Features
  