import React from 'react'
import map from '../assets/images/map.png'

const Footer = () => {
  return (
    <div className='h-screen w-full '>
        <div className='flex justify-between px-20 '>
            <div className='w-5/12'>
                <p className='text-xl'>Address : Viljelijäntie 4, 00410 Helsinki</p>
                <p className='text-xl'>
                Phone : +358 45 1812224
                </p>
                <p className='text-xl'>Email : futtarent@gmail.com</p>
                <p>NEWSLETTER</p>
                <div className='flex'>
                    <input type="email" placeholder="Enter your email"  className='text-xl bg-slate-300 h-10 pl-3'/>
                    <button type='submit' className='bg-orange-500 text-white px-3 font-medium'>subscribe</button>
                </div>
            </div>
            <img src={map} className="w-7/12" alt="" />
        </div>
        <div className='bg-blue-600 h-20 flex items-center justify-center '>
            <p className='text-white text-xl '>© 2023-Futta OY All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer