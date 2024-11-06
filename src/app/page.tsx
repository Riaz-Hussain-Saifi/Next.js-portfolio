"use client";
import React from "react";
import Link from "next/link";
import { FaCode, FaLaptopCode, FaMobileAlt, FaPencilRuler } from "react-icons/fa";
import { Button } from "@/components/ui/button";

function Home() {
  return (
    <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg sm:text-2xl mb-8 max-w-3xl leading-relaxed">
          I’m Riaz Hussain, a passionate Web Developer specializing in creating
          responsive, user-friendly, and engaging web applications. With a focus
          on delivering high-quality digital experiences, I bring your vision to life!
        </p>
        <Link href="/Portfolio">
          <Button className="px-8 py-4 bg-gradient-to-r from-blue-700 to-teal-500 text-white font-semibold rounded-md shadow-lg hover:scale-105 transform transition duration-300">
            View My Work
          </Button>
        </Link>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white text-gray-800 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed mb-8">
            With a background in Computer Science and a keen eye for design, I specialize in crafting
            web solutions that combine functionality with beautiful interfaces. My goal is to ensure
            that every project I work on is intuitive, engaging, and meets modern web standards.
          </p>
          <Link href="/About">
            <Button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-purple-700 transition duration-300">
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-500 to-teal-500 text-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">My Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <FaCode className="text-5xl mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p>
                Full-stack development with a focus on responsive and engaging user interfaces.
              </p>
            </div>
            <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <FaLaptopCode className="text-5xl mx-auto mb-4 text-green-500" />
              <h3 className="text-xl font-semibold mb-2">App Development</h3>
              <p>
                Developing dynamic and powerful web applications that scale and perform seamlessly.
              </p>
            </div>
            <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <FaMobileAlt className="text-5xl mx-auto mb-4 text-red-500" />
              <h3 className="text-xl font-semibold mb-2">Mobile Optimization</h3>
              <p>
                Ensuring optimal performance and aesthetics on all screen sizes for mobile-friendly experiences.
              </p>
            </div>
            <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <FaPencilRuler className="text-5xl mx-auto mb-4 text-purple-500" />
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p>
                Designing user interfaces that are both beautiful and intuitive, with a focus on user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg leading-relaxed mb-8">
            Whether you have a small project or a big idea, I’m here to help turn it into reality.
            Let’s connect and discuss how we can collaborate to bring your vision to life.
          </p>
          <Link href="/Contact">
            <Button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-md shadow-lg hover:bg-teal-600 transition duration-300">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
