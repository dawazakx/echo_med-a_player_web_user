import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeaturedChannels from '../components/FeaturedChannels'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Subscription from '../components/Subscription'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedChannels />
      <Categories />
      <Subscription />
      <Footer />
    </div>
  )
}
