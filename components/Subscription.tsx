const Subscriptions = () => {
    return (
      <section className="bg-white text-black p-20 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Subscriptions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SubscriptionCard 
              title="Basic Plan" 
              price="$9.99/month" 
              features={[
                "Access to all channels",
                "Standard definition",
                "One device at a time",
              ]} 
            />
            <SubscriptionCard 
              title="Standard Plan" 
              price="$14.99/month" 
              features={[
                "Access to all channels",
                "High definition",
                "Two devices at a time",
              ]} 
            />
            <SubscriptionCard 
              title="Premium Plan" 
              price="$19.99/month" 
              features={[
                "Access to all channels",
                "Ultra high definition",
                "Four devices at a time",
                "Offline viewing",
              ]} 
            />
          </div>
        </div>
      </section>
    )
  }
  
  const SubscriptionCard: React.FC<{ title: string; price: string; features: string[] }> = ({ title, price, features }) => {
    return (
      <div className="p-6 bg-gray-800 text-white rounded-lg shadow-md flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-2xl font-bold mb-4">{price}</p>
          <ul className="text-left mb-4">
            {features.map((feature, index) => (
              <li key={index} className="mb-2">- {feature}</li>
            ))}
          </ul>
        </div>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 transition-colors duration-300">
          Choose Plan
        </button>
      </div>
    )
  }
  
  export default Subscriptions
  