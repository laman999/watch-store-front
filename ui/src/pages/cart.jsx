import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router";

function Cart() {
   const { t } = useTranslation();
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const totalPrice = cart.reduce((sum, item) => {   //yekun qiymetidi
  return sum + (item.price || 0) * (item.quantity || 0);
}, 0);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = () => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  };

  const increase = (id) => {
    let updated = cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    window.dispatchEvent(new Event("cartUpdated"));
  };


  const decrease = (id) => {
    let updated = cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ).filter(item => item.quantity > 0);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const removeItem = (id) => {
    let updated = cart.filter(item => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    window.dispatchEvent(new Event("cartUpdated"));
  };
  
  return (
    <div className="min-h-screen bg-black dark:bg-white dark:text-black transition-colors duration-500 text-white px-6 py-10">
  <h1 className="text-4xl font-bold mb-10 text-center uppercase">
    {t('basket')} 🛒
  </h1>
  {cart.length === 0 ? (
    <p className="text-gray-400 text-center mt-20 text-lg">
      Səbət boşdur 😕
    </p>

  ) : (
    <div className="max-w-4xl mx-auto space-y-5">
      {cart.map(item => (
        <div
          key={item.id}
          className="flex items-center gap-5 dark:bg-white dark:border-orange-300 dark:shadow-2xl bg-zinc-900 border border-zinc-800 p-5 rounded-2xl shadow-lg"
        >
          <img
            src={item.image}
            className="w-24 h-24 object-contain bg-white rounded-xl p-2"
          />
          <div className="flex-1">
            <h2 className="text-xl font-semibold uppercase">{item.name}</h2>
            <p className="text-[#D4AF37] font-bold mt-1">
              <p>${(item.price * item.quantity).toLocaleString()}</p>
            </p>

            <div className="flex items-center gap-3 mt-3">
              <button
                onClick={() => decrease(item.id)}
                className="w-8 h-8 bg-zinc-700 rounded text-white hover:bg-zinc-600 cursor-pointer"
              >
                -
              </button>
              <span className="px-3 text-lg">{item.quantity}</span>
              <button
                onClick={() => increase(item.id)}
                className="w-8 h-8 bg-zinc-700 rounded text-white hover:bg-zinc-600 cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={() => removeItem(item.id)}
            className="bg-red-500 text-white uppercase px-4 py-2 rounded-lg hover:bg-red-600 transition cursor-pointer"
          >
           {t('delete')}
          </button>
        </div>
      ))}
           <div className="border-t border-zinc-800 pt-8 flex flex-col items-end">
            <div className="flex items-center gap-10 mb-6">
              <span className="text-zinc-400 uppercase tracking-[0.2em] text-sm">{t('yekun')}:</span>
              <span className="text-4xl font-bold text-[#D4AF37] tracking-wider">
                ${totalPrice.toLocaleString()}  
                {/* local vergulnen ayirir qiymet */}
              </span>
            </div>
            
            <button onClick={() => navigate('/checkout')} className="w-full md:w-64 py-4 bg-[#D4AF37] text-black font-black uppercase tracking-[0.2em] hover:bg-white cursor-pointer transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              {t('sifaris')}
            </button>
          </div>
    </div>
  )}
</div>
  );
}

export default Cart;