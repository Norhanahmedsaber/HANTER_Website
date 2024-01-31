import React from 'react'
import { useState } from 'react'
import CodeViewer from './CodeViewer'
export default function SourceEditor({source,setSource}) {
  return (
    <div className='flex flex-col justify-center h-full w-full'>
      <CodeViewer content={source} setContent={setSource} language={"javascript"}/>
    </div>
  )
}
