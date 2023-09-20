"use client"

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Navbar = () => {
  const [isSideNavbarOpen, setIsSideNavbarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleSideNavbar = () => {
    setIsSideNavbarOpen(!isSideNavbarOpen);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <main>
      <Head>
        <title>Home Page</title>
      </Head>
      <nav className="bg-gray-800 p-4 py-5">
        <div className="container mx-auto flex justify-between items-center">
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={toggleSideNavbar}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isSideNavbarOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden md:flex flex-grow gap-6 justify-center space-x-4">
            <Link
              href="/home-page"
              className="text-white transition duration-300 hover:text-gray-400"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white transition duration-300 hover:text-gray-400"
            >
              About
            </Link>
            {/* <Link href="/contact" className="text-white">
              Contact
            </Link> */}
            <div className="group relative">
              <a
                href="#"
                className={`text-white group-hover:text-gray-400 transition duration-300 ${
                  activeDropdown === 1 ? 'text-gray-400' : ''
                }`}
                onClick={() => toggleDropdown(1)}
              >
                Rights
              </a>
              <div
                className={`absolute mt-2 bg-gray-600 text-white ${
                  activeDropdown === 1 ? 'block' : 'hidden'
                }`}
              >
                <Link
                  href="/rights/legal"
                  className="block px-4 py-2 transition duration-300 hover:bg-gray-700"
                >
                  Legal Rights
                </Link>
                <Link href="/rights/natural" className="block px-4 py-2 transition duration-300 hover:bg-gray-700">
                  Natural Rights
                </Link>
                <Link href="/rights/moral" className="block px-4 py-2 transition duration-300 hover:bg-gray-700">
                  Moral Rights
                </Link>
                <Link href="/rights/fundamental" className="block px-4 py-2 transition duration-300 hover:bg-gray-700">
                  Fundamental Rights
                </Link>
              </div>
            </div>
            <Link href="https://www.indiacode.nic.in/" className="text-white transition duration-300 hover:text-gray-400" target="_blank" rel="noopener noreferrer">
              India Code
            </Link>
            <div className="group relative">
              <a
                href="#"
                className={`text-white group-hover:text-gray-300 ${
                  activeDropdown === 2 ? 'text-gray-300' : ''
                }`}
                onClick={() => toggleDropdown(2)}
              >
                Services
              </a>
              <div
                className={`absolute mt-2 bg-gray-600 text-white ${
                  activeDropdown === 2 ? 'block' : 'hidden'
                }`}
              >
                <Link href="/services/e-billing" className="block px-4 py-2 transition duration-300 hover:bg-gray-700">
                  E-Filing
                </Link>
                <Link href="/services/courts-near-me" className="block px-4 py-2 transition duration-300 hover:bg-gray-700">
                  Courts near me
                </Link>
                <Link href="/services/documents-generator" className="block px-4 py-2 transition duration-300 hover:bg-gray-700">
                  Documents Generator
                </Link>
                <Link href="/learning" className="block px-4 py-2 transition duration-300 hover:bg-gray-700">
                  Learning
                </Link>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-2 ">
            <Link href="/login" legacyBehavior>
              <a className="text-white transition duration-300 hover:text-gray-400">Login</a>
            </Link>
            <p className="text-white">/</p>
            <Link href="/register" legacyBehavior>
              <a className="text-white transition duration-300 hover:text-gray-400">Register</a>
            </Link>
          </div>
        </div>

        <div className={`md:hidden ${isSideNavbarOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col mt-4">

          <Link
              href="/home-page"
              className="text-white py-2 px-4 transition duration-300 hover:bg-gray-700"
            >
              Home
            </Link>
            <div className="group relative">
              <a
                href="#"
                className={`text-white py-2 px-4 group-hover:text-gray-300 transition duration-300 ${
                  activeDropdown === 3 ? 'text-gray-300' : ''
                }`}
                onClick={() => toggleDropdown(3)}
              >
                Rights
              </a>
              <div
                className={`absolute bg-gray-600 text-white ${
                  activeDropdown === 3 ? 'block' : 'hidden'
                }`}
              >
                <Link
                  href="/rights/legal"
                  className="block px-4 py-2 transition duration-300 hover:bg-gray-700"
                >
                  Legal
                </Link>
                <Link href="/rights/natural" className="block px-4 py-2 transition duration-300 hover:bg-gray-700">
                  Natural
                </Link>
                <Link href="/rights/moral" className="block px-4 py-2 transition duration-300 hover:bg-gray-700">
                  Moral
                </Link>
                <Link href="/rights/fundamental" className="block px-4 py-2 transition duration-300 hover:bg-gray-700">
                  Fundamental
                </Link>
              </div>
            </div>
            <a href="https://www.indiacode.nic.in/" className="text-white py-2 px-4 transition duration-300 hover:bg-gray-700">
              India Code
            </a>

            {/* <Link href="/login" legacyBehavior>
              <a className="text-white py-2 px-4 transition duration-300 hover:bg-gray-700 block">Login</a>
            </Link>
            <Link href="/register" legacyBehavior>
              <a className="text-white py-2 px-4 transition duration-300 hover:bg-gray-700 block">Register</a> */}
            {/* </Link> */}
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
