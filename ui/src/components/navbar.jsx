import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoIosLogOut } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import { LuShoppingBag } from "react-icons/lu";
import { AiOutlineLike } from "react-icons/ai";
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  let id = localStorage.getItem("id");

  const handleLangChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const signOut = () => {
    localStorage.removeItem("id");
    window.location.reload();
  };

  return (
    <nav className='bg-black text-amber-300 p-3 md:p-4 flex justify-between items-center shadow-lg  top-0 z-[100] border-b border-amber-900/20'>
      
      <div className='flex items-center flex-shrink-0'>
        <Link to="/">
          <img 
            src="https://i.pinimg.com/736x/07/dd/10/07dd10b15db85dc2f694cd985c556a19.jpg" 
            alt="logo" 
            className='w-[100px] md:w-[140px] h-auto object-cover' 
          />
        </Link>
      </div>

      <div className='hidden md:flex items-center space-x-8 font-medium'>
        <NavLink to="/" className='transition uppercase tracking-[0.2em] text-[11px] hover:text-white'>{t('home')}</NavLink>
        <NavLink to="/men" className='transition uppercase tracking-[0.2em] text-[11px] hover:text-white'>{t('men')}</NavLink>
        <NavLink to="/women" className='transition uppercase tracking-[0.2em] text-[11px] hover:text-white'>{t('women')}</NavLink>
        <NavLink to="/about" className='transition uppercase tracking-[0.2em] text-[11px] hover:text-white'>{t('about')}</NavLink>
        <NavLink to="/contact" className='transition uppercase tracking-[0.2em] text-[11px] hover:text-white'>{t('contact')}</NavLink>
      </div>

      <div className='flex items-center gap-2 md:gap-6'>
        
        <select 
          value={i18n.language} 
          onChange={handleLangChange}
          className="bg-transparent text-amber-300 text-[11px] font-bold outline-none cursor-pointer border-none focus:ring-0"
        >
          <option value="az" className="bg-black text-white">AZ</option>
          <option value="en" className="bg-black text-white">EN</option>
          <option value="ru" className="bg-black text-white">RU</option>
        </select>

        <div className='flex items-center gap-3 md:gap-4 border-l border-white/10 pl-3 md:pl-6'>
          <Link to="/cart" className='text-[20px] hover:scale-110 transition'><LuShoppingBag /></Link>
          
          <Link to="/favorites" className='text-[20px] hover:scale-110 transition'><AiOutlineLike /></Link>
          
          {id ? (
            <button onClick={signOut} className='text-[20px] hover:text-red-500 transition'><IoIosLogOut /></button>
          ) : (
            <Link to="/login" className='text-[20px] hover:scale-110 transition'><CiLogin /></Link>
          )}
        </div>
          
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className='md:hidden text-2xl ml-2'
        >
          {isOpen ? '✕' : '☰'} 
        </button>
      </div>

      <div className={`
        absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-t border-amber-900/30 p-6 flex flex-col gap-6 md:hidden transition-all duration-300
        ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-5'}
      `}>
        <NavLink to="/" onClick={() => setIsOpen(false)} className='text-center uppercase tracking-widest text-sm py-2 border-b border-white/5'>{t('home')}</NavLink>
        <NavLink to="/men" onClick={() => setIsOpen(false)} className='text-center uppercase tracking-widest text-sm py-2 border-b border-white/5'>{t('men')}</NavLink>
        <NavLink to="/women" onClick={() => setIsOpen(false)} className='text-center uppercase tracking-widest text-sm py-2 border-b border-white/5'>{t('women')}</NavLink>
        <NavLink to="/about" onClick={() => setIsOpen(false)} className='text-center uppercase tracking-widest text-sm py-2 border-b border-white/5'>{t('about')}</NavLink>
        <NavLink to="/contact" onClick={() => setIsOpen(false)} className='text-center uppercase tracking-widest text-sm py-2'>{t('contact')}</NavLink>
      </div>
      
    </nav>
  )
}

export default Navbar