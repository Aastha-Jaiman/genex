"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  // State to control if animation has played
  const [animateServices, setAnimateServices] = useState(false);
  
  // Container variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };

  // Item variants for individual animations
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 60,
        duration: 0.8
      }
    }
  };

  // Effect to trigger animation on scroll
  useEffect(() => {
    // Flag to ensure animation only triggers once
    let hasAnimated = false;
    
    const handleScroll = () => {
      // Trigger animation on slight scroll and if not already animated
      if (window.scrollY > 10 && !hasAnimated) {
        setAnimateServices(true);
        hasAnimated = true;
        // Remove the scroll listener after animation triggers
        window.removeEventListener('scroll', handleScroll);
        console.log("Animation triggered at scroll position:", window.scrollY);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this only runs once on mount

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

      {/* Services Section with Animation - Triggered on scroll */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={animateServices ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ 
          duration: 1.2,
          ease: "easeOut" 
        }}
        className="bg-[#16132B] py-3 sm:py-4 md:py-6 w-full md:w-11/12 lg:w-10/12 xl:w-3/4 mx-auto relative -mt-12 sm:-mt-16 md:-mt-20 shadow-lg rounded-lg"
      >
        <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6 text-center text-white"
            variants={containerVariants}
            initial="hidden"
            animate={animateServices ? "visible" : "hidden"}
          >
            {/* Consultation */}
            <motion.div 
              className="p-2 sm:p-3 md:p-4 flex flex-col items-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-14 mb-1 sm:mb-2 md:mb-3"
                whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.8 } }}
              >
                <img src="/consultancy.png" alt="Consultation icon" className="w-full h-full object-contain" />
              </motion.div>
              <h3 className="text-sm sm:text-base md:text-lg">Consultation</h3>
            </motion.div>

            {/* Sales */}
            <motion.div 
              className="p-2 sm:p-3 md:p-4 flex flex-col items-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-14 mb-1 sm:mb-2 md:mb-3"
                whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.8 } }}
              >
                <img src="/ac.png" alt="AC icon" className="w-full h-full object-contain" />
              </motion.div>
              <h3 className="text-sm sm:text-base md:text-lg">Sales</h3>
            </motion.div>

            {/* Installation */}
            <motion.div 
              className="p-2 sm:p-3 md:p-4 flex flex-col items-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-14 mb-1 sm:mb-2 md:mb-3"
                whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.8 } }}
              >
                <img src="/setting.png" alt="Installation icon" className="w-full h-full object-contain" />
              </motion.div>
              <h3 className="text-sm sm:text-base md:text-lg">Installation</h3>
            </motion.div>

            {/* Support */}
            <motion.div 
              className="p-2 sm:p-3 md:p-4 flex flex-col items-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-14 mb-1 sm:mb-2 md:mb-3"
                whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.8 } }}
              >
                <img src="/support.png" alt="Support icon" className="w-full h-full object-contain" />
              </motion.div>
              <h3 className="text-sm sm:text-base md:text-lg">Support</h3>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;