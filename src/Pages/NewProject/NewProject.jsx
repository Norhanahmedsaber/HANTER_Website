import React from 'react'
import { Sidebar } from '../../Components/Sidebar/Sidebar'
export default function NewProject() {
  return (
    <div className='flex justify-start w-screen h-screen items-start border'>
        <Sidebar selected={"docs"} />

      </div>
  )
}
