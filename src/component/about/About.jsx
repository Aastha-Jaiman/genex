import React from 'react'
import HeroSection2 from '../hero/HeroSection2'
import Image from 'next/image'

import CompanyValuesSection from './CompanyValuesSection'
import ImagesSection from './ImagesSection'
import AwardsSection from './AwardsSection'


const About = () => {
  return (
    <>
      <section className="w-full h-auto py-16 bg-white px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Left Column: Text Content */}
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">Company Overview</h2>
                  
                  <p className="text-gray-800 leading-relaxed">
                    For companies looking for the best comfort and efficiency in Pune, India, Genex Cooling Systems has been a reliable partner since 2007.
                  </p>
                  
                  <p className="text-gray-800 leading-relaxed">
                    Designing, implementing, and maintaining high-performance HVAC systems especially made for the commercial and industrial sectors is our area of expertise
                  </p>
                  
                  <p className="text-gray-800 leading-relaxed">
                    We understand the particular difficulties faced by every sector. Regardless matter whether you oversee a corporate office, healthcare facility, educational institution, or manufacturing plant, our team of professional
                  </p>
                  
                  <p className="text-gray-800 leading-relaxed">
                    In addition to air conditioning systems, Genex offers solutions that improve efficiency, save energy, and guarantee long-term dependability. By collaborating with trusted brands like LG, Daikin, Mitsubishi, and Carrier, we deliver advanced HVAC technology built to meet the demands of your business.
                  </p>
                  
                  <p className="text-gray-800 leading-relaxed">
                    Engineering mastery, energy efficiency, and a steadfast dedication to client delight are the building blocks of our HVAC industry reputation,
                  </p>
                </div>
                
                {/* Right Column: Image */}
                <div className="relative  lg:h-full rounded-lg md:overflow-visible overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-gray-900 "></div>
                  <div className="h-full w-full relative left-10 bottom-10">
                    <Image 
                      src="/aboutimg.png" 
                      alt="Luxury HVAC showcase room" 
                      layout="fill"
                      objectFit="cover"
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div >
      </section>
      <ImagesSection/>
      <CompanyValuesSection/>
      <AwardsSection/>
      {/* <div className='w-[100vw] h-[100vh] bg-amber-200'></div> */}
    </>
  )
}

export default About
