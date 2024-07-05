import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AdminLogin: React.FC = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required'),
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="absolute top-4 left-4">
        <img src="/assets/logo.png" alt="Logo" className="w-24" />
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"> 
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Admin Login</h2> 
        
        {/* Formik Form */}
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="space-y-4">
              {/* Email Address Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
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
                  placeholder="Enter your password"
                  className={`mt-1 block w-full border rounded-lg py-2 px-3 shadow-sm focus:outline-none ${
                    errors.password && touched.password ? 'border-red-500' : 'border-gray-300'
                  } text-black`}
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              {/* Sign-In Button */}
              <button
                type="submit"
                className="w-full bg-[#0E214F] text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Sign in
              </button>
            </Form>
          )}
        </Formik>
        {/* Additional Links */}
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-[#0E214F] hover:underline">Forgot your password?</a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
