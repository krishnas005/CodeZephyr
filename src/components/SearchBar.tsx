"use client"

import React, { useState } from 'react';
import {BiSearch} from 'react-icons/bi';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  
    const handleSearch = (keyword) => {
        const elements = document.getElementsByClassName('searchable');
        const keywordLower = keyword.toLowerCase();
    
        for (let i = 0; i < elements.length; i++) {
          const element = elements[i];
          const elementText = element.innerText.toLowerCase();
    
          if (elementText.includes(keywordLower)) {
            // Scroll to the element
            element.scrollIntoView({ behavior: 'smooth' });
    
            // Highlight the keyword by adding a CSS class
            element.classList.add('bg-yellow-200');
          } else {
            element.classList.remove('bg-yellow-200');
          }
        }
      
  };

  return (
    <div className="flex items-center mr-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search keywords"
        className="rounded-l-md p-1 border w-36 border-gray-300 focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="rounded-r-md p-2 bg-blue-500 text-white"
      >
        <BiSearch/>
      </button>
    </div>
  );
};

export default SearchBar;

