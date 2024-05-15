import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate()
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
      <div className='w-full h-[600px] flex flex-row justify-center items-center'>
      <div className='w-[645px] flex flex-col justify-center items-center'>
        <div className='font-bold text-black text-5xl w-[645px] h-[138px] justify-center items-center'>Find and Fix problems<br/>in your source code</div>
          <div className=' w-full text-xl justify-center items-center'>HANTER statically analyzes your code to <br/> quickly find problems. It is built into most text <br/> editors and you can run HANTER as part of <br/> your continuous integration pipeline.</div>
        <div className='h-[75px] mt-10 w-full flex flex-row justify-start items-center'>
          <div className='w-[279px] mr-5 h-[75px] rounded-[10px] text-2xl justify-center items-center flex bg-[#28434C] cursor-pointer text-white' onClick={() => {
            nav('../Login')
          }}>Get Started</div>
        <div className='w-[279px] h-[75px] rounded-[10px] text-2xl justify-center items-center flex border border-[#28434C] cursor-pointer text-[#28434C]' onClick={() => {
          nav('../ServerDown')
        }}>Learn More</div>
        </div>
      </div>
      <img src="../../../home.jpg" className= "w-[600px] h-[600px]" />
      </div>
    </div>
  )
}
