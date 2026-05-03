import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Checkout = () => {
  const navigate = useNavigate();
  
  const [orderData, setOrderData] = useState({
    fullName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    address: '',
    totalPrice: 12500 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData({ ...orderData, [name]: value });
  };

  const handleOrder = async (e) => {
    e.preventDefault();

    const finalOrder = {
      ...orderData,
      orderDate: new Date().toLocaleString(),
      status: "Gözləmədə",
      items: JSON.parse(localStorage.getItem("cart")) || []
    };

    try {
      const res = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalOrder)
      });

      if (res.ok) {
        alert("Sifarişiniz qəbul edildi!");
        localStorage.removeItem("cart");
        navigate("/"); 
      }
    } catch (err) {
      console.log("Xəta:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-600/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-xl p-8 rounded-[30px] border border-white/10 shadow-2xl">
        
        <h2 className="text-center text-xl font-light tracking-[4px] mb-8 text-gray-200 uppercase">
          Ödəniş Paneli
        </h2>

        <form onSubmit={handleOrder} className="space-y-5">
          <div className="group">
            <input 
              name="fullName"
              value={orderData.fullName}
              onChange={handleChange}
              type="text" 
              placeholder="Ad və Soyad" 
              className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all text-sm tracking-wide"
              required
            />
          </div>

          <div className="relative">
            <input 
              name="cardNumber"
              value={orderData.cardNumber}
              onChange={handleChange}
              type="text" 
              placeholder="Kart Nömrəsi" 
              className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl outline-none focus:border-blue-500/50 transition-all text-sm tracking-[2px]"
              required
            />
            <div className="absolute right-4 top-4 flex gap-1">
              <div className="w-6 h-4 bg-red-500/80 rounded-sm"></div>
              <div className="w-6 h-4 bg-yellow-500/80 rounded-sm"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input 
              name="expiry"
              value={orderData.expiry}
              onChange={handleChange}
              type='text' 
              placeholder="MM/YY" 
              className="bg-white/5 border border-white/10 p-4 rounded-2xl outline-none focus:border-purple-500/50 text-sm" 
              required
            />
            <input 
              name="cvv"
              value={orderData.cvv}
              onChange={handleChange}
              type="text" 
              placeholder="CVV" 
              className="bg-white/5 border border-white/10 p-4 rounded-2xl outline-none focus:border-purple-500/50 text-sm" 
              required
            />
          </div>

          <input 
            name="address"
            value={orderData.address}
            onChange={handleChange}
            type="text" 
            placeholder="Çatdırılma Ünvanı" 
            className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl outline-none focus:border-purple-500/50 text-sm" 
            required
          />

          <button type="submit" className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 text-white font-medium py-4 rounded-2xl shadow-lg shadow-purple-500/20 transition-all active:scale-95 uppercase text-xs tracking-widest">
            Sifarişi Tamamla
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;