import YamlEditor from '@focus-reactive/react-yaml'
import React, { useState } from 'react'
import {savaAs, saveAs} from 'file-saver'
import { useNavigate } from 'react-router'
import CodeViewer from './CodeViewer'

export default function RuleEditor() {
  const [content , setContent] = useState("")
  const [selectedTab, setSelectedTab] = useState(1)
  const onContentChange = (cont) => {
    setContent(cont)
  }
  const nav = useNavigate()
  async function downloadYamlFile(){
    const yamlContent = content.text
    const blob = new Blob([yamlContent] , {type:'application/yaml'})
    saveAs(blob , "rule.yml")//name of the file instead of rule.yml
  }
  return (
    <div className='w-[32.875rem] h-[calc(100%-1.25rem)] flex flex-col justify-start ml-[0.62rem] rounded-t[0.625rem] font-sem2'>
      <div className='w[16.25rem] h-[3.75rem] justify-start items-cneter  rounded-t-[0.625rem] bg-primary'>
        <div className=' text-white text-[1.875rem] ml-[0.88rem] mb-[0.75rem]'>C-string-equality</div>
      </div>
      <div className='bg-white w-full h-full'>
      <div className='w-full h-[3.125rem] flex justify-center items-center'>
          <div id='simple' className='list-rules-tab-selected  text-[1.25rem]' onClick={()=>{
              setSelectedTab(1)
              document.getElementById('simple').classList.add('list-rules-tab-selected')
              document.getElementById('simple').classList.remove('list-rules-tab')

              document.getElementById('advance').classList.add('list-rules-tab')
              document.getElementById('advance').classList.remove('list-rules-tab-selected')
            }}>Simple</div>
            <div id='advance' className='list-rules-tab text-[1.25rem]' onClick={()=>{
                setSelectedTab(2)
                document.getElementById('advance').classList.add('list-rules-tab-selected')
                document.getElementById('advance').classList.remove('list-rules-tab')

                document.getElementById('simple').classList.add('list-rules-tab')
                document.getElementById('simple').classList.remove('list-rules-tab-selected')
            }}>Advanced</div>
            </div>
            {selectedTab==1?(<div>Coming Soon...</div>):(
              <div className='mt-2'><CodeViewer language={"yaml"} text={content} onChange={onContentChange} /></div>
            )}
       </div>
      </div>
      
  )
}
