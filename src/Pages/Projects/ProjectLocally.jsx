import React from 'react'
import Clipboard from './Clipboard'
import Sidebar from '../../Components/Sidebar/Sidebar'
function ProjectLocally() {
    return (
        <div className='flex flex-row justify-start w-screen h-screen items-start font-sem2 overflow-x-hidden'>
            <div className='h-full absolute'>
                <Sidebar />
            </div>
            <div className='flex h-full w-full flex-col mt-[3rem] justify-start items-center font-sem2 ml-[3.5rem]'>
                <img src={'../../../public/layer1.png'} className=' w-[8rem] h-[8rem]' />
                <div className=' flex flex-col justify-center items-center mt-[1.25rem]'>
                    <div className='text-[1.6rem] font-bold'>Scan Locally</div>
                    <div className='text-[1.1rem] text-center mt-2 justify-center items-center'>From our command line tool, run a couple simple commands <br /> to explore results of a scan and manage scan rules in the app.</div>
                    <div className='flex justify-around items-center text-[#1402DF] mt-8'>
                        Need to install Hanter package?
                    </div>
                    <div className='flex flex-col justify-start items-start'>
                        <Clipboard text1={"Download package"} text2={"npm install hanter"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectLocally
