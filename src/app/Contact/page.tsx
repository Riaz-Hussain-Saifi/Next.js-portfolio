"use client";
import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaDiscord,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaNpm,
} from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { FaSquareUpwork } from "react-icons/fa6";
import Link from "next/link";

function Contact() {
  return (
    <div className="bg-gradient-to-r from-indigo-400 via-purple-600 to-pink-500 text-white min-h-screen py-16 px-6 sm:px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8 animate-pulse">Get in Touch</h1>
        <p className="text-lg mb-6 leading-relaxed">
          Interested in collaborating, need assistance, or just want to know
          more? I’d love to hear from you! Feel free to reach out anytime, and
          let’s connect.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto bg-white rounded-lg p-8 shadow-lg text-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-6 text-purple-600">
          Contact Form
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Your Message"
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-md font-semibold hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-4xl font-semibold text-center mb-8">
          Connect with Me
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          <Link
            href="https://www.linkedin.com/in/riaz-hussain-saifi"
            target="_blank"
            className="p-4 bg-blue-700 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <FaLinkedin className="text-3xl mx-auto mb-2" />
            <span>LinkedIn</span>
          </Link>
          <Link
            href="https://github.com/Riaz-Hussain-Saifi"
            target="_blank"
            className="p-4 bg-gray-900 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <FaGithub className="text-3xl mx-auto mb-2" />
            <span>GitHub</span>
          </Link>
          <Link
            href="https://discord.com/channels/@riaz_hussain_saifi"
            target="_blank"
            className="p-4 bg-indigo-600 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <FaDiscord className="text-3xl mx-auto mb-2" />
            <span>Discord</span>
          </Link>
          <Link
            href="https://www.youtube.com/@Saifi_Developer"
            target="_blank"
            className="p-4 bg-red-600 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <FaYoutube className="text-3xl mx-auto mb-2" />
            <span>YouTube</span>
          </Link>
          <Link
            href="https://www.facebook.com/RiazSaifiDeveloper"
            target="_blank"
            className="p-4 bg-blue-600 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <FaFacebook className="text-3xl mx-auto mb-2" />
            <span>Facebook</span>
          </Link>
          <Link
            href="https://vercel.com/riaz-hussains-saifi"
            target="_blank"
            className="p-4 bg-gray-800 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <IoLogoVercel className="text-3xl mx-auto mb-2" />
            <span>Vercel</span>
          </Link>
          <Link
            href="https://wa.me/+923000321640"
            target="_blank"
            className="p-4 bg-green-600 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <FaWhatsapp className="text-3xl mx-auto mb-2" />
            <span>WhatsApp</span>
          </Link>
          <Link
            href="https://www.instagram.com/saifi_developer/"
            target="_blank"
            className="p-4 bg-pink-600 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <FaInstagram className="text-3xl mx-auto mb-2" />
            <span>Instagram</span>
          </Link>
          <Link
            href="https://www.upwork.com/freelancers/~01942f74928039fb07?mp_source=share"
            target="_blank"
            className="p-4 bg-teal-500 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <FaSquareUpwork className="text-3xl mx-auto mb-2" />
            <span>Upwork</span>
          </Link>
          <Link
            href="https://www.npmjs.com/~saifi_developer"
            target="_blank"
            className="p-4 bg-orange-600 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <FaNpm className="text-3xl mx-auto mb-2" />
            <span>NPM</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
