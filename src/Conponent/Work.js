import './Workcarddata.css'
import Workcard from './Workcard'
import  Workcarddata from './Workcarddata'
import React from 'react'



const Work = () => {
  return( <div className='work-container'>
    <h1 className='product-heading'>products</h1>
    <div className='product-container'>
       
           { Workcarddata.map((val,ind) => {    
           return(
              <Workcard
              key={ind}
              imgsrc={val.imgsrc}
              tittle={val.tittle}
              text={val.text}
              view={val.view}
              
              />
            
           );
            
           
           })}
              
         </div>
     </div>



    
 
     
    
  )  
}

export default Work