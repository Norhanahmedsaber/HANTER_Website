import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import NoRepo from './NoRepo'
import States from './States'
export default function NewProject() {
  return (
    <div className='flex flex-row justify-start w-screen h-screen items-start font-sem2'>
        <Sidebar/>
        <div className=' w-full h-full flex flex-col justify-start items-start'>
          <div className='w-full h-[3.75rem] flex flex-row justify-start items-center border-b border-[#8F8C8C]'>
            <div className='ml-[1.69rem] text-[2rem]'>New Project</div>
          </div>
          <States/>
        </div>
      </div>
  )
}
