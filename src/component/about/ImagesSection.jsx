'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const awards = [
  {
    title: 'Paris 2024, with Managing Director of MDLG Electronics',
    image: '/Genex/images/Award3.png',
  },
  {
    title: 'Success Story',
    image: '/Genex/images/Award1.png',
  },
  {
    title: ' Business Transformation Award, Hong Kong 2023, received by Managing Director of MDLG Electronics',
    image: '/Genex/images/Award2.png',
  },
];

const ImagesSection = () => {
  // State to control animation
  const [animateImages, setAnimateImages] = useState(false);

  // Animation variants
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

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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

  // Effect to handle scroll animation
  useEffect(() => {
    // Flag to ensure animation only triggers once
    let hasAnimated = false;
    
    const handleScroll = () => {
      // Get the position of the images section
      const imagesSection = document.getElementById('images-section');
      if (!imagesSection) return;
      
      const imagesSectionTop = imagesSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      // Trigger animation when images section is about to enter viewport
      if (imagesSectionTop < windowHeight * 0.75 && !hasAnimated) {
        setAnimateImages(true);
        hasAnimated = true;
        // Remove the scroll listener after animation triggers
        window.removeEventListener('scroll', handleScroll);
        console.log("Images animation triggered");
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Run once on mount to check if already in view
    handleScroll();
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section id="images-section" className="py-12 px-4 md:px-8 bg-white">
        {/* First image (was originally third in the array) */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={animateImages ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ 
            delay: 0.2,
            type: 'spring',
            damping: 15,
            stiffness: 60,
            duration: 0.8
          }}
        >
          <motion.div 
            className="flex flex-col items-center w-[650px] overflow-hidden mb-8"
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <motion.img
              src={awards[2].image}
              alt={awards[2].title}
              width={600}
              height={250}
              className="object-cover w-full h-auto shadow1"
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            />
            <motion.p 
              className="text-center text-gray-700 font-medium p-2"
              initial={{ opacity: 0 }}
              animate={animateImages ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {awards[2].title}
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Grid with first two images */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={animateImages ? "visible" : "hidden"}
        >
          {awards.slice(0, 2).map((award, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <motion.img
                src={award.image}
                alt={award.title}
                width={700}
                height={250}
                className="object-cover w-full h-auto shadow1"
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              />
              <motion.p 
                className="text-gray-700 font-medium p-2"
                initial={{ opacity: 0 }}
                animate={animateImages ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.6 + (index * 0.2), duration: 0.8 }}
              >
                {award.title}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default ImagesSection;