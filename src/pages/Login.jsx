import React, { useState } from 'react'
import futta from '../assets/images/futta.png'
import { login } from '../helper/adminHelper'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()
    const [data,setData]=useState({email:'',password:''})
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        login(data).then((res)=>{
          if(res.status===203)
          toast.error(res.data.message)
          else if(res.status===200){
            localStorage.setItem("token",res.data.token)
            localStorage.setItem("name",res.data.name)
            navigate("/dashboard")
          }
          else{
            toast.error(res.data.error)
          }
        }).catch((error)=>{
          console.log("error",error)
        }).finally(()=>{})
    }
  return (
    <div className='h-screen w-full flex items-center justify-center'>
        <form onSubmit={handleSubmit} className='w-11/12 sm:w-11/12 md:w-1/3 flex flex-col gap-7 shadow-lg px-10 py-5 rounded-lg'>
            <div className='-mt-8'>
            <img src={futta} className='w-32 object-contain mx-auto' />
            <p className='text-center text-2xl font-medium  tracking-tighter -mt-5 text-slate-700'>SignIn</p>
            </div>
           <div className=''>
           <label htmlFor='email' className='text-xl block'>Email</label>
            <input type="email" name='email' value={data.email} onChange={handleChange} className='w-full text-lg outline-none border border-orange-400 rounded-md h-11 pl-4'  />
            <p className='text-sm h-4 text-red-500'></p>
           </div>
           <div className=''>
           <label htmlFor='password' className='text-xl block'>Password</label>
            <input type="password" name='password' value={data.password} onChange={handleChange} className='w-full text-lg outline-none border border-orange-400 rounded-md h-11 pl-4'  />
            <p className='text-sm h-4 text-red-500'></p>
           </div>
           <button type='submit' disabled={!data.email || !data.password} className='bg-orange-400 text-white text-xl w-full  rounded-md mx-auto px-4 py-2 disabled:bg-orange-300 '>Login</button>
        </form>
    </div>
  )
}

export default Login