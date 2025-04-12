'use client';

// import Image from 'next/image';
import React from 'react';

const clients = [
  { name: 'Bharat Forge', logo: '/Genex/27 12/48.png' },
  { name: 'BlackBerry', logo: '/Genex/27 12/25.png' },
  { name: 'Sahyadri Hospitals', logo: '/Genex/27 12/50.png' },
  { name: 'Just In Time', logo: '/Genex/27 12/34.png' },
  { name: 'Fabindia', logo: '/Genex/27 12/26.png' },
  { name: 'B.U. Bhandari', logo: '/Genex/27 12/32.png' },
  { name: 'SBI', logo: '/Genex/27 12/54.png' },
  { name: 'Legacy Lifespaces', logo: '/Genex/27 12/44.png' },
];

const TrustedBy = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-800 mb-10">
        Trusted By
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-[68rem] mx-auto">
        {clients.map((client, index) => (
          <div
            key={index}
            className="flex justify-center items-center bg-white transition-transform hover:scale-105 w-full h-28 sm:h-32 md:h-32"
            style={{
              boxShadow: `
                -0px -0px 2px rgba(0, 0, 0, 0.01),
                 4px 4px 10px rgba(0, 0, 0, 0.2)  
              `,
            }}
          >
            <img
              src={client.logo}
              alt={client.name}
              width={200}
              height={80}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;
