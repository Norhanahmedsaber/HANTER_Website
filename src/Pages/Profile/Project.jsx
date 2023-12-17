import React from 'react'
import config from '../../../config'
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";
export default function Project({name , id}) {
    const nav = useNavigate()
    function deleteProjectHandler(){
        fetch(config.BASE_URL+"/project/"+ id,{
            method:"DELETE",
            headers:{
                "Content-Type":"Application/json",
                "Authorization":"Bearer "+Cookies.get('token')
            }
        }).then(response => response.json())
           .then((result)=>{
                if(result.message)
                {   nav(0)
                    console.log(result.message)
                }else{
                    console.log("ERRORRRRRRR")
                }
           }) 
    }
  return (
    <div className='project'>
    <div>{name}</div>
    <div className='btn-container'>
        <div className='btn bg-green-600 hover:bg-green-900'>O</div>
        <div className='btn bg-red-600 hover:bg-red-900' onClick={deleteProjectHandler}>X</div>
    </div>
</div>

  )
}
