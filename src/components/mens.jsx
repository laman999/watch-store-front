import React from 'react'
import { Link } from 'react-router'

function Mens() {
  return (
    <>
      <div className='mb-[15px] relative'>
        <Link to="/men" >
                <img src="/video/men--watch.jpg" alt="collaction" className='w-full cursor-pointer object-cover h-[450px] overflow-hidden transition-transform duration-700 hover:scale-102'/>

        </Link>
        <div className='absolute bottom-10 left-10 text-white'>
            <h2 className=' text-3xl font-bold mb-4 uppercase'> Men's watches </h2>
            <Link to="/men"  className='font-bold mb-4 uppercase underline pb-1 text-[15px] hover:text-amber-400 transition'>Discover </Link>
        </div>
      </div>
    </>
  )
}

export default Mens
