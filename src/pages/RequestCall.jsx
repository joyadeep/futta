import React, { useState } from 'react'
import { toast } from 'react-toastify'
import van from '../assets/images/futtavan.png'

const RequestCall = () => {
    const [data,setData]=useState({name:'',email:'',phone:'',message:''})
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        toast.success("clicked")
        console.log("data=",data)
    }
  return (
    <div className='h-screen w-full px-10 pt-5'>
        <p className='capitalize text-6xl font-bold text-orange-400'>Request a call for you</p>
        <div className='flex  w-full justify-center pt-10'>
            <form onSubmit={handleSubmit} className='w-full sm:full md:w-2/5 flex flex-col gap-5'>
                <input type="text" name="name" value={data.name} onChange={handleChange} placeholder='Name' className=' rounded-md text-xl w-full border border-orange-500 outline-none pl-5 h-14' />
                <input type="text" name='email' value={data.email} onChange={handleChange}  placeholder='Email' className=' rounded-md text-xl w-full border border-orange-500 outline-none pl-5 h-14' />
                <input type="text" name='phone' value={data.phone} onChange={handleChange} placeholder='Phone Number' className=' rounded-md text-xl w-full border border-orange-500 outline-none pl-5 h-14' />
                <textarea rows="5" name='message' value={data.message} onChange={handleChange}   placeholder='Message' className=' resize-none rounded-md text-xl w-full border border-orange-500 outline-none pl-5 pt-3' />
                <button type="submit" className='rounded-full text-white text-lg font-semibold bg-orange-500 w-fit mx-auto px-10 py-3'>SEND</button>
            </form>
            <img src={van} className="hidden sm:hidden md:block w-3/5 object-contain pl-5" />
        </div>
    </div>
  )
}

export default RequestCall