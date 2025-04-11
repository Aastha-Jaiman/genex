'use client';

import Image from 'next/image';
import React from 'react';

const awards = [
  {
    title: 'Business Transformation Award, Hong Kong 2023',
    image: '/OfficeImage.jpg',
  },
  {
    title: 'Success Story',
    image: '/OfficeImage.jpg',
  },
  {
    title: 'Business Transformation Award, Paris 2024',
    image: '/OfficeImage.jpg',
  },
];
const stats = [
  { value: '1000+', label: 'PROJECTS' },
  { value: '18+', label: 'YEARS' },
  { value: '10+', label: 'BRANDS' },
];

const AwardsSection = () => {
  return (

    <>
     
      <section className="py-12 px-4 md:px-8 bg-white">
      {/* <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-800 mb-10">
        Achievement
      </h2> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 max-w-4xl mx-auto mb-8">
          {awards.slice(0, 2).map((award, index) => (
            <div key={index} className="flex flex-col items-center overflow-hidden">
              <Image
                src={award.image}
                alt={award.title}
                width={400}
                height={250}
                className="object-cover w-full h-auto"
              />
              <p className="text-center text-gray-700 font-bold p-2 mt-5">
                {award.title}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row with 1 Centered Image */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center overflow-hidden max-w-md">
            <Image
              src={awards[2].image}
              alt={awards[2].title}
              width={400}
              height={250}
              className="object-cover w-full h-auto"
            />
            <p className="text-center text-gray-700 font-medium p-2 mt-5">
              {awards[2].title}
            </p>
          </div>
        </div>
      </section>
    
      <section className="bg-[#16132B] py-24 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-24">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="border border-blue-400 rounded-2xl py-16 text-center w-full md:w-[200px]"
            >
              <div className="text-3xl md:text-5xl font-medium text-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="text-white text-3xl font-medium tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

    </>
  );
};

export default AwardsSection;
