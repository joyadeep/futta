import React from 'react'
import futta from '../assets/images/futta.png'
import {CgMenuRight} from 'react-icons/cg'
import {BiSearch,BiUser} from 'react-icons/bi'

const Header = () => {
  return (
    <div className='h-20 flex justify-between items-center pl-0 pr-5 md:px-10'>
        <img src={futta} width={170} className="object-contain h-20"  />
        <div className='flex gap-10 items-center'>
            <BiUser size={36} className="cursor-pointer" />
            <BiSearch size={36} className="cursor-pointer" />
            <CgMenuRight size={36} className="cursor-pointer" />
        </div>
    </div>
  )
}

export default Header