import React from 'react'

const CompletedRequest = () => {
  return (
    <div className=''>
    <table className=' w-full rounded-lg overflow-hidden shadow-md'>
      <thead >
        <tr className='text-md py-2 text-left bg-slate-300 h-10'>
          <th className='pl-2'>#</th>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Message</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
       {
        [1,2,3,4,5].map(()=>(
          <tr className='text-left h-10'>
          <th className='pl-2'>1</th>
          <td>Test name</td>
          <td>981234554444</td>
          <td>test@testmail.com</td>
          <td>Nice</td>
          <td>
            <div className='bg-green-200 text-green-600 font-semibold w-fit text-xs px-3 rounded-xl py-1'>completed</div>
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