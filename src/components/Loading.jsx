import React from 'react'
import { CgSpinner } from 'react-icons/cg'

const Loading = () => {
  return (
    <div className='text-center w-full h-52 flex justify-center items-center '>
        <CgSpinner size={72} className='animate-spin text-violet-600 ' />
    </div>
  )
}

export default Loading