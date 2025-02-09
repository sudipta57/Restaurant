import React, { useState } from "react";

const Signin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row max-w-[1200px] p-10 w-full">
        {/* Left Image Section */}
        <div className="md:w-1/2 relative">
          <img
            src="/login.png" // Replace with your image URL
            alt="Food"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form Section */}
        <div className="md:w-1/2 flex flex-col justify-center items-center bg-white">
          <h1 className="text-3xl font-semibold text-red-500 mb-8">
            Welcome Back!
          </h1>
          <form className="w-3/4 space-y-6">
            {/* Email Address Field */}
            <div>
              <input
                type="email"
                placeholder="Your Email address"
                className="w-full border border-pink-300 rounded-lg py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Your Password"
                className="w-full border border-pink-300 rounded-lg py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <span
                className="absolute top-3 right-4 cursor-pointer text-pink-500"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? "hide" : "show"}
              </span>
            </div>

            {/* Sign In Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-pink-500 text-white rounded-lg py-3 text-lg font-medium hover:bg-pink-600"
              >
                SIGN IN
              </button>
            </div>

            {/* Account Options */}
            <div className="flex justify-between items-center text-gray-600">
              <p>
                <a href="/sign-up" className="text-pink-500 hover:underline">
                  Create an Account
                </a>
              </p>
              <p>
                <a
                  href="/forgot-password"
                  className="text-pink-500 hover:underline"
                >
                  Forgot Password?
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
