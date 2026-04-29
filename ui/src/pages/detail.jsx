import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Detail() {
    const { t } = useTranslation();
  const { id } = useParams(); 
  const [watch, setWatch] = useState(null);
  useEffect(() =>{
    fetch(`http://localhost:3000/products/${id}`)
    .then(res=>res.json())
    .then(data=>setWatch(data));
  }, [id]);
  if(!watch) return
<div className='text-white text-center pt-40'> Yüklənir...</div>


  return (
    <div className="min-h-screen bg-black dark:bg-white  text-white pt-40 px-10 transition-colors duration-500">
        <div className='grid grid-col-1 md:grid-cols-2 gap-20 mx-auto max-w-6xl  gap-20'>
            <div className='bg-zinc-900 dark:bg-white transition-colors duration-500 dark:shadow-2xl dark:border-orange-300 flex justify-center border border-zinc-800 p-10 mb-[50px]'>
                <img src={watch.image} alt={watch.name} className='h-auto w-full object-contain' />
            </div>
            <div className='flex flex-col justify-center'>
                 <h1 className='italic mb-4 text-5xl font-serif dark:text-black'>{watch.name}</h1> 
                 <p className='text-3xl mb-8 font-bold text-[#D4AF37]'>${watch.price}</p>
                 <div className='border-t border-zinc-800 pt-8 space-y-6'>
                    <p className='text-zinc-400 italic leading-relaxed'> {t('desc_men')}</p>
                    <button className='uppercase w-full py-4 bg-[#D4AF37] hover:bg-white transition-all text-black tracking-widest font-black cursor-pointer dark:border-orange-300 dark:border-[1px]'>Add To Cart</button>
                 </div>
            </div>
        </div>
    </div>
  );
}

export default Detail;
