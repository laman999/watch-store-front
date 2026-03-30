import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, Navigate, useNavigate } from 'react-router'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";


function Register() {
  const [user, setUser] = useState({
    name:"",
    surname:"",
    pass:"",
    email:""
  });
const [unique, setUnique] = useState(false)
const [show, setShow] = useState(false)
  const Navigate = useNavigate()
  const addUser =(e)=>{
    e.preventDefault();
     if(user.name && user.surname && user.email && user.pass){
       fetch("http://localhost:3000/users")
       .then(res=>res.json())
       .then(data=>{
         let founded = data.find(e=>e.email == user.email)
        if(!founded){
                fetch("http://localhost:3000/users",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(user)
    })
    setUser({
       name:"",
    surname:"",
    pass:"",
    email:""
    })
    toast.success('Qeydiyyatınız uğurla tamamlandı', {
position: "top-center",
autoClose: 2997,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: false,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
setTimeout(() => {
            Navigate('/login'); 
        }, 3000);
        }else{
         setUnique(true)
        }

       })
     }else{
      alert("Bütün mətumatları tam daxil edin.")
     }

  }
  
  return (
    <>
        <ToastContainer
position="top-center"
autoClose={2997}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover={false}
theme="light"
transition={Bounce}
/>
      <Helmet>
      <title>Register</title>
    </Helmet>
    <div className='text-white border-[1px] mt-[50px] border-solid border-[#222] md:w-[460px] md:h-[630px] w-[350px] h-[630px] rounded-[20px] login mx-auto'>
      <form className='submitform box-center flex flex-col gap-[5px]' onSubmit={addUser}>
        <h1 className='text-[28px] register text-center uppercase tracking-[4px] font-light'>
            Register
        </h1>

                {/* //ad  */}
        <label htmlFor="" className='text-white uppercase text-[10px] pl-[10px] tracking-[3px]'>Username</label>
        <input type="text" className='bg-black/30 h-[40px] leading-[40px] rounded-[20px] px-[20px] border border-white/10 text-white focus:outline-none focus:border-[#D4AF37]/50 transition-all' onChange={(e) => setUser({...user,name:e.target.value})} value={user.name}/>

              {/* //soyad */}
        <label htmlFor="" className='text-white/70 uppercase text-[10px] pl-[10px] tracking-[3px] mt-[15px]'>Surname</label>
        <input type="text" className='bg-black/30 h-[40px] leading-[40px] rounded-[20px] px-[20px] border border-white/10 text-white focus:outline-none focus:border-[#D4AF37]/50 transition-all' onChange={(e) => setUser({...user,surname:e.target.value})} value={user.surname}/>

              {/* //email */}
        <label htmlFor="" className='text-white/70 uppercase text-[10px] pl-[10px] tracking-[3px] mt-[15px]'>Email</label>
        <input type="email" className='bg-black/30 h-[40px] leading-[40px] rounded-[20px] px-[20px] border border-white/10 text-white focus:outline-none focus:border-[#D4AF37]/50 transition-all' onChange={(e) => {
          setUser({...user,email:e.target.value})
          setUnique(false)
          }} value={user.email}/>
{unique && <span className='text-[red] text-[13px] px-[10px] font-bold'>Bu email ilə qeydiyyatdan keçilib.</span>
}
               {/* //pass */}
        <label htmlFor="" className='text-white/70 uppercase text-[10px] pl-[10px] tracking-[3px] mt-[15px]'>Password</label>
      <div className='relative bg-black/30 h-[40px] leading-[40px] rounded-[20px] px-[20px] border border-white/10'>
          <input type={show ? "text" : "password"} className=' text-white focus:outline-none focus:border-[#D4AF37]/50 transition-all' onChange={(e) => setUser({...user,pass:e.target.value})} value={user.pass}/>
        {
          show ?<FaRegEye className='absolute right-[20px] top-[10px] cursor-pointer' onClick={()=>setShow(!show)}/>
         : <FaRegEyeSlash className='absolute right-[20px] top-[10px] cursor-pointer' onClick={()=>setShow(!show)}/>
        }

      </div>

              
              {/* //btn */}
            
        <button className='bg-[#D4AF37] text-black h-[45px] leading-[45px] rounded-[40px] border-none submitbtn uppercase font-bold tracking-[2px] text-[12px] hover:bg-white transition-all duration-300 mt-[30px]'>
          Submit
        </button>
          <Link to="/" className='md:text-[15px] mb-[5px] text-[13px]'>
                Continue as Guest  <span className='text-[#C5A021] border-b-[1px] ml-[5px]'>  Home</span>
              </Link>
                  <Link to="/login" className='md:text-[15px] text-[13px]'>
                Already have an account? <span className='text-[#C5A021] border-b-[1px] ml-[5px] '>Log in</span>
              </Link>
      </form>
    </div>
    </>
  )
}

export default Register