"use client"

import React, { useState } from 'react';
import Navbar from '@/components/Navbars';
import Logobar from '@/components/Logobar';
import Footer from '@/components/Footer';

const DocsAnalyzerPage = () => {
  const [inputType, setInputType] = useState('text');
  const [inputContent, setInputContent] = useState('');
  const [keywords, setKeywords] = useState([]);
  const [summary, setSummary] = useState('');

  const handleInputChange = (e) => {
    setInputContent(e.target.value);
  };

  const handleAnalyze = () => {
    // You would send the inputContent to your Django backend for analysis
    // For this example, let's pretend we receive some analysis data
    const analysisData = {
      summary: 'Summary of the analysis is this.',
      keywords: ['keyword1', 'keyword2', 'keyword3'],
    };

    // Update the analysis result
    setKeywords(analysisData.keywords);
    setSummary(analysisData.summary);
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setInputContent(event.target.result);
    };

    reader.readAsText(file);
  };

  return (
    <main>
        <Logobar />
        <Navbar />
        <div className="container mx-auto mb-6 p-8 text-center max-w-3xl">
      <h1 className="text-3xl font-semibold font-bold mb-8 mt-4">Docs Analyzer</h1>
      <div className="mb-4 flex justify-center items-center">
        <label className="mr-4">
          <input
            type="radio"
            value="text"
            checked={inputType === 'text'}
            onChange={() => setInputType('text')}
          />
          <span className="ml-2">Enter Text</span>
        </label>
        <label>
          <input
            type="radio"
            value="file"
            checked={inputType === 'file'}
            onChange={() => setInputType('file')}
          />
          <span className="ml-2">Upload Document</span>
        </label>
      </div>
      {inputType === 'text' ? (
        <textarea
          rows="8"
          value={inputContent}
          onChange={handleInputChange}
          placeholder="Enter your text here"
          className="w-full border border-gray-300 rounded p-2"
        />
      ) : (
        <input
          type="file"
          accept=".txt,.doc,.docx,.pdf"
          onChange={handleUpload}
          className="border border-gray-300 p-2 rounded"
        />
      )}
      <button
        onClick={handleAnalyze}
        className="mt-4 bg-blue-500 text-white px-6 py-3 rounded font-semibold  hover:bg-blue-600"
      >
        Analyze
      </button>
      <div className="mt-8">
        <h2 className="text-lg font-bold mb-2">Keywords:</h2>
        <div className="mb-4">{keywords.join(', ')}</div>
        <h2 className="text-lg font-bold mb-2">Explanation:</h2>
        <div className="">{summary}</div>
      </div>
    </div>
    <Footer/>
    </main>
  );
};

export default DocsAnalyzerPage;
