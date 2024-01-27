import React, { useState } from 'react'
import CodeViewer from '../Playground/CodeViewer'
function CreateFlow3({config,setConfig}) {

    return (
        <div className=' w-[53.12rem] h-[25rem] flex-col justify-center items-center'>
            <div className="w-full flex justify-between items-center mb-[1.5rem]">
                <div className='text-[1.2rem] w-[50%]'>Write your configurations</div>
            </div>
            <CodeViewer content={config} setContent={setConfig} language={"json"}/>
        </div>
    )
}

export default CreateFlow3
