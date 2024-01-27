import React from 'react'

function HorizontalStepper({CurrentStep}) {
    return (
        <div className='mt-[2rem]'>
        <ol class="flex justify-center items-center w-full mb-[2rem]">
        {CurrentStep==1&&(
            <div className='flex justify-center items-center'>
                <li className="selected-part">
                    <div className="selected-step">
                        <div>1</div>
                    </div>
                </li>
                <li className="part2">
                    <div className="step2">
                        <div>2</div>
                    </div>
                 </li>
                <li className="part3">
                    <div className="step3">
                        <div>3</div>
                    </div>
                </li>
            </div>)}
        {CurrentStep==2&&(
            <div className='flex justify-center items-center'>
                <li className="selected-part">
                    <div className="selected-step">
                        <div>1</div>
                    </div>
                </li>
                <li className="selected-part">
                    <div className="selected-step">
                        <div>2</div>
                    </div>
                 </li>
                <li className="part3">
                    <div className="step3">
                        <div>3</div>
                    </div>
                </li>
            </div>)}
        {CurrentStep==3&&(
            <div className='flex justify-center items-center'>
                <li className="selected-part">
                    <div className="selected-step">
                        <div>1</div>
                    </div>
                </li>
                <li className="selected-part">
                    <div className="selected-step">
                        <div>2</div>
                    </div>
                 </li>
                <li className="part text-blue-500">
                    <div className="selected-step">
                        <div>3</div>
                    </div>
                </li>
            </div>)
        }
        
        </ol>
    </div>
    )
}

export default HorizontalStepper
