<<<<<<< HEAD
import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import UploadRule from '../../Modals/NewRule/UploadRule'

=======
import React from 'react'
import RuleForm from './RuleForm'
import Navbar from '../../Components/Navbar/Navbar'
>>>>>>> 93d81f2ccdff7a93460123380f52c53f882d911a
export default function NewRule() {
  const [uploadModalOpen, setUploadModalOpen] = useState(false)
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      <UploadRule
        isOpen={uploadModalOpen}
        setIsOpen={setUploadModalOpen}
      />
    <Navbar/>
    <div className='w-[40%] h-[90%] flex flex-col justify-center items-center'>
        <div className='w-full h-[80%] flex flex-col justify-center items-center '>
<<<<<<< HEAD
            <div className='w-full h-[15%] flex justify-around items-center my-1 border bg-slate-100 rounded-lg'>
              <div>Upload an existing rule from your device:</div>
              <div className='h-[60%] w-1/5 flex justify-center items-center bg-blue-700 bg-opacity-70 rounded-lg text-white font-bold hover:cursor-pointer hover:bg-opacity-100' onClick={() => {
                setUploadModalOpen(true)
              }}>Upload</div>
            </div>
            <div className='w-full h-[5%]  my-1  text-center'>Or Create Your a New One Using the Editor Below</div>
            <div className='w-full h-[70%]  my-1'>toka</div>
=======
            <div className='w-full h-[10%] flex my-1 '>amas</div>
            <div className='w-full h-[5%]  my-1  text-center'>OR</div>
             <RuleForm />
>>>>>>> 93d81f2ccdff7a93460123380f52c53f882d911a
        </div>
    </div>
    </div>
  )
}
