import React from 'react'
import { Helmet } from 'react-helmet';
import { IoSettingsOutline } from "react-icons/io5";
import { FiAward } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { useTranslation } from 'react-i18next'; 

function About() {
  const { t } = useTranslation(); 
  return (
    <>
      <Helmet>
        <title>{t('about_helmet')}</title>
      </Helmet>

      <div className='bg-black min-h-screen'>
        <section className='text-center py-32 px-6 text-white'>
          <h2 className='text-[#D4AF37] md:text-[15px] text-[12px] uppercase tracking-[8px] font-bold mb-6'>
            {t('art_horology')}
          </h2>
          <h1 className='text-5xl md:text-8xl font-serif italic mb-10'>
            Timeless <span className='not-italic text-gray-400'>Precision</span>
          </h1>
          <p className='text-gray-500 text-lg md:text-xl leading-relaxed font-light font-serif max-w-2xl mx-auto'>
            {t('about_hero_desc')}
          </p>
        </section>
        <section className='py-24 bg-[#0f0f0f]'>
          <div className='container mx-auto grid md:grid-cols-3 text-white p-[25px] gap-[20px]'>
            <div className='border border-gray-800 p-[20px] group hover:border-[#D4AF37]/50 transition-all duration-500'>
              <IoSettingsOutline className='text-4xl text-[#D4AF37] mb-6 group-hover:rotate-90 transition-transform duration-700' />
              <h3 className='uppercase font-bold text-xl mb-4 tracking-widest'>{t('the_movement')}</h3>
              <p className='text-gray-600 text-sm font-bold leading-6'>{t('movement_desc')}</p>
            </div>
            
            <div className='border border-gray-800 p-[20px] group hover:border-[#D4AF37]/50 transition-all duration-500'>
              <FiAward className='text-4xl text-[#D4AF37] mb-6 group-hover:scale-[1.1] transition-transform duration-700'/>
              <h3 className='uppercase font-bold text-xl mb-4 tracking-widest'>{t('gold_case')}</h3>
              <p className='text-gray-600 text-sm font-bold leading-6'>{t('gold_case_desc')}</p>
            </div>

            <div className='border border-gray-800 p-[20px] group hover:border-[#D4AF37]/50 transition-all duration-500'>
              <FaRegClock className='text-4xl text-[#D4AF37] mb-6 group-hover:text-amber-200 transition-transform duration-700' />
              <h3 className='uppercase font-bold text-xl mb-4 tracking-widest'>{t('heritage_design')}</h3>
              <p className='text-gray-600 text-sm font-bold leading-6'>{t('heritage_design_desc')}</p>
            </div>
          </div>
        </section>
        <section className='text-white p-[20px]'>
          <div className='grid md:grid-cols-2 gap-20 items-center mx-auto max-w-7xl px-6 my-15'>
            <div className='relative flex justify-center'>
              <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-[#D4AF37]/20 rounded-full flex items-center justify-center relative">
                <div className="absolute w-[90%] h-[90%] border border-[#D4AF37]/10 rounded-full"></div>
                <div className="text-center z-10">
                  <span className="text-5xl font-serif italic text-white/20 uppercase tracking-[20px]">{t('luxury')}</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className='italic font-bold text-[35px] mb-4 font-serif'>
                Every Second is a <span className='text-[#D4AF37]'>Statement</span>
              </h2>
              <p className='text-gray-400 leading-relaxed italic border-l-2 border-[#D4AF37] pl-6 mb-[50px]'>
                "{t('quote')}"
              </p>
              <ul className='uppercase text-[14px] text-gray-500 font-bold flex flex-col gap-[15px]'>
                <li className='flex items-center gap-[10px]'><FiCheckCircle className='text-[#D4AF37]' /> <span>{t('sapphire')}</span></li>
                <li className='flex items-center gap-[10px]'><FiCheckCircle className='text-[#D4AF37]' /> <span>{t('water_resistant')}</span></li>
                <li className='flex items-center gap-[10px]'><FiCheckCircle className='text-[#D4AF37]' /> <span>{t('leather')}</span></li>
                <li className='flex items-center gap-[10px]'><FiCheckCircle className='text-[#D4AF37]' /> <span>{t('warranty')}</span></li>
              </ul>
            </div>
          </div>
        </section>
        <section className="relative h-[400px] md:h-[500px] bg-[#0f0f0f] flex items-center justify-center border-y">
          <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-2 h-full">
            <div className="flex flex-col items-center justify-center text-center group cursor-pointer">
              <span className="text-[#D4AF37] text-[9px] tracking-[7px] uppercase mb-4 opacity-50 group-hover:opacity-100">
                {t('masculine')}
              </span>
              <h2 className="text-4xl md:text-7xl font-serif italic text-white group-hover:scale-105 transition-transform duration-700">
                {t('strength')}
              </h2>
              <div className="mt-8 w-0 h-[1px] bg-[#D4AF37] group-hover:w-20 transition-all duration-500"></div>
            </div>

            <div className="flex flex-col items-center justify-center text-center group cursor-pointer">
              <span className="text-[#D4AF37] text-[9px] tracking-[7px] uppercase mb-4 opacity-50 group-hover:opacity-100">
                {t('feminine')}
              </span>
              <h2 className="text-4xl md:text-7xl font-serif italic text-white group-hover:scale-105 transition-transform duration-700">
                {t('elegance')}
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