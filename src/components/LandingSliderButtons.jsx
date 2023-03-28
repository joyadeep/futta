import React from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { useSwiper } from 'swiper/react'

const LandingSliderButtons = () => {
    const swiper=useSwiper()
  return (
    <div className='hidden sm:hidden md:flex absolute top-1/3 right-1 z-50  flex-col gap-3'>
    <div onClick={()=>{swiper.slidePrev()}} className='bg-gray-300 p-1 rounded-xl cursor-pointer'>
    <BsChevronLeft size={32}/>
    </div>
    <div onClick={()=>{swiper.slideNext()}} className='bg-gray-300 p-1 rounded-xl cursor-pointer'>
    <BsChevronRight size={32}/>
    </div>
 </div>
  )
}

export default LandingSliderButtons