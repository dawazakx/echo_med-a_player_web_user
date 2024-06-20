import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeaturedChannels from '../components/FeaturedChannels'
import Categories from '../components/Categories'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedChannels />
      <Categories />
      <Footer />
    </div>
  )
}
