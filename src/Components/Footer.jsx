import React from 'react'
import {useNavigate} from 'react-router-dom';

function Footer({text,path,pressableText}) {
    const navigate = useNavigate();
    return (
        <div className="border rounded-[0.9375rem] border-[#E3E8EC] flex flex-cols items-center justify-center w-[22.5rem] h-[4.625rem]  bg-[#FFF] mt-[1rem]">
            <div>
                {text} <span className='ml-1 underline text-[#096ADA] hover:cursor-pointer hover:no-underline text-[0.9375rem] font-[400]' 
                onClick={()=>{
                    navigate(path)
                }}>{pressableText} </span>
            </div>
        </div>
    )
}

export default Footer
