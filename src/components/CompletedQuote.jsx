import React from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {getCompletedQuote} from '../redux/feature/adminSlice'
import {getCompletedTransportQuotes} from '../helper/adminHelper'
import { useEffect } from 'react';

const CompletedQuote = () => {
  const completedQuotes=useSelector((state)=>state.admin.completedTransprtQuote);
  const dispatch=useDispatch()

  useEffect(()=>{
    getCompletedTransportQuotes().then((res)=>{
      if(res.status===200){
        dispatch(getCompletedQuote(res.data.data))
      }
    }).catch((error)=>{
      console.log("error",error)
    })
  },[])
  return (
    <table className=' w-full rounded-lg overflow-hidden shadow-md'>
    <thead >
    <tr className='text-md py-2 text-left bg-slate-300 h-10'>
        <th className='pl-2'>#</th>
        <th className='px-5 sm:px-5 md:p-0 whitespace-nowrap '>Phone Number</th>
        <th className='px-5 sm:px-5 md:p-0'>Email</th>
        <th className='px-5 sm:px-5 md:p-0'>Location</th>
        <th className='px-5 sm:px-5 md:p-0 whitespace-nowrap '>Book Date</th>
        <th className='px-5 sm:px-5 md:p-0'>Destination</th>
        <th className='px-5 sm:px-5 md:p-0'>State</th>
      </tr>
    </thead>
    <tbody>
     {
        completedQuotes?.map((item)=>(
          <tr key={item.id} className='text-left h-10'>
          <th className='pl-2'>{item.id}</th>
          <td className='px-5 sm:px-5 md:p-0'>{item.contact_number}</td>
          <td className='px-5 sm:px-5 md:p-0'>{item.email}</td>
          <td className='px-5 sm:px-5 md:p-0'>{item.location}</td>
          <td className='px-5 sm:px-5 md:p-0 whitespace-nowrap'>{item.book_date}</td>
          <td className='px-5 sm:px-5 md:p-0'>{item.destination}</td>
          <td className='px-5 sm:px-5 md:p-0'>
            <div className={` text-center w-fit px-2 font-medium rounded-lg text-sm ${item.status==="complete" && "bg-green-200 text-green-500 "}`} >{item.status}</div>
          </td>
        </tr>
      ))
     }
    </tbody>
  </table>
  )
}

export default CompletedQuote