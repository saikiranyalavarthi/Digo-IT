import React from "react";
import contactImage from "../assets/image11.jpg"; // Replace with your image path

const ContactSection = () => {
  return (
    <div className=" py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE - IMAGE */}
        <div>
          <img
            src={contactImage}
            alt="Contact"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* RIGHT SIDE - CONTACT FORM */}
        <div className="bg-white rounded-xl shadow-xl p-8 space-y-6">
          <h2 className="text-3xl font-bold text-center text-indigo-800">
            Contact Us
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Mobile
              </label>
              <input
                type="tel"
                placeholder="+91-XXXXXXXXXX"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Your Message
              </label>
              <textarea
                rows="4"
                placeholder="Type your message..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
