import React from 'react'

export default function Child({name, print}) {
    function handleOnClick() {
        print(name)
    }
    return (
    <div onClick={handleOnClick} className='bg-red-500 p-10 hover:cursor-pointer'>{name}</div>
  )
}
