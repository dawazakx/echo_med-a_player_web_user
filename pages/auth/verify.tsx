import React, { useState, FC } from "react";
import { useRouter } from "next/router";
import { ResendOTP, VerifyOTP } from "@/redux/services/auth.service";
import * as Yup from "yup";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/inputOtp";
import { Formik, Form, FormikHelpers, FormikProps } from "formik";
import { toast } from "react-toastify";

interface FormValues {
  otp: string;
}

const AccountVerification: FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const initialValues: FormValues = {
    otp: "",
  };

  const validationSchema = Yup.object({
    otp: Yup.string()
      .matches(/^[0-9a-zA-Z]{4}$/, "OTP must be exactly 4 characters")
      .required("OTP is required"),
  });

  const handleSubmit = async (values: FormValues) => {
    // e.preventDefault();
    try {
      setIsLoading(true);
      const email = sessionStorage.getItem("signupEmail");
      const payload = {
        email: email!,
        otp: values.otp,
      };

      console.log(values.otp, "otp");
      const res = await VerifyOTP(payload);
      toast.success(res.message);

      router.push("/auth/login");
    } catch (error: any) {
      setIsLoading(false);
      toast.error(error?.response?.data?.message);

      return;
    }
  };

  // Handle OTP resend (simulate resend logic)
  const handleResend = async () => {
    console.log("Resend OTP");

    try {
      const email = sessionStorage.getItem("signupEmail");
      const payload = {
        email: email!,
      };
      const res = await ResendOTP(payload);
      console.log("resp:", res);

      toast.success(res.message);
    } catch (error: any) {
      setIsLoading(false);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center md:bg-[#F7F9FC] bg-white md:relative">
      {/* Background logo */}
      <img
        src="/assets/logo.png"
        alt="Eco Media Player Background Logo"
        className="absolute top-0 left-0 w-[500px] hidden md:block h-[500px] opacity-10"
      />

      <div className="md:bg-white p-8 md:rounded-lg md:shadow-lg w-full md:max-w-md text-center z-10">
        {/* Logo and Branding */}
        <img
          src="/assets/logo.png"
          alt="Eco Media Player Logo"
          className="w-20 h-20 mx-auto mb-4"
        />
        <h3 className="text-sm text-gray-600 mb-6">Eco Media Player</h3>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">Verify Account</h2>
        {/* Instruction */}
        <p className="text-gray-600 mb-6">
          Enter your OTP code sent to your mobile number and email.
        </p>

        {/* OTP form */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, errors, touched }: FormikProps<FormValues>) => (
            <Form className="w-full">
              <div className="grid place-items-center">
                <InputOTP
                  maxLength={4}
                  pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                  onChange={(value: string) => setFieldValue("otp", value)}
                >
                  <InputOTPGroup>
                    {[...Array(4)].map((_, index) => (
                      <InputOTPSlot
                        key={index}
                        index={index}
                        error={!!(touched.otp && errors.otp)}
                      />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </div>

              {errors.otp && touched.otp && (
                <div className="text-red-500 text-sm mt-2">{errors.otp}</div>
              )}
              <div className="text-center w-full md:mt-4 mt-8">
                <p className="text-sm text-gray-600 mb-4">
                  Didn’t receive code?{" "}
                  <button
                    type="button"
                    onClick={handleResend}
                    className="text-blue-600 hover:underline"
                  >
                    Resend again
                  </button>
                </p>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full bg-[#0E214F] text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                {isLoading ? "Loading.." : "Confirm"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AccountVerification;
