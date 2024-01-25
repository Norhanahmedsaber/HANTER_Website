import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import ListRules from './ListRules'
import RuleEditor from './RuleEditor'
import SourceEditor from './SourceEditor'
import {savaAs, saveAs} from 'file-saver'
import Reports from '../Reports/Reports'
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
export default function Playground() {
  const [content , setContent] = useState("")
  const [isAuth , setIsAuth] = useState(false)
  useEffect(()=>{
    if(Cookies.get('token')){
      setIsAuth(true)
    }else{
      setIsAuth(false)
    }
  } , [])
  const nav = useNavigate()

  async function downloadYamlFile(){
    const yamlContent = content.text
    const blob = new Blob([yamlContent] , {type:'application/yaml'})
    saveAs(blob , "rule.yml")//name of the file instead of rule.yml
  }
  return (
    <div className='w-screen h-screen flex justify-start items-center flex-col font-sem2'>
      <Navbar/>
      <div className='w-full h-[calc(100%-6.25rem)] bg-secondary pt-[1rem] flex justify-center items-center'>
        <ListRules/>
        <RuleEditor/>
        <div className='w-[32.875rem] h-[calc(100%-1.25rem)] flex flex-col justify-start ml-[0.62rem] rounded-t[0.625rem] font-sem2'>
        <div className='w[38.375rem] h-[3.75rem] justify-start items-cneter  rounded-t-[0.625rem] bg-primary'>
          <div className=' text-white text-[1.875rem] flex justify-end items-end ml-[0.88rem] mb-[0.75rem]'>
            <div className='mr-5 cursor-pointer' onClick={()=>{
              nav('/new_rule',{
                state:{
                  content: content.text
                }
              })
            }}>Save</div>
            <div className='mr-5 cursor-pointer' onClick={()=>{
              downloadYamlFile()
             }}>Download</div>
          </div>
        </div>
            <div className='bg-white flex w-full h-[3.125rem] justify-center items-center text-[1.25rem] border-b-2 border-b-black'>Code</div>
              <div className='flex flex-col justify-start items-end bg-white '>
               <div className='h-[20rem] w-full'> 
                  <SourceEditor/>
                </div>
                <div className='w-[9.375rem] h-[2.1875rem]  flex justify-center items-center text-white hover:cursor-pointer bg-[#1C7ED6] mr-3 rounded-[0.625rem] my-2'>run</div>
              </div>
            <div className='bg-white flex-row mt-[0.62rem] w-full h-[13rem] justify-center items-center'>
              <div className='text-[1.25rem]  flex justify-center items-center border-b-2 border-b-black'>Results</div>
              <div>hi</div>
            </div>
            </div>
      </div>
    </div>
  )
}
