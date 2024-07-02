import React from 'react';

// Subscriptions component
const Subscriptions = () => {
  return (
    // Subscription section container
    <section className="bg-white text-black py-20 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Subscriptions</h2>
        {/* Grid for subscription cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Subscription cards */}
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
  );
};

// SubscriptionCard component
const SubscriptionCard = ({ title, price, features }) => {
  return (
    // Subscription card container
    <div className="p-6 bg-[#122E5D] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-white border-opacity-20">
      {/* Card title */}
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      {/* Card price */}
      <p className="text-2xl font-bold mb-4 text-white">{price}</p>
      {/* List of features */}
      <ul className="text-left mb-4 text-white">
        {features.map((feature, index) => (
          <li key={index} className="mb-2">
            - {feature}
          </li>
        ))}
      </ul>
      {/* Choose Plan button */}
      <button className="bg-[#0E214F] text-white px-4 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 transition-colors duration-300">
        Choose Plan
      </button>
    </div>
  );
};

export default Subscriptions;
