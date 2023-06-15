import React, { useState } from 'react'
import van from '../assets/images/futtavan.png'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Autoplay } from "swiper";
import 'swiper/css';
import LandingSlide from '../components/LandingSlide';
import VehicleSliderButtons from '../components/VehicleSliderButtons';
import LandingSliderButtons from '../components/LandingSliderButtons';


const Landing = () => {
  return (
   <div className='h-fit mb-5 sm:mb-0   pb-5 sm:h-fit  md:h-fit w-full' style={{ backgroundColor: 'lavender' }}>
   {/* <Swiper
    modules={[Autoplay]}
    spaceBetween={50}
    slidesPerView={1}
    loop
    autoplay={
     { delay: 2500}
    }> */}
   {/* { */}
    {/* [1,2,3].map((index)=>(
      <SwiperSlide key={index}> */}
      <LandingSlide />
    {/* </SwiperSlide> */}
    {/* )) */}
   {/* } */}
  {/* <LandingSliderButtons/> */}
   {/* </Swiper> */}
   </div>
  )
}

export default Landing