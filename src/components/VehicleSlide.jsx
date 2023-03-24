import React from 'react'
import VehicleCard from './VehicleCard'

const VehicleSlide = () => {
  return (
    <div className=' h-fit'>
       <div className='flex justify-between gap-7 mb-5'>
       <VehicleCard/>
        <VehicleCard/>
        <VehicleCard/>
       </div>
        <p className='text-center font-bold text-2xl'>VAN</p>
    </div>
  )
}

export default VehicleSlide