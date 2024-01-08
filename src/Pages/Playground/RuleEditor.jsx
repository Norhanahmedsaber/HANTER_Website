import YamlEditor from '@focus-reactive/react-yaml'
import React, { useState } from 'react'
import {savaAs, saveAs} from 'file-saver'
import YamlViewer from './YamlViewer'
import { useNavigate } from 'react-router'

export default function RuleEditor() {
  const [content , setContent] = useState("")
  const nav = useNavigate()
  async function downloadYamlFile(){
    const yamlContent = content.text
    const blob = new Blob([yamlContent] , {type:'application/yaml'})
    saveAs(blob , "rule.yml")//name of the file instead of rule.yml
  }
  return (
    <div className='flex flex-col justify-center '>
      <YamlEditor  text={content} onChange={setContent}/>
      <div className='flex justify-between'>
        <div className='bg-blue-500 w-[20%] rounded-xl flex justify-center cursor-pointer' onClick={()=>{
          downloadYamlFile()
        }}>download</div>
        <div className='bg-blue-500 w-[20%] rounded-xl flex justify-center cursor-pointer' onClick={()=>{
          nav('/new_rule',{
            state:{
              content: content.text
            }
          })
        }}>Save</div>
      </div>
      
    </div>
  )
}
