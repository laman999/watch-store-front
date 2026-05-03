import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { AiOutlineDelete, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Cart = () => {
  const { t } = useTranslation();
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("id");
    
    if (userId) {
      setIsLoggedIn(true);
      const allCartData = JSON.parse(localStorage.getItem("cart")) || [];
      const userSpecificCart = allCartData.filter(item => item.userId === userId);
      setCartItems(userSpecificCart);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const updateQuantity = (id, delta) => {
    const userId = localStorage.getItem("id");
    const allCartData = JSON.parse(localStorage.getItem("cart")) || [];
    
    const updatedCart = allCartData.map(item => {
      if (item.id === id && item.userId === userId) {
        const newQty = Math.max(1, (item.quantity || 1) + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    });

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart.filter(item => item.userId === userId));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const removeFromCart = (id) => {
    const userId = localStorage.getItem("id");
    const allCartData = JSON.parse(localStorage.getItem("cart")) || [];
    
    const updatedCart = allCartData.filter(item => !(item.id === id && item.userId === userId));
    
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart.filter(item => item.userId === userId));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-white pt-20">
        <p className="text-[12px] tracking-[0.4em] uppercase mb-8">{t('PLEASE LOGIN')}</p>
        <NavLink to="/login" className="px-8 py-3 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all">
          {t('LOGIN')}
        </NavLink>
      </div>
    );
  }

  return (
    <div className="min-h-screen dark:bg-white transition-colors duration-500 bg-[#050505] dark:text-black text-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif italic mb-12 tracking-widest uppercase">{t('basket')}</h2>

        {cartItems.length > 0 ? (
          <div className="space-y-8">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row items-center gap-6 dark:border-black border-b border-white/5 pb-8">
                <div className="w-24 h-32 bg-[#0A0A0A] dark:bg-white p-4 border dark:border-black border-white/5">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-[11px] tracking-[0.3em] uppercase text-gray-400 mb-2">{item.name}</h3>
                  <p className="text-lg font-serif italic">${(item.price*item.quantity).toLocaleString()}</p>
                </div>

                <div className="flex items-center gap-4 border border-white/10 px-4 py-2">
                  <button onClick={() => updateQuantity(item.id, -1)} className="hover:text-[#D4AF37] transition-colors">
                    <AiOutlineMinus />
                  </button>
                  <span className="text-sm font-light w-8 text-center">{item.quantity || 1}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="hover:text-[#D4AF37] transition-colors">
                    <AiOutlinePlus />
                  </button>
                </div>

                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-xl text-gray-500 hover:text-red-500 transition-colors"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            ))}

            <div className="mt-12 flex flex-col items-end gap-6">
              <div className="text-right">
                <p className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-2">{t('yekun')}</p>
                <p className="text-3xl font-serif italic text-[#D4AF37]">${totalPrice.toLocaleString()}</p>
              </div>
              <NavLink to='/checkout'>
                <button className="w-full md:w-64 py-4 bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white transition-all">
                {t('sifaris')}
              </button>
              </NavLink>
            </div>
          </div>
        ) : (
          <div className="text-center py-20 border border-white/5">
            <p className="text-gray-500 tracking-[0.3em] uppercase text-[11px] mb-8"> Səbət boşdur 😕</p>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;