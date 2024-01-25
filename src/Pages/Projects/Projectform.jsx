import React, { useState, useEffect } from 'react'
import Project from './Project'
import config from '../../../config'
import Cookies from 'js-cookie'

export default function () {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    fetch(config.BASE_URL + "/project", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + Cookies.get('token')
      }
    }).then(response => response.json())
      .then((result) => {
        if (result.message) {

        } else {
          setProjects(result)
        }
      })
  }, [])
  return (
    <div className='flex flex-col  justify-start items-center w-[calc(100%-17.125rem)] h-full'>
      <div className='relative flex items-center h-[6.5rem] w-full bg-[#F8F9FA] '>
        <div className='text-[#000] font-sem2 font-bold text-[2.6875rem] ml-[1.94rem] mr-[7.5rem]'>Projects</div>
        <div className=''>
          <input className='border border-[#8F8C8C] rounded-[5.3125rem]  w-[29.5rem] h-[3.3125rem] p-2' placeholder='search...' />
        </div>
        <div className='w-[15.1875rem] h-[3.8125rem] border rounded-[0.625rem] bg-secondary ml-[7.5rem] absolute right-[1.81rem] flex justify-center items-center'>
          <img src='../../../../public/new_project.png' className='w-[2.4375rem] h-[2.4375rem]'></img>
          <div className='text-[#FFF] text-[1.25rem] ml-[1.25rem] font-sem2'>
            New Project
          </div>
        </div>
      </div>
      <div className='flex flex-col h-[42.9375rem] w-[calc(100%-3.5rem)] mt-[2.25rem]'>
        <div className='h-[5.5625rem] rounded-t-[0.625rem] bg-[#EEE] flex justify-center items-center font-sem2 text-[1.25rem] text-[#000] w-full'>
          <div className='w-[50%] pl-[1.06rem]'>Project name</div>
          <div className='w-[20%] text-center'>Last scan</div>
          <div className='w-[15%] text-center'>Vulnerabilities</div>
          <div className='w-[15%]'></div>
        </div>
        {
          projects.map((project, index) => <Project key={index} name={project.name} lastScan={project.lastScan} vuls={project.vuls} id={project.id} />)
        }
      </div>
    </div>
  )
}
