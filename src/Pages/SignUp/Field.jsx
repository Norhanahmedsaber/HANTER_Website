import React from 'react'

function Field({label, value, setValue, className, type}) {
    return (
        <div className='flex flex-col w-[18.6875rem] mt-[0.94rem] justify-center items-start '>
            <div className='w-full text-[0.9375rem]'>
                {label}
            </div>
            <input className='w-full h-[1.75rem] border border-[#E3E8EC] rounded-[0.3125rem] pl-2 text-[0.80rem]'
                onChange={(e)=>{
                    setValue(e.currentTarget.value)
                }}
                value={value}
                type={type}
            />

        </div>
    )
}

export default Field