import React from "react";
import Editor from "@monaco-editor/react";
export default function CodeViewer({ content, setContent }) {
  return (
    <div className="w-full h-full">
      <Editor
        language="javascript"
        className="h-[90%]"
        theme="vs-light"
        value={content}
        onChange={setContent}
      />
    </div>
  );
}
