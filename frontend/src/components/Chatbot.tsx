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
        className={`rounded-full p-2 cursor-pointer transition-opacity duration-300 hover:opacity-50 ${isChatOpen ? 'opacity-0' : 'opacity-100'} animate-wiggle`}
        onClick={toggleChat}
      >
        <div className="relative w-20 h-20">
          <Image
            src={ChatIcon}
            alt="Chat Icon"
            className="w-full h-full"
          />
          {/* <div className={`w-full h-full absolute top-0 left-0 transition-opacity duration-300 ${isChatOpen ? 'opacity-100' : 'opacity-0'}`}>
            <Image
              src={HoverChatIcon}
              alt="Chat Icon"
              className="w-full h-full"
            />
          </div> */}
        </div>
      </div>
      <div
        className={`${
          isChatOpen ? 'block' : 'hidden'
        } bg-blue-500 p-4 rounded-lg shadow-lg`}
        style={{ maxWidth: '300px', maxHeight: '400px' }}
      >
        <div className="flex justify-end">
          <button
            className="text-gray-800 hover:text-red-500"
            onClick={toggleChat}
          >
            X
          </button>
        </div>
        <div className="m2-4 text-gray-900 ">Hi! How can NyaySathi assist you?</div>
        <input type="text" placeholder="Reply to NyaySathi" className="border border-black rounded-md "></input>
      </div>
    </div>
  );
};

export default ChatBot;
