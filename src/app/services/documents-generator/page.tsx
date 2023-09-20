"use client"

import React, { useState } from 'react';
import Navbar from '@/components/Navbars';
import Logobar from '@/components/Logobar';
import Footer from '@/components/Footer';
import downloadLink from '@/assets/result.pdf';

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
          <option value="document1">Document 1</option>
          <option value="document2">Document 2</option>
          <option value="document3">Document 3</option>
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
          <div className="mb-4">
            <label className="block mb-2">Choose Payment Method:</label>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setPaymentMethod('Razorpay')}
                className="flex items-center space-x-2 p-2 border border-gray-300 rounded hover:border-indigo-500"
              >
                <img
                  src="/"
                  alt="Razorpay"
                  className="w-8 h-8"
                />
              </button>
              <button
                onClick={() => setPaymentMethod('DebitCard')}
                className="flex items-center space-x-2 p-2 border border-gray-300 rounded hover:border-indigo-500"
              >
                <img
                  src="/"
                  alt="Debit Card"
                  className="w-8 h-8"
                />
              </button>
              <button
                onClick={() => setPaymentMethod('QRScanner')}
                className="flex items-center space-x-2 p-2 border border-gray-300 rounded hover:border-indigo-500"
              >
                <img
                  src="/"
                  alt="QR Scanner"
                  className="w-8 h-8"
                />
              </button>
            </div>
          </div>
          <button
            onClick={handlePayment}
            className="bg-blue-500 text-white px-6 py-3 rounded font-semibold hover:bg-blue-600"
          >
            Pay Now
          </button>
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
