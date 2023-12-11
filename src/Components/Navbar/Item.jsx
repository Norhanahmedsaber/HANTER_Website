import React from 'react'
import {useNavigate} from 'react-router-dom';

function Item({text,path}) {
    const navigate = useNavigate();
    return (
        <div className='flex justify-center p-5 text-black hover:cursor-pointer ' onClick={()=>{
            navigate(path)
        }}>
            {text}
        </div>
    )
}

export default Item
