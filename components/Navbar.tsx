import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-[#0E214F] p-4 border-b border-white">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-4">
          <Image src={logo} alt="Logo" width={64} height={64} />
          <div className="text-white text-lg font-bold">Sparrow App</div>
        </div>
        
        {/* Navigation Links and Dashboard Login */}
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-center">
          {/* Navigation Links */}
          <div className="text-sm lg:flex-grow flex justify-center space-x-4">
            <Link href="/features" legacyBehavior>
              <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white hover:underline">
                Features
              </a>
            </Link>
            <Link href="/subscriptions" legacyBehavior>
              <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white hover:underline">
                Subscriptions
              </a>
            </Link>
            <Link href="/faqs" legacyBehavior>
              <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white hover:underline">
                FAQs
              </a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white hover:underline">
                Contact Us
              </a>
            </Link>
          </div>

          {/* Dashboard Login Button */}
          <div>
          <Link href="auth/register" legacyBehavior>
              <a className="mt-4 lg:mt-0 bg-[#122E5D] text-white px-4 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 transition-colors duration-300">
                Register
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
