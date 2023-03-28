import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Loading from '../Loading'

const AllDriverList = () => {
    const isLoading=useSelector((state)=>state.global.isLoading)
  return (
    <>
    {
      isLoading ? <Loading/> : <table className=' w-full rounded-lg overflow-hidden shadow-md overflow-y-auto'>
      <thead >
        <tr className='text-md py-2 text-left bg-slate-300 h-10'>
          <th className='pl-2'>#</th>
          <th className='px-5 sm:px-5 md:px-0'>Name</th>
          <th className='px-5 sm:px-5 md:px-0 whitespace-nowrap '>Phone Number</th>
          <th className='px-5 sm:px-5 md:px-0'>Email</th>
          <th className='px-5 sm:px-5 md:px-0 whitespace-nowrap'>License Number</th>
          <th className='px-5 sm:px-5 md:px-0'>Image</th>
          <th className='px-5 sm:px-5 md:px-0'>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(()=>(
            <tr className='h-12'>
              <td>1</td>
            </tr>
          ))
        }
       {/* {
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
       } */}
      </tbody>
    </table>
    }
    </>
  )
}

export default AllDriverList