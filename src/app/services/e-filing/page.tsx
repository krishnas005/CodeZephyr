"use client"

import React from 'react';
import Navbar from '@/components/Navbars';
import Footer from '@/components/Footer';
import Logobar from '@/components/Logobar';

const EFilingForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <main>
      <Logobar/>
      <Navbar/>
      <div className="flex flex-col items-center justify-center min-h-screen mt-12 mb-14">
      <div className="bg-gray-200 py-10 max-w-2xl w-full mx-auto border rounded-xl">
        <div className="container mx-auto p-5">
          <h1 className="text-3xl font-semibold mb-10 text-center">
            E-Filing : Register Your Plea
          </h1>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-2">
            <div className="grid grid-cols-1 gap-2 mb-6">
              <label htmlFor="fullName" className="block font-semibold text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                className="w-full p-3 rounded border border-gray-400"
              />
            </div>
            <div className="grid grid-cols-1 gap-2 mb-6">
              <label htmlFor="contactNumber" className="block font-semibold text-gray-700">
                Contact Number
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                placeholder="Enter your contact number"
                className="w-full p-3 rounded border border-gray-400"
              />
            </div>
            <div className="grid grid-cols-1 gap-2 mb-6">
              <label htmlFor="issue" className="block font-semibold text-gray-700">
                Issue
              </label>
              <input
                type="text"
                id="issue"
                name="issue"
                placeholder="Describe your issue"
                className="w-full p-3 rounded border border-gray-400"
              />
            </div>
            <div className="grid grid-cols-1 gap-2 mb-6">
              <label htmlFor="address" className="block font-semibold text-gray-700">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                placeholder="Enter your address"
                className="w-full p-3 rounded border border-gray-400"
                rows="4"
              ></textarea>
            </div>
            <div className="grid grid-cols-1 gap-2 mb-6">
              <label htmlFor="state" className="block font-semibold text-gray-700">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                placeholder="Enter your state"
                className="w-full p-3 rounded border border-gray-400"
              />
            </div>
            <div className="grid grid-cols-1 gap-2 mb-6">
              <label htmlFor="country" className="block font-semibold text-gray-700">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                placeholder="Enter your country"
                className="w-full p-3 rounded border border-gray-400"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded font-semibold hover:bg-blue-600"
            >
              Submit Plea
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </main>
  );
};

export default EFilingForm;
