import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import VehicleSlide from '../components/VehicleSlide';
import { Autoplay } from "swiper";

import VehicleSliderButtons from '../components/VehicleSliderButtons';

const VehicleSlider = () => {
  return (
    <div className='h-screen w-full px-10 py-10'>
        <p className='text-6xl font-bold text-orange-400 text-center mb-10'>Our Vehicles</p>

        <Swiper
        modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop
      autoplay={
       { delay: 2500,
        disableOnInteraction: false,}
      }
    >
     {
        [1,2,3].map((index)=>(
            <SwiperSlide key={index}>
                <VehicleSlide/>
            </SwiperSlide>
        ))
     }
   <VehicleSliderButtons/>
    </Swiper>
   

    </div>
  )
}

export default VehicleSlider