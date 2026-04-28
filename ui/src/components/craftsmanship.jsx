import React from 'react'
import { useTranslation } from 'react-i18next'


function Craftsmanship() {
  const { t } = useTranslation();
    return (
    <div className='bg-[#F9F9F7] py-24 text-black'>
      <div className='mb-[50px] ax-w-5xl text-center p-[20px]' data-aos="fade-up">
         <h2 className='text-[#B8860B] uppercase tracking-[8px]'>{t('art_title')}</h2>
<h1 className='md:text-[45px] font-bold text-[20px] text-[#1a1a1a] mb-[30px] mt-[15px] font-serif'>
            {t('craft_quote').split(t('tradition'))[0]} 
            <span className='italic border-b-[2px] border-[#D4AF37]'>{t('tradition')}</span>
            {t('craft_quote').split(t('tradition'))[1]}
         </h1>
                  <p className='text-gray-600 mb-12 font-light md:text-[21px] text-[15px]'>
            {t('craft_desc')}
         </p>
         <p className='uppercase cursor-pointer text-[13px] tracking-[4px]'><span className='border-b-[2px] border-amber-300'>{t('philosophy')}</span></p>
      </div>
    </div>
  )

}

export default Craftsmanship