import React from 'react'
import van from '../assets/images/futtavan.png'

const VehicleCard = () => {
  return (
    <div className='bg-gray-200 cursor-pointer duration-1000 hover:bg-white hover:drop-shadow-xl h-36 sm:h-36 md:h-fit py-2 sm:py-2 md:py-10 px-3 rounded-lg'>
        <img src={van} className="object-contain h-32 sm:h-32 md:h-auto mx-auto " />
    </div>
  )
}

export default VehicleCard