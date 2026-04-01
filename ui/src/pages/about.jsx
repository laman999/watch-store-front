import React from 'react'
import { Helmet } from 'react-helmet';
import { IoSettingsOutline } from "react-icons/io5";
import { FiAward } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";


function About() {
  return (
    <>
   <Helmet>
    <title>About</title>
   </Helmet>
                                     {/* 1 */}
      <div className='bg-black min-h-screen'>
        <section className='text-center py-32 px-6 text-white'>
          <h2 className='text-[#D4AF37] md:text-[15px] text-[12px] uppercase tracking-[8px] font-bold mb-6'>the art of horology</h2>
          <h1 className='text-5xl md:text-8xl font-serif italic mb-10 font-serif'>Timeless <span className='not-italic text-gray-400'>Precsicion</span></h1>
          <p className='text-gray-500 text-lg md:text-xl leading-relaxed font-light text-sm font-serif'>Since 2015, we have been crafting more than just watches. We create <br /> instruments of time that define who you are.</p>
        </section>
                                         {/* 2 */}
          <section className='py-24 bg-[#0f0f0f]'>
              <div className=' grid md:grid-cols-3  text-white p-[25px] gap-[20px]'>
                 <div className='border border-gray-800 border-[1px] border-solid p-[20px] group hover:border-[#D4AF37]/50 transition-all duration-500'>
                    <IoSettingsOutline className='text-4xl text-[#D4AF37] mb-6 group-hover:rotate-90 transition-transform duration-700' />
                    <h3 className='uppercase font-bold text-xl mb-4 tracking-widest'>the movement</h3>
                    <p className='text-gray-600 tracking-tight text-sm font-bold leading-6'>Equipped with Swiss-made automatic <br />movements, ensuring accuracy to the <br /> millisecond.</p>
                 </div>
                 <div className='border border-gray-800 border-[1px] border-solid p-[20px] group hover:border-[#D4AF37]/50 transition-all duration-500'>
                    <FiAward className='text-4xl text-[#D4AF37] mb-6 group-hover:scale-[1.1] transition-transform duration-700'/>
                    <h3 className='uppercase font-bold text-xl mb-4 tracking-widest'>18K Gold Case</h3>
                    <p className='text-gray-600 tracking-tight text-sm font-bold leading-6'>Our cases are forged from solid 18k gold and <br />high-grade surgical steel for a lifetime glow.</p>
                 </div>
                 <div className='border border-gray-800 border-[1px] border-solid p-[20px] group hover:border-[#D4AF37]/50 transition-all duration-500'>
                  <FaRegClock  className='text-4xl text-[#D4AF37] mb-6 group-hover:text-amber-200 transition-transform duration-700' />
                    <h3 className='uppercase font-bold text-xl mb-4 tracking-widest'>Heritage Design</h3>
                    <p className='text-gray-600 tracking-tight text-sm font-bold leading-6'>Merging vintage aesthetics with modern <br />durability. A watch for generations.</p>
                 </div>
              </div>
          </section>

                                              {/* 3 */}
           <section className='text-white p-[20px]'>
            <div className='grid md:grid-cols-2 gap-20 items-center mx-auto max-w-7xl px-6 mb-[15px] mt-[15px]'>
              <div className='relative'>
              <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] border-[1px] border-[#D4AF37]/20 rounded-full flex items-center justify-center relative">
               <div className="absolute w-[90%] h-[90%] border border-[#D4AF37]/10 rounded-full"></div>
               <div className="absolute w-[1px] h-32 bg-[#D4AF37] origin-bottom -rotate-45 top-12 left-1/2"></div> 
               <div className="absolute w-[1px] h-40 bg-white/40 origin-bottom rotate-12 top-4 left-1/2"></div>
               <div className="text-center z-10">
                  <span className="text-5xl font-serif italic text-white/20 uppercase tracking-[20px]">Luxury</span>
               </div>
               </div>
              </div>
              <div>
               <h2 className='italic font-bold text-[35px] mb-4 font-serif'>Every Second is a <span className='text-[#D4AF37]'>Statement</span></h2>
              <p className=' text-gray-400 leading-relaxed italic border-l-2 border-[#D4AF37] pl-6 mb-[50px]'>"A watch tells the time, but a luxury timepiece tells your story. We focus on the details that others ignore."</p>
              <ul className='uppercase text-[14px] text-gray-500 font-bold flex flex-col gap-[15px]'>
                <li className=' flex flex-row items-center gap-[10px]'><FiCheckCircle className='text-[#D4AF37]' /> <span>sapphire crystal glass</span></li>
                <li className=' flex flex-row items-center gap-[10px]'> <FiCheckCircle className='text-[#D4AF37]'/> <span>5 atm water resistant</span></li>
                <li className=' flex flex-row items-center gap-[10px]'><FiCheckCircle className='text-[#D4AF37]'/>  <span>genuine italian leather</span></li>
                <li className=' flex flex-row items-center gap-[10px]'><FiCheckCircle className='text-[#D4AF37]'/>  <span>2 Year Warranty</span></li>
              </ul>
              </div>
            </div>
           </section>
          

                                        {/* 4 */}
          <section className="relative h-[400px] md:h-[500px] bg-[#0f0f0f] flex items-center justify-center border-y  ">
    
      <div className="absolute top-0 left-1/2  w-[1px] h-full bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent rotate-[15deg] md:rotate-[25deg]"></div>
      <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-2 h-full">
        <div className="flex flex-col items-center justify-center text-center group cursor-pointer">
          <span className="text-[#D4AF37] text-[9px] tracking-[7px] uppercase mb-4 opacity-50 group-hover:opacity-100">
            Masculine
          </span>
          <h2 className="text-4xl md:text-7xl font-serif italic text-white group-hover:scale-105 transition-transform duration-700">
            Strength
          </h2>
          <div className="mt-8 w-0 h-[1px] bg-[#D4AF37] group-hover:w-20 transition-all duration-500"></div>
        </div>

        <div className="flex flex-col items-center justify-center text-center group cursor-pointer">
          <span className="text-[#D4AF37] text-[9px] tracking-[7px] uppercase mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
            Feminine
          </span>
          <h2 className="text-4xl md:text-7xl font-serif italic text-white group-hover:scale-105 transition-transform duration-700">
            Elegance
          </h2>
          <div className="mt-8 w-0 h-[1px] bg-[#D4AF37] group-hover:w-20 transition-all duration-500"></div>
        </div>

      </div>
    </section>
      </div>
    </>
  )
}

export default About
