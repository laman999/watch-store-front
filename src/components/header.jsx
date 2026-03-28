import React from 'react'

function Header() {
  return (
    <>
  
  <div className="relative h-[80vh] w-full overflow-hidden sm:h-[60vh] md:h-[75vh]">
    
    <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
      <source src='/video/watch.mp4' type="video/mp4" />
    </video>

    
    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent sm:bg-black/40"></div>

   
    <div className="relative z-10 flex items-center h-full px-6 md:px-16 lg:px-32">
      <div className="text-white max-w-xl md:max-w-md">
        
        {/* Başlıq: Mobildə text-4xl ideal görünür */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 drop-shadow-2xl leading-tight ">
          TIMELESS <span  className='elegance'> <br className="hidden sm:block " />  ELEGANCE  </span>
        </h1>
        
        <p className="mb-8 text-base md:text-lg lg:text-xl text-gray-200 drop-shadow-md max-w-sm ">
          <em>Discover premium watches crafted for modern lifestyle.</em>
        </p>

        <button className="bg-amber-400 text-black px-10 py-4 rounded-sm cursor-pointer hover:bg-amber-500 transition-all font-semibold uppercase tracking-widest text-sm md:text-base">
          Shop Now
        </button>

      </div>
    </div>
  </div>
</>
  )
}

export default Header
