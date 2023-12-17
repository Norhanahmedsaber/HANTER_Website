import React from 'react'

export default function Rule({name}) {
  return (
    <div className='rule'>
        <div>{name}</div>
        <div className='btn-container'>
            <div className='btn bg-green-600 hover:bg-green-900'>O</div>
            <div className='btn bg-red-600 hover:bg-red-900'>X</div>
        </div>
    </div>
  )
}
