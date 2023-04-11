import React from 'react'
import about from '../assets/images/about.png'

const About = () => {
  return (
    <div className='h-fit sm:h-screen md:h-screen pb-3 sm:pb-0 w-full flex flex-col sm:flex-col md:flex-row items-center justify-around sm:justify-around md:justify-between px-5 sm:px-5 md:px-24'>
        <img data-aos="fade-up" src={about} className="object-contain h-auto sm:h-auto md:h-3/4 " />
        <div data-aos="fade-down" className='text-center sm:text-center md:text-left w-full pl-0 sm:pl-0 md:pl-5'>
            <p className='text-orange-400 text-5xl sm:text-6xl font-bold '>About Us</p>
            <p className='text-slate-500 mt-4 text-md sm:text-lg font-medium'>Futta is Helsinki, Finland based logistic company. We provide economic and reliable vehicle rental and moving service all over Finland.</p>
            <p className='mt-4 text-xl sm:text-2xl font-medium after:content-[hello]'>Read more</p>
        </div>
    </div>
  )
}

export default About