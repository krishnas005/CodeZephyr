"use client"

import React, { useState } from 'react';
import Navbar from '@/components/Navbars';
import Link from 'next/link';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
  };

  return (
    <main>
      <Navbar/>
      <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="text-center font-semibold text-2xl my-8">Login</div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Mobile Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your mobile number"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          
            <div className="text-center mb-4">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
              type="submit"
            >
              Login
            </button>
            </div>
            <a
              className="block align-baseline font-bold text-sm text-blue-600 my-2 hover:text-blue-800 text-center"
              href="#"
            >
              Forgot Password?
            </a>
          <div className="text-center">
          Don&apos;t have a account? <Link className="text-blue-600 font-semibold hover:text-blue-800" href={'/register'}>Register</Link>
          </div>
        </form>
      </div>
    </div>
    </main>
  );
};

export default LoginPage;


