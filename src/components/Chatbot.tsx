"use client"

import React, { useState } from 'react';
import ChatIcon from '@/assets/chatlogo.png';
import HoverChatIcon from '@/assets/ChatRobot.jpg';
import Image from 'next/image';

const ChatBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="fixed bottom-5 right-5 z-10">
      <div
        className={`rounded-full p-2 cursor-pointer ${isChatOpen ? 'opacity-0' : 'opacity-100'} transition-opacity`}
        onClick={toggleChat}
      >
        <div className="relative w-16 h-16">
          <Image
            src={ChatIcon}
            alt="Chat Icon"
            className={`w-full h-full ${isChatOpen ? 'opacity-0' : 'opacity-100'} transition-opacity ease-in-out duration-300`}
          />
          <Image
            src={HoverChatIcon}
            alt="Chat Icon"
            className={`w-full h-full absolute top-0 left-0 ${isChatOpen ? 'opacity-100' : 'opacity-0'} transition-opacity ease-in-out duration-300`}
          />
        </div>
      </div>
      <div
        className={`${
          isChatOpen ? 'block' : 'hidden'
        } bg-white p-4 rounded-lg shadow-lg`}
        style={{ maxWidth: '300px', maxHeight: '400px' }}
      >
        <div className="flex justify-end">
          <button
            className="text-gray-600 hover:text-red-500"
            onClick={toggleChat}
          >
            Close
          </button>
        </div>
        <div className="mt-4 text-gray-700">Hello! How can I assist you?</div>
      </div>
    </div>
  );
};

export default ChatBot;
