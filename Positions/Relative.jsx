import React from 'react'

const Relative = () => {
    return (


        <div>

            <h1>Position with Tailwind -Relative</h1>






            <div className='bg-red-700 size-100 relative'>

                <div className='bg-red-500 size-25 absolute  top-0 right-0'>

                </div>

                <div className='bg-green-500 size-25 absolute  bottom-0 right-0'>

                </div>


                <div className='bg-blue-500 size-25 absolute  bottom-0 left-0'>

                </div>



                <div className='bg-black size-25 absolute  top-0 left-0'>

                </div>


            </div>

        </div>
    )
}

export default Relative