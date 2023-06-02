import React from 'react'
import { useState } from 'react'
import van from '../assets/images/futtavan.png'
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import { useSwiper } from 'swiper/react';
import {CgSpinner} from 'react-icons/cg'
import { getQuote } from '../helper/customerHelper';
import { toast } from 'react-toastify';

const location=[
  "Helsinki",
  "Vanta",
  "Espoo",
  "Other city in Finland"
]

const LandingSlide = () => {
  const [isLoading,setIsLoading]=useState(false)
  const swiper=useSwiper()
  const [timedate,setTimedate]=useState(new Date());
  const [data,setData]=useState({location:'',destination:'',email:'',contact_number:'',book_date:new Date()})
  const [error,setError]=useState(' ');  
    const handleChange=(e)=>{
      // swiper.autoplay.stop()
        setData({...data,[e.target.name]:e.target.value})
    }
    const handleDateChange=(book_date)=>{
      setData((preval)=>({
        ...preval,
        book_date
      }))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setIsLoading(true)
        const newDate=data.book_date.toLocaleString();
        const newData={...data,book_date:newDate}
        getQuote(newData).then((res)=>{
          if (res.status===200){
            setData({services:"",location:'',destination:'',email:'',contact_number:'',book_date:new Date()})
            setError('')
            toast.success("Transport quote created !")
          }
          else if (res.status===202){
            console.log("error",res)
            setError(res.data.error);
          }
        }).finally(()=>{
          setIsLoading(false);
          // swiper.autoplay.start()
        })
        // onsuccess swipter autoplay start | clear form | toast message
    }
  return (
    <div className=' h-fit pb-5 flex flex-col sm:flex-col md:flex-row px-3 sm:px-3 md:px-20'>
      
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
        <form onSubmit={handleSubmit} className='w-full sm:w-full  flex flex-col gap-2 mt-5' >
            <div>
            <select name="services" value={data.service} onChange={handleChange} placeholder='Select Service' className=' text-lg border border-orange-300 w-full h-10 sm:h-14 md:h-10 pl-4 outline-none rounded-md' >
                <option value="" >Select Service</option>
                <option value="van rental" >Van Rental</option>
                <option value="trailor" >Trailer</option>
                <option value="van + trailor" >Van + Trailer</option>
                <option value="van + trailor with driver" >Van + Trailer with driver</option>
                <option value="van with driver" >Van with driver</option>
                <option value="complete moving" >Complete Moving</option>
            </select>
            <p className='text-red-500 pl-3 h-3 text-xs'>{error.services && error?.services[0]}</p>
            </div>
           <div>
           <select name="location" value={data.location} onChange={handleChange} placeholder='Select Location' className='text-lg border border-orange-300 w-full h-10 sm:h-14 md:h-10 pl-4 outline-none rounded-md' >
                <option value="" >Select Location</option>
                {
                  location.map((item,index)=>(
                    <option key={index} value={item} >{item}</option>
                  ))
                }
            </select>
            <p className='text-red-500 pl-3 h-3 text-xs'>{error.location && error?.location[0]}</p>
           </div>
           <div>
           <select name="destination" value={data.destination} onChange={handleChange} placeholder='Select Destination' className='text-lg border border-orange-300 w-full h-10 sm:h-14 md:h-10 pl-4 outline-none rounded-md' >
                <option value="" >Select Destination</option>
                {
                  location.map((item,index)=>(
                    <option key={index} value={item} >{item}</option>
                  ))
                }
            </select>
           <p className='text-red-500 pl-3 h-3 text-xs'>{error.destination && error?.destination[0]}</p>
           </div>
           <div>
           <input type="email" name="email" value={data.email} onChange={handleChange} placeholder='Email' className=' text-lg border border-orange-300 w-full h-10 sm:h-14 md:h-10 pl-4 outline-none rounded-md' />
           <p className='text-red-500 pl-3 h-3 text-xs'>{error.email && error?.email[0]}</p>
           </div>
           <div>
           <input type="text" name="contact_number" value={data.contact_number} onChange={handleChange} placeholder='Contact Number' className='text-lg border border-orange-300 w-full h-10 sm:h-14 md:h-10 pl-4 outline-none rounded-md' />
           <p className='text-red-500 pl-3 h-3 text-xs'>{error.contact_number && error?.contact_number[0]}</p>
           </div>
           <div>
           <DateTimePicker id="book_date"  format="yyyy-MM-dd hh:mm a" autoFocus={false} disableClock={true} className="text-lg border border-orange-300 w-full h-10 sm:h-14 md:h-10 pl-4 outline-none rounded-md" value={data.book_date} onChange={handleDateChange} />
         {/* <p className='text-red-500 pl-3 text-xs'>error</p> */}
           </div>
            <button disabled={isLoading} className='capitalize text-xl sm:text-2xl md:text-xl text-white bg-orange-400 w-48 px-3 py-2 rounded-md flex items-center justify-center mx-auto gap-2 disabled:bg-gray-400 '>{isLoading && <CgSpinner size={20} className="animate-spin"/>}get new quote</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default LandingSlide