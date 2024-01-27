import React from 'react'
import Repo from './Repo.JSX'

function CreateFlow1() {
    return (
        <div className=' w-[53.12rem] h-[25rem] flex  flex-col justify-center items-center'>
            <div className="w-full flex justify-between items-center">
                <div className='text-[1.2rem] w-[50%]'>Choose a project to scan</div>
                <div class="relative">
                    <input type="text"
                        class="pl-10 pr-4 py-2 border-2 ml-[1.19rem] w-[26.5625rem] rounded-[5.3125rem]"
                        placeholder="Search" />
                    <div class="absolute inset-y-2 left-4 pl-3.5  
                            flex items-center  
                            pointer-events-none">
                        <img src={'../../../public/search.png'} className='w-[1.25rem] h-[1.25rem] ' />
                    </div>
                </div>
            </div>
            <div className='w-full h-[20rem] flex flex-col overflow-y-scroll mt-6'>
                <div>
                <Repo name={"name"} date={"date"} privacy={"privacy"}/>
                <Repo name={"name"} date={"date"} privacy={"privacy"}/>
                <Repo name={"name"} date={"date"} privacy={"privacy"}/>
                <Repo name={"name"} date={"date"} privacy={"privacy"}/>
                <Repo name={"name"} date={"date"} privacy={"privacy"}/>
                </div>
            </div>
        </div>

    )
}

export default CreateFlow1
