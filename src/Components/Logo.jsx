import React from 'react'

export default function Logo({path, className}) {
  return (
    <div className='w-[10%] rounded-full m-3'>
        <img src={path} className= {className} />
    </div>
  )
}
