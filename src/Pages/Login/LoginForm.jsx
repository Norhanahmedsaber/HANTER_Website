import React from 'react'
import Field from '../../Components/Field'

function LoginForm({email,setEmail,password,setPassword,setDone}) {
    function ok() {
        setDone();
    }
    return (
        <div className='pt-[1.56rem] w-[22.5rem] h-[13.9375rem] rounded-[0.9375rem] bg-[#F6F8FA] border border-[#E3E8EC] mt-[0.63rem] flex flex-col items-center justify-center '>
            <Field label = "Email" value={email} setValue={setEmail} />
            <div className='flex flex-col w-[18.6875rem] justify-center items-start mt-[0.94rem]'>
                <div className='w-full text-[0.9375rem]'>
                    Password
                </div>
                <input className='w-full h-[1.75rem] border border-[#E3E8EC] rounded-[0.3125rem] pl-2'
                    onChange={(e)=>{
                        setPassword(e.currentTarget.value)
                    }}
                    value={password}
                />

            </div>
            <div className='hover:cursor-pointer p-4 w-[18.6875rem] h-[2.5rem] rounded-[0.3125rem] bg-[#096ADA] text-[0.9375rem] font-[400] text-[#FFF] flex justify-center items-center mt-[1.31rem]' onClick={ok}>Sign in</div>
        </div>
    )
}

export default LoginForm


