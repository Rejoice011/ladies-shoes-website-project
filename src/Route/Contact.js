
import React from 'react'
import Navbar from '../Conponent/Navbar'
import Footer from '../Conponent/Footer'
import Heroimage from '../Conponent/Heroimage'
import Form from '../Conponent/Form'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroimage heading="CONTACT" text="Lets have a chat"/>
      <Form/>

      <Footer/>
    </div>
  )
}

export default Contact