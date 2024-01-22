import React from 'react'
import { useState } from 'react'
import Editor from "@monaco-editor/react";
export default function SourceEditor() {
  const [content,setContent]=useState("")
  return (
    <div>
      <div className='flex flex-col justify-center '>
        <Editor
        height="300px"
        language="javascript"
        theme="vs-dark"
        value={content}
        onChange={setContent}
      />
      </div>
    </div>
  )
}
