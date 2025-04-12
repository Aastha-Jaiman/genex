// components/HeroSection.jsx
import React from 'react';

const HeroSection3 = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Genex/images/ContactHero.png')",
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
    </div>
  );
};

export default HeroSection3;