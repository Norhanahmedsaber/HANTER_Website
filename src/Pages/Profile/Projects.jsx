import React, { useEffect } from 'react'
import { useState } from 'react'
import Project from './Project'
import config from '../../../config'
import Cookies from 'js-cookie'
export default function Projects() {
  const [projects , setProjects] = useState([])
  useEffect(()=>{
    fetch(config.BASE_URL+"/project",{
      method:"GET",
      headers:{
        "Content-Type": "application/json",
        "Authorization": "Bearer "+Cookies.get('token')
      }
    }).then(response => response.json())
      .then((result)=>{
        if(result.message)
        {

        }else{
          setProjects(result)
        }
      })
  },[]) 
    

  return (
    <div className='w-full h-full'>
        {
            projects.map((project)=><Project name={project.name} id={project.id} />)
        }
    </div>
  )
}
