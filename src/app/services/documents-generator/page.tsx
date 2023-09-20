"use client"

import React, { useState } from 'react';
import Navbar from '@/components/Navbars';
import Logobar from '@/components/Logobar';
import Footer from '@/components/Footer';
import downloadLink from '@/assets/result.pdf';
import bhim from '@/assets/bhim.webp';
import razor from '@/assets/razorpay.webp';
import debit from '@/assets/debitcard.webp';
import Image from 'next/image';

const DocumentsGeneratorPage = () => {
  const [selectedDocument, setSelectedDocument] = useState('');
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [fullName, setFullName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [idType, setIdType] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');
  const [downloadLink, setDownloadLink] = useState('');

  const handleDocumentChange = (event) => {
    setSelectedDocument(event.target.value);
    setShowPaymentOptions(true);
  };

  const handlePayment = () => {
    setPaymentStatus('Payment successful!');
    setDownloadLink(downloadLink);
  };

  return (
    <main>
      <Logobar/>
      <Navbar/>
      <div className="container mx-auto mt-6 p-8  max-w-2xl">
      <h1 className="text-center text-2xl font-bold mb-8 ">Documents Generator</h1>
      <div className="mb-4">
        <label className="block mb-2">Select Document:</label>
        <select
          value={selectedDocument}
          onChange={handleDocumentChange}
          className="w-full border border-gray-300 rounded p-2"
        >
          <option value="">Select Document</option>
          <option value="document1">Affidevit</option>
          <option value="document2">Stamp Paper</option>
          <option value="document3">Legal Notice</option>
        </select>
      </div>
      {showPaymentOptions && (
        <div className="mb-4">
          <label className="block mb-2">Full Name:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border border-gray-300 rounded p-2 mb-2"
            placeholder="Enter your name"
          />
          <label className="block mb-2">Contact Number:</label>
          <input
            type="text"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            className="w-full border border-gray-300 rounded p-2 mb-2"
            placeholder="Enter your contact"
          />
          <label htmlFor="idType" className="block mb-2">ID Type:</label>
          <select
            id="idType"
            name="idType"
            value={idType}
            // onChange={handleInputChange}
            className="w-full border border-gray-300 rounded p-2"
          >
            <option value="">Select ID Type</option>
            <option value="aadhar">Aadhar Card</option>
            <option value="passport">Passport</option>
            <option value="drivingLicense">Driving License</option>
            
          </select>
          <label className="block mb-2">ID Number:</label>
          <input
            type="text"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
            className="w-full border border-gray-300 rounded p-2 mb-2"
            placeholder="Enter your ID number"
          />
          <label className="block mb-2">Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border border-gray-300 rounded p-2 mb-2"
            placeholder="Enter your address"
          />
          <div className="mb-4 text-center">
            <label className="block mb-2">Choose Payment Method:</label>
            <div className="flex items-center ml-24 pl-28 space-x-4">
              <button
                onClick={() => setPaymentMethod('Bhim')}
                className="flex items-center space-x-2 p-2 border border-gray-300 rounded hover:border-indigo-500"
              >
                <Image
                  src={bhim}
                  alt="Bhim"
                  className="w-8 h-8"
                />
              </button>
              <button
                onClick={() => setPaymentMethod('razor')}
                className="flex items-center space-x-2 p-2 border border-gray-300 rounded hover:border-indigo-500"
              >
                <Image
                  src={razor}
                  alt="Razor pay"
                  className="w-8 h-8"
                />
              </button>
              <button
                onClick={() => setPaymentMethod('debit')}
                className="flex items-center space-x-2 p-2 border border-gray-300 rounded hover:border-indigo-500"
              >
                <Image
                  src={debit}
                  alt="Debit"
                  className="w-8 h-8"
                />
              </button>
            </div>
          </div>
          <div className="text-center">
          <button
            onClick={handlePayment}
            className="bg-blue-500 text-white px-6 py-3 rounded font-semibold hover:bg-blue-600"
          >
            Pay Now
          </button>
          </div>
        </div>
      )}
      {paymentStatus && (
        <div className="mt-8">
          <h2 className="text-lg font-bold mb-2">Payment Status:</h2>
          <div className="">{paymentStatus}</div>
          <div className="mt-4">
            <a
              href={downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Download Your Document
            </a>
          </div>
        </div>
      )}
    </div>

    </main>
  );
};

export default DocumentsGeneratorPage;
