import React from 'react'
import nature from './assets/Nature.jpg'
const Columns = () => {
  return (

        <div>
     <div className='columns-2'>
    <h1 className='bg-red-400'>Heading-1</h1>
    <h1 className='bg-green-100'>Heading-2</h1>
    <h1 className='bg-blue-400'>Heading-3</h1>
    
    
    
     </div>
      <div className='columns-2'>
    <h1 className='bg-red-400'>Heading-1</h1>
    <h1 className='bg-green-100'>Heading-2</h1>
    <h1 className='bg-blue-400'>Heading-3</h1>
    <h1 className='bg-red-400'>Heading-4</h1>
    <h1 className='bg-green-100'>Heading-5</h1>
    <h1 className='bg-blue-400'>Heading-6</h1>
    
     </div>
    
     <div className='columns-1 gap-0 lg:columns-4 md:columns-3 sm:columns-2'>
    
    <img src={nature}></img>
    <img src={nature}></img>
    <img src={nature}></img>
    
    <img src={nature}></img>
    
    <img src={nature}></img>
    <img src={nature}></img>
    <img src={nature}></img>
    
    <img src={nature}></img>
     </div>
     </div>
  )
}

export default Columns