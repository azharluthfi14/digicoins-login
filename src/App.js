import React from "react";

import rocket from "./images/image 4.png";

import Navbar from "./components/Navbar";
import Input from "./components/Input";

export default function App() {
  return (
    <div className=" min-h-screen bg-[#0e1114]">
      <Navbar />
      <section className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0">
        <div className="sm:w-1/2 xl:w-5/12 h-full hidden md:flex flex-auto items-center justify-center  overflow-hidden bg-[#0e1114]">
          <img src={rocket} alt="rocket" className="w-full h-full" />
        </div>
        <div className="md:flex md:items-center md:justify-center w-full xl:w-7/12 p-8 bg-[#0b0e11] md:p-10 lg:p-14 ">
          <div className="py-5">
            <div className="text-right mb-12">
              <h5 className="text-white">
                Already have an account ?{" "}
                <a href="/" className="text-[#02C3BD]">
                  Login
                </a>
              </h5>
            </div>
            <div className="w-full lg:w-7/12">
              <div className="space-y-5">
                <h3 className="text-4xl text-white font-semibold">Sign Up</h3>
                <p className="text-gray-500 text-sm">
                  Use Your OpenID To Sign Up
                </p>
              </div>
              <div className="flex items-center space-x-5 divide-x-2 mt-3">
                <div className="text-[#02C3BD]">
                  <h3>Email</h3>
                </div>
                <div className="pl-5 text-white">
                  <h3>Phone Number</h3>
                </div>
              </div>
              <form autoComplete="off" className="mt-5">
                <Input label="Email" name="email" type="email" />
                <Input label="Password" name="password" type="password" />
                <Input
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                />

                <div className="flex items-center text-white text-sm space-x-4">
                  <p>Referall ID (Optional)</p>
                  <svg
                    className="w-3.5 h-3.5 font-semibold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>

                <div className="mb-8">
                  <div className="flex items-center mt-5 space-x-5">
                    <div className="flex">
                      <input
                        id="remember-me"
                        name="remember-me"
                        required
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-700 bg-gray-700"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-white"
                      >
                        By signing up I agree that i'm 1 years of page or older,
                        to the{" "}
                        <span className="text-gray-300 decoration-1 hover:underline font-medium">
                          User Agreements, Privacy Policy, Cookie Policy, E-Sign
                          Consent
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <button className="bg-gradient-to-t to-sky-400 from-blue-500 w-full py-2.5 font-semibold text-white rounded-md">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
