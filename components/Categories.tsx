const Categories = () => {
    // Example data, replace with real data or fetch from an API
    const categories = ['Sports', 'News', 'Movies', 'Music']
  
    return (
      <section className="p-10 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-center">Categories</h2>
        <div className="flex justify-around">
          {categories.map((category, index) => (
            <div key={index} className="text-center p-4 bg-white rounded shadow">
              {category}
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default Categories
  