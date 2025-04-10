'use client';

import Image from 'next/image';
import React from 'react';

const awards = [
  {
    image: '/OfficeImage.jpg',
  },
  {
    image: '/OfficeImage.jpg',
  },
  {
    image: '/OfficeImage.jpg',
  },
  {
    image: '/OfficeImage.jpg',
  },
  {
    image: '/OfficeImage.jpg',
  },
];


const ProjectSection = () => {
  return (

    <>
      <section className="py-12 px-4 md:px-8 bg-gray-50 ">
      <h2 className="text-2xl md:text-5xl font-bold text-center text-blue-800 mb-10">
        Projects
      </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 max-w-4xl mx-auto mb-8">
          {awards.slice(0, 4).map((award, index) => (
            <div key={index} className="flex flex-col items-center overflow-hidden">
              <Image
                src={award.image}
                alt={award.title}
                width={400}
                height={250}
                className="object-cover w-full h-auto"
              />
            </div>
          ))}
        </div>

        {/* Second Row with 1 Centered Image */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center overflow-hidden max-w-md">
            <Image
              src={awards[4].image}
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
    


    </>
  );
};

export default ProjectSection;
