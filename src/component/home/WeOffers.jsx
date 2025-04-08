'use client';
import Image from 'next/image';
import React from 'react';

const WeOfferSection = () => {
  const offerItems = [
    {
      title: 'Sales',
      description: 'Dealing in world\'s top 10 AC brands.',
      image: '/Sales.jpg',
      buttonText: 'Explore Products',
      alt: 'Salesperson showing AC units in showroom'
    },
    {
      title: 'Service',
      description: 'We Support you end-to-end from consultation on Sales to Installation and maintenance.',
      image: '/Services.jpg',
      buttonText: 'Learn More',
      alt: 'Technicians installing air conditioning units'
    }
  ];

  return (
    <section className="py-12 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-10">
          We Offer
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offerItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded shadow-lg overflow-hidden flex flex-col"
              style={{ boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="h-80 relative">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {item.description}
                </p>
                <div className="mt-auto">
                  <a 
                    href="#" 
                    className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded transition-colors duration-200"
                  >
                    {item.buttonText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeOfferSection;