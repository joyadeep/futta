import React from 'react'
import VehicleCard from './VehicleCard'
import TrailerCard from './TrailerCard'

const VehicleSlide = () => {
  return (
    <div className='h-fit'>
       <div className='flex flex-col sm:flex-col md:flex-row justify-between gap-4 mb-5'>
       <TrailerCard/>
       <VehicleCard/>
       <TrailerCard/>
       <VehicleCard/>


       </div>
    </div>
  )
}

export default VehicleSlide