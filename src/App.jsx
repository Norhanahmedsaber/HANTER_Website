import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import config from '../config'
import Cookies from 'js-cookie'


function App() {
  const [count, setCount] = useState(0)
  function test(){
    fetch(config.BASE_URL+"/users/20" , {
      method:"GET" , 
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${Cookies.get('token')}`
      }     
    })
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='bg-red-600 flex  items-center justify-center text-white p-3 rounded-md shadow ' onClick={test}>
        anas 
      </div>
    </div>
  )
}

export default App
