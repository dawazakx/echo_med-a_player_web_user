import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { AlertOctagonIcon, CheckCircleIcon, ChevronLeft, Eye, EyeOff } from "lucide-react";
import { Register } from "@/redux/services/auth.service";
import { signupValidationSchema } from "@/utils/yup.validation";
import Link from "next/link";
import { useRouter } from "next/router";
import { useToast } from "@/components/ui/use-toast";

const UserRegistration: React.FC = () => {
  // show password toggle
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);

  // handle toggle
  const toggle = () => {
    setOpen(!open);
  };

  const confirmToggle = () => {
    setIsOpen(!isOpen);
  };

  // Handler function for form submission
  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    try {
      setIsLoading(true);
      const { confirmPassword, ...rest } = values;

      const response = await Register(rest);
      console.log(response);

      const { email } = values;

      sessionStorage.setItem("signupEmail", email);

      toast(
        {
          // title: "Registration Status",
          description: (
            <div className="flex gap-2 items-center text-lg">
              <CheckCircleIcon className="w-4 h-4 text-[#166534] font-bold" />
              {response.message}
            </div>
          ),
        },
        "success"
      );
      router.push("/auth/verify");
    } catch (error: any) {
      setIsLoading(false);

      toast(
        {
          // title: "Message: Sign Up",
          description: (
            <div className="flex gap-2 items-center text-lg">
              <AlertOctagonIcon className="w-4 h-4 text-[#991B1B] font-bold" />
              <p className="text-sm">{`${error?.response?.data?.message}`}</p>
            </div>
          ),
        },
        "error"
      );
    }
    setIsLoading(false);
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col lg:flex-row w-full  overflow-hidden">
        {/* Left side - registration form */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
            Sign up to account
          </h2>
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
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={signupValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className="space-y-4">
                {/* First Name Input */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <Field
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Ex. Joshua"
                    className={`mt-1 block w-full text-gray-700 border rounded-lg py-2 px-3 shadow-sm focus:outline-none ${
                      errors.firstName && touched.firstName
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Last Name Input */}
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <Field
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Ex. Arowolo"
                    className={`mt-1 block w-full text-gray-700 border rounded-lg py-2 px-3 shadow-sm focus:outline-none ${
                      errors.lastName && touched.lastName ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Email Address Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Ex. jane@example.com"
                    className={`mt-1 block w-full text-gray-700 border rounded-lg py-2 px-3 shadow-sm focus:outline-none ${
                      errors.email && touched.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Password Input */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Create Password
                  </label>
                  <div className="relative">
                    <Field
                      type={open === false ? "password" : "text"}
                      id="password"
                      name="password"
                      placeholder="Enter password"
                      className={`mt-1 block w-full text-gray-700 border rounded-lg py-2 px-3 shadow-sm focus:outline-none ${
                        errors.password && touched.password
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    <div className="absolute cursor-pointer top-1/2 right-3 -translate-y-1/2 text-[#828282]">
                      {open === false ? (
                        <Eye onClick={toggle} width={20} height={20} />
                      ) : (
                        <EyeOff onClick={toggle} width={20} height={20} />
                      )}
                    </div>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Confirm Password Input */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Field
                      type={isOpen === false ? "password" : "text"}
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Enter password"
                      className={`mt-1 block w-full text-gray-700 border rounded-lg py-2 px-3 shadow-sm focus:outline-none ${
                        errors.confirmPassword && touched.confirmPassword
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    <div className="absolute cursor-pointer top-1/2 right-3 -translate-y-1/2 text-[#828282]">
                      {isOpen === false ? (
                        <Eye onClick={confirmToggle} width={20} height={20} />
                      ) : (
                        <EyeOff onClick={confirmToggle} width={20} height={20} />
                      )}
                    </div>
                  </div>
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#0E214F] text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  disabled={isSubmitting}
                >
                  {isLoading ? "Loading..." : "Proceed"}
                </button>
              </Form>
            )}
          </Formik>

          {/* Additional Links */}
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-600">Do you have an account? </span>
            <Link href="/auth/login" className="text-sm text-blue-600 hover:underline">
              Sign in
            </Link>
          </div>
        </div>

        {/* Right side - Branding section */}
        <div className="w-full lg:w-1/2 bg-[#F7F9FC] fixed -inset-y-0 right-0 z-20 hidden md:flex items-center justify-center p-4">
          <div className="text-center">
            {/* Container for Logo and Company Name */}
            <div className="bg-gray-200 p-6 md:p-8 rounded-lg mb-4 flex flex-col items-center justify-center">
              <img
                src="/assets/logo.png"
                alt="Eco Media Player Logo"
                className="w-32 h-32 md:w-48 md:h-40 mb-4"
              />
              <h3 className="bg-[#0E214F] text-white text-xs md:text-sm px-2 py-1 mt-2 inline-block">
                Eco Media Player
              </h3>
            </div>
            {/* Description Text */}
            <p className="text-gray-600 mt-8 md:mt-12 font-poppins text-xs md:text-sm text-center">
              watch movies and chill, <br /> you’ve got your cinema in your device
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;
