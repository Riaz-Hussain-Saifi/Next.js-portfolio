"use client";
import React from "react";
import { FaCode, FaMobileAlt, FaPalette, FaCloud, FaShoppingCart, FaDatabase } from "react-icons/fa";

function Services() {
  return (
    <div className="bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 text-white min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold mb-6">Our Services</h1>
        <p className="text-lg mb-6 leading-relaxed">
          Explore our diverse range of services tailored to meet your digital needs. From development to design, our team is here to help bring your ideas to life with creativity, precision, and expertise.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* Web Development */}
        <div className="p-8 bg-white rounded-lg shadow-lg text-center text-gray-800 hover:shadow-2xl transition duration-300 transform hover:scale-105">
          <FaCode className="text-4xl mx-auto mb-4 text-blue-600" />
          <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
          <p>
            Build responsive and dynamic websites that are tailored to your brand’s needs, focusing on user experience and functionality.
          </p>
        </div>

        {/* Mobile App Development */}
        <div className="p-8 bg-white rounded-lg shadow-lg text-center text-gray-800 hover:shadow-2xl transition duration-300 transform hover:scale-105">
          <FaMobileAlt className="text-4xl mx-auto mb-4 text-purple-600" />
          <h3 className="text-2xl font-semibold mb-4">Mobile App Development</h3>
          <p>
            Create engaging and user-friendly mobile apps for both iOS and Android platforms with seamless functionality and sleek design.
          </p>
        </div>

        {/* UI/UX Design */}
        <div className="p-8 bg-white rounded-lg shadow-lg text-center text-gray-800 hover:shadow-2xl transition duration-300 transform hover:scale-105">
          <FaPalette className="text-4xl mx-auto mb-4 text-pink-600" />
          <h3 className="text-2xl font-semibold mb-4">UI/UX Design</h3>
          <p>
            Design aesthetically pleasing and intuitive user interfaces that enhance user interaction and experience across all platforms.
          </p>
        </div>

        {/* Cloud Solutions */}
        <div className="p-8 bg-white rounded-lg shadow-lg text-center text-gray-800 hover:shadow-2xl transition duration-300 transform hover:scale-105">
          <FaCloud className="text-4xl mx-auto mb-4 text-green-600" />
          <h3 className="text-2xl font-semibold mb-4">Cloud Solutions</h3>
          <p>
            Integrate your business with scalable and secure cloud solutions, optimized for performance and data management.
          </p>
        </div>

        {/* E-commerce Development */}
        <div className="p-8 bg-white rounded-lg shadow-lg text-center text-gray-800 hover:shadow-2xl transition duration-300 transform hover:scale-105">
          <FaShoppingCart className="text-4xl mx-auto mb-4 text-yellow-600" />
          <h3 className="text-2xl font-semibold mb-4">E-commerce Development</h3>
          <p>
            Set up professional and feature-rich e-commerce websites with custom functionality to boost your online sales.
          </p>
        </div>

        {/* Database Management */}
        <div className="p-8 bg-white rounded-lg shadow-lg text-center text-gray-800 hover:shadow-2xl transition duration-300 transform hover:scale-105">
          <FaDatabase className="text-4xl mx-auto mb-4 text-red-600" />
          <h3 className="text-2xl font-semibold mb-4">Database Management</h3>
          <p>
            Efficiently manage, secure, and optimize your databases for better performance and scalability, tailored to your business needs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
