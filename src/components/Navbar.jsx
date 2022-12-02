import { useState, useEffect } from "react";

import Logo from "../images/Logo.png";

export default function Navbar() {
  const [scrolled, setSrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 40) {
        setSrolled(true);
      } else {
        setSrolled(false);
      }
    };
  });

  return (
    <nav
      className={`fixed w-full flex items-center h-16 ${
        scrolled ? "bg-[#07080a]" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between mx-5 lg:mx-20 w-full">
        <div className="inline-flex items-center">
          <img src={Logo} alt="" className="mr-2" />
          <span className="text-[#02C3BD] font-semibold text-xl">
            Digicoins
          </span>
        </div>
        <div className="hidden lg:flex items-center divide-x gap-3">
          <div className="text-white flex items-center space-x-2 text-sm">
            <span>EN/USD</span>
            <svg
              className="w-3 h-3 ml-2"
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
          <div>
            <svg
              className="w-5 h-5 text-white ml-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}
