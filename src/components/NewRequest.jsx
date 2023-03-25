import React from 'react'

const NewRequest = () => {
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
            <th>Action</th>
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
            <td>nothing</td>
            <td>
              <div>
                <button className='bg-green-500 text-sm font-medium py-1 px-2 rounded-md text-white '>complete</button>
              </div>
            </td>
          </tr>
          ))
         }
        </tbody>
      </table>
    </div>
  )
}

export default NewRequest