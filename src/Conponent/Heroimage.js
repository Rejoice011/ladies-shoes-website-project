import './Heroimage.css'

import React, { Component } from 'react'
// import first from '../asset/firsthome.webp'

class Heroimage extends Component  {

  render() {
  return (
  <div className='hero-img'>
    <div className='heading'>
       <h1>
        {this.props.heading}</h1> 
      <p>{this.props.text}</p>
      </div>
      {/* <ima src={first} alt="image"></ima> */}
    </div>
  );
  }
}

export default Heroimage