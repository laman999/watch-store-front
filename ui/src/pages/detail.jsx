import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; //id goturur
import { useTranslation } from 'react-i18next';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";




function Detail() {
  const navigate = useNavigate()
  const [added, setAdded] = useState(false);
  const addToCart = () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = cart.find(item => item.id === watch.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...watch, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  window.dispatchEvent(new Event("cartUpdated"));      //basqa componentlere xeber verir

  setAdded(true);
  setTimeout(() => {
    setAdded(false);
  }, 2000);
 };
  
  const { t } = useTranslation();
  const { id } = useParams();
  const [watch, setWatch] = useState(null);

   const [favorites, setFavorites] = useState(() => {
      const saved = localStorage.getItem("favorites");
      return saved ? JSON.parse(saved) : [];
    });
  
    const toggleFavorite = (watch) => {
      let favs = [...favorites];
      const index = favs.findIndex(item => item.id === watch.id);
  
      if (index !== -1) {
        favs.splice(index, 1);
      } else {
        favs.push(watch);
      }
  
      setFavorites(favs);
      localStorage.setItem("favorites", JSON.stringify(favs));
      
      window.dispatchEvent(new Event("favoritesUpdated"));
    };

  useEffect(() =>{
    fetch(`http://localhost:3000/products/${id}`)
    .then(res=>res.json())
    .then(data=>setWatch(data));
  }, [id]);
if (!watch) {
  return <div className='text-white text-center pt-40'>Yüklənir...</div>;
}

  return (
    <div className="min-h-screen bg-black dark:bg-white  text-white pt-40 px-10 transition-colors duration-500">
      {added && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded">
           Məhsul səbətə əlavə olundu ✅
        </div>
      )}
        <div className='grid grid-col-1 md:grid-cols-2 gap-20 mx-auto max-w-6xl gap-20'>
            <div className='bg-zinc-900 dark:bg-white transition-colors duration-500 dark:shadow-2xl dark:border-orange-300 flex justify-center border border-zinc-800 p-10 mb-[50px]'>
                <img src={watch.image} alt={watch.name} className='h-auto w-full object-contain' />
            </div>
            <div className='flex flex-col justify-center'>
                 <h1 className='italic mb-4 text-5xl font-serif uppercase dark:text-black'>{watch.name}</h1>
                 <p className='text-3xl mb-8 font-bold text-[#D4AF37]'>${watch.price}</p>
                 <div className='border-t border-zinc-800 pt-8 space-y-6'>
                    <p className='text-zinc-400 italic leading-relaxed'> {watch.category === 'men' ? t('desc_men') : t('desc_women')}</p>
                    <div className="flex gap-4">
              <button  onClick={addToCart} className='uppercase flex-1 py-5 bg-[#D4AF37] text-black tracking-[3px] font-black hover:bg-white transition-all border border-[#D4AF37] cursor-pointer'>
                {t('add_to_cart')}
              </button>
              <button  onClick={() => toggleFavorite(watch)}
 className="px-6 border border-zinc-800 dark:border-gray-200 hover:text-[#D4AF37] transition-colors text-2xl">
                 {favorites.find(item => item.id === watch.id) ? (
                                    <AiFillHeart className="text-[#E5B4A2]" /> 
                                  ) : (
                                    <AiOutlineHeart className="text-gray-600 hover:text-[#E5B4A2]" />
                                  )}
              </button>
            </div>
                 </div>
            </div>
        </div>
    </div>
  );
}
export default Detail;