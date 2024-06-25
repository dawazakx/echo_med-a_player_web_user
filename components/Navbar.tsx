import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="bg-[#0E214F] p-4 border-b border-white">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image src={logo} alt="Logo" width={64} height={64} />
          <div className="text-white text-lg font-bold">IPTV App</div>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link href="/features" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white hover:underline mr-4">Features</Link>
            <Link href="/subscriptions" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white hover:underline mr-4">Subscriptions</Link>
            <Link href="/faqs" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white hover:underline mr-4">FAQs</Link>
            <Link href="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white hover:underline">Contact Us</Link>
          </div>
          <div>
            <Link href="/dashboard">
              <button className="mt-4 lg:mt-0 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 transition-colors duration-300">
                Dashboard Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
