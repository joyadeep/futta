import React from 'react'
import { useState } from 'react'
import van from '../assets/images/futtavan.png'
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import { useSwiper } from 'swiper/react';
import {CgSpinner} from 'react-icons/cg'

const LandingSlide = () => {
  const [isLoading,setIsLoading]=useState(false)
  const swiper=useSwiper()
  const [timedate,setTimedate]=useState(new Date());
    const [data,setData]=useState({service:'',location:'',destination:'',email:'',phone:'',date:''})
    
    const handleChange=(e)=>{
      swiper.autoplay.stop()
        setData({...data,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setIsLoading(true)
        console.log("timedata==",timedate)
        console.log("data ==",data)
        swiper.autoplay.start()
    }
  return (
    <div className=' h-screen flex flex-col sm:flex-col md:flex-row px-3 sm:px-3 md:px-20'>
      
    <div className=' w-full sm:w-full  md:w-2/5 flex flex-col gap-3 sm:gap-3 md:gap-10'>
        <p className='w-3/4 text-5xl sm:text-5xl md:text-6xl font-bold text-orange-400'>Moving & Vehicle Rentals</p>
        <p className='text-xl font-medium text-slate-700 '>Economic and reliable service is what we offer with pride.</p>
        <p className='text-xl font-medium hidden sm:hidden md:block'>Contact Us</p>
    </div>
    <div className='w-full  sm:w-full md:w-3/5  flex '>
      <div className='hidden sm:hidden md:block md:w-1/2 pt-20 px-4'>
        <img src={van} />
      </div>
      <div className='w-full sm:w-full md:w-1/2 pt-5 sm:pt-5 md:pt-0'>
        <p className='text-lg'>Professional Services</p>
        <p className='w-full sm:w-full md:w-3/4 text-3xl sm:text-3xl md:text-2xl  font-medium'>Get your transport quote</p>
        <form onSubmit={handleSubmit} className='w-full sm:w-full  flex flex-col gap-5 mt-5' >
            <select name="service" value={data.service} onChange={handleChange} placeholder='Select Service' className='text-lg border border-orange-300 w-full h-14 sm:h-14 md:h-10 pl-4 outline-none rounded-md' >
                <option value="" selected >Select Service</option>
                <option value="van rental" >Van Rental</option>
                <option value="trailor" >Trailor</option>
                <option value="van + trailor" >Van + Trailor</option>
                <option value="van + trailor with driver" >Van + Trailor with driver</option>
                <option value="van with driver" >Van with driver</option>
                <option value="complete moving" >Complete Moving</option>
            </select>
            <select name="location" value={data.location} onChange={handleChange} placeholder='Select Location' className='text-lg border border-orange-300 w-full h-14 sm:h-14 md:h-10 pl-4 outline-none rounded-md' >
                <option value="" >Select Location</option>
                <option value="neapl" >Nepal</option>
            </select>
            <select name="destination" value={data.destination} onChange={handleChange} placeholder='Select Destination' className='text-lg border border-orange-300 w-full h-14 sm:h-14 md:h-10 pl-4 outline-none rounded-md' >
                <option value="" >Select Destination</option>
                <option value="neapl" >Nepal</option>
            </select>
            <input type="email" name="email" value={data.email} onChange={handleChange} placeholder='Email' className=' text-lg border border-orange-300 w-full h-14 sm:h-14 md:h-10 pl-4 outline-none rounded-md' />
            <input type="text" name="phone" value={data.phone} onChange={handleChange} placeholder='Contact Number' className='text-lg border border-orange-300 w-full h-14 sm:h-14 md:h-10 pl-4 outline-none rounded-md' />
            {/* <input type="datetime-local" name="date" value={data.date} onChange={handleChange} placeholder='Select Location' className='text-lg border border-orange-300 w-full h-14 sm:h-14 md:h-10 pl-4 outline-none rounded-md' /> */}
            <DateTimePicker autoFocus={false} disableClock={true} className="text-lg border border-orange-300 w-full h-14 sm:h-14 md:h-10 pl-4 outline-none rounded-md" value={timedate} onChange={setTimedate} />
            <button disabled={isLoading} className='capitalize text-2xl sm:text-2xl md:text-xl text-white bg-orange-400 w-48 px-3 py-2 rounded-md flex items-center justify-center mx-auto gap-2 disabled:bg-gray-400 '>{isLoading && <CgSpinner size={20} className="animate-spin"/>}get new quote</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default LandingSlide