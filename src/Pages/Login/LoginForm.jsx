import React from 'react'
import Field from '../../Components/Field'

function LoginForm({email,setEmail,password,setPassword,setDone}) {
    function ok() {
        setDone();
    }
    return (
        <div className=' flex flex-col border-2 border-black h-1/2 w-1/4 items-center justify-center'>
            <Field label = "email" value={email} setValue={setEmail} />
            <Field label = "password" value={password} setValue={setPassword}/>
            <div className='hover:cursor-pointer p-4' onClick={ok}>Done</div>
        </div>
    )
}

export default LoginForm


