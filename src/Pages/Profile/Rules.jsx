import React, { useEffect } from 'react'
import { useState } from 'react'
import config from '../../../config'
import Cookies from 'js-cookie'
import Rule from './Rule'
export default function Rules() {
  const [rules , setRules] = useState([])
  useEffect(()=>{
    fetch(config.BASE_URL+"/rules",{
        method:"GET" ,
        headers:{
            "Content-Type": "application/json" ,
            "Authorization": "Bearer "+Cookies.get('token')
        }
    }).then(response => response.json())
    .then((result)=>{
        if(result.message)
        {

        }else{
            setRules(result)
        }
    })
  },[]) 
  return (
    <div className='w-full h-full flex flex-col items-center p-4'>
        {
            rules.map((rule)=><Rule name={rule.name} uuid={rule.uuid} id={rule.id} />)
        }
    </div>
  )
}
