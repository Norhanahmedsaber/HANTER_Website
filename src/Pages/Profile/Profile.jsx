import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import config from '../../../config'
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";
import Rule from './Rules';
import Project from './Projects';
import './style.css'
export default function Profile() {
  const nav = useNavigate()
  const [user , setUser] = useState({})
  const [selectedTab , setSelectedTab] = useState(1)
  const [isAuth , setIsAuth]= useState(false)
  useEffect(()=>{
    if(!Cookies.get('token'))
    {
      setIsAuth(false)
      nav('/')
    }else{
      setIsAuth(true)
    }
    document.getElementById('tab-1').classList.add('selectedTab')
    fetch(config.BASE_URL+'/profile',{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+Cookies.get('token')
      }
    }).then(response => response.json())
      .then((result)=>{
        if(result.message){
          console.log(result.message)
        }else{
          setUser(result)
        }
      })
  },[])

  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center border border-blue-500'>
      <Navbar isAuth={isAuth}/>
      <div className=' border border-red-500 w-[80%] h-full p-[2%]'>
        <div className='border border-yellow-300 h-2/6 p-10'>
          My Profile:
          <div className='flex flex-col  '>
            <div>{user.first_name} {user.last_name}</div>
            <div>{user.email}</div>
            <div>{user.github_account}</div>
          </div>
        </div>
        <div className='flex flex-row justify-center border border-emerald-700 '>
          <div id='tab-1' className='tab' onClick={()=>{
            // fetchRules()
            setSelectedTab(1)
            document.getElementById('tab-1').classList.add('selectedTab')
            document.getElementById('tab-2').classList.remove('selectedTab')
          }}>rule</div>
          <div id='tab-2' className='tab' onClick={()=>{
            // fetchProject()
            setSelectedTab(2)
            document.getElementById('tab-2').classList.add('selectedTab')
            document.getElementById('tab-1').classList.remove('selectedTab')
          }}>project</div>
        </div>
        <div className='border border-red-700 h-3/6'>
        {selectedTab == 1?(
          <Rule/>
        ):(
          <Project />
        )}
        </div>
        <div className='cursor-pointer bg-blue-600 w-[10%] rounded-lg text-white flex justify-start items-center p-3 mt-2' onClick={()=>{
          nav("/new_project")
        }}>Add Project</div>
      </div>
    </div>
  )
}
