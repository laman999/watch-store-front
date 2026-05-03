import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai';
import LoginSidebar from "./LoginSidebar";

function Favorites() {
  const { t } = useTranslation();
  const [favs, setFavs] = useState([]);
  

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("id");
    
    if (!userId) {
      setIsLoggedIn(false);
      const timer = setTimeout(() => setIsSidebarOpen(true), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsLoggedIn(true);
      const allFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
      const userSpecificFavs = allFavorites.filter(item => item.userId === userId);
      setFavs(userSpecificFavs);
    }
  }, []);

  const removeFromFavorites = (id) => {
    const userId = localStorage.getItem("id");
    const allFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    
    const updatedAll = allFavorites.filter(item => !(item.id === id && item.userId === userId));
    
    localStorage.setItem("favorites", JSON.stringify(updatedAll));
    
    setFavs(updatedAll.filter(item => item.userId === userId));
    
    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  return (
    <div className="min-h-screen bg-[#050505] dark:bg-white text-white dark:text-black pt-40 px-6 md:px-20 pb-20 font-sans transition-colors duration-500">
      
      <LoginSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="max-w-5xl mx-auto">
        <header className="border-b border-white/10 dark:border-black/10 pb-8 mb-12">
          <h2 className="text-4xl font-serif italic tracking-widest uppercase">
            {t('beyen')}
          </h2>
        </header>

        {!isLoggedIn ? (
          <div className="text-center py-20 border border-white/5 dark:border-black/5 bg-zinc-900/10 dark:bg-zinc-100/50 backdrop-blur-sm rounded-xl">
            <p className="text-gray-500 uppercase tracking-[0.3em] text-[11px] mb-8">
              Favoritlərinizi görmək üçün hesaba daxil olmalısınız
            </p>
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="px-10 py-3 border border-[#D4AF37] text-[#D4AF37] uppercase tracking-widest text-[10px] hover:bg-[#D4AF37] hover:text-black transition-all"
            >
              Giriş Paneli
            </button>
          </div>
        ) : (
          favs.length === 0 ? (
            <div className="text-center py-20 border border-white/5 dark:border-black/5 bg-zinc-900/10 dark:bg-zinc-100/50 backdrop-blur-sm rounded-xl">
              <p className="text-gray-500 uppercase tracking-[0.3em] text-[11px]">
                {t('likes')}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {favs.map(item => (
                <div 
                  key={item.id} 
                  className="flex flex-col md:flex-row items-center justify-between p-6 bg-zinc-900/5 dark:bg-zinc-100 border border-white/5 dark:border-zinc-200 hover:border-[#D4AF37]/50 transition-all duration-500 group rounded-sm"
                >
                  <div className="flex items-center gap-8 w-full md:w-1/2">
                    <div className="w-24 h-24 bg-black dark:bg-white p-2 overflow-hidden border border-white/5 dark:border-zinc-200">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700" 
                      />
                    </div>
                    <div>
                      <h3 className="text-[11px] tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400 group-hover:text-[#D4AF37] transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-lg font-serif italic text-[#D4AF37] mt-1">
                        ${item.price?.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 mt-6 md:mt-0">
                    <NavLink 
                      to={`/product/${item.id}`} 
                      className="flex items-center gap-2 text-[10px] uppercase tracking-widest border border-[#D4AF37]/30 dark:border-black/20 px-6 py-3 hover:bg-[#D4AF37] hover:text-black dark:hover:bg-black dark:hover:text-white transition-all"
                    >
                      <AiOutlineShoppingCart size={14} /> {t('view_details')}
                    </NavLink>
                    
                    <button 
                      onClick={() => removeFromFavorites(item.id)}
                      className="text-gray-500 hover:text-red-500 transition-colors p-2"
                    >
                      <AiOutlineClose size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Favorites;