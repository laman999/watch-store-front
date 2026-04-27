import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoIosLogOut } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import { LuShoppingBag } from "react-icons/lu";
import { AiOutlineLike } from "react-icons/ai";

function Navbar() {
  let id = localStorage.getItem("id")
  const signOut = () =>{
    localStorage.removeItem("id")
  }
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-black text-amber-300 p-4 flex justify-between items-center shadow-lg  relative z-[100]' >
      
      
      <div className='flex items-center '>
        <Link to="/">
          <img 
            src="https://i.pinimg.com/736x/07/dd/10/07dd10b15db85dc2f694cd985c556a19.jpg" 
            alt="logo" 
            className='w-[150px] h-[80px] object-cover' 
          />
        </Link>
      </div>


      <div className='hidden md:flex items-center space-x-8 font-medium list'>
        <NavLink to="/" className=' transition nav-link link'>Home</NavLink>
        <NavLink to="/men" className=' transition nav-link link'>Men</NavLink>
        <NavLink to="/women" className=' transition nav-link link'>Women</NavLink>
        <NavLink to="/about" className='transition nav-link link'>About</NavLink>
        <NavLink to="/contact" className=' transition nav-link  link'>Contact</NavLink>
      </div>

      <div className='flex items-center gap-4'>
        <Link to="/cart" className='text-yellow-300 text-[22px] hover:scale-110 transition'>
        <LuShoppingBag />
        </Link>

        {
          id ? <Link to="/login" onClick={signOut} className='text-yellow-300 text-[22px] hover:scale-110 transition'> 
          <CiLogin />
       </Link> : <Link to="/login" className='text-yellow-300 text-[22px] hover:scale-110 transition'>
         <IoIosLogOut />
       </Link>
        }
        <Link to="" className='text-yellow-300 text-[22px] hover:scale-110 transition'>
        <AiOutlineLike />
       </Link>
          
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className='md:hidden text-3xl focus:outline-none'
        >
          {isOpen ? '✕' : '☰'} 
        </button>
      </div>

      <div className={`
        absolute top-full left-0 w-full bg-black border-t border-amber-900/30 p-6 flex flex-col gap-6 
        transition-all duration-300 ease-in-out md:hidden
        ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-5'}
      `}>
        <NavLink to="/" onClick={() => setIsOpen(false)} className='nav-link text-lg text-center border-b border-white/5 pb-2'>Home</NavLink>
        <NavLink to="/men" onClick={() => setIsOpen(false)} className='nav-link text-lg text-center border-b border-white/5 pb-2'>Men</NavLink>
        <NavLink to="/women" onClick={() => setIsOpen(false)} className='nav-link text-lg text-center border-b border-white/5 pb-2'>Women</NavLink>
        <NavLink to="/about" onClick={() => setIsOpen(false)} className='nav-link text-lg text-center border-b border-white/5 pb-2'>About</NavLink>
        <NavLink to="/contact" onClick={() => setIsOpen(false)} className='nav-link text-lg text-center'>Contact</NavLink>
      </div>
      
    </nav>
  )
}

export default Navbar