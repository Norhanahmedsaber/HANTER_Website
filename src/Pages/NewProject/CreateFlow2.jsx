import React, { useEffect, useState } from 'react'
import Rule from './Rule'
import config from '../../../config'
import Cookies from 'js-cookie'
function CreateFlow2({selectedRules,setSelectedRules}) {
    const [search, setSearch] = useState("")
    const [systemRules, setSystemRules] = useState([])
    const [myRules, setMyRules] = useState([])
    const [selectedTab, setSelectedTab] = useState(1) // system = 1 , my-rules = 2
    function toggleRule(id){
        if(selectedRules.includes(id)){
            setSelectedRules(selectedRules.filter((rule)=>{
                return rule != id
            }))
        }else {
            setSelectedRules(selectedRules.concat(id))
        }
    }
    async function loadRules() {
        
        const response1 = await fetch(config.BASE_URL + '/system')
        const result1 = await response1.json()
        if (result1.message) {
        } else {
            setSystemRules(result1)
            
        }
        const response2 = await fetch(config.BASE_URL + '/rules', {
            headers: {
                "Authorization": "Bearer " + Cookies.get('token')
            }
        })
        const result2 = await response2.json()
        if (result2.message) {
        } else {
            setMyRules(result2)
        }

    }
    useEffect(() => {
        loadRules()
    }, [])
    useEffect(() => {
        const systemRulesIds = systemRules.map((r) => r.id)
        setSelectedRules(systemRulesIds)

    }, [systemRules])
    return (
        <div className=' w-[53.12rem] h-[25rem] flex  flex-col justify-center items-center'>
            <div className="w-full flex justify-between items-center">
                <div className='text-[1.2rem] w-[50%]'>Choose rules you want to apply</div>
            </div>
            <div className='w-full flex  items-center justify-between h-[3.125rem] bg-[#D9D9D9] rounded-t-[0.625rem] '>
                <div className='w-[16.25rem] h-[3.125rem] flex justify-center items-center'>
                    <div id='system-rules' className='list-rules-tab-selected2 rounded-tl-[0.625rem]  text-[1rem]' onClick={() => {
                        setSelectedTab(1)
                        document.getElementById('system-rules').classList.add('list-rules-tab-selected2')
                        document.getElementById('system-rules').classList.remove('list-rules-tab2')

                        document.getElementById('my-rules').classList.add('list-rules-tab2')
                        document.getElementById('my-rules').classList.remove('list-rules-tab-selected2')
                    }}>System Rules</div>
                    <div id='my-rules' className='list-rules-tab2 text-[1rem] ' onClick={() => {
                        setSelectedTab(2)
                        document.getElementById('my-rules').classList.add('list-rules-tab-selected2')
                        document.getElementById('my-rules').classList.remove('list-rules-tab2')

                        document.getElementById('system-rules').classList.add('list-rules-tab2')
                        document.getElementById('system-rules').classList.remove('list-rules-tab-selected2')
                    }}>My Rules</div>
                </div>
                <div class="relative">
                    <input type="text"
                        class="pl-10 mr-[0.9rem] pr-4 py-2 border-2 ml-[1.19rem] h-[2.3rem] w-[20rem] rounded-[5.3125rem]"
                        placeholder="Search" />
                    <div class="absolute inset-y-2 left-4 pl-3.5  
                        flex items-center  
                        pointer-events-none">
                        <img src={'../../../search.png'} className='w-[1.25rem] h-[1.25rem] ' />
                    </div>
                </div>
            </div>
            <div className='w-full h-[17rem] flex flex-col overflow-y-scroll'>
                {selectedTab == 1 ? (
                    <div>
                        {systemRules.map((rule, index) => {
                            if(selectedRules.includes(rule.id)) {
                                return (
                                    <Rule id={rule.id} toggle={toggleRule} checked={true} key={index} name={rule.name} />
                                )
                            }else {
                                return (
                                    <Rule id={rule.id} toggle={toggleRule} checked={false} key={index} name={rule.name} />
                                )
                            }
                        })}
                    </div>
                ) : (
                    <div>
                        {myRules.map((rule, index) => {
                            if(selectedRules.includes(rule.id)) {
                                return (
                                    <Rule id={rule.id} toggle={toggleRule} checked={true} key={index} name={rule.name} />
                                )
                            }else {
                                return (
                                    <Rule id={rule.id} toggle={toggleRule} checked={false} key={index} name={rule.name} />
                                )
                            }
                        })}
                    </div>
                )}
            </div>
            <div className='w-full h-[3rem] flex pl-[2rem] bg-[#D9D9D9] rounded-b-[0.625rem] justify-start items-center'> {selectedRules.length} Selected</div>
        </div>
    )
}

export default CreateFlow2
