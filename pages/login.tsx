import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Cookies from 'js-cookie';

const UserLogin: React.FC = () => {
  // Validation schema for the form fields using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required'),
  });

  // Function to handle form submission
  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      // Send a POST request to the login endpoint
      const response = await axios.post('https://shaky-work-tedious-island-beta.pipeops.app/api/v1/admin/login', values);
      if (response.status === 201) {
        // Store the returned payload in cookies if login is successful
        Cookies.set('user', response.data);
        alert('Login successful!');
      } else {
        // Display an error message if login is not successful
        alert('Login failed!');
      }
    } catch (error) {
      // Handle any errors that occur during the request
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Container for the login form and side panel */}
      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Left side - login form */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Sign in to account</h2>
          <p className="text-center text-gray-600 mb-6">Provide your credentials to sign in.</p>

          {/* Google Sign-in Button */}
          <button className="w-full flex items-center justify-center bg-gray-200 text-gray-700 py-2 px-4 rounded-lg mb-4 hover:bg-gray-300 transition-colors duration-300">
            <img src="/assets/google-logo.png" alt="Google Icon" className="w-6 h-5 mr-2" />
            Continue with Google
          </button>

          {/* Divider with 'or' text */}
          <div className="flex items-center justify-between mb-4">
            <hr className="w-full border-gray-300" />
            <span className="px-3 text-gray-500">or</span>
            <hr className="w-full border-gray-300" />
          </div>

          {/* Formik form for login */}
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className="space-y-4">
                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Ex. jane@example.com"
                    className={`mt-1 block w-full border rounded-lg py-2 px-3 shadow-sm focus:outline-none ${
                      errors.email && touched.email ? 'border-red-500' : 'border-gray-300'
                    } text-black`}
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                {/* Password Input */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    className={`mt-1 block w-full border rounded-lg py-2 px-3 shadow-sm focus:outline-none ${
                      errors.password && touched.password ? 'border-red-500' : 'border-gray-300'
                    } text-black`}
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                {/* Sign-in Button */}
                <button
                  type="submit"
                  className="w-full bg-[#0E214F] text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Loading...' : 'Sign in'}
                </button>
              </Form>
            )}
          </Formik>

          {/* Additional Links */}
          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot your password?</a>
          </div>
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-600">Don't have an account? </span>
            <a href="#" className="text-sm text-blue-600 hover:underline">Create an account</a>
          </div>
        </div>

        {/* Right side - additional information */}
        <div className="w-1/2 bg-gray-100 flex items-center justify-center">
          <div className="text-center">
            <img src="/assets/logo.png" alt="Eco Media Player Logo" className="w-40 h-40 mx-auto mb-4" />  {/* Adjust size as needed */}
            <h3 className="bg-[#0E214F] text-white text-sm px-2 py-1 mt-2 inline-block">echo media player</h3>  {/* Style text */}
            <p className="text-gray-600 mt-2">watch movies and chill, you have got your cinema in your device</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
