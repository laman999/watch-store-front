import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Men = () => {
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
    const userId = localStorage.getItem("id");
    
    if (!userId) {
      alert("Favoritlərinizə əlavə etmək üçün öncə giriş edin!");
      return;
    }

    let favs = [...favorites];
    const index = favs.findIndex(item => item.id === watch.id && item.userId === userId);

    if (index !== -1) {
      favs.splice(index, 1);
    } else {
      favs.push({ ...watch, userId: userId });
    }

    setFavorites(favs);
    localStorage.setItem("favorites", JSON.stringify(favs));
    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(data => {
        const menData = data.filter(item => item.category === "men");
        setWatches(menData);
        setFilteredWatches(menData);
      });
  }, []);

  useEffect(() => {
    let result = [...watches];

    if (searchTerm.trim() !== "") {
      result = result.filter(watch => 
        watch.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (activeFilter === "new") {
      result = result.filter(w => w.isNew);
    } else if (activeFilter === "bestseller") {
      result = result.filter(w => w.isBestSeller);
    } else if (activeFilter === "low") {
      result.sort((a, b) => a.price - b.price);
    } else if (activeFilter === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    setFilteredWatches(result);
  }, [searchTerm, activeFilter, watches]);

  return (
    <div>
      <Helmet>
        <title>Men</title>
      </Helmet>

      <div className="bg-[#050505] min-h-screen dark:bg-primary-bg pt-32 pb-20 font-sans transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h1 className="text-[10px] tracking-[0.8em] uppercase text-[#D4AF37] font-bold mb-4">{t('strength')}</h1>
          <h2 className="text-4xl font-serif italic uppercase font-light tracking-wider text-white/90 dark:text-black">{t('men_title')}</h2>
        </div>

        <div className="max-w-md mx-auto px-6 mb-12">
          <div className="relative group border border-black">
            <input 
              type="text" 
              value={searchTerm}
              placeholder={t('search_placeholder')}
              className="w-full bg-transparent border-b border-white/10 py-3 text-center text-[11px] tracking-[0.3em] outline-none focus:border-[#D4AF37] transition-all duration-700 placeholder:text-gray-800 uppercase text-white"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mb-20">
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 border-y border-white/5 py-8">
            {[
              { id: 'all', label: t('all_models') },
              { id: 'new', label: t('new_arrivals') },
              { id: 'bestseller', label: t('best_sellers') },
              { id: 'low', label: t('price_low') },
              { id: 'high', label: t('price_high') }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`text-[10px] uppercase tracking-[0.4em] transition-all duration-500 relative pb-2
                  ${activeFilter === filter.id ? 'text-[#D4AF37]' : 'text-gray-500 hover:text-white'}`}
              >
                {filter.label}
                {activeFilter === filter.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D4AF37]"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
            {filteredWatches.length > 0 ? (
              filteredWatches.map((watch) => (
                <div key={watch.id} className="group relative">

                  <div 
                    onClick={() => toggleFavorite(watch)}
                    className="absolute top-4 right-4 z-30 cursor-pointer text-2xl transition-all duration-300 hover:scale-125 p-2"
                  >
                    {favorites.find(item => item.id === watch.id && item.userId === localStorage.getItem("id")) ? (
                      <AiFillHeart className="text-[#D4AF37]" /> 
                    ) : (
                      <AiOutlineHeart className="text-gray-600 hover:text-white" /> 
                    )}
                  </div>

                  <div className="relative aspect-[4/5] bg-[#0A0A0A] dark:shadow-2xl dark:bg-white dark:border-[1px] dark:border-amber-200 overflow-hidden flex items-center justify-center p-12 border border-white/5 group-hover:border-white/10 transition-all duration-500">
                    <img 
                      src={watch.image} 
                      alt={watch.name}
                      className="w-full h-full object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                    />
                    {watch.isNew && (
                      <span className="absolute top-6 left-6 text-[8px] font-bold tracking-widest uppercase border border-[#D4AF37] text-[#D4AF37] px-2 py-1 bg-black/40 backdrop-blur-sm">{t('new_badge')}</span>
                    )}
                  </div>

                  <div className="mt-10 text-center space-y-3">
                    <h3 className="text-[11px] tracking-[0.3em] uppercase text-gray-500 group-hover:text-white transition-colors duration-500">
                      {watch.name}
                    </h3>
                    <div className="w-8 h-[1px] bg-[#D4AF37]/30 mx-auto group-hover:w-16 transition-all duration-500"></div>
                    <p className="text-lg font-serif italic text-white/90 dark:text-black">
                      ${watch.price?.toLocaleString()}
                    </p>
                  </div>

                  <div className="mt-8 flex justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                    <NavLink to={`/product/${watch.id}`} className="w-full">
                      <button className="w-full py-4 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#D4AF37] hover:text-black transition-all duration-500 backdrop-blur-sm">
                        {t('view_details')}
                      </button>
                    </NavLink>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <p className="text-gray-600 text-sm tracking-[0.4em] uppercase italic font-light dark:text-black">{t('no_watches')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Men;