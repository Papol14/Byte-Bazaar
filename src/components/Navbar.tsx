import "/styles.css"; // Import styles.css
import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Use NavLink for active state
import logo from "/logo.png"; // Replace with your logo path

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? " bg-blue-700 text-white px-3 py-2 rounded"
      : "py-2 text-gray-700 hover:text-blue-500 ";

  return (
    <nav className="bg-gray-200 border-b shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 mr-2 border border-gray-700 rounded-lg"
          />
          <span className="text-xl font-semibold text-gray-700">
            Byte Bazaar
          </span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/products" className={linkClass}>
            Products
          </NavLink>
          <NavLink to="/faq" className={linkClass}>
            FAQ
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <NavLink
            to="/products"
            className="block px-4 py-2 text-gray-600 hover:bg-blue-100 hover:text-blue-500"
          >
            Products
          </NavLink>
          <NavLink
            to="/faq"
            className="block px-4 py-2 text-gray-600 hover:bg-blue-100 hover:text-blue-500"
          >
            FAQ
          </NavLink>
          <NavLink
            to="/about"
            className="block px-4 py-2 text-gray-600 hover:bg-blue-100 hover:text-blue-500"
          >
            About
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
