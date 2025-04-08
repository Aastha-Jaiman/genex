import About from '@/component/about/About'
import Footer from '@/component/footer/Footer'
import HomePage from '@/component/hero/HeroSection'
import HVACSection from '@/component/home/About'
import AwardsSection from '@/component/home/Achievements'
import PartnerBrandsSection from '@/component/home/Brands'
import HVACForm from '@/component/home/Home'
import TrustedBy from '@/component/home/TrustedBy'
import WeOfferSection from '@/component/home/WeOffers'
import Navbar from '@/component/nav/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      {/* <Home /> */}
      <HVACSection />
      <TrustedBy />
      <AwardsSection />
      <WeOfferSection />
      <PartnerBrandsSection />
      <HVACForm />
      <Footer />
    </div>
  )
}

export default page
