import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image src={logo} alt="Logo" width={64} height={64} />
          <div className="text-white text-lg font-bold">Sparrow Player</div>
        </div>
        <div className="flex space-x-4">
          <Link href="/features" className="text-gray-300 hover:text-white">Features</Link>
          <Link href="/subscriptions" className="text-gray-300 hover:text-white">Subscriptions</Link>
          <Link href="/faqs" className="text-gray-300 hover:text-white">FAQs</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">Contact Us</Link>
        </div>
        <div>
          <Link href="/dashboard">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 transition-colors duration-300">
              Dashboard Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
