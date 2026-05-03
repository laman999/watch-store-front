import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AiOutlineClose } from 'react-icons/ai';

const LoginSidebar = ({ isOpen, onClose }) => {
  const [user, setUser] = useState({ pass: "", email: "" });
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (user.email && user.pass) {
      fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then(data => {
          let founded = data.find(u => u.email === user.email);
          if (founded && founded.pass === user.pass) {
            localStorage.setItem("id", founded.id);
            onClose(); 
            window.location.reload();
          } else {
            setError("Email və ya Şifrə yanlışdır!");
          }
        });
    } else {
      setError("Bütün xanaları doldurun.");
    }
  };

  return (
    <>

      <div 
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[999] transition-opacity duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={onClose}
      />
      
      <div className={`fixed top-0 right-0 h-full w-full md:w-[450px] bg-[#0A0A0A] z-[1000] transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} border-l border-white/10 p-10 flex flex-col shadow-2xl text-white`}>
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-[12px] tracking-[0.6em] uppercase text-[#D4AF37] font-bold">Daxil Ol</h2>
          <button onClick={onClose} className="hover:rotate-90 transition-transform duration-300">
            <AiOutlineClose size={24} />
          </button>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-widest text-white/50 pl-2">Email</label>
            <input 
              type="email" 
              className="bg-white/5 h-[50px] rounded-full px-6 border border-white/10 focus:outline-none focus:border-[#D4AF37]/50 transition-all text-sm"
              onChange={(e) => { setUser({...user, email: e.target.value}); setError(""); }}
              value={user.email}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-widest text-white/50 pl-2">Şifrə</label>
            <div className="relative">
              <input 
                type={show ? "text" : "password"} 
                className="w-full bg-white/5 h-[50px] rounded-full px-6 border border-white/10 focus:outline-none focus:border-[#D4AF37]/50 transition-all text-sm"
                onChange={(e) => { setUser({...user, pass: e.target.value}); setError(""); }}
                value={user.pass}
              />
              <div className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer text-white/40" onClick={() => setShow(!show)}>
                {show ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
          </div>

          {error && <p className="text-red-500 text-xs font-bold pl-2 tracking-wide">{error}</p>}

          <button className="bg-[#D4AF37] text-black h-[50px] rounded-full uppercase font-bold tracking-[3px] text-[11px] hover:bg-white transition-all mt-4 shadow-lg shadow-[#D4AF37]/10">
            Giriş et
          </button>

          <div className="text-center mt-6 space-y-3">
            <p className="text-[11px] text-white/40 uppercase tracking-widest">Hesabınız yoxdur?</p>
            <button 
              type="button"
              onClick={() => { onClose(); navigate("/register"); }}
              className="text-[#D4AF37] text-[11px] uppercase tracking-widest border-b border-[#D4AF37]/30 pb-1 hover:text-white hover:border-white transition-all"
            >
              Qeydiyyatdan keçin
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginSidebar;