import React, { useState } from 'react';

// Define props and state for the component
const AccountVerification: React.FC = () => {
  // State for OTP input and error message
  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState('');

  // Handle input change for each OTP digit
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    // Validate input format (alphanumeric)
    if (/^[a-zA-Z0-9]$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setError('');
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Check if all OTP digits are entered
    if (otp.every((val) => val !== '')) {
      console.log('OTP Verified:', otp.join(''));
      // Handle OTP verification logic here (e.g., API call)
    } else {
      setError('Please enter all four OTP characters.');
    }
  };

  // Handle back button click
  const handleBack = () => {
    window.history.back(); // Navigate back in history
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0E214F]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Back button */}
        <button onClick={handleBack} className="text-[#0E214F] text-xl mb-4">
          ←
        </button>
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Account Verification</h2>
        {/* Instruction */}
        <p className="mb-6 text-center text-gray-600">Enter the 4-digit OTP sent to your email</p>
        {/* OTP form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-between">
            {/* OTP input fields */}
            {otp.map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={otp[index]}
                onChange={(e) => handleChange(e, index)}
                className="w-12 h-12 text-center border border-gray-300 rounded-lg text-black"
              />
            ))}
          </div>
          {/* Error message */}
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountVerification;
