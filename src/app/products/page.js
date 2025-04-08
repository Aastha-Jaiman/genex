import Footer from '@/component/footer/Footer'
import HeroSection2 from '@/component/hero/HeroSection2'
import PartnerBrandsSection from '@/component/home/Brands'
import HVACForm from '@/component/home/Home'
import Navbar from '@/component/nav/Navbar'
import ProductTypes from '@/component/products/ProductDetails'
import ProductsRange from '@/component/products/ProductsRange'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection2 pageName="Products" bgImage="/aboutbg.jpg"/>
      <ProductsRange />
      <ProductTypes />
      <PartnerBrandsSection />
      <HVACForm />
      <Footer />
    </div>
  )
}

export default page
