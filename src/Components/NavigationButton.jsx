import React from 'react'
import {useNavigate} from 'react-router-dom';

function NavigationButton({text, path, className}) {
    const navigate = useNavigate();
    return (
        <div className={className} onClick={()=>{
            navigate(path)
        }}>
            {text}
        </div>
    )
}

export default NavigationButton
