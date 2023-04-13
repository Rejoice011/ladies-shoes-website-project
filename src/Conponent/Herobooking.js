import './Herobooking.css'


import React from 'react';

class Herobooking extends Component  {

    render() {
    return (
    <div className='hero-img'>
      <div className='heading'>
         <h1>
          {this.props.heading}</h1> 
        <p>{this.prop.text}</p>
        </div>
      </div>
    );
    }
  }
  
  export default Herobooking