import React from 'react'
import { useNavigate } from 'react-router-dom'
import config from '../../../config'
import Cookies from 'js-cookie'
import { Result } from 'postcss'

export default function Rule({name , id, uuid}) {
  const nav = useNavigate()
  function deleteRuleHandler()
  {
    fetch(config.BASE_URL+'/rules/' + uuid,{
      method:"DELETE",
      headers:{
        "Content-Type":"Application/json",
        "Authorization":"Bearer "+Cookies.get('token')
      }
    }).then(response => response.json())
      .then((result)=>{
        if(result.message)
        {
          nav(0)
          console.log(result.message)
        }else{
          console.log('ERROORRRR')
        }
      })
  }
  return (
    <div className='rule'>
        <div>{name}</div>
        <div className='btn-container'>
            <div className='btn bg-green-600 hover:bg-green-900' onClick={()=>{
              nav('/rule/' + id)
            }}>O</div>
            <div className='btn bg-red-600 hover:bg-red-900' onClick={()=>{
              deleteRuleHandler()
            }}>X</div>
        </div>
    </div>
  )
}
