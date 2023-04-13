import React from 'react'
import Navbar from '../Conponent/Navbar'
import Footer from '../Conponent/Footer'
import Heroimage from '../Conponent/Heroimage'
import AboutContent from '../Conponent/AboutContent'



const About = () => {
  return (
    <div>
     <Navbar/>
     <Heroimage heading="ABOUT US" text="We are the best ladies heel producer" />
     <AboutContent/>
     <Footer/>
    </div>
  )
}

export default About