import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/newlogo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-400 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img
              src={logo}
              alt="Digo IT Logo"
              className="w-28 h-16 object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About Us
          </Link>
          <Link to="/services" className="hover:underline">
            Services
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow-md text-gray-700 font-medium">
          <Link to="/" className="block" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="block" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link
            to="/services"
            className="block"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
