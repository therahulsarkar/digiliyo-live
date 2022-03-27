import React from 'react'
import Approach from '../components/Approach/Approach'
import Blog from '../components/Blog/Blog'
import Brands from '../components/Brands/Brands'
import Expertise from '../components/Expertise/Expertise'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import RecentWorks from '../components/RecentWorks/RecentWorks'
import WhatWeDo from '../components/WhatWeDo/WhatWeDo'
import WhyUs from '../components/WhyUs/WhyUs'

const Layout = () => {
  return (
      <>
        <Navbar/>
        <Hero/>
        <WhatWeDo/>
        <Brands/>
        <RecentWorks/>
        <Expertise/>
        <Approach/>
        <WhyUs/>
        <Blog/>
        <Footer/>
    </>
  )
}

export default Layout