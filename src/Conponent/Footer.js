import './Footer.css';
import{FaHome,FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa'


import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
           <div className='left'>
           <div className='location'>
           <FaHome size={20}  style={{color:'#fff',
        marginRight:'2rem'}}/>
        </div>
        <div>
            <p>123 House society</p>
            <p>Bangllaesh</p>
        </div>
        <div className='phone'>
            <h4> 
            <FaPhone size={20} style={{color:'#fff',
             marginRight:'2rem'}}/>
            +234-80244-04261|</h4>
                <div className='email'> 
                <h4>
            <FaMailBulk size={20} style={{color:'#fff',
             marginRight:'2rem'}}/>Info@gmail.co</h4>
            </div>
            </div>
        </div>
           <div className='right'>
            <h4>About the company</h4>
            <p>This is me Onyeme Rejoice. CEO & Founder of JOIXY. 
                I enjoy discussing new business ideas.</p>
                <div className='social'>
                
            <FaFacebook size={30} style={{color:'#fff',
             marginRight:'1rem'}}/>
        
            <FaTwitter 
            size={30}
             style={{color:'#fff',
             marginRight:'1rem'}}/>
            
            <FaLinkedin 
            size={30}
             style={{color:'#fff',
             marginRight:'1rem'}}/>
            
                </div>
            </div> 
        </div>
      
    </div>
  )
}
export default Footer