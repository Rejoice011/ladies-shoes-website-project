import { Link } from 'react-router-dom'
import './AboutContent.css'
import about1 from '../asset/about3.webp'
import about2 from '../asset/about1.webp'
import React from 'react'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1> Who Am I</h1>
            <p>JOIXY is a Premium fashion retail brand that serves as the recommended 
                source of Premium items that empower our customers to express their life aspirations and accomplishments through fashion.
                 audacious, confident and stylish. Simply put, our brand purpose is to inspire a society where people feel accomplished,
                  confident, recognized and are more ambitious..</p >
 <Link to='/contact'>
    <button className='btn'>Contact</button>
 </Link>
 </div>
         <div className='right'>
          <div className='img-container'>
            <div className='img-stack top'>
                <img src={about1}alt='true' className='img'></img>
                <div className='img-stack bottom'>
                <img src={about2}alt='true' className='img'></img>
            </div>
            </div>
          </div>
       </div> 
    </div>
      
    
  )
}

export default AboutContent