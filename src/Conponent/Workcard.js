import './Workcarddata.css'
import React from 'react'
import { NavLink } from 'react-router-dom'



const Workcard = (props) => {
        return(
        <div className='product-card'>
            <img src={props.imgsrc} alt='fhome'/>
            <h2 className='product-title'>{props.tittle}</h2>
            <div className='pro-details'>
              < p>{props.text}</ p>
              <div className='prb-btns'>
                <NavLink to={props.view} 
                className='btn'>View
                </NavLink>
                <NavLink to='url.com' 
                className='btn'>Source
                </NavLink>

              
         </div>
     </div>
  </div>

 

 
     
   )  
  
}

export default Workcard