import React from 'react'
import {useNavigate} from 'react-router-dom';

function Footer({text,path,pressableText}) {
    const navigate = useNavigate();
    return (
        <div className="border-2 border-black w-1/4 flex justify-center p-5 rounded-md bg-slate-200">
            <div>
                {text} <span className='ml-1 underline text-cyan-600 hover:cursor-pointer hover:no-underline ' 
                onClick={()=>{
                    navigate(path)
                }}>{pressableText} </span>
            </div>
        </div>
    )
}

export default Footer
