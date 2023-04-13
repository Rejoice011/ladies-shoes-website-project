import './Hero.css'
import React from 'react'
import Intoimage from '../asset/bg90.jpg'
import { Link } from 'react-router-dom'
import second from '../asset/second.webp'

const Hero = () => {
  return <div className='hero'>
    <div className='mask'>
      <img className='into-image'
       src={Intoimage} alt='into' />
       </div> 
       <div className='content'>
         <p>Home OF QUALITY HEEL </p> 
       <h1>Welcome to JOIXY</h1>
       


       <div>
       <img className='second' src={second} alt='homes' ></img>
       <Link to='/product' className='btn'>Product</Link>
        <Link to='/contact' className='btn btn-light'>Contact</Link>
    </div>
      <div className='images'></div>
      
     
    </div>
    </div>
  
}

export default Hero