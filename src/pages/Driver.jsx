import React, { useState } from 'react'
import NewRequest from '../components/NewRequest'
import CompletedRequest from '../components/CompletedRequest'
const Driver = () => {
  const [activeTab,setActiveTab]=useState('1')
  return (
    <div className='mt-5 h-auto w-full px-5' >
      <div className='flex'>
       <button onClick={()=>{setActiveTab("1")}}  className={activeTab==="1"?"bg-orange-300 font-medium px-6 rounded-md py-2":"bg-transparent px-6 rounded-md py-2"}>New Requests</button>
       <button onClick={()=>{setActiveTab("2")}} className={activeTab==="2"?"bg-orange-300 font-medium px-6 rounded-md py-2":"bg-transparent px-6 rounded-md py-2"}>Completed Request</button>
      </div>
      <div className='px-5 py-5'>
        {activeTab==="1" && <NewRequest/> }
        {activeTab==="2" && <CompletedRequest/> }
      </div>
    </div>
  )
}

export default Driver