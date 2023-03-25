import React from 'react'
import ServiceCard from '../components/ServiceCard'
import ser1 from '../assets/images/ser1.png'
import ser2 from '../assets/images/ser2.png'
import ser3 from '../assets/images/ser3.png'
import ser4 from '../assets/images/ser4.png'
import ser5 from '../assets/images/ser5.png'

const data=[
    {
        id:1,
        image:ser2,
        title:'Complete Moving',
        bgColor:'bg-blue-400'
    },
    {
        id:2,
        image:ser3,
        title:'Rentals',
        bgColor:'bg-orange-500'
    },
    {
        id:3,
        image:ser3,
        title:'Furtinure pick-up & dropoff',
        bgColor:'bg-yellow-400'
    },
    {
        id:4,
        image:ser4,
        title:'Package pick-up & dropoff',
        bgColor:'bg-orange-500'
    },
    {
        id:5,
        image:ser5,
        title:'100% safe',
        bgColor:'bg-yellow-400'
    }
]

const Services = () => {
  return (
    <div className='h-screen w-full bg-gray-100 flex flex-col items-center justify-center gap-3 px-10'>
        <p className='text-orange-400 text-6xl font-bold'>Our Services</p>
        <p className='text-lg font-medium text-center mx-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, There</p>
        <div className='flex justify-between w-full'>
            {
                data.map((item)=>(
                    <ServiceCard key={item.id} title={item.title} image={item.image} color={item.bgColor} />
                ))
            }
        </div>
        <p className=' mt-4 text-xl font-medium w-full'>Read More</p>
    </div>
  )
}

export default Services