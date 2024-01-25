import React from 'react'
import { useState } from 'react'
import CodeViewer from './CodeViewer'
export default function SourceEditor() {
  const [content,setContent]=useState("")
  return (
    <div className='flex flex-col justify-center h-full w-full'>
      <CodeViewer content={content} setContent={setContent} language={"javascript"}/>
    </div>
  )
}
