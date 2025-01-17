import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav className="bg-white shadow-md py-4 fixed top-0 left-0 right-0 z-20">
        <div className="container mx-auto flex items-center justify-between space-x-8 px-6">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/home/logo.png" alt="Logo" />
          </div>

          {/* Hamburger Menu Icon */}
          <button
            className="text-gray-600 text-2xl md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {menuOpen ? "✖" : "☰"}
          </button>

          {/* Navigation Links */}
          <div
            className={`${
              menuOpen ? "translate-x-0" : "translate-x-full"
            } fixed top-12 right-0 bg-white w-3/4 h-full shadow-lg md:static md:bg-transparent md:shadow-none md:translate-x-0 md:flex md:items-center md:space-x-8 transition-transform duration-300 ease-in-out`}
          >
            <div className="flex flex-col md:flex-row md:space-x-8 p-6 md:p-0">
              <Link
                to={"/"}
                className="text-gray-600 hover:text-red-500 font-medium my-2 md:my-0"
                onClick={() => setMenuOpen(false)} // Close menu on link click
              >
                Home
              </Link>
              <Link
                to={"/about-us"}
                className="text-gray-600 hover:text-red-500 font-medium my-2 md:my-0"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to={"/view-shop"}
                className="text-gray-600 hover:text-red-500 font-medium my-2 md:my-0"
                onClick={() => setMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                to={"/read-blog"}
                className="text-gray-600 hover:text-red-500 font-medium my-2 md:my-0"
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </Link>

              <Link
                to={"/contact-us"}
                className="text-gray-600 hover:text-red-500 font-medium my-2 md:my-0"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Action Buttons (Desktop Only) */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Cart Link */}
            <Link className="relative" to={"/my-cart"}>
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
              <button className="text-gray-600 hover:text-gray-800">🛒</button>
            </Link>

            {/* Contact Us and Dropdown */}
            <div className="relative flex" ref={dropdownRef}>
              <Link
                to={"/contact-us"}
                className="bg-[#EF294C] text-white px-5 text-[12px] py-2 rounded-md font-medium whitespace-nowrap flex items-center"
              >
                Contact Us
              </Link>
              <button
                onClick={toggleDropdown}
                className="ml-2 text-gray-600 hover:text-gray-800"
              >
                <img src="/navbartoggle.png" alt="navbartoggle" />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-[-24px] top-12 mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded-lg z-50">
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <i className="fa fa-user"></i>
                      <Link to="/view-profile" className="ms-2">
                        My Profile
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <i class="fa-solid fa-right-from-bracket"></i>
                      <Link to="/view-profile" className="ms-2">
                        logout
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
