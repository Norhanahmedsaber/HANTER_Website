import React from 'react'
import {useNavigate} from 'react-router-dom';

function Item({text,path,selected}) {
    const navigate = useNavigate();
    return selected?(
        <div className='flex justify-center mr-[2.5rem] h-full border-b-2 border-b-black items-center font-sem2 text-[primary] hover:cursor-pointer font-bold' onClick={()=>{
            navigate(path)
        }}>
            {text}
        </div>
    ):(
        <div className='flex justify-center mr-[2.5rem] h-full items-center font-sem2 text-black hover:cursor-pointer hover:text-[#1c7ed6]' onClick={()=>{
            navigate(path)
        }}>
            {text}
        </div>
    )
}

export default Item
