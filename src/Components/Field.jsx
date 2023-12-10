import React from 'react'

function Field({label, value, setValue, className}) {
    return (
        <div className='flex w-2/3 justify-center items-center p-2'>
            <div className='w-3/6'>
                {label}
            </div>
            <input className='w-3/6 border-2 border-black rounded-md p-1'
                onChange={(e)=>{
                    setValue(e.currentTarget.value)
                }}
                value={value}
            />

        </div>
    )
}

export default Field
