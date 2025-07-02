import React from "react";
import { FaUsers, FaHandsHelping, FaUserTie, FaAward } from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers className="text-4xl text-indigo-600" />,
    number: "56k+",
    label: "Satisfied Clients",
  },
  {
    icon: <FaHandsHelping className="text-4xl text-indigo-600" />,
    number: "266+",
    label: "Team Support",
  },
  {
    icon: <FaUserTie className="text-4xl text-indigo-600" />,
    number: "1k+",
    label: "Expert Consultants",
  },
  {
    icon: <FaAward className="text-4xl text-indigo-600" />,
    number: "59k+",
    label: "Industry Awards",
  },
];

const StatsSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300 group"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-indigo-100 p-4 rounded-full transition group-hover:scale-110">
                {stat.icon}
              </div>
            </div>
            <h3 className="text-3xl font-bold text-center text-gray-900">
              {stat.number}
            </h3>
            <p className="text-center text-gray-600 font-medium mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
