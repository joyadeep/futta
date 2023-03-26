import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { Navigate, NavLink, Outlet,useNavigate } from 'react-router-dom'

const ProtectedRoute = ({redirectPath="/"}) => {
    const navigate=useNavigate()
    const [menu, setMenu] = useState("block");

    const handleToggle = () => {
      setMenu(menu === "block" ? "hidden" : "block");
    };
    const handleLogout=()=>{
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      navigate("/login")
    }
  if(!localStorage.getItem("token")){
    return <Navigate to={redirectPath} replace />
  }
  return <div className="w-full h-screen flex overflow-hidden">
    <div className={`${menu} w-1/2 sm:w-1/2 md:w-2/12 bg-slate-100 flex flex-col px-2 gap-1`}>
      <p className="text-3xl font-semibold mb-5">Admin</p>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive
            ? "bg-orange-300 rounded-md pl-4 text-xl py-1"
            : " rounded-md pl-4 text-xl py-1"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/quote"
        className={({ isActive }) =>
          isActive
            ? "bg-orange-300 rounded-md pl-4 text-xl py-1"
            : " rounded-md pl-4 text-xl py-1"
        }
      >
        Transport Quote
      </NavLink>
      <NavLink
        to="/driver"
        className={({ isActive }) =>
          isActive
            ? "bg-orange-300 rounded-md pl-4 text-xl py-1"
            : " rounded-md pl-4 text-xl py-1"
        }
      >
        Drivers
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive
            ? "bg-orange-300 rounded-md pl-4 text-xl py-1"
            : " rounded-md pl-4 text-xl py-1"
        }
      >
        Requests
      </NavLink>
      <button onClick={handleLogout} className=" rounded-md  text-xl text-left pl-4 py-1 text-red-500 hover:bg-red-100">Logout</button>
    </div>
    <div className="w-1/2 h-9/12  pb-20 overflow-hidden sm:w-1/2 md:w-10/12 px-2 flex-grow">
      <div className=" pt-1">
        <FiMenu onClick={handleToggle} className="cursor-pointer text-4xl" />
      </div>
      <div className='h-full overflow-y-auto'>
        <Outlet/>
      </div>
    </div>
  </div>
  }

export default ProtectedRoute