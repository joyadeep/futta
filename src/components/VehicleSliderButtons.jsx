import React from 'react'
import {BsChevronLeft,BsChevronRight} from 'react-icons/bs'
import { useSwiper } from 'swiper/react'

const VehicleSliderButtons = () => {
    const swiper=useSwiper()
  return (
    <div className='flex justify-center mt-5 gap-5'>
    <div onClick={()=>{swiper.slidePrev()}} className='bg-gray-300 p-1 rounded-md cursor-pointer'>
    <BsChevronLeft size={32}/>
    </div>
    <div onClick={()=>{swiper.slideNext()}} className='bg-gray-300 p-1 rounded-md cursor-pointer'>
    <BsChevronRight size={32}/>
    </div>
 </div>
  )
}

export default VehicleSliderButtons