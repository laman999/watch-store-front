import React from 'react'

function Craftsmanship() {
  return (
    <div>
      <section className="py-[50px] px-[25px] bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <h4 className="text-[#D4AF37] uppercase mb-4 tracking-[4px] text-[16px]">Limited Edition</h4>
            <h2 className="text-3xl md:text-[50px] font-serif mb-6 italic">The Royal Gold Series</h2>
            <p className="text-gray-400 mb-8 text-sm md:text-base leading-relaxed">
              Experience the pinnacle of luxury. Our Royal Gold series features an 18k gold-plated case 
              and a genuine leather strap, designed for those who value timeless prestige.
            </p>
            <button className="bg-[#D4AF37] text-black px-10 py-3 uppercase text-[12px] font-bold hover:bg-white transition-all w-full md:w-auto">
              Shop This Model
            </button>
          </div>

          <div className=" flex justify-center order-1 md:order-2 ">
            <img 
              src="/video/crafts.webp" 
              alt="Gold Watch"
              className="rounded-[15px] w-full max-w-[500px] h-auto object-cover grayscale transition duration-700 shadow-2xl" 
            />
          </div>

        </div>
      </section>
    </div>
  )
}

export default Craftsmanship