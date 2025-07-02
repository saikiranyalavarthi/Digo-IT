import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/image9.jpg"; // Main hero image
import sideImage from "../assets/image10.jpg"; // Overlapping image
import { FaRegHandshake, FaGlobe, FaAward } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 mt-6 px-4">
      {/* LEFT: TEXT CONTENT */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-400 bg-clip-text text-transparent drop-shadow-lg mt-20">
          DIGO IT SOLUTION
        </h1>
        <h2 className="text-2xl font-semibold text-indigo-800">
          Comprehensive Solutions for Your Success
        </h2>
        <p className="text-lg text-gray-800">
          Empowering businesses globally with scalable IT services, expert
          guidance, and innovative solutions tailored to your needs.
        </p>

        {/* ICONS */}
        <div className="flex flex-wrap items-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <FaAward className="text-purple-700 text-2xl" />
            <span className="text-lg font-semibold text-gray-800">
              20+ Years Experience
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaGlobe className="text-purple-700 text-2xl" />
            <span className="text-lg font-semibold text-gray-800">
              Global Delivery
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaRegHandshake className="text-purple-700 text-2xl" />
            <span className="text-lg font-semibold text-gray-800">
              Trusted Partners
            </span>
          </div>
        </div>

        {/* CONTACT BUTTON */}
        <Link
          to="/contact"
          className="inline-block mt-6 bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Contact Us
        </Link>
      </div>

      {/* RIGHT: IMAGE WITH OVERLAPPING SIDE IMAGE */}
      <div className="w-full lg:w-1/2 relative flex justify-center">
        <img
          src={heroImage}
          alt="DIGO IT Banner"
          className="w-full max-w-lg rounded-2xl shadow-2xl object-cover"
        />

        {/* OVERLAPPING IMAGE */}
        <img
          src={sideImage}
          alt="Overlay"
          className="absolute bottom-[-20px] right-[-30px] w-24 h-24 rounded-full shadow-lg border-4 border-white"
        />
      </div>
    </div>
  );
};

export default HeroSection;
