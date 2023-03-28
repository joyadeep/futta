import React from 'react'
import { useState } from 'react'
import AllReservation from '../components/reservation/AllReservation'
import CompletedReservation from '../components/reservation/CompletedReservation'
import MyReservation from '../components/reservation/MyReservation'
import NewReservation from '../components/reservation/NewReservation'

const Reservation = () => {
    const [activeTab,setActiveTab]=useState("1")
  return (
    <div className='mt-5 h-full w-full ' >
    <div className='flex overflow-x-auto no-scrollbar'>
     <button onClick={()=>{setActiveTab("1")}}  className={activeTab==="1"?"bg-orange-300 whitespace-nowrap text-white px-6 rounded-md py-2":" hover:bg-orange-100 whitespace-nowrap bg-transparent px-6 rounded-md py-2"}>All Reservation</button>
     <button onClick={()=>{setActiveTab("2")}} className={activeTab==="2"?"bg-orange-300 whitespace-nowrap text-white px-6 rounded-md py-2":" hover:bg-orange-100 whitespace-nowrap bg-transparent px-6 rounded-md py-2"}>New Reservation</button>
     <button onClick={()=>{setActiveTab("3")}} className={activeTab==="3"?"bg-orange-300 whitespace-nowrap text-white px-6 rounded-md py-2":"hover:bg-orange-100 whitespace-nowrap bg-transparent px-6 rounded-md py-2"}>Completed</button>
     <button onClick={()=>{setActiveTab("4")}} className={activeTab==="4"?"bg-orange-300 whitespace-nowrap text-white px-6 rounded-md py-2":"hover:bg-orange-100 whitespace-nowrap bg-transparent px-6 rounded-md py-2"}>My Reservation</button>
    </div>
    <div className='py-5'>
      {activeTab==="1" && <AllReservation/> }
      {activeTab==="2" && <NewReservation/> }
      {activeTab==="3" && <CompletedReservation/> }
      {activeTab==="4" && <MyReservation/> }
    </div>
  </div>
  )
}

export default Reservation