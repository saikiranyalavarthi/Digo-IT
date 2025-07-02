import React from "react";
import contactImage from "../assets/image2.jpg"; // Replace with your actual image path

const Contact = () => {
  return (
    <div className="w-full text-gray-800">
      {/* Contact Info Cards Section */}

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Call Now */}
        <div className="bg-white bg-opacity-90 text-center rounded-xl p-6 shadow-lg text-indigo-900">
          <h2 className="text-2xl font-bold mb-2">📞 Call Now</h2>
          <p className="text-lg font-medium">+91 8143410067</p>
        </div>

        {/* Email */}
        <div className="bg-white bg-opacity-90 text-center rounded-xl p-6 shadow-lg text-indigo-900">
          <h2 className="text-2xl font-bold mb-2">✉️ Email Us</h2>
          <p className="text-lg font-medium">info@DigoIT.com</p>
        </div>

        {/* Address */}
        <div className="bg-white bg-opacity-90 text-center rounded-xl p-6 shadow-lg text-indigo-900">
          <h2 className="text-2xl font-bold mb-2">📍 Address</h2>
          <p className="text-lg font-medium">Hi-tech City, Hyderabad</p>
          <p className="text-lg font-medium">Texas, United States</p>
        </div>
      </div>

      {/* Global Reach Section */}
      <div className="max-w-7xl mx-auto py-16 px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">
            Serving You Worldwide
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Wherever You Are, We're There Too: Our IT infrastructure services
            have a global footprint, with presence in 6 countries ensuring
            timely and effective support for your organization.
          </p>
          <ul className="list-disc list-inside text-lg space-y-2 text-gray-700">
            <li>New Jersey, USA</li>
            <li>Dubai, UAE</li>
            <li>Riyadh, Saudi Arabia</li>
            <li>Hyderabad, India</li>
            <li>London, UK</li>
            <li>Ontario, Canada</li>
          </ul>
        </div>
        <div>
          <img
            src={contactImage}
            alt="Global Support"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl p-8 space-y-6">
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

export default Contact;
