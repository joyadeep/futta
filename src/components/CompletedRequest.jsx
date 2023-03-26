import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getCompletedRequest} from '../redux/feature/adminSlice'
import {getCompletedRequests} from '../helper/adminHelper'

const CompletedRequest = () => {
  const completed=useSelector((state)=>state.admin.completedRequest)
  const dispatch=useDispatch()

  useEffect(()=>{
    getCompletedRequests().then((res)=>{
      if(res.status===200){
        console.log("res==",res)
        dispatch(getCompletedRequest(res.data.data))
      }
    })
  },[dispatch])
  return (
    <div className=''>
    <table className=' w-full rounded-lg overflow-hidden shadow-md'>
      <thead >
        <tr className='text-md py-2 text-left bg-slate-300 h-10'>
          <th className='pl-2'>#</th>
          <th className='px-5 sm:px-5 md:px-0'>Name</th>
          <th className='px-5 sm:px-5 md:px-0 whitespace-nowrap'>Phone Number</th>
          <th className='px-5 sm:px-5 md:px-0'>Email</th>
          <th className='px-5 sm:px-5 md:px-0'>Message</th>
          <th className='px-5 sm:px-5 md:px-0'>Status</th>
        </tr>
      </thead>
      <tbody>
        {
          console.log("data==",completed)
        }
       {
        
        completed?.map((item)=>(
          <tr key={item.id} className='text-left h-10'>
          <th className='pl-2'>{item.id}</th>
          <td className='px-5 whitespace-nowrap sm:px-5 md:px-0'>{item.name}</td>
          <td className='px-5 sm:px-5 md:px-0'>{item.phone_number}</td>
          <td className='px-5 sm:px-5 md:px-0'>{item.email}</td>
          <td className='px-5 whitespace-nowrap sm:px-5 md:px-0'>{item.message}</td>
          <td className='px-5 sm:px-5 md:px-0'>
            <div className='bg-green-200 text-green-600 font-semibold w-fit text-xs px-3 rounded-xl py-1'>{item.status}</div>
          </td>
        </tr>
        ))
       }
      </tbody>
    </table>
  </div>
  )
}

export default CompletedRequest