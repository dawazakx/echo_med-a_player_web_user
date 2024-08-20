import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import RightSideContent from '../components/RightSideContent';
import FormHeader from '../components/FormHeader';
import GoogleButton from '../components/GoogleButton';

const UserRegister: React.FC = () => {
  // Validation schema for the form fields using Yup
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });

  // Function to handle form submission
  const handleSubmit = async (values: { fullName: string; email: string; phoneNumber: string; password: string }) => {
    try {
      const response = await axios.post('https://shaky-work-tedious-island-beta.pipeops.app/api/v1/admin/register', values);
      if (response.status === 201) {
        alert('Registration successful!');
      } else {
        alert('Registration failed!');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left side - registration form */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center bg-white">
          <FormHeader title="Sign up to account" description="Provide your credentials to sign-up." />
          <GoogleButton />

          <div className="flex items-center justify-between mb-4">
            <hr className="w-full border-gray-300" />
            <span className="px-3 text-gray-500">or</span>
            <hr className="w-full border-gray-300" />
          </div>

          <Formik
            initialValues={{ fullName: '', email: '', phoneNumber: '', password: '', confirmPassword: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-xs md:text-sm font-medium text-gray-700">Full name</label>
                  <Field
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Ex. Arowolo Joshua"
                    className={`mt-1 block w-full border rounded-lg py-2 px-3 shadow-sm focus:outline-none ${
                      errors.fullName && touched.fullName ? 'border-red-500' : 'border-gray-300'
                    } text-black`}
                  />
                  <ErrorMessage name="fullName" component="div" className="text-red-500 text-xs mt-1" />
                </div>
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
                  <label htmlFor="phoneNumber" className="block text-xs md:text-sm font-medium text-gray-700">Phone Number</label>
                  <Field
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="+234 806******"
                    className={`mt-1 block w-full border rounded-lg py-2 px-3 shadow-sm focus:outline-none ${
                      errors.phoneNumber && touched.phoneNumber ? 'border-red-500' : 'border-gray-300'
                    } text-black`}
                  />
                  <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-xs mt-1" />
                </div>
                <div>
                  <label htmlFor="password" className="block text-xs md:text-sm font-medium text-gray-700">Create Password</label>
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
                <div>
                  <label htmlFor="confirmPassword" className="block text-xs md:text-sm font-medium text-gray-700">Confirm Password</label>
                  <Field
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Enter password again"
                    className={`mt-1 block w-full border rounded-lg py-2 px-3 shadow-sm focus:outline-none ${
                      errors.confirmPassword && touched.confirmPassword ? 'border-red-500' : 'border-gray-300'
                    } text-black`}
                  />
                  <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-xs mt-1" />
                </div>
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

          <div className="mt-4 text-center">
            <span className="text-xs md:text-sm text-gray-600">Do you have an account? </span>
            <a href="#" className="text-xs md:text-sm text-blue-600 hover:underline">Sign in</a>
          </div>
        </div>

        {/* Right side - additional information */}
        <div className="w-full md:w-1/2 h-full bg-[#F7F9FC] flex items-center justify-center p-4">
          <RightSideContent />
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
