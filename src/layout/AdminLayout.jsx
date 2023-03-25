import React from 'react'
import {Outlet,NavLink} from 'react-router-dom'
import {FiMenu} from 'react-icons/fi'
import { useState } from 'react'
const AdminLayout = () => {
    const [menu,setMenu]=useState('block')

    const handleToggle=()=>{
        setMenu(menu==="block"?"hidden":"block")
    }
  return (
    <div className='w-full h-screen flex'>
        {/* <div className='w-2/12 bg-slate-100 flex flex-col px-2 gap-1 '> */}
        <div className={`${menu} w-2/12 bg-slate-100 flex flex-col px-2 gap-1`}>
            <p className='text-3xl font-semibold mb-5'>Admin</p>
            <NavLink to="/dashboard" className={({ isActive }) =>
    isActive ? "bg-orange-300 rounded-md pl-4 text-xl py-1" : " rounded-md pl-4 text-xl py-1"
  } >Home </NavLink>
            <NavLink to="/driver" className={({ isActive }) =>
    isActive ? "bg-orange-300 rounded-md pl-4 text-xl py-1" : " rounded-md pl-4 text-xl py-1"
  }>Drivers </NavLink>
            <NavLink to="/login" className={({ isActive }) =>
    isActive ? "bg-orange-300 rounded-md pl-4 text-xl py-1" : " rounded-md pl-4 text-xl py-1"
  } >Requests</NavLink>
        </div>
        <div className='w-10/12 flex-grow  bg-slate-200'>
            <div className='pl-2 pt-1'>
                <FiMenu size={32} onClick={handleToggle} className="cursor-pointer" />
            </div>
            <Outlet/>
        </div>
    </div>
  )
}

export default AdminLayout