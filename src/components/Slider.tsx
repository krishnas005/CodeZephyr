"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import img1 from '@/assets/img1.jpg';
import img2 from '@/assets/img2.jpg';
// import img from '@/assets/img3.jpg';
import {BiChevronsLeft} from "react-icons/bi";
import {BiChevronsRight} from "react-icons/bi";


const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [img1, img2];
  const totalImages = images.length;

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  const setImageIndex = (index) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 9000);

    return () => clearInterval(intervalId);
  }, [totalImages]);

  return (
    <div className="relative transition-opacity duration-100">
      <Image
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        width={400}
        height={200}
        layout="responsive"
        // className="w-full h-auto"
      />
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <button onClick={prevImage} className= "text-black px-4 py-2 ">
          <BiChevronsLeft size={40} />
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <button onClick={nextImage} className=" text-black px-4 py-2 ">
          <BiChevronsRight size={40} />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mt-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setImageIndex(index)}
            className={`h-2 w-2 mx-1 rounded-full ${index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
