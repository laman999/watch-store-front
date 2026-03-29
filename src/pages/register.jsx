import React from 'react'

function Register() {
  return (

    <div className='text-white border-[1px] mt-[50px] border-solid border-[#222] md:w-[450px] md:h-[600px] w-[350px] h-[600px] rounded-[20px] login mx-auto'>
      <form className='submitform box-center flex flex-col gap-[5px]'>
        <h1 className='text-[28px] register text-center uppercase tracking-[4px] font-light'>
            Register
        </h1>

                //ad 
        <label htmlFor="" className='text-white uppercase text-[10px] pl-[10px] tracking-[3px] mt-[15px]'>Username</label>
        <input type="text" className='bg-black/30 h-[40px] leading-[40px] rounded-[20px] px-[20px] border border-white/10 text-white focus:outline-none focus:border-[#D4AF37]/50 transition-all'/>

              //soyad
        <label htmlFor="" className='text-white/70 uppercase text-[10px] pl-[10px] tracking-[3px] mt-[15px]'>Surname</label>
        <input type="text" className='bg-black/30 h-[40px] leading-[40px] rounded-[20px] px-[20px] border border-white/10 text-white focus:outline-none focus:border-[#D4AF37]/50 transition-all'/>

              //email
        <label htmlFor="" className='text-white/70 uppercase text-[10px] pl-[10px] tracking-[3px] mt-[15px]'>Email</label>
        <input type="email" className='bg-black/30 h-[40px] leading-[40px] rounded-[20px] px-[20px] border border-white/10 text-white focus:outline-none focus:border-[#D4AF37]/50 transition-all'/>

               //pass
        <label htmlFor="" className='text-white/70 uppercase text-[10px] pl-[10px] tracking-[3px] mt-[15px]'>Password</label>
        <input type="password" className='bg-black/30 h-[40px] leading-[40px] rounded-[20px] px-[20px] border border-white/10 text-white focus:outline-none focus:border-[#D4AF37]/50 transition-all'/>
              //btn
              
        <button className='bg-[#D4AF37] text-black h-[45px] leading-[45px] rounded-[40px] border-none submitbtn uppercase font-bold tracking-[2px] text-[12px] hover:bg-white transition-all duration-300 mt-[30px]'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Register