"use client"

import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';


const Navbar = () => {
  const [isSideNavbarOpen, setIsSideNavbarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

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
      <nav className="bg-gray-800 p-2.5 shadow-xl relative z-10">
        <div className="container flex ml-6  items-center">
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
          <div className="hidden md:flex flex-grow gap-8 ml-4 space-x-4">
            <Link
              href="/home-page"
              className="text-white transition duration-300 hover:text-gray-400"
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="text-white transition duration-300 hover:text-gray-400"
            >
              ABOUT
            </Link>
            
            {/* <div className="group relative z-5" ref={dropdownRef}>
              <a
                href="#"
                className={`text-white group-hover:text-gray-400 transition duration-300 ${
                  activeDropdown === 1 ? 'text-gray-400' : ''
                }`}
                onClick={() => toggleDropdown(1)}
              >
                RIGHTS
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
              </div> */}
            {/* </div> */}
            <Link href="https://www.indiacode.nic.in/" className="text-white transition duration-300 hover:text-gray-400" target="_blank" rel="noopener noreferrer">
              INDIA CODE
            </Link>
            <div className="group relative z-4" ref={dropdownRef}>
              <a
                href="#"
                className={`text-white group-hover:text-gray-300 ${
                  activeDropdown === 2 ? 'text-gray-300' : ''
                }`}
                onClick={() => toggleDropdown(2)}
              >
                SERVICES
              </a>
              <div
                className={`absolute mt-2 bg-gray-600 text-white ${
                  activeDropdown === 2 ? 'block' : 'hidden'
                }`}
              >
                <Link href="/services/e-billing" className="block px-4 py-2 transition duration-300 hover:bg-gray-700">
                  E-Filing
                </Link>
                <Link href='https://districts.ecourts.gov.in/' className="block px-4 py-2 transition duration-300 hover:bg-gray-700">
                  Courts near me
                </Link>
                <Link href="/services/documents-generator" className="block px-4 py-2 transition duration-300 hover:bg-gray-700">
                  Documents Generator
                </Link>
                <Link href="/service/docs-analyzer" className="block px-4 py-2 transition duration-300 hover:bg-gray-700">
                  Docs Analyzer
                </Link>
              </div>

            </div>
            <Link href="/contact" className="text-white transition duration-300 hover:text-gray-400">
              CONTACT
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-2 mr-10">
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
