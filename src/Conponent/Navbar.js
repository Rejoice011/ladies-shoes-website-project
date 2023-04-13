import './Navbar.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from '../asset/logo.png'

const Navbar = () => {
    const[click,setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const[color,setColor] = useState(false)
    const changeColor = () =>{
      if (window.scrollY >=1){
        setColor(true)
      }else{
        setColor(false)
      }
    }
    window.addEventListener('scroll',changeColor)
  return (
    <div className={color?'header header-bg' :'header'}>
        <Link to='/'>
          <img  src={logo} alt='shoe' width='70%'></img>
             
        </Link>
        <ul className={ click ? 'nav-manu active': 'nav-manu'}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/product'>Product</Link>
          </li>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/booking'>Booking</Link>
          </li>  

        </ul>
         <div className='hamburger' onClick={handleClick}>
          {click?(

          
          <FaTimes size={20} style={{color: "#fff"}}/>
          ):(
          <FaBars size={20} style={{color: "#fff"}}/>
           )}
         </div>
    </div>
  )
}

export default Navbar

