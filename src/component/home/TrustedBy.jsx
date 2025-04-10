'use client';

import Image from 'next/image';
import React from 'react';

const clients = [
  { name: 'Bharat Forge', logo: '/kalyani.png' },
  { name: 'BlackBerry', logo: '/blackberry.png' },
  { name: 'Sahyadri Hospitals', logo: '/sahyadri.png' },
  { name: 'Just In Time', logo: '/justInImage.png' },
  { name: 'Fabindia', logo: '/fabindia.png' },
  { name: 'B.U. Bhandari', logo: '/bandhari.png' },
  { name: 'SBI', logo: '/SBI.png' },
  { name: 'Legacy Lifespaces', logo: '/Legacy.png' },
];

const TrustedBy = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-800 mb-10">
        Trusted By
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {clients.map((client, index) => (
          <div
            key={index}
            className="flex justify-center items-center bg-white shadow-md rounded-lg p-4 hover:scale-105 transition-transform"
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={300}
              height={100}
              className="object-contain h-20"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;
