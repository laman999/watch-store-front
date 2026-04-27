import React from 'react'
import { Helmet } from 'react-helmet'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    toast.success('Your message has been sent!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <Helmet>
        <title>Contact</title>
      </Helmet>

      <div className="bg-[#050505] min-h-screen text-white pt-24 pb-16 px-6 font-sans">
        <div className="text-center mb-24">
          <h4 className="text-[#D4AF37] text-[10px] tracking-[0.6em] uppercase mb-6 font-bold">
            Concierge
          </h4>
          <h1 className="text-5xl md:text-7xl font-serif italic mb-8 leading-tight">
            Get in Touch
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-base font-light leading-relaxed">
            Whether for a private appointment, a bespoke commission, or simply to <br className="hidden md:block" />
            share a thought — we are at your service.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        
         <div className="space-y-12">
          <div className="flex items-start gap-6 group">
            <div className="w-12 h-12 border border-[#D4AF37]/30 flex items-center justify-center transition-colors group-hover:border-[#D4AF37]">
              <span className="text-[#D4AF37] text-xs">📍</span>
            </div>
            <div>
              <h5 className="text-[#D4AF37] text-[10px] tracking-widest uppercase mb-2">Atelier</h5>
              <p className="text-lg font-medium">Rue du Rhône 42</p>
              <p className="text-gray-500 text-sm">1204 Geneva, Switzerland</p>
            </div>
          </div>

          <div className="flex items-start gap-6 group">
            <div className="w-12 h-12 border border-[#D4AF37]/30 flex items-center justify-center transition-colors group-hover:border-[#D4AF37]">
              <span className="text-[#D4AF37] text-xs">✉️</span>
            </div>
            <div>
              <h5 className="text-[#D4AF37] text-[10px] tracking-widest uppercase mb-2">Email</h5>
              <p className="text-lg font-medium">concierge@maison-horlogerie.com</p>
            </div>
          </div>

          <div className="flex items-start gap-6 group">
            <div className="w-12 h-12 border border-[#D4AF37]/30 flex items-center justify-center transition-colors group-hover:border-[#D4AF37]">
              <span className="text-[#D4AF37] text-xs">📞</span>
            </div>
            <div>
              <h5 className="text-[#D4AF37] text-[10px] tracking-widest uppercase mb-2">Telephone</h5>
              <p className="text-lg font-medium">+41 22 555 0123</p>
              <p className="text-gray-500 text-sm font-light">Mon — Sat, 10:00 — 19:00 CET</p>
            </div>
          </div>
        </div>
          <div className="bg-[#0A0A0A] p-10 border border-white/5 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-[#D4AF37] text-[9px] tracking-[0.4em] uppercase font-bold">Name</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-black/50 border border-white/10 p-4 text-sm outline-none focus:border-[#D4AF37]/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[#D4AF37] text-[9px] tracking-[0.4em] uppercase font-bold">Email</label>
                <input 
                  required
                  type="email" 
                  className="w-full bg-black/50 border border-white/10 p-4 text-sm outline-none focus:border-[#D4AF37]/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[#D4AF37] text-[9px] tracking-[0.4em] uppercase font-bold">Message</label>
                <textarea 
                  required
                  rows="4"
                  className="w-full bg-black/50 border border-white/10 p-4 text-sm outline-none focus:border-[#D4AF37]/50 transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-[#D4AF37] text-black py-4 text-[11px] tracking-[0.4em] uppercase font-bold hover:bg-white transition-colors duration-500 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact