import Contact from '@/component/contact/Contact'
import ContactInfo from '@/component/contact/LetsConnect'
import Footer from '@/component/footer/Footer'
import HVACForm from '@/component/home/Home'
import Navbar from '@/component/nav/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <Contact />
      <ContactInfo />
      <HVACForm />
      <Footer/>
    </div>
  )
}

export default page
