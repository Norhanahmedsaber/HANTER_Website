import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Projectform from './Projectform'

export const Projects = () => {
  return (
    <div className='flex justify-start w-screen h-screen items-start'>
    
      <Sidebar />
      <Projectform />
    </div>
  )
}

export default Projects
