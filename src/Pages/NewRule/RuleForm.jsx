import React, { useEffect, useState } from 'react'
import YamlViewer from './YamlViewer'
import config from "../../../config";
import Cookies from 'js-cookie';
import { useLocation, useNavigate } from 'react-router-dom';

export default function RuleForm() {
    const state = useLocation() 
    const [content , setContent] = useState("")
    const [ruleName , setRuleName] = useState("")
    useEffect(()=>{
        console.log(state)
        setContent(state.state.content)
    }, [])
    const nav = useNavigate()
    function createRuleHandler(){
        fetch(config.BASE_URL+'/rule',{
            method:'POST',
            headers:{
                "Content-Type":"Application/json",
                "Authorization":Cookies.get('token')
            },
            body:JSON.stringify({
                name:ruleName,
                content:content.text
            })
        }).then(response => response.json())
          .then((result)=>{
            if(result.message)
            {
                console.log("ERRRRRRRROR")
            }else{
                nav('/rule/'+result.id)
                console.log("Done")
            }
          })  
    }
  return (
    <div className='w-full h-full flex flex-col justify-center items-center border border-red-400'>
        <div className='flex w-full justify-start p-2'>
            <div>Rule Name:</div>
            <input className='ml-1 border border-slate-400 rounded text-center text-sm' 
            onChange={(e)=>{
                setRuleName(e.currentTarget.value)
            }}/>
        </div>
        <YamlViewer content={content} setContent={setContent}/>
        <div className=' bg-blue-500 flex justify-center w-[10%] rounded cursor-pointer' onClick={()=>{
            createRuleHandler()
        }}>Done</div>
    </div>
  )
}
