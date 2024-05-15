import React, { useEffect, useState } from 'react'
import Button from '../../Components/NavigationButton'
import Cookies from 'js-cookie'
import Navbar from '../../Components/Navbar/Navbar'
import { useNavigate } from "react-router-dom";

function NotFound() {
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
        <div className='w-[645px] flex flex-col justify-start items-start '>
          <div className='font-bold text-[#28434C] text-xl  justify-start items-start'>Error 404!</div>
            <div className='w-[645px] text-5xl justify-center items-center'>Page not found</div>
          <div className='h-[75px] mt-10 flex justify-center items-center'>
            <div className='w-[279px] h-[75px] rounded-[10px] text-2xl justify-center items-center flex mr-4 bg-[#28434C] cursor-pointer text-white' onClick={() => {
              nav('../')
            }}>Bach to Homepage</div>
          <div className='w-[279px] h-[75px] rounded-[10px] text-2xl justify-center items-center flex border border-[#28434C] cursor-pointer text-[#28434C]' onClick={() => {
            nav('../ServerDown')
          }}>Browse the docs</div>
          </div>
        </div>
        <img src="../../../error-404.png" className= "w-[480px] h-[480px]" />
        </div>
      </div>
    )
}
export default NotFound
