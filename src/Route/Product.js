import React from 'react'
import Navbar from '../Conponent/Navbar'
import Footer from '../Conponent/Footer'
import Heroimage from '../Conponent/Heroimage'
import Work from '../Conponent/Work'
import Pricing from '../Conponent/Pricing'

const Product = () => {
  return (
    <div>
     <Navbar/>
     <Heroimage heading="PRODUCT."  text="Some of my most recent products" />
     <Work/>
      <Pricing/>
     <Footer/>
     
    </div>
  )
}

export default Product