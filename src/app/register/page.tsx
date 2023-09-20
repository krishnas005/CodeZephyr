"use client"

import React, { useState } from 'react';
import Navbar from '@/components/Navbars';
import Link from 'next/link';
import Logobar from '@/components/Logobar';
import Footer from '@/components/Footer';
import {useRouter} from 'next/navigation';
import toast from 'react-hot-toast';

const KYCVerificationForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    idType: '',
    idNumber: '',
    address: '',
    city: '',
    country: '',
    dob: '',
    contactNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      router.push('/login');
      const response = await axios.post('/api/users/signup',formData);
      console.log(response.data);
      
  } catch (error:any) {
      console.log(error);
      toast.error(error.message);
  }
  };

  return (
    <main>
      <Logobar/>
      <Navbar/>
      <div className="max-w-lg mx-auto p-8 mt-10 mb-12 bg-white shadow-xl rounded-md">
      <h2 className="text-2xl font-bold mb-8 text-center">KYC Verification</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-700 mb-1" >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
            <label htmlFor="dob" className="block text-gray-700 mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Enter your date of birth"
            />
          </div>
        <div className="mb-4">
          <label htmlFor="idType" className="block text-gray-700 mb-1">
            ID Type
          </label>
          <select
            id="idType"
            name="idType"
            value={formData.idType}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded p-2"
          >
            <option value="">Select ID Type</option>
            <option value="aadhar">Aadhar Card</option>
            <option value="passport">Passport</option>
            <option value="drivingLicense">Driving License</option>
            
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="idNumber" className="block text-gray-700 mb-1" >
            ID Number
          </label>
          <input
            type="text"
            id="idNumber"
            name="idNumber"
            value={formData.idNumber}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Enter your Id number"
          />
        </div>
        <div className="mb-4">
            <label htmlFor="contactNumber" className="block text-gray-700 mb-1">
              Contact Number
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Enter your contact number"
            />
          </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 mb-1"  >Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Enter your address"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-700 mb-1" >
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            placeholder="Enter your city"
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="block text-gray-700 mb-1" >
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Enter your country"
          />
        </div>
        <div className="mt-4 text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white w-full px-6 py-3 rounded font-semibold hover:bg-blue-600"
          >
            Verify
          </button>
        </div>
        <div className="text-center mt-4"><p>Already have an account? <Link href="/login" className="text-blue-600 font-semibold">Login</Link></p></div>
      </form>
    </div>
    <Footer />
    </main>
  );
};

export default KYCVerificationForm;
