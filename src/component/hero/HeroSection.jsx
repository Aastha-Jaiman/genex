"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative w-full">
      {/* Background Image with Overlay */}
      <div 
        className="w-full bg-center bg-cover h-[80vh] sm:h-[85vh] md:h-[80vh] lg:h-[90vh]"
        style={{
          backgroundImage: "url('/OfficeImage.jpg')",
          position: "relative"
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-blue-900/60"></div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="text-white">
            <p className="text-base sm:text-lg md:text-xl font-light tracking-wider mb-2 text-blue-400">WELCOME TO GENEX</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-2 sm:mb-4">Leading HVAC Partner</h1>
            <p className="text-base sm:text-lg md:text-xl font-light mb-6 sm:mb-8 text-blue-200">Experts in customised Air Conditioning</p>
            
            <Link href="/quote">
              <button className="bg-blue-200 hover:bg-blue-600 text-blue-500 font-semibold py-2 px-4 sm:px-6 rounded-md transition duration-300 text-sm sm:text-base">
                Get Quote
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Services Section */}
      <div className="bg-indigo-950 py-3 sm:py-4 md:py-6 w-full md:w-11/12 lg:w-10/12 xl:w-3/4 mx-auto relative -mt-12 sm:-mt-16 md:-mt-20 rounded-lg shadow-lg">
        <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6 text-center text-white">
            {/* Consultation */}
            <div className="p-2 sm:p-3 md:p-4 flex flex-col items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-1 sm:mb-2 md:mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-medium">Consultation</h3>
            </div>
            
            {/* Sales */}
            <div className="p-2 sm:p-3 md:p-4 flex flex-col items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-1 sm:mb-2 md:mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-medium">Sales</h3>
            </div>
            
            {/* Installation */}
            <div className="p-2 sm:p-3 md:p-4 flex flex-col items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-1 sm:mb-2 md:mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-medium">Installation</h3>
            </div>
            
            {/* Support */}
            <div className="p-2 sm:p-3 md:p-4 flex flex-col items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-1 sm:mb-2 md:mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-medium">Support</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;