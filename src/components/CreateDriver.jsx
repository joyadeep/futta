import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import Modal from './Modal';

const CreateDriver = () => {
  const [fileName, setFileName] = useState('No file chosen');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFileName(file.name);
  };

  const handleFileNameClick = () => {
    const fileInput = document.getElementById('file-input');
    const tooltipValue = fileInput.getAttribute('title');
    console.log('Tooltip value:', tooltipValue);
  };
return(
  <Modal>
    <div className='bg-white w-full sm:w-full md:w-1/2 rounded-md p-5 '>
      <form className='flex flex-wrap'>
        <div className='w-full sm:w-full md:w-1/2 px-2 mb-4'>
          <label htmlFor="name" className='block text-lg font-medium text-slate-400'>Name</label>
          <input type="text" placeholder='Enter Name' className='w-full pl-3 rounded-md border outline-none border-orange-200 h-12' />
        </div>
        <div className='w-full sm:w-full md:w-1/2 px-2 mb-4'>
          <label htmlFor="mobile" className='block text-lg font-medium text-slate-400'>Mobile Number</label>
          <input type="text" placeholder='Enter mobile number' className='w-full pl-3 rounded-md border outline-none border-orange-200 h-12' />
        </div>
        <div className='w-full sm:w-full md:w-1/2 px-2 mb-4 '>
          <label htmlFor="email" className='block text-lg font-medium text-slate-400'>Email</label>
          <input type="email" placeholder='Enter Email' className='w-full pl-3 rounded-md border outline-none border-orange-200 h-12' />
        </div>
        <div className='w-full sm:w-full md:w-1/2 px-2 mb-4 '>
          <label htmlFor="passowrd" className='block text-lg font-medium text-slate-400'>Password</label>
          <input type="password" placeholder='Enter Password' className='w-full pl-3 rounded-md border outline-none border-orange-200 h-12' />
        </div>
        <div className='w-full sm:w-full md:w-1/2 px-2 mb-4 '>
          <label htmlFor="address" className='block text-lg font-medium text-slate-400'>Address</label>
          <input type="text" placeholder='Enter Address' className='w-full pl-3 rounded-md border outline-none border-orange-200 h-12' />
        </div>
        <div className='w-full sm:w-full md:w-1/2 px-2 mb-4 '>
          <label htmlFor="license" className='block text-lg font-medium text-slate-400'>License</label>
          <input type="text" placeholder='Enter License Number' className='w-full pl-3 rounded-md border outline-none border-orange-200 h-12' />
        </div>
        <div className='w-full sm:w-full md:w-1/2 px-2 mb-4 '>
          <label htmlFor="image" className='block text-lg font-medium text-slate-400'>Image</label>
          <div className="relative cursor-pointer border border-orange-300 rounded-md ">
  <input id="file-input" type="file" onChange={handleFileUpload} className="cursor-pointer absolute inset-0 w-full h-full opacity-0" name="file"/>
  <button type="button" className="bg-slate-500 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-slate-600">Choose file</button>
  <span  onClick={handleFileNameClick} className="ml-2 cursor-pointer" id="file-name">{fileName}</span>


</div>
         
          {/* <input type="file" placeholder='Enter Address' className='w-full pl-3 rounded-md border outline-none border-orange-200 h-12' /> */}
        </div>
        <div className='block w-full text-right'>
          <button type='submit' className='bg-green-500 text-white rounded-md px-4 py-2 mr-4'>Create</button>
          <button type='reset' className='bg-slate-200 px-4 py-2 rounded-md'>Cancel</button>
        </div>
      </form>
    </div>
  </Modal>
)
}

export default CreateDriver