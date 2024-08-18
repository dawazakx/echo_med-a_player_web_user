import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Cookies from 'js-cookie';
import RightSideContent from '../components/RightSideContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

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
      const response = await axios.post('https://shaky-work-tedious-island-beta.pipeops.app/api/v1/admin/login', values);
      if (response.status === 201) {
        Cookies.set('user', response.data);
        alert('Login successful!');
      } else {
        alert('Login failed!');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-100 p-4">
      {/* Main content area */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left side - login form */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-center mb-4 font-inter">
            Sign in to account
          </h2>
          <p className="text-center text-gray-600 mb-6 font-poppins text-xs md:text-sm">
            Provide your credentials to sign in.
          </p>

          <button className="w-full flex items-center justify-center bg-gray-200 text-gray-700 py-2 px-4 rounded-lg mb-4 hover:bg-gray-300 transition-colors duration-300">
            <FontAwesomeIcon icon={faGoogle} className="mr-2 text-lg md:text-xl" />
            Continue with Google
          </button>

          <div className="flex items-center justify-between mb-4">
            <hr className="w-full border-gray-300" />
            <span className="px-3 text-gray-500">or</span>
            <hr className="w-full border-gray-300" />
          </div>

          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-700">Email address</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Ex. jane@example.com"
                    className={`mt-1 block w-full border rounded-lg py-2 px-3 shadow-sm focus:outline-none ${
                      errors.email && touched.email ? 'border-red-500' : 'border-gray-300'
                    } text-black`}
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                </div>
                <div>
                  <label htmlFor="password" className="block text-xs md:text-sm font-medium text-gray-700">Password</label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    className={`mt-1 block w-full border rounded-lg py-2 px-3 shadow-sm focus:outline-none ${
                      errors.password && touched.password ? 'border-red-500' : 'border-gray-300'
                    } text-black`}
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
                </div>
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

          <div className="mt-4 text-center">
            <a href="#" className="text-xs md:text-sm text-blue-600 hover:underline">Forgot your password?</a>
          </div>
          <div className="mt-4 text-center">
            <span className="text-xs md:text-sm text-gray-600">Don't have an account? </span>
            <a href="#" className="text-xs md:text-sm text-blue-600 hover:underline">Create an account</a>
          </div>
        </div>

        {/* Right side - additional information */}
        <RightSideContent />
      </div>
    </div>
  );
};

export default UserLogin;
