import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Components({iconPath,text,selected,path}) {
    const nav = useNavigate();
    return selected?(
        <div onClick={()=>nav(path)} className='cursor-pointer w-[11.25rem] h-[2.5rem] flex ml-[0.625rem] mt-[0.5rem] justify-start items-center rounded-[0.375rem] bg-[#D9D9D9] mr-[0.62rem]'>
            <img src={iconPath} className='w-[1.25rem] h-[1.25rem] ml-[0.75rem]'/>
            <div className='text-[#FFF] text-[0.9375rem] font-sem2 p-[0.75rem]'>{text}</div>
        </div>
    ):(
        <div onClick={()=>nav(path)} className=' cursor-pointer w-[11.25rem] h-[2.5rem] flex ml-[0.625rem] mt-[0.5rem] justify-start items-center rounded-[0.375rem] hover:bg-[#D9D9D9] mr-[0.62rem] '>
            <img src={iconPath} className='w-[1.25rem] h-[1.25rem] ml-[0.75rem]'/>
            <div className='text-[#FFF] text-[0.9375rem] font-sem2 p-[0.75rem]'>{text}</div>
        </div>
    )
}

