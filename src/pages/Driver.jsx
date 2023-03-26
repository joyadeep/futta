import React, { useState } from 'react'
import NewRequest from '../components/NewRequest'
import CompletedRequest from '../components/CompletedRequest'
const Driver = () => {
  const [activeTab,setActiveTab]=useState('1')
  return (
    <div className='mt-5 h-full w-full ' >
      <div className='flex overflow-x-auto no-scrollbar'>
       <button onClick={()=>{setActiveTab("1")}}  className={activeTab==="1"?"bg-orange-300 whitespace-nowrap text-white px-6 rounded-md py-2":" whitespace-nowrap bg-transparent px-6 rounded-md py-2"}>New Requests</button>
       <button onClick={()=>{setActiveTab("2")}} className={activeTab==="2"?"bg-orange-300 whitespace-nowrap text-white px-6 rounded-md py-2":" whitespace-nowrap bg-transparent px-6 rounded-md py-2"}>Completed Request</button>
      </div>
      <div className='py-5'>
        {activeTab==="1" && <NewRequest/> }
        {activeTab==="2" && <CompletedRequest/> }
      </div>
    </div>
  )
}

export default Driver