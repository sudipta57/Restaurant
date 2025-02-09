import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation(); // Get current location

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
    <div className="font-oswald">
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
            } fixed top-12 right-0 bg-white w-3/4 h-full shadow-lg md:static md:bg-transparent md:shadow-none md:translate-x-0 md:flex md:items-center md:justify-center transition-transform duration-300 ease-in-out`}
          >
            <div className="flex flex-col md:flex-row md:space-x-16 p-6 md:p-0">
              {[
                { path: "/", label: "Home" },
                { path: "/about-us", label: "About Us" },
                { path: "/our-shop", label: "Shop" },
                { path: "/our-blog", label: "Blog" },
                { path: "/contact-us", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[18px] font-oswald my-2 md:my-0 ${
                    location.pathname === link.path
                      ? "border-b-2 border-[#EF294C] text-[#EF294C] font-[600]"
                      : "text-[#212121] hover:text-[#EF294C] font-[400]"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

            </div>
          </div>

          {/* Action Buttons (Desktop Only) */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Cart Link */}
            <Link className="relative" to={"/my-cart"}>
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                2
              </span>
              <button className="text-gray-600 hover:text-gray-800">
                <img src="/wishlist.png" alt="img" />
              </button>
            </Link>

            {/* Contact Us and Dropdown */}
            <div className="relative flex" ref={dropdownRef}>
              <Link
                to={"/contact-us"}
                className="bg-[#EF294C] text-white text-[12px] w-[182px] h-[57px] rounded-md font-medium whitespace-nowrap flex items-center text-center justify-center"

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
                      <Link to="/my-profile" className="ms-2">
                        My Profile
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <i className="fa-solid fa-right-from-bracket"></i>
                      <Link to="/profile" className="ms-2">
                        Logout

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
