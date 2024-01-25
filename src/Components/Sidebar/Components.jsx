import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Components({iconPath,text,selected,path}) {
    const nav = useNavigate();
    return selected?(
        <div onClick={()=>nav(path)} className='w-[14.4375rem] h-[2.9375rem] flex ml-[1.31rem] justify-start items-center rounded-[0.375rem] bg-[#D9D9D9] my-1'>
            <img src={iconPath} className='w-[1.875rem] h-[1.875rem] ml-[0.75rem]'/>
            <div className='text-[#FFF] text-[ 0.9375rem] font-sem2 p-[0.75rem]'>{text}</div>
        </div>
    ):(
        <div onClick={()=>nav(path)} className='w-[14.4375rem] h-[2.9375rem] flex ml-[1.31rem] justify-start items-center rounded-[0.375rem] hover:cursor-pointer my-1 hover:bg-[#D9D9D9]'>
            <img src={iconPath} className='w-[1.875rem] h-[1.875rem] ml-[0.75rem]'/>
            <div className='text-[#FFF] text-[ 0.9375rem] font-sem2 p-[0.75rem]'>{text}</div>
        </div>
    )
}

