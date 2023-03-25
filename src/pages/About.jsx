import React from 'react'
import about from '../assets/images/about.png'

const About = () => {
  return (
    <div className='h-screen w-full flex flex-col sm:flex-col md:flex-row items-center justify-around sm:justify-around md:justify-between px-5 sm:px-5 md:px-24'>
        <img src={about} className="object-contain h-auto sm:h-auto md:h-3/4 " />
        <div className='text-left w-full pl-5'>
            <p className='text-orange-400 text-6xl font-bold '>About Us</p>
            <p className='text-slate-500 mt-4 text-lg font-medium'>Futta is Helsinki, Finland based logistic company. We provide economic and reliable vehicle rental and moving service all over Finland.</p>
            <p className='mt-4 text-2xl font-medium after:content-[hello]'>Read more</p>
        </div>
    </div>
  )
}

export default About