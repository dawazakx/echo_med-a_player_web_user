const FeaturedChannels = () => {
    // Example data, replace with real data or fetch from an API
    const channels = [
      { name: 'Channel 1', logo: '/channel1.png' },
      { name: 'Channel 2', logo: '/channel2.png' },
      { name: 'Channel 3', logo: '/channel3.png' },
    ]
  
    return (
      <section className="p-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Channels</h2>
        <div className="flex justify-around">
          {channels.map((channel, index) => (
            <div key={index} className="text-center">
              <img src={channel.logo} alt={channel.name} className="h-24 mb-2" />
              <div>{channel.name}</div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default FeaturedChannels
  