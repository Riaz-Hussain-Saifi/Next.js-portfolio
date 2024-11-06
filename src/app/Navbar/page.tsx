"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LuAlignRight } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { Button } from "@/components/ui/button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-16">
      {/* Top Navbar Container */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-full h-16 fixed top-0 shadow-lg z-50">
        <nav className="flex items-center justify-between px-8 sm:px-4 h-full">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Image
                src="/favicon.ico"
                width={50}
                height={50}
                alt="Logo"
                className="rounded-full"
              />
            </Link>
            <Link href="/">
              <h1 className="text-white font-bold text-3xl sm:text-xl">Riaz <span className="text-black">Web</span><span className="text-red-500 text-4xl  ">.</span>
              </h1>
            </Link>
          </div>

          {/* Navigation Links for Desktop */}
          <div className="hidden md:flex items-center space-x-6 text-white font-medium">
            <Link href="/" className="hover:border-solid hover:border-b-4 hover:border-pink-600  hover:text-yellow-300">Home</Link>
            <Link href="/About" className="hover:border-solid hover:border-b-4 hover:border-pink-600  hover:text-yellow-300">About</Link>
            <Link href="/Services" className="hover:border-solid hover:border-b-4 hover:border-pink-600  hover:text-yellow-300">Services</Link>
            <Link href="/Portfolio" className="hover:border-solid hover:border-b-4 hover:border-pink-600  hover:text-yellow-300">Portfolio</Link>
            <Link href="/Contact" className="hover:border-solid hover:border-b-4 hover:border-pink-600  hover:text-yellow-300">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            className="md:hidden text-white text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IoMdClose /> : <LuAlignRight />}
          </Button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="flex flex-col items-center md:hidden bg-blue-700  text-white py-4 text-xl w-full space-y-4">
            <Link href="/" className="hover:border-solid hover:border-b-4 hover:border-red-600 hover:text-yellow-200" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/About" className="hover:border-solid hover:border-b-4 hover:border-red-600 hover:text-yellow-200" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/Services" className="hover:border-solid hover:border-b-4 hover:border-red-600 hover:text-yellow-200" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/Portfolio" className="hover:border-solid hover:border-b-4 hover:border-red-600 hover:text-yellow-200" onClick={() => setIsOpen(false)}>Portfolio</Link>
            <Link href="/Contact" className="hover:border-solid hover:border-b-4 hover:border-red-600 hover:text-yellow-200" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
