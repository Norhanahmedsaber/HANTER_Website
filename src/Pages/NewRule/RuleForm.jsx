import React, { useEffect, useState } from 'react'
import config from "../../../config";
import Cookies from 'js-cookie';
import { useLocation, useNavigate } from 'react-router-dom';
export default function RuleForm() {
   
  return (
    <div className='w-[69.375rem] h-[42.9375rem] flex flex-col justify-center items-center border border-red-400'>
        <div className='flex w-full justify-start p-2'>
            <div>Rule Name:</div>
            <input className='ml-1 border border-slate-400 rounded text-center text-sm' 
            onChange={(e)=>{
                setRuleName(e.currentTarget.value)
            }}/>
        </div>
        <CodeViewer language={"yaml"} text={content} onChange={setContent} />
        <div className=' bg-blue-500 flex justify-center w-[10%] rounded cursor-pointer' onClick={()=>{
            createRuleHandler()
        }}>Done</div>
    </div>
  )
}
