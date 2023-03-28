import React from 'react'
import { useEffect } from 'react'
import { getNewRequests,completeRequestCall } from '../helper/adminHelper'
import { useSelector, useDispatch } from 'react-redux'
import {completeRequest, getNewRequest} from '../redux/feature/adminSlice'
import {toast} from 'react-toastify'

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

  const handleComplete=(id)=>{
    completeRequestCall(id).then((res)=>{
      if(res.status===200){
        dispatch(completeRequest(res.data.data))
        toast.success("Request completed !")
      }
    }).catch((error)=>{console.log("error",error)})
    .finally(()=>{
    
    })
  }

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
          request?.map((item,index)=>(
            <tr key={item.id} className='text-left h-10'>
            <th className='pl-2'>{index+1}</th>
            <td className='px-5 sm:px-5 md:px-0 whitespace-nowrap'>{item.name}</td>
            <td className='px-5 sm:px-5 md:px-0'>{item.phone_number}</td>
            <td className='px-5 sm:px-5 md:px-0'>{item.email}</td>
            <td className='px-5 sm:px-5 md:px-0'>{item.message}</td>
            <td className='px-5 sm:px-5 md:px-0'>
            <div className={`text-center w-fit px-2 font-medium rounded-lg text-xs ${item.status==="new" && "bg-purple-200 text-purple-500 "}`} >{item.status}</div>
            </td>
            <td className='px-5 sm:px-5 md:px-0'>
              <div>
                <button onClick={()=>{handleComplete(item.id)}} className='bg-green-500 text-sm font-medium py-1 px-2 rounded-md text-white '>complete</button>
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