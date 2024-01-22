import React from 'react'

export default function Logo({path, className}) {
  return (
    <div className='w-[8.38rem] h-[1.25rem] '>
        <img src={path} className='rounded-full'/>
    </div>
  )
}
