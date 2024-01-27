
import React from 'react'

function NoRepo() {
    return (
        <div className='flex h-full w-full flex-col justify-center items-center'>
            <img src={'../../../public/ghost1.png'} className=' w-[calc(0.75*12.5rem)] h-[calc(0.75*12.5rem)]'/>
            <div className=' flex flex-col justify-center items-center mt-[1.25rem]'>
                <div className='text-[2rem] '>No repositories available</div>
                <div className='text-[1.25rem] text-center  h-[6rem] w-[62rem] justify-center items-center'>Hanter can't find any additional repositories in this organization.<br/>If there are projects in your GitHub organization that you want to scan that aren't appearing here,<br/>you may need to sync your projects from Github or update which repositories Hanter’s GitHub app can access.</div>
                <div className='flex  mt-[3.25rem] justify-around items-center bg-[#1C7ED6] w-[calc(0.75*25rem)] h-[3.125rem] rounded-[0.625rem]'>
                    <div className='text-[#FFF] cursor-pointer'>Connect</div>
                </div>
            </div>
        </div>
    )
}

export default NoRepo
