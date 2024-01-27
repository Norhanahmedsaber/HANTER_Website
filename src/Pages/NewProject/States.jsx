import React from 'react'
import HorizontalStepper from './HorizontalStepper'
import { useState } from 'react'
import CreateFlow from './CreateFlow'
import Buttons from './Buttons'
function States() {
    const [selectedRules, setSelectedRules] = useState([])
    const [config, setConfig] = useState("")
    const [CurrentStep, setCurrentStep] = useState(1)
    return (
        <div className='w-full h-full flex  flex-col justify-start items-center font-sem2'>
            <HorizontalStepper CurrentStep={CurrentStep} />
            <CreateFlow CurrentStep={CurrentStep} setSelectedRules={setSelectedRules} selectedRules={selectedRules} config={config} setConfig={setConfig} />
            <Buttons setCurrentStep={setCurrentStep} CurrentStep={CurrentStep} />
        </div>
    )
}

export default States
