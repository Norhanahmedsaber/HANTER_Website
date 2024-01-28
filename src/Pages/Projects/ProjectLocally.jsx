import React from 'react'
import Clipboard from './Clipboard'
function ProjectLocally() {
    return (
        <div className='flex h-full w-full flex-col mt-[2.06rem] justify-start items-center'>
        <img src={'../../../public/layer1.png'} className=' w-[calc(0.75*12.5rem)] h-[calc(0.75*12.5rem)]'/>
        <div className=' flex flex-col justify-center items-center mt-[1.25rem]'>
            <div className='text-[2rem] '>Scan Locally</div>
            <div className='text-[1.25rem] text-center  w-[62rem] justify-center items-center'>From our command line tool, run a couple simple commands <br/> to explore results of a scan and manage scan rules in the app.</div>
            <div className='flex justify-around items-center text-[#1402DF] w-[calc(0.75*25rem)] h-[3.125rem]'>
            Need to install Hanter package?
            </div>
            <div className= 'flex flex-col justify-start items-start  h-[4rem] w-[40rem]'>
            <Clipboard text1={"Download package"} text2={"npm install HANTER"}/>
          </div>
        </div>
    </div>
    )
}

export default ProjectLocally
