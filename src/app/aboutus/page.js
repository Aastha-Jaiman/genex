import About from '@/component/about/About'
import Footer from '@/component/footer/Footer'
import HeroSection2 from '@/component/hero/HeroSection2'
import PartnerBrandsSection from '@/component/home/Brands'
import HVACForm from '@/component/home/Home'
import Navbar from '@/component/nav/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />  
      <HeroSection2 pageName="About Us" bgImage="/aboutbg.jpg"/>
      <About />
      <PartnerBrandsSection />
      <HVACForm />
      <Footer />
    </div>
  )
}

export default page
