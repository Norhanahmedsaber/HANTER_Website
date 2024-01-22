import React from 'react'
import { useState } from 'react'
import CodeViewer from './CodeViewer'
export default function SourceEditor() {
  const [content,setContent]=useState("")
  return (
    <div>
      <div className='flex flex-col justify-center '>
      <CodeViewer/>
      </div>
    </div>
  )
}
