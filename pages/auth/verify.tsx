import React, { useState, FC } from "react";
import { AlertOctagonIcon, CheckCircleIcon } from "lucide-react";
import { useRouter } from "next/router";
import { ResendOTP, VerifyOTP } from "@/redux/services/auth.service";

const AccountVerification: FC = () => {
  // State for OTP input and error message
  const [otp, setOtp] = useState(["", "", "", "", ""]); // 5 boxes for OTP
  const [error, setError] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  // const { toast } = useToast();

  // Handle input change for each OTP digit
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    // Validate input format (numeric only)
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setError("");
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const email = sessionStorage.getItem("signupEmail");
      const payload = {
        email: email!,
        otp: otp.join(""),
      };

      console.log(otp, "otp");
      const res = await VerifyOTP(payload);
      // toast(
      //   {
      //     title: "OTP Verification",
      //     description: (
      //       <div className="flex gap-2 items-center text-lg">
      //         <CheckCircleIcon className="w-4 h-4 text-[#166534] font-bold" />
      //         {res.message}
      //       </div>
      //     ),
      //   },
      //   "success"
      // );
      router.push("/auth/login");
    } catch (error: any) {
      setIsLoading(false);
      // toast(
      //   {
      //     title: "OTP Verification",
      //     description: (
      //       <div className="flex gap-2 items-center text-lg">
      //         <AlertOctagonIcon className="w-4 h-4 text-[#991B1B] font-bold" />
      //         {error?.response?.data?.message}
      //       </div>
      //     ),
      //   },
      //   "error"
      // );
      return;
      // Handle error response here, if needed
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

      //  toast(
      //    {
      //      title: "Reset",
      //      description: (
      //        <div className="flex gap-2 items-center text-lg">
      //          <CheckCircleIcon className="w-4 h-4 text-[#166534] font-bold" />
      //          {res.message}
      //        </div>
      //      ),
      //    },
      //    "success"
      //  );

      // setIsUser(true);
    } catch (error: any) {
      setIsLoading(false);
      //  toast(
      //    {
      //      title: "OTP Verification",
      //      description: (
      //        <div className="flex gap-2 items-center text-lg">
      //          <AlertOctagonIcon className="w-4 h-4 text-[#991B1B] font-bold" />
      //          {error?.response?.data?.message}
      //        </div>
      //      ),
      //    },
      //    "error"
      //  );
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
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center space-x-2 mb-4">
            {/* OTP input fields */}
            {otp.map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={otp[index]}
                onChange={(e) => handleChange(e, index)}
                className="w-12 h-12 text-center border border-gray-300 rounded-lg text-black text-lg"
              />
            ))}
          </div>
          {/* Error message */}
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          {/* Resend link */}
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
          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-[#0E214F] text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            {isLoading ? "Loading.." : "Confirm"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountVerification;
