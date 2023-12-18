import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './style.css'
import Button from './Button'
import config from '../../../config'
import { useParams } from 'react-router-dom'
import Cookies from 'js-cookie'


export default function ViewRule() {
  const [name, setName] = useState("")
  const [content, setContent] = useState("")
  const params = useParams()
  function deleteAction() {
    fetch(config.BASE_URL + '/rules',{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+Cookies.get('token')
      } ,
      body:JSON.stringify({
        name
      })
    }).then(response=>response.json())
    .then((result)=>{
      if(result.message){
        //to doo
      } else {
        console.log(result.message)
      }
    })
  }
  function fetchRuleData() {
    fetch(config.BASE_URL + '/rules/' + params.id,{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+Cookies.get('token')
      }
  }).then(response=>response.json())
    .then((result)=>{
      if(result.message) {
        // to do
      } else {
        setName(result.name)
        setContent(result.value )
  }})
}
  useEffect(() => {
    fetchRuleData()
  }, [])
  return (
    <div className='w-scree h-screen flex flex-col border border-black '>
      <Navbar/>
      <div className='w-full h-[90%] flex flex-col justify-center items-center border-2 border-red-500'>
        <div className='w-[40%] h-[80%] border-2 border-green-300'>
          <div className='w-full h-[30%] flex flex-row border-2 border-violet-600'>
            <div className='w-[40%] h-full border border-rose-800 text-center items-center'>{name}</div>
            <div className='w-[60%] h-full border border-yellow-400 flex justify-end items-center'>
              <Button name={"anas"} action={deleteAction} />
              <div className='btn-view-rule'>Delete</div>
            </div>
          </div>
          <div className='w-full h-[70%] flex flex-row border-2 border-pink-600'>{content}</div>
          <div className='w-full flex justify-end border-2 border-orange-500'>
            <div className='w-20 h-14 flex justify-center items-center cursor-pointer rounded bg-teal-400 border border-teal-400 text-center'>Done</div>
          </div>
        </div>
      </div>
    </div>
      )
}
