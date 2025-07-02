import React from "react";
import whoImage from "../assets/image4.jpg"; // Replace with your image path
import { Link } from "react-router-dom";

const WhoWeAre = () => {
  return (
    <div className="w-full py-16 px-6 mt-3">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* LEFT: IMAGE */}
        <div className="w-full lg:w-1/2">
          <img
            src={whoImage}
            alt="About Digo IT"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* RIGHT: TEXT */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800">
            About Digo IT
          </h3>
          <p className="text-lg leading-relaxed text-gray-700">
            <span className="font-bold text-indigo-700">Digo IT</span> is a
            privately held, global technology and customer experience (CX)
            solutions firm dedicated to empowering businesses through strategic
            consulting, innovative design, and comprehensive support. We
            specialize in the development and maintenance of mission-critical
            contact center and unified communications technologies.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            We also provide local, regional, and national IT resourcing
            services, ensuring your projects and business goals stay on track.
            Whether it's cutting-edge tech implementation, top-tier IT support,
            or expanding your internal teams with skilled professionals, we help
            you stay agile and focused in a competitive market.
          </p>

          {/* BUTTON */}
          <Link
            to="/about"
            className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-indigo-700 transition"
          >
            About More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
