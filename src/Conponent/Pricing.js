import { Link } from 'react-router-dom'
import './Pricing.css'


import React from 'react'

const Pricing = () => {
  return  <div className='Pricing'>
      <div className='card-container'>
       <div className='card'>
        <h3> lower quality  </h3>
         <span className='bar'></span>
         <p className='btc'> $ 100</p>
         <p>Sizes of shoes</p>
         <p>size 37</p>
         <p> size 38 </p>
         <p>size 39 </p>
         <Link to='/contact' className='btn'> 
          PURCHASE NOW
          </Link>
       </div>
       <div className='card'>
        <h3>medum quality </h3>
         <span className='bar'></span>
         <p className='btc'> $200 </p>
         <p>Sizes of shoes</p>
         <p>size 37</p>
         <p>size 38</p>
         <p>size 39 </p>
         <Link to='/contact' className='btn'> 
          PURCHASE NOW
          </Link>
       </div>

       <div className='card'>
        <h3>Best quality</h3>
         <span className='bar'></span>
         <p className='btc'> $ 450</p>
         <p>Sizes of shoes</p>
         <p>size 37</p>
         <p> size 38</p>
         <p> size 39 </p>
         <Link to='/contact' className='btn'> 
          PURCHASE NOW
          </Link>
       </div>
      </div>
    </div>
  
}

export default Pricing