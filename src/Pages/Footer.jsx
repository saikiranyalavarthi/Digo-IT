import React from "react";
import footerLogo from "../assets/newlogo.png"; // Replace with your footer image/logo

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo and Open Hours */}
        <div className="space-y-4">
          <img
            src={footerLogo}
            alt="DigoIT Logo"
            className="h-16 object-contain"
          />
          <p className="text-sm text-gray-300">Open Hours :</p>
          <p className="text-sm font-semibold text-white">24/7 Support</p>
          <p className="text-sm text-gray-300">Texas, United States</p>
          <p className="text-sm text-gray-300">Hi-tech City, Hyderabad</p>
          <p className="text-sm text-gray-300">+91 8143410067</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="/" className="hover:text-indigo-400">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-indigo-400">
                About DigoIT
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-indigo-400">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-indigo-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="/services/" className="hover:text-indigo-400">
                OT Infrastructure
              </a>
            </li>
            <li>
              <a href="/services/" className="hover:text-indigo-400">
                IT Service Management
              </a>
            </li>
            <li>
              <a href="/services/" className="hover:text-indigo-400">
                IT Infrastructure Services
              </a>
            </li>
            <li>
              <a href="/services/" className="hover:text-indigo-400">
                SAP Implementation
              </a>
            </li>
            <li>
              <a href="/services/" className="hover:text-indigo-400">
                Immigration Service
              </a>
            </li>
            <li>
              <a href="/services/" className="hover:text-indigo-400">
                Staffing Service
              </a>
            </li>
          </ul>
        </div>

        {/* Optional: Newsletter or Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Let's Connect
          </h3>
          <p className="text-sm text-gray-300 mb-4">
            Reach out to us anytime for your IT & CX needs.
          </p>
          <a
            href="mailto:info@digoit.com"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm transition"
          >
            Email Us
          </a>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-10">
        © {new Date().getFullYear()} Digo IT Solution. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
