'use client';

import Image from 'next/image';
import React from 'react';

const brands = [
  { name: 'LG', logo: '/brands/lg.png' },
  { name: 'Mitsubishi', logo: '/brands/mitsubishi.png' },
  { name: 'Daikin', logo: '/brands/daikin.png' },
  { name: 'Blue Star', logo: '/brands/bluestar.png' },
  { name: 'Lloyd', logo: '/brands/lloyd.png' },
  { name: 'Voltas', logo: '/brands/voltas.png' },
  { name: 'Panasonic', logo: '/brands/panasonic.png' },
  { name: 'Samsung', logo: '/brands/samsung.png' },
  { name: 'Hitachi', logo: '/brands/hitachi.png' },
  { name: 'Carrier', logo: '/brands/carrier.png' },
];

const PartnerBrandsSection = () => {
  return (
    <section className="bg-[#16132B] py-12 px-4">
      <h2 className="text-center text-white text-2xl font-semibold mb-10">
        Top Partner Brands
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-2xl flex items-center justify-center h-24 shadow-md"
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
    </section>
  );
};

export default PartnerBrandsSection;
