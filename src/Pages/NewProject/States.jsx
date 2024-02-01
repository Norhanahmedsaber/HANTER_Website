import React from 'react'
import HorizontalStepper from './HorizontalStepper'
import { useState } from 'react'
import CreateFlow from './CreateFlow'
import Buttons from './Buttons'
import configs from '../../../config'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import Config from '../../../config'
function States({search,setSearch,searchedRepo,setSearchedRepos}) {
    const [selectedRules, setSelectedRules] = useState([])
    const [config, setConfig] = useState('{\n\t"ignoredDirs": ["node_modules", "dist"],\n\t"extensions": ["js"],\n\t"ignoredPatterns":[]\n}')
    const [CurrentStep, setCurrentStep] = useState(1)
    const [error, setError] = useState("")
    const [selectedRepo,setSelectedRepo]=useState({})
    const nav = useNavigate()

   async function scan() {
    console.log("loading")
      const response= await fetch(Config.BASE_URL+'/project',{
        method: "POST",
        headers:{
          'Authorization':Cookies.get('token'),
          'Content-Type':"application/json"
        },
        body:JSON.stringify({
          "name": selectedRepo.name,
          "url":selectedRepo.url,
          "config":config,
          "rules": selectedRules
        })
      })
      const result=await response.json()
      if(result.message){
        setError(result.message)
      }else{
        nav('../projects')
      }
    }
    return (
        <div className='w-full h-full flex  flex-col justify-start items-center font-sem2'>
            <div className='text-red-500'>{error}</div>
            <HorizontalStepper CurrentStep={CurrentStep} />
            <CreateFlow CurrentStep={CurrentStep} setSelectedRules={setSelectedRules} selectedRules={selectedRules} config={config} setConfig={setConfig} selectedRepo={selectedRepo} setSelectedRepo={setSelectedRepo} search={search} setSearch={setSearch} searchedRepo={searchedRepo} setSearchedRepos={setSearchedRepos} />
            <Buttons setCurrentStep={setCurrentStep} CurrentStep={CurrentStep} scan={scan} />
        </div>
    )
}

export default States
