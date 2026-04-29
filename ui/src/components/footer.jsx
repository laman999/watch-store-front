import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <footer className='bg-black dark:bg-white w-full p-[45px] pt-16 pb-12  transition-colors duration-500'>
        <div className='container grid grid-cols-1 md:grid-cols-5 gap-12 text-white mx-auto'>
           
           <div className='flex flex-col gap-[8px]'>
            <h2 className='uppercase md:text-[14px] text-[12px] mb-[10px] font-bold dark:text-black'>Timeless</h2>
            <p className='text-gray-400 text-[13px]'>{t('footer_about')}</p>
           </div>

           <div className='flex flex-col gap-[8px]'>
            <h4 className="md:text-[14px] text-[12px] font-bold uppercase mb-[10px] text-white dark:text-black">{t('footer_collections')}</h4>
            <ul className="md:text-[14px] text-[12px] text-gray-400 flex flex-col gap-[8px]">
              <li><Link to="/men" className="hover:text-[#D4AF37] transition duration-300">{t('men')}</Link></li>
              <li><Link to="/women" className="hover:text-[#D4AF37] transition duration-300">{t('women')}</Link></li>
              <li><Link to="/about" className="hover:text-[#D4AF37] transition duration-300">{t('about')}</Link></li>
              <li className='hover:text-[#D4AF37] transition duration-300 cursor-pointer'>{t('bestseller')}</li>
              <li><Link to="/contact" className="hover:text-[#D4AF37] transition duration-300">{t('contact')}</Link></li>
            </ul>
          </div>

          <div className='flex flex-col gap-[8px]'>
            <h4 className="md:text-[14px] text-[12px] font-bold uppercase mb-[10px] text-white dark:text-black">{t('footer_support')}</h4>
            <ul className="md:text-[14px] text-[12px] text-gray-400 flex flex-col gap-[8px]">
              <li className="hover:text-[#D4AF37] transition duration-300 cursor-pointer">{t('shipping_returns')}</li>
              <li className='hover:text-[#D4AF37] transition duration-300 cursor-pointer'>{t('new')}</li>
              <li className='hover:text-[#D4AF37] transition duration-300 cursor-pointer'>{t('faq')}</li>
              <li className='hover:text-[#D4AF37] transition duration-300 cursor-pointer'>{t('privacy')}</li>
            </ul>
          </div>

          <div>
            <h4 className="md:text-[14px] text-[12px] font-bold uppercase mb-6 text-white dark:text-black">{t('footer_inspired')}</h4>
            <p className="md:text-[13px] text-[11px] text-gray-500 ">{t('footer_subscribe_text')}</p>
            <div className="flex border-b border-gray-700 pb-2 mt-[8px]">
              <input 
                type="email" 
                placeholder={t('footer_placeholder')} 
                className="bg-transparent border-none outline-none text-[13px] w-full placeholder:text-gray-600 text-white"
              />
              <button className="text-[#D4AF37] text-[14px] font-bold uppercase ml-2 hover:text-white transition duration-300">
                {t('footer_join')}
              </button>
            </div>
          </div>
          <div className="md:col-span-5 border-t border-gray-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-8 text-gray-500 dark:text-orange-300">
              <FaInstagram size={22} className="hover:text-[#D4AF37] cursor-pointer transition duration-300" />
              <FaFacebookF size={22} className="hover:text-[#D4AF37] cursor-pointer transition duration-300" />
              <FaTwitter size={22} className="hover:text-[#D4AF37] cursor-pointer transition duration-300" />
              <FaYoutube size={22} className="hover:text-[#D4AF37] cursor-pointer transition duration-300" />
            </div>
            <p className="md:text-[11px] text-[9px] text-gray-600 uppercase tracking-widest">
                {t('footer_rights')}
            </p>
          </div>
          
        </div>
      </footer>
    </>
  )
}

export default Footer