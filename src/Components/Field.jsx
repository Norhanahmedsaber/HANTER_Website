import React from 'react'

function Field({label, value, setValue, className}) {
    return (
        <div className='flex flex-col w-[18.6875rem] justify-center items-start'>
            <div className='w-full text-[0.9375rem]'>
                {label}
            </div>
            <input className='w-full h-[1.75rem] border border-[#E3E8EC] rounded-[0.3125rem] pl-1 text-[0.80rem]'
                onChange={(e)=>{
                    setValue(e.currentTarget.value)
                }}
                value={value}
            />

        </div>
    )
}

export default Field