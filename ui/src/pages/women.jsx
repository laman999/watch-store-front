import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const Women = () => {
  const { t } = useTranslation();

  const [watches, setWatches] = useState([]);
  const [filteredWatches, setFilteredWatches] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

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
        <title>{t('women')}</title>
      </Helmet>

      <div className="bg-[#080707] min-h-screen text-white pt-32 pb-20 font-sans">
        
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h1 className="text-[9px] tracking-[0.9em] uppercase text-[#E5B4A2] font-bold mb-4 opacity-80">
            {t('elegance')}
          </h1>
          <h2 className="text-5xl md:text-6xl font-serif italic font-light tracking-widest text-white/90">
            {t('women_title')} <span className="not-italic opacity-40 font-light text-4xl">{t('women_series')}</span>
          </h2>
        </div>

        <div className="max-w-md mx-auto px-6 mb-12">
          <div className="relative group">
            <input 
              type="text" 
              value={searchTerm}
              placeholder={t('discover_pieces')} 
              className="w-full bg-transparent border-b border-white/5 py-3 text-center text-[10px] tracking-[0.4em] outline-none focus:border-[#E5B4A2] transition-all duration-1000 placeholder:text-gray-800 uppercase font-light"
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
                  ${activeFilter === f.id ? 'text-[#E5B4A2]' : 'text-gray-600 hover:text-white'}`}
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
              <div key={watch.id} className="group cursor-pointer">
                <div className="relative aspect-[4/5] bg-[#0C0B0B] overflow-hidden flex items-center justify-center p-14 border border-white/[0.02] group-hover:border-[#E5B4A2]/20 transition-all duration-1000 shadow-2xl">
                  <img 
                    src={watch.image} 
                    alt={watch.name}
                    className="w-full h-full object-contain transition-all duration-[1.5s] group-hover:scale-105 group-hover:brightness-110"
                  />
                  {watch.isNew && (
                    <span className="absolute top-8 left-8 text-[7px] tracking-[0.5em] uppercase text-[#E5B4A2] font-bold">
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
                  <p className="text-xl font-serif italic text-white/80 font-light tracking-widest">
                    ${watch.price?.toLocaleString()}
                  </p>
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