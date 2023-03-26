import React from 'react'
import { useEffect } from 'react'
import { getNewRequests } from '../helper/adminHelper'
import { useSelector, useDispatch } from 'react-redux'
import {getNewRequest} from '../redux/feature/adminSlice'

const NewRequest = () => {
  const request= useSelector((state)=>state.admin.newRequest)
  const dispatch=useDispatch()
  useEffect(()=>{
    getNewRequests().then((res)=>{
      if(res.status===200){
        dispatch(getNewRequest(res.data.data))
      }
    }).catch((error)=>{
      console.log("error",error)
    })
  },[])
  return (
      <table className=' w-full rounded-lg overflow-hidden shadow-md overflow-y-auto'>
        <thead >
          <tr className='text-md py-2 text-left bg-slate-300 h-10'>
            <th className='pl-2'>#</th>
            <th className='px-5 sm:px-5 md:px-0'>Name</th>
            <th className='px-5 sm:px-5 md:px-0 whitespace-nowrap '>Phone Number</th>
            <th className='px-5 sm:px-5 md:px-0'>Email</th>
            <th className='px-5 sm:px-5 md:px-0'>Message</th>
            <th className='px-5 sm:px-5 md:px-0'>Status</th>
            <th className='px-5 sm:px-5 md:px-0'>Action</th>
          </tr>
        </thead>
        <tbody>
         {
          request?.map((index)=>(
            <tr key={index} className='text-left h-10'>
            <th className='pl-2'>1</th>
            <td className='px-5 sm:px-5 md:px-0 whitespace-nowrap'>Test name</td>
            <td className='px-5 sm:px-5 md:px-0'>981234554444</td>
            <td className='px-5 sm:px-5 md:px-0'>test@testmail.com</td>
            <td className='px-5 sm:px-5 md:px-0'>Nice</td>
            <td className='px-5 sm:px-5 md:px-0'>nothing</td>
            <td className='px-5 sm:px-5 md:px-0'>
              <div>
                <button className='bg-green-500 text-sm font-medium py-1 px-2 rounded-md text-white '>complete</button>
              </div>
            </td>
          </tr>
          ))
         }
        </tbody>
      </table>
  )
}

export default NewRequest