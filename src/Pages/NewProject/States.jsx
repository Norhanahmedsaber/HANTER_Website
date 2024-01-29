import React from 'react'
import HorizontalStepper from './HorizontalStepper'
import { useState } from 'react'
import CreateFlow from './CreateFlow'
import Buttons from './Buttons'
function States() {
    const [selectedRules, setSelectedRules] = useState([])
    const [config, setConfig] = useState('{\n\t"ignoredDirs": ["node_modules", "dist"],\n\t"extensions": ["js"],\n\t"ignoredPatterns":[]\n}')
    const [CurrentStep, setCurrentStep] = useState(1)
    const [error, setError] = useState("")
    function scan() {
        fetch(config.BASE_URL + "/rule", {
            method: "POST",
            headers: {
              "Content-Type": "Application/json",
              Authorization: Cookies.get("token"),
            },
            body: JSON.stringify({
              name: ruleName,
              content: content,
            }),
          })
            .then((response) => response.json())
            .then((result) => {
              if (result.message) {
                setError(result.message);
              } else {
                nav("/rule/" + result.id);
                console.log("Done");
              }
            });
    }
    return (
        <div className='w-full h-full flex  flex-col justify-start items-center font-sem2'>
            <div className='text-red-500'>{error}</div>
            <HorizontalStepper CurrentStep={CurrentStep} />
            <CreateFlow CurrentStep={CurrentStep} setSelectedRules={setSelectedRules} selectedRules={selectedRules} config={config} setConfig={setConfig} />
            <Buttons setCurrentStep={setCurrentStep} CurrentStep={CurrentStep} scanButton={scan} />
        </div>
    )
}

export default States
