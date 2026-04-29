import React from 'react'
import { useTranslation } from 'react-i18next'

function Royalgold() {
  const { t } = useTranslation();
  return (
    <div>
      <section className=" border-y border-gray-300 bg-black dark:bg-white text-white">
        <div className='container grid grid-cols-1 md:grid-cols-3 gap-10 text-center px-6 py-20 mx-auto'>
           <div>
             <p className='font-serif text-4xl text-gold mb-2 text-orange-300'>1923</p>
             <p className='text-xs tracking-widest uppercase dark:text-black'>{t('founded')}</p>
           </div>
           <div>
             <p className='font-serif text-4xl text-gold mb-2 text-orange-300'>100+</p>
             <p className='text-xs tracking-widest uppercase dark:text-black'>{t('mastery')}</p>
           </div>
           <div>
             <p className='font-serif text-4xl text-gold mb-2 text-orange-300'>{t('swiss')}</p>
             <p className='text-xs tracking-widest uppercase dark:text-black'>{t('made_hand')}</p>
           </div>
        </div>
      </section>
    </div>
  )
}

export default Royalgold






















