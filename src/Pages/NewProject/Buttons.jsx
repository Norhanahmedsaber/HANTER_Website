import React from 'react'

function Buttons({ setCurrentStep, CurrentStep, scan }) {
    return (
        <div className='w-[53.12rem] h-full flex justify-center items-center'>
            <div className='flex w-full justify-between items-center'>
                {CurrentStep == 1 ? (
                    <div className='flex justify-around items-center bg-slate-400 w-[12.5rem] h-[3.125rem] rounded-[0.625rem] cursor-pointer'>
                        <div className=' text-[1.25rem] text-white'>Back</div>
                    </div>
                ) : (
                    <div onClick={() => setCurrentStep(CurrentStep - 1)} className='flex justify-around items-center bg-buttons w-[12.5rem] h-[3.125rem] rounded-[0.625rem] cursor-pointer'>
                        <div className=' text-[1.25rem] text-white'>Back</div>
                    </div>
                )}
                {CurrentStep == 3 ? (
                    <div onClick={()=>{}} className='flex justify-around items-center bg-buttons w-[12.5rem] h-[3.125rem] rounded-[0.625rem] cursor-pointer'>
                        <div onClick={()=>{scan()}} className=' text-[1.25rem] text-white'>Scan</div>
                    </div>
                ) : (
                    <div onClick={()=>{setCurrentStep(CurrentStep+1)}} className='flex justify-around items-center bg-buttons w-[12.5rem] h-[3.125rem] rounded-[0.625rem] cursor-pointer'>
                        <div className=' text-[1.25rem] text-white'>Next</div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Buttons
