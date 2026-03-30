import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useNavigate } from 'react-router'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
function Login() {
  const [user, setUser] = useState({
    pass:"",
    email:""
  })
  const [show, setShow] = useState(false)
  const [emailVal, setEmailVal] = useState(false)
  const [passVal, setPassVal] = useState(false)
  const [succes, setSucces] = useState(false)
  let navigate = useNavigate()
  const singIn = (e)=>{
    e.preventDefault()
    if(user.email && user.pass){
      fetch("http://localhost:3000/users")
     .then(res=>res.json())
     .then(data=>{
        let founded = data.find(e=>e.email == user.email)
        if(founded && founded.pass ==user.pass){
          localStorage.setItem("id", founded.id)
          navigate("/")
        }else{
          setSucces(true)
        }
     })
    }
    if(!user.email){
      setEmailVal(true)
    }
    if(!user.pass){
      setPassVal(true)
    }
  }
  return (

       <>
    <Helmet>
      <title>Login</title>
    </Helmet>
    <div className='text-white border-[1px] mt-[50px] border-solid border-[#222] md:w-[460px] md:h-[530px] w-[350px] h-[530px] rounded-[20px] login mx-auto'>
      <form className='submitform box-center flex flex-col gap-[5px]' onSubmit={singIn}>
        <h1 className='text-[28px] register text-center uppercase tracking-[4px] font-light'>
            LOG IN
        </h1>

              {/* //email */}
        <label htmlFor="" className='text-white/70 uppercase text-[10px] pl-[10px] tracking-[3px] mt-[15px]'>Email</label>
        <input type="email" className='bg-black/30 h-[40px] leading-[40px] rounded-[20px] px-[20px] border border-white/10 text-white focus:outline-none focus:border-[#D4AF37]/50 transition-all'
         onChange={(e) => {
          setUser({...user,email:e.target.value})
          setEmailVal(false)
          setSucces(false)
          }
          } 
          value={user.email}/>
        {emailVal && <span className='text-[red] text-[13px] px-[10px] font-bold'>Email boş ola bilməz</span>}
        


               {/* //pass */}
        <label htmlFor="" className='text-white/70 uppercase text-[10px] pl-[10px] tracking-[3px] mt-[15px]'>Password</label>
           <div className='relative bg-black/30 h-[40px] leading-[40px] rounded-[20px] px-[20px] border border-white/10'>
               <input type={show ? "text" : "password"} className=' text-white focus:outline-none focus:border-[#D4AF37]/50 transition-all' 
               onChange={(e) => {
                setUser({...user,pass:e.target.value})
                setPassVal(false)
                setSucces(false)
                }
              } 
              value={user.pass}/>
             {
               show ?<FaRegEye className='absolute right-[20px] top-[10px] cursor-pointer' onClick={()=>setShow(!show)}/>
              : <FaRegEyeSlash className='absolute right-[20px] top-[10px] cursor-pointer' onClick={()=>setShow(!show)}/>
             }
              
              {/* //btn */}
            </div>
           {passVal && <span className='text-[red] text-[13px] px-[10px] font-bold'>Şifrə boş ola bilməz</span>}
           {succes && <span className='text-[red] text-[13px] px-[10px] font-bold'>Email və ya Şifrə yanlışdır!</span>}


        <button className='bg-[#D4AF37] text-black h-[45px] leading-[45px] rounded-[40px] border-none submitbtn uppercase font-bold tracking-[2px] text-[12px] hover:bg-white transition-all duration-300 mt-[30px]'>
          Submit
        </button>
          <Link to="/" className='md:text-[15px] mb-[5px] text-[13px]'>
                Continue as Guest  <span className='text-[#C5A021] border-b-[1px] ml-[5px]'>  Home</span>
          </Link>
          <Link to="/register" className='md:text-[15px] text-[13px]'>
                Don't have an account? <span className='text-[#C5A021] border-b-[1px] ml-[5px] '>Register</span>
          </Link>
      </form>
    </div>
    </>

  )
}

export default Login
