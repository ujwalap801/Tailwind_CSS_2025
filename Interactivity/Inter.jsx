import React from 'react'

const Inter = () => {
  return (

        <div>
      <button className='bg-blue-400 rounded-md text-white m-5 p-2'  >Login</button>

      <button className='bg-blue-400 rounded-md text-white m-5 p-2 hover:bg-amber-100'  >Login</button>

      <button className='bg-blue-400 rounded-md text-white m-5 p-2 focus:bg-amber-100'  >Login</button>

      <button className='bg-blue-400 rounded-md text-white m-5 p-2 active:bg-amber-100'  >Login</button>



      <div>

        <a className='group'>
          <h1 className='group-hover:text-blue-700'>Heading Click</h1>

          <p className='group-hover:text-blue-700'>Hi para</p>
        </a>
      </div>
    </div>
  )
}

export default Inter