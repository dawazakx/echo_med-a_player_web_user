import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Eye, EyeOff } from "lucide-react";
import { LoginUser } from "@/redux/services/auth.service";
import { loginValidationSchema } from "@/utils/yup.validation";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const UserLogin: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  // Toggle password visibility
  const toggle = () => {
    setOpen(!open);
  };

  // Handler function for form submission
  const handleSubmit = async (values: { email: string; password: string }, { setSubmitting }: any) => {
    try {
      setIsLoading(true);
      const response = await LoginUser(values);

      // Show success message
      toast.success(response.message);

      // Redirect to dashboard
      router.push("/dashboard");
    } catch (error: any) {
      setIsLoading(false);
      toast.error(error?.response?.data?.message || "Login failed");
    }
    setIsLoading(false);
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col lg:flex-row w-full overflow-hidden">
        {/* Left side - login form */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
            Sign in to your account
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Provide your credentials to sign in.
          </p>

          {/* Google Sign-in Button */}
          <button className="w-full flex items-center justify-center bg-gray-100 text-gray-700 py-2 px-4 rounded-lg mb-4 hover:bg-gray-200 transition-colors duration-300">
            <img
              src="/assets/google-logo.png"
              alt="Google Icon"
              className="w-6 h-4 mr-2"
            />
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
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={loginValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className="space-y-4">
                {/* Email Address Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Ex. jane@example.com"
                    required
                    className={`mt-1 block w-full text-gray-700 border rounded-lg py-2 px-3 shadow-sm focus:outline-none ${
                      errors.email && touched.email
                        ? "border-red-500"
                        : "border-gray-300"
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
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Field
                      type={open ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="Enter password"
                      required
                      className={`mt-1 block w-full text-gray-700 border rounded-lg py-2 px-3 shadow-sm focus:outline-none ${
                        errors.password && touched.password
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    <div className="absolute cursor-pointer top-1/2 right-3 -translate-y-1/2 text-[#828282]">
                      {open ? (
                        <EyeOff onClick={toggle} width={20} height={20} />
                      ) : (
                        <Eye onClick={toggle} width={20} height={20} />
                      )}
                    </div>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#0E214F] text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  disabled={isSubmitting || isLoading}
                >
                  {isLoading ? "Loading..." : "Sign in"}
                </button>
              </Form>
            )}
          </Formik>

          {/* Additional Links */}
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-600">
              Don&apos;t have an account?{" "}
            </span>
            <Link href="/auth/register" className="text-sm text-blue-600 hover:underline">
              Sign up
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

export default UserLogin;
