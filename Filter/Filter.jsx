  
  
  
  
  
  import nature from './assets/Nature.jpg'

  import React from 'react'
  
  const Filter = () => {
    return (

        
  <div>




      <h1 className='blur-xs'>Blur Image</h1>
      <img src={nature} />
      <img className='blur' src={nature} />
      <img className='blur-xs' src={nature} />
      <img className='blur-md' src={nature} />
      <img className='blur-xl' src={nature} />


      <div>
        <h1>Brightness</h1>


        <img className='brightness-50' src={nature}></img>
        <img className='brightness-100' src={nature}></img>
        <img className='brightness-200' src={nature}></img>
        <img className='brightness-40' src={nature}></img>
      </div>


   <div>
        <h1>Brightness</h1>


        <img className='contrast-0' src={nature}></img>
             <img className='contrast-50' src={nature}></img>
        <img className='contrast-100' src={nature}></img>
        <img className='contrast-200' src={nature}></img>
        <img className='contrasts-40' src={nature}></img>
      </div>

  
    </div>
    
    )
  }
  
  export default Filter
  