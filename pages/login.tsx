// old login

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '../assets/logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let newErrors = { email: '', password: '' };

    if (!email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = 'Email is not valid';
      valid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      // Handle login
      console.log('Login successful');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0E214F] px-4 sm:px-0">
      <div className="bg-white rounded-lg shadow-lg flex flex-col lg:flex-row max-w-4xl w-full">
        {/* Left side of the container for the login form */}
        <div className="w-full lg:w-1/2 p-8">
          <div className="flex justify-between mb-8">
            {/* Logo image */}
            <Link href="/" legacyBehavior>
              <a>
                <Image src={logo} alt="Logo" width={96} height={96} />
              </a>
            </Link>
            {/* Back arrow */}
            <button onClick={() => window.history.back()} className="text-[#0E214F] text-xl">
              ←
            </button>
          </div>

          {/* Login form */}
          <form onSubmit={handleSubmit}>
            {/* Email input field */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-black"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Password input field */}
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-black"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            {/* Forgot Password link */}
            <div className="mb-4 text-right">
              <a href="#" className="text-blue-600">Forgot Password?</a>
            </div>

            {/* Login button */}
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg">
              Login
            </button>

            {/* Sign up link for users without an account */}
            <div className="mt-4 text-center text-black">
              Don't have an account? <Link href="/register" legacyBehavior><a className="text-blue-600">Sign Up</a></Link>
            </div>
          </form>
        </div>

        {/* Right side of the container for new user information */}
        <div className="w-full lg:w-1/2 bg-[#122E5D] text-white flex flex-col items-center justify-center p-8 rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none">
          {/* New user heading */}
          <h2 className="text-2xl font-bold mb-2 text-center">New User?</h2>

          {/* Information for new users */}
          <p className="mb-6 text-center">In order to buy a premium subscription you will have to sign up first!</p>

          {/* Sign up button */}
          <Link href="/register" legacyBehavior>
            <a className="bg-transparent border border-white text-white py-2 px-6 rounded-full hover:bg-white hover:text-[#0E214F] transition-colors duration-300 block mx-auto">
              SIGN UP
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
