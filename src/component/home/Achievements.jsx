'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const awards = [
  {
    title: 'Business Transformation Award, Hong Kong 2023',
    image: '/Genex/images/Award1.png',
  },
  {
    title: 'Success Story',
    image: '/Genex/images/Award2.png',
  },
  {
    title: 'Business Transformation Award, Paris 2024',
    image: '/Genex/images/Award3.png',
  },
];

const stats = [
  { value: '1000+', label: 'PROJECTS' },
  { value: '18+', label: 'YEARS' },
  { value: '10+', label: 'BRANDS' },
];

const AwardsSection = () => {
  // States to control animations
  const [animateAwards, setAnimateAwards] = useState(false);
  const [animateStats, setAnimateStats] = useState(false);

  // Animation variants for awards
  const awardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };

  const awardItemVariants = {
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

  // Animation variants for stats
  const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };

  const statsItemVariants = {
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

  // Effect to handle scroll animations
  useEffect(() => {
    // Flags to ensure animations only trigger once
    let awardsAnimated = false;
    let statsAnimated = false;
    
    const handleScroll = () => {
      // Check awards section
      const awardsSection = document.getElementById('awards-section');
      if (awardsSection && !awardsAnimated) {
        const awardsSectionTop = awardsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (awardsSectionTop < windowHeight * 0.75) {
          setAnimateAwards(true);
          awardsAnimated = true;
          console.log("Awards animation triggered");
        }
      }
      
      // Check stats section
      const statsSection = document.getElementById('stats-section');
      if (statsSection && !statsAnimated) {
        const statsSectionTop = statsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (statsSectionTop < windowHeight * 0.75) {
          setAnimateStats(true);
          statsAnimated = true;
          console.log("Stats animation triggered");
        }
      }
      
      // Remove listener if both animations have triggered
      if (awardsAnimated && statsAnimated) {
        window.removeEventListener('scroll', handleScroll);
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
      <section id="awards-section" className="py-12 px-4 md:px-8 bg-white">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-20 max-w-4xl mx-auto mb-8"
          variants={awardContainerVariants}
          initial="hidden"
          animate={animateAwards ? "visible" : "hidden"}
        >
          {awards.slice(0, 2).map((award, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center overflow-hidden"
              variants={awardItemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <motion.img
                src={award.image}
                alt={award.title}
                width={400}
                height={250}
                className="object-cover w-full h-auto"
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              />
              <motion.p 
                className="text-center text-gray-700 font-medium p-2 mt-5"
                initial={{ opacity: 0 }}
                animate={animateAwards ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5 + (index * 0.2), duration: 0.8 }}
              >
                {award.title}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Second Row with 1 Centered Image */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={animateAwards ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ 
            delay: 0.6,
            type: 'spring',
            damping: 15,
            stiffness: 60,
            duration: 0.8
          }}
        >
          <motion.div 
            className="flex flex-col items-center overflow-hidden max-w-md"
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <motion.img
              src={awards[2].image}
              alt={awards[2].title}
              width={400}
              height={250}
              className="object-cover w-full h-auto"
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            />
            <motion.p 
              className="text-center text-gray-700 font-medium p-2 mt-5"
              initial={{ opacity: 0 }}
              animate={animateAwards ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {awards[2].title}
            </motion.p>
          </motion.div>
        </motion.div>
      </section>
    
      <section id="stats-section" className="bg-[#16132B] py-24 px-4">
        <motion.div 
          className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-24"
          variants={statsContainerVariants}
          initial="hidden"
          animate={animateStats ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="border border-blue-400 rounded-2xl py-16 text-center w-full md:w-[200px]"
              variants={statsItemVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
                transition: { duration: 0.3 } 
              }}
            >
              <motion.div 
                className="text-3xl md:text-5xl font-medium text-blue-400 mb-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={animateStats ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ 
                  delay: 0.3 + (index * 0.2), 
                  duration: 0.8,
                  type: "spring"
                }}
              >
                {stat.value}
              </motion.div>
              <motion.div 
                className="text-white text-3xl font-medium tracking-wide"
                initial={{ opacity: 0 }}
                animate={animateStats ? { opacity: 1 } : { opacity: 0 }}
                transition={{ 
                  delay: 0.6 + (index * 0.2), 
                  duration: 0.8 
                }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default AwardsSection;