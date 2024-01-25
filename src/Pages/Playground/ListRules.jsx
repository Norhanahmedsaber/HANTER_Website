import React, { useEffect, useState } from 'react'
import config from '../../../config'
import Cookies from 'js-cookie'
import { Oval } from 'react-loader-spinner'
export default function ListRules() {
    const [search, setSearch] = useState()
    const [selectedTab, setSelectedTab] = useState(1) // system = 1 , my-rules = 2
    const [rules, setRules] = useState([])
    const [loading, setLoading] = useState(true)
    async function loadRules() {
        setLoading(true)
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
        setLoading(false)

    }
    useEffect(() => {
        loadRules()
    },[selectedTab])
  return (
    <div className='w-[16.25rem] h-[calc(100%-1.25rem)] flex flex-col justify-start ml-[0.62rem] rounded-t[0.625rem] font-sem2'>
    <div className='w[16.25rem] h-[3.75rem] justify-start items-cneter  rounded-t-[0.625rem] bg-primary'>
        <div className=' text-white text-[1.875rem] ml-[0.88rem] mb-[0.75rem]'>Library</div>
    </div>
    <div className='w-[16.25rem] h-[3.125rem] flex justify-center items-center'>
        <div id='system-rules' className='list-rules-tab-selected  text-[1.25rem]' onClick={()=>{
            setSelectedTab(1)
            document.getElementById('system-rules').classList.add('list-rules-tab-selected')
            document.getElementById('system-rules').classList.remove('list-rules-tab')

            document.getElementById('my-rules').classList.add('list-rules-tab')
            document.getElementById('my-rules').classList.remove('list-rules-tab-selected')
        }}>System Rules</div>
        <div id='my-rules' className='list-rules-tab text-[1.25rem]' onClick={()=>{
            setSelectedTab(2)
            document.getElementById('my-rules').classList.add('list-rules-tab-selected')
            document.getElementById('my-rules').classList.remove('list-rules-tab')

            document.getElementById('system-rules').classList.add('list-rules-tab')
            document.getElementById('system-rules').classList.remove('list-rules-tab-selected')
        }}>My Rules</div>
    </div>
    <div className='w-[16.25rem] bg-[#FFF] h-full flex-col justify-center items-start  '>
    <div class="relative"> 
        <input type="text" 
               class="pl-10 pr-4 py-2 border-2 mt-[0.69rem] ml-[1.19rem] w-[14.1875rem] rounded-[5.3125rem]" 
               placeholder="Search" /> 
        <div class="absolute inset-y-8 left-4 pl-3.5  
                    flex items-center  
                    pointer-events-none"> 
            <img src={'../../../public/search.png'} className='w-[1.25rem] h-[1.25rem] '/>
        </div> 
    </div> 
    
    {loading?(
        <div className='w-full flex justify-center items-center h-[50%]'>
            <Oval
            visible={true}
            height="30"
            width="30"
            color="#ffffff"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />
        </div>
      ):(
        <div className='w-[16.25rem] flex flex-col justify-start items-start mt-[1.25rem]'>
        {rules.map((rule, index) => {
            return (
                <div className=' w-[13.785rem] p-1 mb-[0.63rem] ml-[1.19rem] flex flex-row hover:bg-[#D9D9D9] rounded-[0.625rem]'>
                <img src={'../../../public/file1.png'} className='w-[1.875rem] h-[1.875rem]'></img>
                <div className = "list-rules-rule w-[7rem] h-[2rem]" key={index}>{rule.name}</div>
                </div>
                )
        })}
    </div>
      )}     
</div>
    </div>
  )
}
