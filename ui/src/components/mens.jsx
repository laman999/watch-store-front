import React from 'react'
import { Link } from 'react-router-dom'

function Mens() {
  return (
    <section className='p-2 '>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 '>
        <div className='relative overflow-hidden group h-[75vh]'>
          <Link to="/men">
            <img 
              src="/video/men--watch.jpg" 
              alt="men collection" 
              className='w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105'
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-700"></div>
          </Link>
          
          <div className='absolute bottom-12 left-12 text-white'>
            <p className='text-[#D4AF37] text-[10px] tracking-[0.5em] uppercase mb-3 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0'>
              The Gentleman
            </p>
            <h2 className='text-3xl md:text-4xl font-serif italic tracking-widest uppercase mb-6'> 
              Men's watches 
            </h2>
            <Link 
              to="/men" 
              className='inline-block text-[11px] uppercase tracking-[0.3em] border-b border-[#D4AF37] pb-1 hover:text-[#D4AF37] transition-colors duration-300'
            >
              Discover
            </Link>
          </div>
        </div>
        <div className='relative overflow-hidden group h-[75vh]'>
          <Link to="/women">
            <img 
              src="/video/women-watch.jpg" 
              alt="women collection" 
              className='w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105'
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-700"></div>
          </Link>
          
          <div className='absolute bottom-12 left-12 text-white'>
            <p className='text-[#D4AF37] text-[10px] tracking-[0.5em] uppercase mb-3 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0'>
              The Lady
            </p>
            <h2 className='text-3xl md:text-4xl font-serif italic tracking-widest uppercase mb-6'> 
              Women's watches 
            </h2>
            <Link 
              to="/women" 
              className='inline-block text-[11px] uppercase tracking-[0.3em] border-b border-[#D4AF37] pb-1 hover:text-[#D4AF37] transition-colors duration-300'
            >
              Discover
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Mens
