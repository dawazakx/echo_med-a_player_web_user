import Image from 'next/image';
import logo from '../assets/logo.png'; // Adjust the path to your logo image as needed

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0E214F] px-4 sm:px-0">
      <div className="bg-white rounded-lg shadow-lg flex flex-col lg:flex-row max-w-4xl w-full">
        
        {/* Left side of the container for the login form */}
        <div className="w-full lg:w-1/2 p-8">
          <div className="flex justify-center mb-8">
            {/* Logo image */}
            <Image src={logo} alt="Logo" width={96} height={96} />
          </div>
          
          {/* Login form */}
          <form>
            {/* Email input field */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            
            {/* Password input field */}
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            
            {/* Forgot Password link */}
            <div className="mb-4 text-right">
              <a href="#" className="text-blue-600">Forgot Password?</a>
            </div>
            
            {/* Login button */}
            <button className="w-full bg-gray-300 text-gray-500 py-3 rounded-lg cursor-not-allowed">
              Login
            </button>
            
            {/* Sign up link for users without an account */}
            <div className="mt-4 text-center text-black">
              Don't have an account? <a href="#" className="text-blue-600">Sign Up</a>
            </div>
          </form>
        </div>
        
        {/* Right side of the container for new user information */}
        <div className="w-full lg:w-1/2 bg-[#122E5D] text-white flex-col items-center justify-center p-8 rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none">
          {/* New user heading */}
          <h2 className="text-2xl font-bold mb-2 text-center">New User?</h2>
          
          {/* Information for new users */}
          <p className="mb-6 text-center">In order to buy a premium subscription you will have to sign up first!</p>
          
          {/* Sign up button */}
          <button className="bg-transparent border border-white text-white py-2 px-6 rounded-full hover:bg-white hover:text-[#0E214F] transition-colors duration-300 block mx-auto">
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
