import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineClockCircle, AiOutlineCheckCircle, AiOutlineCar } from 'react-icons/ai';
import { TbXboxX } from "react-icons/tb";


const TrackOrder = () => {
  const location = useLocation();
  const [orderNumber, setOrderNumber] = useState(''); 
  const [orderData, setOrderData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (manualNumber) => {
    const numToSearch = manualNumber || orderNumber;
    if (!numToSearch) return;

    setLoading(true);
    setError('');
    setOrderData(null);

    try {
      const res = await fetch(`http://localhost:3000/orders`);
      const allOrders = await res.json();

      const foundOrder = allOrders.find(item => 
        String(item.orderId) === String(numToSearch).trim() || 
        String(item.id) === String(numToSearch).trim()
      );

      if (foundOrder) {
        setOrderData(foundOrder);
      } else {
        setError('Sifariş tapılmadı. Nömrəni düzgün daxil etdiyinizdən əmin olun.');
      }
    } catch (err) {
      console.error("Axtarış xətası:", err);
      setError('Serverlə əlaqə qurula bilmədi. npx json-server-in çalışdığından əmin olun.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (location.state?.id) {
      const idFromState = String(location.state.id);
      setOrderNumber(idFromState);
      handleSearch(idFromState);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen dark:bg-white dark:text-black transition-colors duration-500 bg-[#050505] text-white pt-32 pb-20 px-6 font-sans">
      <div className="max-w-2xl mx-auto text-center">
        <h4 className="text-[#D4AF37] text-[10px] tracking-[0.6em] uppercase mb-4 font-bold">
          Xidmət İzləmə
        </h4>
        <h1 className="text-4xl md:text-5xl font-serif italic mb-10">Sifarişinizi İzləyin</h1>

        <div className="relative max-w-md mx-auto mb-16">
          <input 
            type="text" 
            placeholder="Sifariş nömrəsi (məs: 525487)"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            className="w-full dark:bg-white  bg-[#0A0A0A] border border-white/10 p-5 pl-12 text-sm outline-none focus:border-[#D4AF37] transition-all"
          />
          <AiOutlineSearch className="absolute left-4 top-[22px] text-gray-500" size={20} />
          <button 
            onClick={() => handleSearch()}
            disabled={loading}
            className="w-full mt-4 bg-[#D4AF37] text-black py-4 text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-white transition-all disabled:opacity-50"
          >
            {loading ? 'Axtarılır...' : 'Statusu Yoxla'}
          </button>
        </div>

        {error && (
          <div className="mb-10 p-4 dark:bg-white bg-red-500/10 border border-red-500/20 text-red-500 text-sm italic">
            {error}
          </div>
        )}

        {orderData && (
          <div className="bg-[#0A0A0A] dark:bg-white border border-white/5 p-8 md:p-12 text-left animate-fadeIn shadow-2xl">
            <div className="flex justify-between items-start border-b border-white/5 pb-6 mb-8">
              <div>
                <p className="text-gray-500 text-[9px] uppercase tracking-widest mb-1">Müştəri</p>
                <h3 className="text-xl font-medium">{orderData.fullName}</h3>
              </div>
              <div className="text-right">
                <p className="text-gray-500 text-[9px] uppercase tracking-widest mb-1">Sifariş №</p>
                <h3 className="text-[#D4AF37] font-bold text-lg">#{orderData.orderId}</h3>
              </div>
            </div>

            <div className="space-y-10 relative mt-10">
               <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${orderData.status === 'Gözləmədə' ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.3)]' : 'border-white/10 text-gray-600'}`}>
                    <AiOutlineClockCircle size={24} />
                  </div>
                  <div>
                    <h5 className={`text-sm font-bold uppercase tracking-wider ${orderData.status === 'Gözləmədə' ? 'text-white' : 'text-gray-500'}`}>Gözləmədə</h5>
                    <p className="text-xs text-gray-500 mt-1">Sifarişiniz sistemə daxil oldu və hazırlanır.</p>
                  </div>
               </div>

               <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${orderData.status === 'Kuryerdə' ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.3)]' : 'border-white/10 text-gray-600'}`}>
                    <AiOutlineCar size={24} />
                  </div>
                  <div>
                    <h5 className={`text-sm font-bold uppercase tracking-wider ${orderData.status === 'Kuryerdə' ? 'text-white' : 'text-gray-500'}`}>Kuryerdə</h5>
                    <p className="text-xs text-gray-500 mt-1">Məhsulunuz kuryerə təhvil verilib və yoldadır.</p>
                  </div>
               </div>
               <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${orderData.status === 'Çatdırıldı' ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.3)]' : 'border-white/10 text-gray-600'}`}>
                    <AiOutlineCheckCircle size={24} />
                  </div>
                  <div>
                    <h5 className={`text-sm font-bold uppercase tracking-wider ${orderData.status === 'Çatdırıldı' ? 'text-white' : 'text-gray-500'}`}>Çatdırıldı</h5>
                    <p className="text-xs text-gray-500 mt-1">Sifariş uğurla tamamlandı. Təşəkkürlər!</p>
                  </div>
               </div>

               <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${orderData.status === 'Ləğv edildi' ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.3)]' : 'border-white/10 text-gray-600'}`}>
                    <TbXboxX size={24} />
                  </div>
                  <div>
                    <h5 className={`text-sm font-bold uppercase tracking-wider ${orderData.status === 'Ləğv edildi' ? 'text-white' : 'text-gray-500'}`}>Ləğv edildi</h5>
                    <p className="text-xs text-gray-500 mt-1">Sifariş ləğv edildi.</p>
                  </div>
               </div>
               
            </div>

            <div className="mt-12 pt-6 border-t border-white/5 text-[10px] text-gray-600 uppercase tracking-widest text-center">
               Sifariş Tarixi: {orderData.orderDate}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackOrder;