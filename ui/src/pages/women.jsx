import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Women = () => {
  const { t } = useTranslation();

  const [watches, setWatches] = useState([]);
  const [filteredWatches, setFilteredWatches] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

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

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(data => {
        const womenData = data.filter(item => item.category === "women");
        setWatches(womenData);
        setFilteredWatches(womenData);
      });
  }, []);

  useEffect(() => {
    let result = [...watches];
    if (searchTerm.trim() !== "") {
      result = result.filter(watch => watch.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    if (activeFilter === "new") result = result.filter(w => w.isNew);
    if (activeFilter === "bestseller") result = result.filter(w => w.isBestSeller);
    if (activeFilter === "low") result.sort((a, b) => a.price - b.price);
    if (activeFilter === "high") result.sort((a, b) => b.price - a.price);
    setFilteredWatches(result);
  }, [searchTerm, activeFilter, watches]);

  return (
    <div>
      <Helmet>
        <title>Women</title>
      </Helmet>

      <div className="bg-[#080707] dark:bg-white min-h-screen text-white pt-32 pb-20 font-sans transition-colors duration-500">
        
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h1 className="text-[9px] tracking-[0.9em] uppercase text-[#E5B4A2] dark:text-black font-bold mb-4 opacity-80">
            {t('elegance')}
          </h1>
          <h2 className="text-5xl md:text-6xl font-serif italic font-light tracking-widest text-white/90 dark:text-black">
            {t('women_title')} <span className="not-italic opacity-40 font-light text-4xl">{t('women_series')}</span>
          </h2>
        </div>

        <div className="max-w-md mx-auto px-6 mb-12">
          <div className="relative group dark:border-[1px] dark:border-black">
            <input 
              type="text" 
              value={searchTerm}
              placeholder={t('discover_pieces')} 
              className="w-full bg-transparent border-b border-white/5 py-3 text-center text-[10px] tracking-[0.4em] outline-none focus:border-[#E5B4A2] transition-all duration-1000 placeholder:text-gray-800 dark:text-black uppercase font-light"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#E5B4A2] group-focus-within:w-full transition-all duration-1000"></div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 mb-20">
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 border-y border-white/[0.03] py-8">
            {[
              { id: 'all', label: t('the_all') },
              { id: 'new', label: t('new_arrivals') },
              { id: 'bestseller', label: t('best_sellers') },
              { id: 'low', label: t('price_asc') },
              { id: 'high', label: t('price_desc') }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`text-[9px] uppercase tracking-[0.4em] transition-all duration-700 relative pb-1
                  ${activeFilter === f.id ? 'text-[#E5B4A2]' : 'text-gray-600 hover:text-white dark:text-gray-400 dark:hover:text-black'}`}
              >
                {f.label}
                {activeFilter === f.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#E5B4A2] shadow-[0_0_8px_#E5B4A2]"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-24">
            {filteredWatches.map((watch) => (
              <div key={watch.id} className="group relative">

                <div 
                  onClick={() => toggleFavorite(watch)}
                  className="absolute top-6 right-6 z-30 cursor-pointer text-2xl transition-all duration-300 hover:scale-125"
                >
                  {favorites.find(item => item.id === watch.id) ? (
                    <AiFillHeart className="text-[#E5B4A2]" /> 
                  ) : (
                    <AiOutlineHeart className="text-gray-600 hover:text-[#E5B4A2]" />
                  )}
                </div>

                <div className="relative aspect-[4/5] bg-[#0C0B0B] dark:bg-white overflow-hidden flex items-center justify-center p-14 border border-white/[0.02] group-hover:border-[#E5B4A2]/20 transition-all duration-1000 shadow-2xl">
                  <img 
                    src={watch.image} 
                    alt={watch.name}
                    className="w-full h-full object-contain transition-all duration-[1.5s] group-hover:scale-105 group-hover:brightness-110"
                  />
                  {watch.isNew && (
                    <span className="absolute top-8 left-8 text-[9px] tracking-[0.5em] uppercase text-[#E5B4A2] dark:border-[1px] dark:border-black dark:text-[7px] dark:p-[7px] font-bold">
                      {t('new_badge')}
                    </span>
                  )}
                </div>

                <div className="mt-10 text-center space-y-4">
                  <h3 className="text-[10px] tracking-[0.5em] uppercase text-gray-500 group-hover:text-[#E5B4A2] transition-colors duration-700 font-light">
                    {watch.name}
                  </h3>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-[1px] h-4 bg-gradient-to-b from-transparent via-[#E5B4A2]/30 to-transparent"></div>
                  </div>
                  <p className="text-xl font-serif italic text-white/80 dark:text-black font-light tracking-widest">
                    ${watch.price?.toLocaleString()}
                  </p>
                </div>

                <div className="mt-8 flex justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                    <NavLink to={`/product/${watch.id}`} className="w-full">
                      <button className="w-full py-4 border border-[#E5B4A2]/30 text-[#E5B4A2] text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#E5B4A2] hover:text-black transition-all duration-500 backdrop-blur-sm">
                       {t('view_details')}
                      </button>
                    </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Women;