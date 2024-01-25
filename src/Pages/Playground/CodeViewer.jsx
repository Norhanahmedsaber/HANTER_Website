import React from "react";
import Editor from "@monaco-editor/react";
export default function CodeViewer({content,setContent, language}) {
  return (
        <Editor
                language={language}
                theme="vs-light"
                value={content}
                onChange={setContent}
          />
  );
}
