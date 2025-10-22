import React from 'react'
import './App.css'

const App = () => {
  return (
    <div>
      {/* <h1 className='text-white'>Hello world</h1>

      <h3 className='text-yellow-200'>Tailwind</h3>
   
    */}
   
   <ul className='bg-black text-white m-0 flex'>
    <li ><a className=' block p-3  hover:bg-amber-400' href="#home">Home</a></li>
    <li > <a className=' block p-3   hover:bg-amber-400' href="#about">About</a></li>
    <li > <a className=' block p-3  hover:bg-amber-400' href='#contact'>Contact</a></li>
    <li><a  className='block p-3  hover:bg-amber-400'href="blog">Blog</a></li>
   </ul>


{/* This make parent to flex container and all childrens to flex items by default it choose flex-direction row */}


{/* Your hover didn’t work because the <a> tag was inline by default. so make them block */}
  
  

  <ul class="navbar">
  <li><a href="#home">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#blog">Blog</a></li>
</ul>

  
  
  
    </div>
  )
}

export default App