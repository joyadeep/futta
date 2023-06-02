import React from 'react'
import trailer from '../assets/images/trailer.jpg'

const TrailerCard = () => {
  return (
    <div className='bg-gray-200 cursor-pointer duration-1000 hover:bg-white hover:drop-shadow-xl h-32 sm:h-96 md:h-fit py-5 sm:py-2 md:py-10 px-1 rounded-lg'>
        <img src={trailer} className="object-contain h-28 sm:h-32 md:h-auto mx-auto " />
        <p className='text-center font-bold text-2xl'>Trailer</p>

    </div>
  )
}

export default TrailerCard