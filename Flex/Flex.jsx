import React from 'react'

const Flex = () => {
  return (
    
        <div>
      <div className='bg-gray-200 flex flex-col-reverse'>
        <div className='bg-red-300 size-20'></div>
        <div className='bg-blue-300 size-20'></div>
        <div className='bg-orange-300 size-20'></div>
        <div className='bg-yellow-300 size-20'></div>
      </div>

<br></br>



     <div className='bg-gray-200 flex items-center justify-center'>
        <div className='bg-red-300 size-20'></div>
        <div className='bg-blue-300 size-20'></div>
        <div className='bg-orange-300 size-20'></div>
        <div className='bg-yellow-300 size-20'></div>
      </div>

<br></br>
     <div className='bg-gray-200 flex  flex-col items-center'>
        <div className='bg-red-300 size-20'></div>
        <div className='bg-blue-300 size-20'></div>
        <div className='bg-orange-300 size-20'></div>
        <div className='bg-yellow-300 size-20'></div>
      </div>


</div>

  )
}

export default Flex