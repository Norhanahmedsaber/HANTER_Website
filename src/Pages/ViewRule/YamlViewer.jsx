import React from 'react'
import YamlEditor from '@focus-reactive/react-yaml'
import { oneDark } from '@codemirror/theme-one-dark';
export default function YamlViewer({ content, setContent }) {
    return (
        <div className='w-full h-full'>
            <YamlEditor text={content} onChange={setContent}/>
        </div>
    )
}
