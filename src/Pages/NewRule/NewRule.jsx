import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'

export default function NewRule() {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
    <Navbar/>
    <div className='w-[40%] h-[90%] flex flex-col justify-center items-center'>
        <div className='w-full h-[80%] flex flex-col justify-center items-center '>
            <div className='w-full h-[10%] flex my-1 '>amas</div>
            <div className='w-full h-[5%]  my-1  text-center'>OR</div>
            <div className='w-full h-[70%]  my-1'>toka</div>
        </div>
    </div>
    </div>
  )
}
