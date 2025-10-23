import React from 'react'

const H1 = () => {
  return (

     <div>
      <h1 className='bg-green-500'> Hello world</h1>
      <h1 className='bg-green-300 h-30'> Hello world</h1>

      <div class="bg-gray-300 h-[400px]">
        <div class="h-full bg-green-400">h-full (fills 400px)</div>
      </div>


      <div class="h-screen bg-blue-400">h-screen (fills your entire screen)</div>


      {/* ✅ The first green box = same height as its parent (400px).
✅ The blue box = fills your whole visible browser height. */}


      <div class="h-[300px] bg-gray-200">
        <div class="h-screen bg-blue-400"></div>
      </div>
    </div>
  )
}

export default H1