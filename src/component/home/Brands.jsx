'use client';

// import Image from 'next/image';
import React from 'react';

const brands = [
  { name: 'LG', logo: '/Genex/27 12/1.png' },
  { name: 'Mitsubishi', logo: '/Genex/27 12/3.png' },
  { name: 'Daikin', logo: '/Genex/27 12/5.png' },
  { name: 'Blue Star', logo: '/Genex/27 12/7.png' },
  { name: 'Lloyd', logo: '/Genex/27 12/9.png' },
  { name: 'Voltas', logo: '/Genex/27 12/11.png' },
  { name: 'Panasonic', logo: '/Genex/27 12/13.png' },
  { name: 'Samsung', logo: '/Genex/27 12/15.png' },
  { name: 'Hitachi', logo: '/Genex/27 12/17.png' },
  { name: 'Carrier', logo: '/Genex/27 12/19.png' },
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
            <img
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
            <img
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
            <img
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
