import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import ListRules from './ListRules'
import RuleEditor from './RuleEditor'
import SourceEditor from './SourceEditor'
import Reports from '../Reports/Reports'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
export default function Playground() {
  const [isAuth , setIsAuth] = useState(false)
  useEffect(()=>{
    if(Cookies.get('token')){
      setIsAuth(true)
    }else{
      setIsAuth(false)
    }
  } , [])
  return (
    <div className='w-screen h-screen flex justify-center items-center flex-col'>
      <Navbar isAuth={isAuth}/>
      <div className='w-full h-[90%] flex justify-center items-center'>
        <div className='h-full w-[20%] border'><ListRules /></div>
        <div className='h-full w-[35%] border'><RuleEditor /></div>
        <div className='h-full w-[45%] border'>
          <div className='h-1/2 w-full border'><SourceEditor /></div>
          <div className='h-1/2 w-full border'><Reports /></div>
        </div>
      </div>
    </div>
  )
}
