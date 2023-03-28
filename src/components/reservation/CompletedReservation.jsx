import React from 'react'

const CompletedReservation = () => {
  return (
    <table className=' w-full rounded-lg overflow-hidden shadow-md'>
    <thead >
      <tr className='text-md py-2 text-left bg-slate-300 h-10'>
        <th className='pl-2'>#</th>
        <th className='px-5 sm:px-5 md:p-0 whitespace-nowrap '>Name</th>
        <th className='px-5 sm:px-5 md:p-0'>Phone</th>
        <th className='px-5 sm:px-5 md:p-0'>Email</th>
        <th className='px-5 sm:px-5 md:p-0 whitespace-nowrap '>License Number</th>
        <th className='px-5 sm:px-5 md:p-0'>Status</th>
        <th className='px-5 sm:px-5 md:p-0 whitespace-nowrap'>Completed by</th>
        <th className='px-5 sm:px-5 md:p-0'>Remarks</th>
        <th className='px-5 sm:px-5 md:p-0'>Action</th>
      </tr>
    </thead>
    <tbody>
     {/* {
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
     } */}
    </tbody>
  </table>
  )
}

export default CompletedReservation