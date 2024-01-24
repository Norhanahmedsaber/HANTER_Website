import React from 'react'
import {useNavigate} from 'react-router-dom';

function Item({text,path,selected}) {
    const navigate = useNavigate();
    return selected?(
        <div className='flex justify-center mr-[3.35rem] font-Jomolhari w-[3.1875rem] h-[2.25rem]  text-[primary] hover:cursor-pointer ' onClick={()=>{
            navigate(path)
        }}>
            {text}
        </div>
    ):(
        <div className='flex justify-center mr-[3.35rem] font-Jomolhari w-[3.1875rem] h-[2.25rem]  text-black hover:cursor-pointer ' onClick={()=>{
            navigate(path)
        }}>
            {text}
        </div>
    )
}

export default Item
