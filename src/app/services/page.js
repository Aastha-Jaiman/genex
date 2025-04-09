
import Footer from '@/component/footer/Footer'
import HeroSection2 from '@/component/hero/HeroSection2'
import HVACForm from '@/component/home/Home'
import ProjectSection from '@/component/home/Projects'
import TrustedBy from '@/component/home/TrustedBy'
import Navbar from '@/component/nav/Navbar'
import Services from '@/component/services/Services'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection2 pageName="Customer Support" bgImage="/aboutbg.jpg"/>
      <Services />
      <ProjectSection />
      <TrustedBy />
      <HVACForm />
      <Footer />
    </div>
  )
}

export default page
