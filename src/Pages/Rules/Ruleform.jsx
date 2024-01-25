import React, { useState, useEffect } from 'react'
import RuleOption from '../../Modals/NewRule/RuleOption';
import Rule from './Rule';
import config from '../../../config';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export default function Ruleform() {
    const [uploadModalOpen, setUploadModalOpen] = useState(false)
    const [rules, setRules] = useState([])
    function getRules() {
        fetch(config.BASE_URL + "/rules", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + Cookies.get('token')
            }
        }).then(response => response.json())
            .then((result) => {
                if (result.message) {
                    console.log(result.message)
                } else {
                    setRules(result)
                }
            })
    }
    useEffect(() => {
        getRules()
    }, [])
    return (
        <div className='flex flex-col justify-start items-center w-[calc(100%-12.5rem)] h-full'>
            
            <RuleOption
                isOpen={uploadModalOpen}
                setIsOpen={setUploadModalOpen}
            />
            <div className='relative flex items-center h-[4.375rem] w-full bg-[#F8F9FA] '>
                <div className='text-[#000] font-sem2 font-bold text-[2.6875rem] ml-[1.94rem] mr-[7.5rem]'>Rules</div>
                <div className="relative">
                    <input type="text"
                        className=" text-[1.25rem] pl-8 pr-4 border border-[#8F8C8C] ml-[1.19rem] w-[29.5rem] h-[2.5rem] rounded-[5.3125rem]"
                        placeholder="Search..." />
                    <div className="absolute inset-y-2 left-4 pl-3  
                            flex items-center  
                            pointer-events-none">
                        <img src={'../../../public/search.png'} className='w-[1rem] h-[1rem] ' />
                    </div>
                </div>
                <div className='w-[10rem] h-[2.5rem] border rounded-[0.625rem] bg-secondary ml-[7.5rem] absolute right-[1.81rem] flex justify-center items-center'>
                    <img src='../../../../public/new_project.png' className='w-[1.875rem] h-[1.875rem]'></img>
                    <div className='text-[#FFF] text-[1.1rem] ml-[0.62rem] font-sem2' onClick={() => {
                        setUploadModalOpen(true)
                    }}>
                        New Rule
                    </div>
                </div>
            </div>
            <div className='flex flex-col h-[42.9375rem] w-[calc(100%-3.5rem)] mt-[2.25rem]'>
                <div className='font-bold'><div className='h-[3.4rem] rounded-t-[0.625rem] bg-[#EEE] flex justify-center items-center font-sem2 text-[1rem] text-[#000] w-full'>
                    <div className='w-[50%] pl-[1.06rem]'>Rule name</div>
                    <div className='w-[15%] text-center'>Last Edit</div>
                    <div className='w-[15%] text-center'>Severity</div>
                    <div className='w-[15%] text-center'>Private</div>
                    <div className='w-[10%]'></div>
                </div></div>
                <div className='overflow-y-scroll h-[28rem] border-b border-l'>
                    {
                        rules.map((rule, index) => <Rule key={index} ruleName={rule.name} uuid={rule.uuid} id={rule.id} getRules={getRules} />)
                    }
                </div>
            </div>
        </div>
    )
}
