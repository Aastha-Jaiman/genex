// components/OurOfferings.jsx
import React from 'react';
// import Image from 'next/image';

const offeringsData = [
  {
    title: "Consultation",
    description: "At Genex, we specialize in HVAC project consultation, offering customized solutions after comprehensive site analysis and evaluation. Our experienced consultants ensure a cooling-efficient HVAC system.",
    image: "/Genex/images/Services1.png",
    alt: "HVAC consultants discussing plans",
    reverse: false
  },
  {
    title: "Sales",
    description: "Explore a wide choice of leading HVAC product series, offering a wide range of performance. All products have been rigorously tested to comply with quality standards tailored to your business needs.",
    image: "/Genex/images/Services2.png",
    alt: "HVAC equipment sales presentation",
    reverse: true
  },
  {
    title: "Installation",
    description: "Genex provides expert HVAC installation services, ensuring optimum setup of systems and providing sustainable, energy-saving, state-of-the-art air conditioning solutions for optimal performance and longevity.",
    image: "/Genex/images/Services3.png",
    alt: "Technicians installing HVAC system",
    reverse: false
  },
  {
    title: "Support",
    description: "Genex offers exceptional after-sales support for all HVAC systems. Our dedicated team resolves issues promptly, ensuring minimal downtime and providing assistance to keep your systems running smoothly.",
    image: "/Genex/images/Services4.png",
    alt: "HVAC support technicians working on equipment",
    reverse: true
  }
];

export default function OurOfferings() {
  return (
    <section className="py-16 mt-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-blue-800 mb-4">Our Offerings</h2>
        
        <div className="mb-10 ">
          <p className="text-gray-700 leading-relaxed mb-6">
            Genex Cooling Systems is a trusted HVAC dealer specializing in delivering innovative and efficient 
            climate control solutions. As top-brand partners for LG, Mitsubishi, and over 30 world-class 
            manufacturers, we bring you the highest quality HVAC products currently available in the 
            market. Our comprehensive product range includes VRV systems, ductable units, cassette air 
            conditioners, and more, tailored to meet the unique needs of commercial, industrial, and residential 
            spaces. All installations are performed by certified professionals using cutting-edge techniques and 
            solutions that set industry standards. Partner with Genex Cooling Systems to experience professional 
            expertise backed by leading global brands.
          </p>
        </div>

        <div className="space-y-16">
          {offeringsData.map((offering, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center gap-8">
              {/* Image Section */}
              <div className={`w-full lg:w-1/2 ${offering.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="p-2 rounded-lg">
                  <div className="relative h-64 sm:h-80">
                    <img
                      src={offering.image}
                      alt={offering.alt}
                      fill
                      className="rounded object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Text Section */}
              <div className={`w-full lg:w-1/2 ${offering.reverse ? 'lg:order-1' : 'lg:order-2'}`}>
                <h3 className="text-2xl font-bold text-blue-800 mb-4">{offering.title}</h3>
                <p className="text-gray-700 font-medium">{offering.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}