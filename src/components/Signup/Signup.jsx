import React from "react";
import { NavLink } from "react-router-dom";

function Signup() {
  return (
    <>
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center min-h-screen">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-xs md:max-w-md w-full">
          

          <div id="signup-form" className="">
            <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">
              Sign Up
            </h2>
            <form>
              <input
                type="text"
                placeholder="Name"
                className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-purple-600 transition duration-200"
              >
                Sign Up
              </button>
              <p className="text-center text-gray-600 mt-6">
                Already have an account?{" "}
                <a
                  href="#"
                  className="text-purple-500 hover:underline"
                  
                >
                  Log In
                </a>
              </p>
            </form>
          </div>
          


         
        </div>
      </div>
    </>
  );
}

export default Signup;
