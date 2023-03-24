import React from 'react'
import van from '../assets/images/futtavan.png'

const VehicleCard = () => {
  return (
    <div className='bg-gray-200 cursor-pointer duration-1000 hover:bg-white hover:drop-shadow-xl h-fit py-10 px-3 rounded-lg'>
        <img src={van} className="object-contain" />
    </div>
  )
}

export default VehicleCard