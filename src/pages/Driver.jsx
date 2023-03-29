import React, { useState } from 'react'
import AllDriverList from '../components/driver/AllDriverList'
import PendingDriver from '../components/driver/PendingDriver'
import Modal from '../components/Modal'
const Driver = () => {
  const [activeTab,setActiveTab]=useState('1')
  const [isOpen,setIsOpen]=useState(false)
  return (
    <>
  { isOpen && <Modal/> }

    <div className='mt-5 h-full w-full static ' >
        <button onClick={()=>{setIsOpen(true)}} className='fixed top-1 right-3 bg-green-500 px-4 py-2 rounded-md text-white ml-auto'>Create Driver</button>
      <div className='flex overflow-x-auto no-scrollbar'>
       <button onClick={()=>{setActiveTab("1")}}  className={activeTab==="1"?"bg-violet-500 whitespace-nowrap text-white px-6 rounded-md py-2 ":" whitespace-nowrap bg-transparent px-6 rounded-md py-2 hover:bg-violet-200"}>Show All Driver</button>
       <button onClick={()=>{setActiveTab("2")}} className={activeTab==="2"?"bg-violet-500 whitespace-nowrap text-white px-6 rounded-md py-2":" whitespace-nowrap bg-transparent px-6 rounded-md py-2 hover:bg-violet-200 "}>Pending Driver</button>
      </div>
      <div className='py-5'>
        {activeTab==="1" && <AllDriverList/> }
        {activeTab==="2" && <PendingDriver/> }
      </div>
    </div>
    </>
  )
}

export default Driver