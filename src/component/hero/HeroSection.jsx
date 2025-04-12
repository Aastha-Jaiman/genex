"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative w-full">
      {/* Background Image with Overlay */}
      <div 
        className="w-full bg-center bg-cover h-[80vh] sm:h-[85vh] md:h-[80vh] lg:h-[100vh] object-cover"
        style={{
          backgroundImage: "url('/Genex/images/Mask Group 1.png')",
          position: "relative"
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gray-900/60"></div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="text-white">
            <p className="text-base sm:text-lg md:text-xl font-bold tracking-wider mb-2 text-blue-300">WELCOME TO GENEX</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-2 sm:mb-4">Leading HVAC Partner</h1>
            <p className="text-base sm:text-lg md:text-2xl font-medium mb-6 sm:mb-8 text-blue-200">Experts in customised Air Conditioning</p>
            
            <Link href="#Contact">
              <button className="bg-blue-200 hover:bg-blue-300 cursor-pointer text-blue-500 font-semibold py-4 px-4 sm:px-6 rounded-md transition duration-300 text-sm sm:text-base">
                Get Quote
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Services Section */}
      <div className="bg-indigo-950 py-3 sm:py-4 md:py-6 w-full md:w-11/12 lg:w-10/12 xl:w-3/4 mx-auto relative -mt-12 sm:-mt-16 md:-mt-20 shadow-lg">
        <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6 text-center text-white">
            {/* Consultation */}
            <div className="p-2 sm:p-3 md:p-4 flex flex-col items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-14 mb-1 sm:mb-2 md:mb-3">
                <img src="/13515434.png" alt="" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg ">Consultation</h3>
            </div>
            
            {/* Sales */}
            <div className="p-2 sm:p-3 md:p-4 flex flex-col items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-14 mb-1 sm:mb-2 md:mb-3">
                <img src="/ac.png" alt="ac" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg">Sales</h3>
            </div>
            
            {/* Installation */}
            <div className="p-2 sm:p-3 md:p-4 flex flex-col items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-14 mb-1 sm:mb-2 md:mb-3">
                <img src="/setting.png" alt="" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg">Installation</h3>
            </div>
            
            {/* Support */}
            <div className="p-2 sm:p-3 md:p-4 flex flex-col items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-14 mb-1 sm:mb-2 md:mb-3">
                <img src="/support.png" alt="" /> 
              </div>
              <h3 className="text-sm sm:text-base md:text-lg">Support</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;