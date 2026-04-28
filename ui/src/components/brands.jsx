import React from 'react'
import { useTranslation } from 'react-i18next'

function Brands() {
  const { t } = useTranslation();
  return (
    <>
    <div className='mt-[70px] px-[25px] '>
    <div className='flex justify-between p-[25px] text-center'>
    <h2 className='font-bold text-3xl'>{t('shop_bestsellers')}</h2>
    <div className='text-[15px] '>
     
   </div>
</div>
    </div>
      
    </>
  )
}

export default Brands
