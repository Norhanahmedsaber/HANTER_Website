import React, { useEffect, useState } from 'react'
import config from '../../../config'
import Cookies from 'js-cookie'
export default function ListRules() {
    const [search, setSearch] = useState()
    const [selectedTab, setSelectedTab] = useState(1) // system = 1 , my-rules = 2
    const [rules, setRules] = useState([])
    async function loadRules() {
        console.log(selectedTab)
        if(selectedTab == 1) {
            const response = await fetch(config.BASE_URL + '/system')
            const result = await response.json()
            if(result.message) {

            }else {
                setRules(result)
            }
        }else if (selectedTab == 2) {
            const response = await fetch(config.BASE_URL + '/rules', {
                headers: {
                    "Authorization": "Bearer " + Cookies.get('token')
                }
            })
            const result = await response.json()
            if(result.message) {

            }else {
                setRules(result)
            }
        }
    }
    useEffect(() => {
        loadRules()
    },[rules])
  return (
    <div className='h-full w-full flex flex-col justify-start bg-slate-50'>
        <div className='h-[6%] w-full  flex justify-center items-center mt-4 '>
            <input className='w-[95%] h-[90%] border-2 rounded-md pl-4' 
                onChange={(e)=>{
                    setRuleName(e.currentTarget.value)
                }}/>
        </div>
        <div className='w-full h-[5%] flex justify-center items-center'>
            <div id='system-rules' className='list-rules-tab-selected' onClick={()=>{
                setSelectedTab(1)
                document.getElementById('system-rules').classList.add('list-rules-tab-selected')
                document.getElementById('system-rules').classList.remove('list-rules-tab')

                document.getElementById('my-rules').classList.add('list-rules-tab')
                document.getElementById('my-rules').classList.remove('list-rules-tab-selected')
            }}>System Rules</div>
            <div id='my-rules' className='list-rules-tab' onClick={()=>{
                setSelectedTab(2)
                document.getElementById('my-rules').classList.add('list-rules-tab-selected')
                document.getElementById('my-rules').classList.remove('list-rules-tab')

                document.getElementById('system-rules').classList.add('list-rules-tab')
                document.getElementById('system-rules').classList.remove('list-rules-tab-selected')
            }}>My Rules</div>
        </div>
        <div className='w-full h-[85%] flex flex-col justify-start items-center mt-2'>
            {rules.map((rule, index) => {
                return (
                    <div className = "list-rules-rule" key={index}>{rule.name}</div>
                )
            })}
        </div>
    </div>
  )
}
