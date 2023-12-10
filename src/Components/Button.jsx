import React, { useState } from 'react'

export default function ({ counter, setCounter }) {
  return (
    <div>
        {counter}
        <div className='hover:cursor-pointer' onClick={() => {
            setCounter(counter+1)
        }}>button</div>
    </div>
  )
}
