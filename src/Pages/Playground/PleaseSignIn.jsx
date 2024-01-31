import React from 'react'

function PleaseSignIn() {
    return (
        <div className='flex h-full w-full flex-col justify-center items-center'>
        <img src={'../../../public/signin.png'} className='mt-[2rem] w-[4rem] h-[4rem]'/>
        <div className=' flex flex-col justify-center items-center mt-[1.25rem]'>
            <div className='text-[1.25rem]'>Sign in required </div>
            <div className='text-[1rem] text-center w-[62rem] justify-center items-center'>please sign in <br></br>to view your rules</div>
            <div className='flex  mt-[1.5rem] justify-around items-center bg-[#1C7ED6] w-[10rem] h-[3.125rem] rounded-[0.625rem] cursor-pointer'  onClick={()=>{setAuthModal(true)}}>
                <div className='text-[#FFF] '>sign In</div>
            </div>
        </div>
    </div>
    )
}

export default PleaseSignIn
