const Categories = () => {
    return (
      <section className="bg-[#0E214F] text-white p-10 sm:p-20 text-center border-b border-gray-800">
        <div className="container mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl font-bold mb-8">Categories</h2>
          
          {/* Grid Layout for Category Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Category Card 1 */}
            <CategoryCard 
              title="Movies" 
              description="Dive into a vast collection of movies from all genres and eras. Whether you're in the mood for a timeless classic, an action-packed thriller, a heartwarming romance, or an edge-of-your-seat horror film, our extensive library has something for everyone. Enjoy high-quality streaming and uninterrupted viewing for a cinematic experience right at home." 
            />
            
            {/* Category Card 2 */}
            <CategoryCard 
              title="Live TV" 
              description="Stay connected with the world through our live TV streaming service. Watch real-time broadcasts of news, sports, entertainment, and more from channels around the globe. Never miss a live event or breaking news story, and enjoy the convenience of live television at your fingertips, anytime and anywhere." 
            />
            
            {/* Category Card 3 */}
            <CategoryCard 
              title="TV Shows" 
              description="Binge-watch your favorite TV shows and discover new series to love. From gripping dramas and laugh-out-loud comedies to thrilling sci-fi and captivating documentaries, our library is updated regularly with the latest episodes and full seasons. Enjoy endless entertainment with on-demand access to the best TV shows." 
            />
          </div>
        </div>
      </section>
    );
  }
  
  const CategoryCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
    return (
      <div className="p-6 bg-[#122E5D] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-white border-opacity-20">
        {/* Category Card Title */}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        
        {/* Category Card Description */}
        <p>{description}</p>
      </div>
    );
  }
  
  export default Categories;
  