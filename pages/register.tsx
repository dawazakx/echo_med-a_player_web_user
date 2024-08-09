import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const UserRegistration: React.FC = () => {
  // Validation schema using Yup to enforce form field validation rules
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });

  // Handler function for form submission
  const handleSubmit = (values: { fullName: string; email: string; phoneNumber: string; password: string; confirmPassword: string }) => {
    console.log(values);
    // Add form submission logic here (e.g., API call to server)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F9FC] p-4">
      <div className="flex flex-col lg:flex-row w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Left side - registration form */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Sign up to account</h2>
          <p className="text-center text-gray-600 mb-6">Provide your credentials to sign-up.</p>

          {/* Google Sign-in Button */}
          <button className="w-full flex items-center justify-center bg-gray-100 text-gray-700 py-2 px-4 rounded-lg mb-4 hover:bg-gray-200 transition-colors duration-300">
            <img src="/assets/google-logo.png" alt="Google Icon" className="w-6 h-4 mr-2" />
            Continue with Google
          </button>

          {/* Divider with 'or' text */}
          <div className="flex items-center justify-between mb-4">
            <hr className="w-full border-gray-300" />
            <span className="px-3 text-gray-500">or</span>
            <hr className="w-full border-gray-300" />
          </div>

          {/* Formik form for registration */}
          <Formik
            initialValues={{ fullName: '', email: '', phoneNumber: '', password: '', confirmPassword: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className="space-y-4">
                {/* Full Name Input */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full name</label>
                  <Field
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Ex. Arowolo Joshua"
                    className={`mt-1 block w-full border rounded-lg py-2 px-3 shadow-sm focus:outline-none ${
                      errors.fullName && touched.fullName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                {/* Email Address Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Ex. jane@example.com"
                    className={`mt-1 block w-full border rounded-lg py-2 px-3 shadow-sm focus:outline-none ${
                      errors.email && touched.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Phone Number Input */}
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <Field
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="+234 806*******"
                    className={`mt-1 block w-full border rounded-lg py-2 px-3 shadow-sm focus:outline-none ${
                      errors.phoneNumber && touched.phoneNumber ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Password Input */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Create Password</label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    className={`mt-1 block w-full border rounded-lg py-2 px-3 shadow-sm focus:outline-none ${
                      errors.password && touched.password ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Confirm Password Input */}
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                  <Field
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Enter password"
                    className={`mt-1 block w-full border rounded-lg py-2 px-3 shadow-sm focus:outline-none ${
                      errors.confirmPassword && touched.confirmPassword ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#0E214F] text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Loading...' : 'Proceed'}
                </button>
              </Form>
            )}
          </Formik>

          {/* Additional Links */}
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-600">Do you have an account? </span>
            <a href="#" className="text-sm text-blue-600 hover:underline">Sign in</a>
          </div>
        </div>

        {/* Right side - Branding section */}
        <div className="w-full lg:w-1/2 bg-[#F7F9FC] flex items-center justify-center">
          <div className="text-center">
            <img src="/assets/logo.png" alt="Eco Media Player Logo" className="w-40 h-40 mx-auto mb-4" />
            <h3 className="bg-[#0E214F] text-white text-sm px-2 py-1 mt-2 inline-block">Eco Media Player</h3>
            <p className="text-gray-600 mt-12">watch movies and chill, you have got your cinema in your device</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;