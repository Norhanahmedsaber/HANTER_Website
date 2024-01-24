
import React, { useState ,useEffect} from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import RuleForm from './RuleForm'
import Cookies from 'js-cookie'
import Sidebar from '../../Components/Sidebar/Sidebar'
export default function NewRule() {
  const [isAuth , setIsAuth] = useState(false)
  useEffect(()=>{
      if(Cookies.get('token')){
          setIsAuth(true)
      }else{
          setIsAuth(false)
      }
  }, [])
  
  const [uploadModalOpen, setUploadModalOpen] = useState(false)
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <Sidebar selected={"rules"} />
      <div className='w-[calc(100%-17.125rem)] h-full font-sem2'>
        <div className='w-full h-[6.5rem] border flex items-center pl-[1.69rem] text-[2.6875rem] bg-[#F8F9FA]'>New Rule</div>
        <div className='w-full h-[calc(100%-6.5rem)] border'>
          
        </div>
      </div>
    </div>
  )
}
