'use client';

import Image from 'next/image';
import React from 'react';

const brands = [
  { name: 'LG', logo: '/brands/brand1.png' },
  { name: 'Mitsubishi', logo: '/brands/brand2.png' },
  { name: 'Daikin', logo: '/brands/brand3.png' },
  { name: 'Blue Star', logo: '/brands/brand4.png' },
  { name: 'Lloyd', logo: '/brands/brand5.png' },
  { name: 'Voltas', logo: '/brands/brand6.png' },
  { name: 'Panasonic', logo: '/brands/brand7.png' },
  { name: 'Samsung', logo: '/brands/brand8.png' },
  { name: 'Hitachi', logo: '/brands/brand9.png' },
  { name: 'Carrier', logo: '/brands/brand10.png' },
];

const PartnerBrandsSection = () => {
  return (
    <section className="bg-[#16132B] py-12 px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-100 mb-20">
        Top Partner Brands
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {brands.slice(0,8).map((brand, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-2xl flex items-center justify-center h-44 shadow-md"
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              width={100}
              height={50}
              className="object-contain h-full"
            />
          </div>
        ))}
      </div>

      <div className='flex gap-6 justify-center mt-6'>
          <div
            className="bg-white p-4 rounded-2xl flex items-center justify-center h-44 shadow-md"
          >
            <Image
              src={brands[8].logo}
              alt={brands[8].name}
              width={100}
              height={50}
              className="object-contain h-full w-44"
            />
          </div>
          <div
            className="bg-white p-4 rounded-2xl flex items-center justify-center h-44 shadow-md"
          >
            <Image
              src={brands[9].logo}
              alt={brands[9].name}
              width={100}
              height={50}
              className="object-contain h-full w-44"
            />
          </div>
      </div>
      
    </section>
  );
};

export default PartnerBrandsSection;
