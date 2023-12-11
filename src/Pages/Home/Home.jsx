import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Cookies from 'js-cookie'

export default function Home() {
  const [isAuth , setIsAuth] = useState(false)
  useEffect(()=>{
    if(Cookies.get('token')){
      setIsAuth(true)
    }else{
      setIsAuth(false)
    }
  } , [])
  
  return (
    <div className='h-screen w-screen'>
      <Navbar isAuth={isAuth} />
    </div>
  )
}
