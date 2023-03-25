import React from 'react'
import map from '../assets/images/map.png'

const Footer = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-between pt-10 sm:pt-10 md:pt-20' style={{background:'#f7f7f9'}}>
        <div className='flex flex-col sm:flex-col md:flex-row justify-start sm:justify-start md:justify-between px-2 sm:px-2 md:px-20 h-full '>
            <div className='w-full sm:w-full md:w-5/12 flex flex-col gap-20 '>
               <div className='flex flex-col gap-5 sm:gap-5 md:gap-10  text-slate-600'>
               <p className='text-2xl'>Address : Viljelijäntie 4, 00410 Helsinki</p>
                <p className='text-2xl'>
                Phone : +358 45 1812224
                </p>
                <p className='text-2xl'>Email : futtarent@gmail.com</p>
               </div>
                <div className=' pb-5'>
                <p className='font-medium text-2xl pb-4'>Newsletter</p>
                <div className='flex'>
                    <input type="email" placeholder="Enter your email"  className='text-xl h-12 outline-none pl-3 rounded-l-md active:border-0'/>
                    <button type='submit' className='bg-orange-500 text-white px-3 font-medium rounded-r-md text-lg '>subscribe</button>
                </div>
                </div>
            </div>
            <img src={map} className=" w-full sm:w-full md:w-7/12 object-contain pt-10 sm:pt-10 md:pt-0 " alt="" />
        </div>
        <div className='bg-orange-400 h-20 flex items-center justify-center '>
            <p className='text-white text-xl '>© 2023-Futta OY All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer