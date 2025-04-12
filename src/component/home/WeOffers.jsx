'use client';
// import Image from 'next/image';
import React from 'react';

const WeOfferSection = () => {
  const offerItems = [
    {
      title: 'Sales',
      description: 'Dealing in world\'s top 10 AC brands.',
      image: '/Genex/images/Offer1.png',
      buttonText: 'Explore Products',
      alt: 'Salesperson showing AC units in showroom',
      url: '/products'
    },
    {
      title: 'Service',
      description: 'We Support you end-to-end from consultation on Sales to Installation and maintenance.',
      image: '/Genex/images/Offer2.png',
      buttonText: 'Learn More',
      alt: 'Technicians installing air conditioning units',
      url: '/services'
    }
  ];

  return (
    <section className="py-12 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-800 mb-10">
          We Offer
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {offerItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded shadow-lg overflow-hidden flex flex-col"
              style={{ boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="h-64 relative">
                <img
                  src={item.image}
                  alt={item.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              
              <div className="p-14 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {item.description}
                </p>
                <div className="mt-auto">
                  <a 
                    href={item.url} 
                    className="inline-block bg-blue-800 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded transition-colors duration-200"
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