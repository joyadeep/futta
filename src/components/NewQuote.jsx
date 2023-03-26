import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {getNewQuote} from '../redux/feature/adminSlice'
import {getNewTransportQuotes} from '../helper/adminHelper'
import { useEffect } from 'react';

const NewQuote = () => {
  const dispatch=useDispatch();
  const newQuotes=useSelector((state)=>state.admin.newTransportQuote)
  useEffect(()=>{
    getNewTransportQuotes().then((res)=>{
      if(res.status===200){
        dispatch(getNewQuote(res.data.data))
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
        <th className='px-5 sm:px-5 md:p-0'>Action</th>
      </tr>
    </thead>
    <tbody>
     {
      newQuotes?.map((item)=>(
        <tr key={item.id} className='text-left h-10'>
        <th className='pl-2'>{item.id}</th>
        <td className='px-5 sm:px-5 md:p-0'>{item.contact_number}</td>
        <td className='px-5 sm:px-5 md:p-0'>{item.email}</td>
        <td className='px-5 sm:px-5 md:p-0'>{item.location}</td>
        <td className='px-5 sm:px-5 md:p-0 whitespace-nowrap'>{item.book_date}</td>
        <td className='px-5 sm:px-5 md:p-0'>{item.destination}</td>
        <td className='px-5 sm:px-5 md:p-0'>
          <div className={` text-center w-fit px-2 font-medium rounded-lg text-sm ${item.status==="new" && "bg-purple-200 text-purple-500 "}`} >{item.status}</div>
        </td>
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

export default NewQuote