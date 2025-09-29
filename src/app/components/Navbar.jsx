"use client"; 
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 md:bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left Side - Logo */}
          <div className="flex items-center space-x-2">
            {/* Desktop Logo */}
            <span className="hidden md:block font-bold text-xl text-blue-600">
              nazrul.dev
            </span>

            {/* Mobile Logo */}
            <span className="block md:hidden font-semibold text-lg text-blue-600">
                 nazrul.dev
            </span>
          </div>

          {/* Right Side - Nav Links */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
            <Link href="/services" className="hover:text-blue-600">Services</Link>
          </div>

          {/* Hamburger for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-gray-700 focus:outline-none"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li>
              <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
