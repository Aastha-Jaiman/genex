
'use client';

import Image from 'next/image';
import React from 'react';

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
  return (

    <>

      <section className="py-12 px-4 md:px-8 bg-white">
        {/* <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-800 mb-10">
        Achievement
      </h2> */}
        {/* Second Row with 1 Centered Image */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center w-[650px] overflow-hidden mb-8">
            <Image
              src={awards[2].image}
              alt={awards[2].title}
              width={600}
              height={250}
              className="object-cover w-full h-auto shadow1"
            />
            <p className="text-center text-gray-700 font-medium p-2">
              {awards[2].title}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto ">
          {awards.slice(0, 2).map((award, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={award.image}
                alt={award.title}
                width={700}
                height={250}
                className="object-cover w-full h-auto shadow1"
              />
              <p className=" text-gray-700 font-medium p-2">
                {award.title}
              </p>
            </div>
          ))}
        </div>

      </section>

    </>
  );
};

export default ImagesSection;
