import React from "react";
import { Link } from "react-router-dom";

import otImage from "../assets/image3.jpg";
import itsmImage from "../assets/image4.jpg";
import infraImage from "../assets/image5.jpg";
import sapImage from "../assets/image6.jpg";
import immigrationImage from "../assets/image7.jpg";
import staffingImage from "../assets/image8.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "Operational Technology (OT) Infrastructure Services",
      image: otImage,
      link: "/services",
    },
    {
      title: "IT Service Management",
      image: itsmImage,
      link: "/services",
    },
    {
      title: "IT Infrastructure Services",
      image: infraImage,
      link: "/services",
    },
    {
      title: "SAP Implementation and Support Services",
      image: sapImage,
      link: "/services",
    },
    {
      title: "Immigration Service",
      image: immigrationImage,
      link: "/services",
    },
    {
      title: "Staffing Service",
      image: staffingImage,
      link: "/services",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-indigo-800">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
        {services.map((service, index) => (
          <Link
            to={service.link}
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-4 flex flex-col hover:scale-[1.02] transform duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              {service.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
