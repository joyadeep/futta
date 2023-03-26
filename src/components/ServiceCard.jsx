import React from 'react'
import set from '../assets/images/ser1.png'

const ServiceCard = ({title,color,image}) => {
  return (
    <div className='w-56 mx-auto text-center'>
        <div className={`${color} h-44 w-44 mx-auto rounded-full flex justify-center items-center`}>
            <img src={image} />
        </div>
        <p className='text-xl font-semibold text-slate-500 mt-4'>{title}</p>
    </div>
  )
}

export default ServiceCard