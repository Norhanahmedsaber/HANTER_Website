import React from "react";
import Editor from "@monaco-editor/react";
export default function CodeViewer({content,setContent}) {
  return (
    <div className='w-full h-full'>
        <Editor
        height="300px"
        language="javascript"
        theme="vs-dark"
        value={content}
        onChange={setContent}
  />
    </div>
  );
}


