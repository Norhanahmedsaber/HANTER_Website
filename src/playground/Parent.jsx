import React from 'react'
import Child from './Child'

export default function Parent() {
    function print(a) {
        console.log(a)
    }
  return (
    <div>
        <Child name="anas" print={print} />
        <Child name="norhan" print={print} />
        <Child name="ahmed" print={print} />
    </div>
  )
}
