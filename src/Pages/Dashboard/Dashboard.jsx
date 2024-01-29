import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
export default function Dashboard() {
  return (
    <div className='flex flex-row justify-start w-screen h-screen items-start font-sem2'>
        <Sidebar />
        <div>Dashboard</div>
    </div>
  )
}
