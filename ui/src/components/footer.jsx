import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router';
function Footer() {
  return (
    <>
      <footer className='bg-black w-full p-[45px] pt-16 pb-12'>
        <div className='container grid grid-cols-1 md:grid-cols-5 gap-12 text-white'>
           <div className='flex flex-col gap-[8px]'>
            <h2 className='uppercase md:text-[14px] text-[12px] mb-[10px] font-bold'>Timeless</h2>
            <p className= 'text-gray-400 text-[13px]'> Since 2015, we have been crafting exceptional timepieces with a pioneering spirit. The ultimate destination for quality and elegance.</p>
           </div>
           <div className='flex flex-col gap-[8px]'>
          <h4 className="md:text-[14px] text-[12px] font-bold uppercase  mb-[10px] text-white">Collections</h4>
          <ul className="md:text-[14px] text-[12px] text-gray-400 flex flex-col gap-[8px]">
            <li><Link to="/men" className="hover:text-[#D4AF37] transition duration-300">Men's Watches</Link></li>
            <li><Link to="/women" className="hover:text-[#D4AF37] transition duration-300">Women's Watches
</Link></li>
            <li><Link to="/about" className="hover:text-[#D4AF37] transition duration-300">About</Link></li>

            <li className='hover:text-[#D4AF37] transition duration-300'>Bestsellers</li>
            <li><Link to="/contact" className="hover:text-[#D4AF37] transition duration-300">Contact Us</Link></li>
          </ul>
        </div>

        

        <div className='flex flex-col gap-[8px]'>
          <h4 className="md:text-[14px] text-[12px] font-bold uppercase  mb-[10px] text-white">Support</h4>
          <ul className="md:text-[14px] text-[12px] text-gray-400 flex flex-col gap-[8px]">
            <li className="hover:text-[#D4AF37] transition duration-300">Shipping & Returns</li>
            <li className='hover:text-[#D4AF37] transition duration-300'>New Arrivals</li>
            <li className='hover:text-[#D4AF37] transition duration-300'>FAQ</li>
            <li className='hover:text-[#D4AF37] transition duration-300'>Privacy Policy</li>
          </ul>
        </div>

       <div>
          <h4 className="md:text-[14px] text-[12px] font-bold uppercase  mb-6 text-white">Stay Inspired</h4>
          <p className="md:text-[13px] text-[11px] text-gray-500 ">Be the first to hear about our new collections and exclusive offers.</p>
          <div className="flex border-b border-gray-700 pb-2 mt-[8px]">
            <input 
              type="email" 
              placeholder="Your email address" 
              className=" border-none outline-none text-[13px] w-full placeholder:text-gray-600"
            />
            <button className="text-[#D4AF37] text-[14px] font-bold uppercase  ml-2 hover:text-white transition duration-300">Join</button>
          </div>
        </div>

 <div className=" px-6 mt-16 pt-8  border-white flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-8 text-gray-500">
          <FaInstagram size={22} className="hover:text-[#D4AF37] cursor-pointer transition duration-300" />
          <FaFacebookF size={22} className="hover:text-[#D4AF37] cursor-pointer transitio duration-300" />
          <FaTwitter size={22} className="hover:text-[#D4AF37] cursor-pointer transition duration-300" />
          <FaYoutube size={22} className="hover:text-[#D4AF37] cursor-pointer transition duration-300" />
        </div>
        <p className="md:text-[11px] text-[9px] text-gray-600  ">
           Timeless Watches. All Rights Reserved.
        </p>
      </div>
    
      
        </div>
      </footer>
    </>
  )
}

export default Footer
