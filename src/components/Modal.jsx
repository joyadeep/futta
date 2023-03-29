import React from 'react'

const Modal = ({children}) => {
    return (
        <div className='h-screen w-full bg-opacity-60 bg-gray-500 absolute top-0 right-0 left-0 bottom-0 z-50 flex items-center justify-center'>
     {
       children
     }
        </div>
       )
     }

export default Modal