import React from 'react'

const Width = () => {
  return (
   
        <div>
      <h1 className='bg-pink-200'> H1Width</h1>
      <div className='bg-pink-500'>DIV WIFTH</div>
      <span className='bg-red-400'>Span Width</span>
      <div className=' bg-amber-400 w-50'> Width</div>
      <div className=' bg-amber-400 max-w-50'> Max Width</div>

      <div className='bg-blue-500 w-full'>FUll Width</div>
      <div className='bg-blue-500 w-1/2'>Haf Width</div>
      <div className='bg-blue-500 w-1/3'>Haf Width</div>

      <div className='bg-blue-500 w-1/4'>Haf Width</div>

      <div className='bg-blue-500 w-1/5'>Haf Width</div>



      <div className='bg-blue-500 w-xs'> Width</div>
      <div className='bg-blue-500 w-xl'> Width</div>
      <div className='bg-blue-500 w-2xl'> Width</div>
      <div className='bg-blue-500 w-3xl'> Width</div>
      <div className='bg-blue-500 w-4xl'> Width</div>
      <div className='bg-blue-500 w-6xl'> Width</div>

<div class="flex gap-2">
  <div class="w-40 bg-blue-400">Fixed width (160px)</div>
  <div class="bg-amber-400">Auto width</div>
</div>


    </div>
  )
}

export default Width