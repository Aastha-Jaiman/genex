// components/HeroSection.jsx
import React from 'react';

const HeroSection3 = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/aboutbg.jpg')",
          filter: "brightness(0.8)"
        }}
      />
      
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full ">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-6 py-2 bg-black/50 w-full ">
          Contact Us
        </h1>
      </div>
      
      {/* Wave Shape at Bottom */}
      {/* <div className="absolute bottom-0 left-0 w-full">
      <svg  viewBox="0 0 1873 338" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 337.5C146.207 255.956 252.945 215.552 445.5 161.5C538.24 133.963 592.538 123.373 692.5 111C786.571 99.7156 839.819 97.1184 936.5 105.5L1049.5 124L1156.5 159L1259.5 203.5C1299.02 221.292 1322.06 230.89 1368 246C1435.04 266.137 1474.64 272.629 1550 274C1617.8 267.275 1653.45 259.251 1712.5 235.5C1831.04 172.465 1863.27 119.488 1873 0.5V337.5H0Z" fill="white"/>
</svg>
</div> */}
    </div>
  );
};

export default HeroSection3;