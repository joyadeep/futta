import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Loading from '../Loading'
import {setLoadingFalse,setLoadingTrue} from '../../redux/feature/globalSlice'
import {getNewDriver} from '../../redux/feature/adminSlice'
import { fetchNewDriver } from '../../helper/adminHelper'

const AllDriverList = () => {
    const isLoading=useSelector((state)=>state.global.isLoading)
    const newDriver=useSelector((state)=>state.admin.newDriver)
    const dispatch=useDispatch()

    useEffect(()=>{
      dispatch(setLoadingTrue())
      fetchNewDriver().then((res)=>{
        if (res.status===200){
          dispatch(getNewDriver(res.data.data))
        }
      }).catch((error)=>{
        console.log("error",error)
      }).finally(()=>{
        dispatch(setLoadingFalse())
      })

    },[dispatch])
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
        newDriver?.map((item,index)=>(
          <tr key={item.id} className='text-left h-10'>
          <th className='pl-2'>{index+1}</th>
          <td className='px-5 sm:px-5 md:px-0 whitespace-nowrap'>{item.name}</td>
          <td className='px-5 sm:px-5 md:px-0'>{item.mobile}</td>
          <td className='px-5 sm:px-5 md:px-0'>{item.email}</td>
          <td className='px-5 sm:px-5 md:px-0'>{item.license_number}</td>
          <td className='px-5 sm:px-5 md:px-0'>
            Image
          </td>
          <td className='px-5 sm:px-5 md:px-0'>
            <div>
              <button className='bg-green-500 text-sm font-medium py-1 px-2 rounded-md text-white '>details</button>
            </div>
          </td>
        </tr>
        ))
       }
      </tbody>
    </table>
    }
    </>
  )
}

export default AllDriverList