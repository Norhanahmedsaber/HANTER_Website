import React from 'react'
import HorizontalStepper from './HorizontalStepper'
import { useState } from 'react'
import CreateFlow from './CreateFlow'
import Buttons from './Buttons'
import configs from '../../../config'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

function States() {
    const [selectedRules, setSelectedRules] = useState([])
    const [config, setConfig] = useState('{\n\t"ignoredDirs": ["node_modules", "dist"],\n\t"extensions": ["js"],\n\t"ignoredPatterns":[]\n}')
    const [CurrentStep, setCurrentStep] = useState(1)
    const [error, setError] = useState("")
    const nav = useNavigate()
    const url = "https://github.com/Anas12312/memecoin"
    const projectName = "jksdbjg"

    function scan() {
        console.log("hhh");
        fetch(configs.BASE_URL + "/project", {
           
            method: "POST",
            headers: {
              "Content-Type": "Application/json",
              Authorization: Cookies.get("token"),
            },
            body: JSON.stringify({
              name: projectName,
              url: url,
              config: config,
              rules: selectedRules
            }),
          })
            .then((response) => response.json())
            .then((result) => {
              if (result.message) {
                setError(result.message);
              } else {
                nav("../projects" );
                console.log("Done");
              }
            });
    }
    return (
        <div className='w-full h-full flex  flex-col justify-start items-center font-sem2'>
            <div className='text-red-500'>{error}</div>
            <HorizontalStepper CurrentStep={CurrentStep} />
            <CreateFlow CurrentStep={CurrentStep} setSelectedRules={setSelectedRules} selectedRules={selectedRules} config={config} setConfig={setConfig} />
            <Buttons setCurrentStep={setCurrentStep} CurrentStep={CurrentStep} scan={scan} />
        </div>
    )
}

export default States
