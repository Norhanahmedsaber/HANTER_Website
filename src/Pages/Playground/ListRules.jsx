import React, { useEffect, useState } from 'react'
import config from '../../../config'
import Cookies from 'js-cookie'
import { Oval } from 'react-loader-spinner'
import TransferRule from '../../Modals/Playground/transferRule'
import PleaseSignIn from './PleaseSignIn'
export default function ListRules({ transferRule }) {
    const [search, setSearch] = useState("")
    const [selectedTab, setSelectedTab] = useState(1) // system = 1 , my-rules = 2
    const [rules, setRules] = useState([])
    const [loading, setLoading] = useState(true)
    const [id, setId] = useState(0)
    const [isTransferModalOpen, setTransferModalOpen] = useState(false)
    const [loggedIn,setLoggedIn]=useState(false)
    async function loadRules() {
        setLoading(true)
        if (selectedTab == 1) {
            const response = await fetch(config.BASE_URL + '/system')
            const result = await response.json()
            if (result.message) {
            } else {
                setRules(result)

            }
        } else if (selectedTab == 2) {
            const response = await fetch(config.BASE_URL + '/rules', {
                headers: {
                    "Authorization": "Bearer " + Cookies.get('token')
                }
            })
            const result = await response.json()
            if (result.message) {
            } else {
                console.log(result)
                setRules(result)
            }
        }
        setLoading(false)

    }
    async function fetchRule() {
        const rule = rules.find((x) => x.id === id)
        if (rule) {
            let response = await fetch(rule.url)
            let data = await response.text()
            transferRule(data)
        }
    }
    async function getuser() {
        const reponse= await fetch(config.BASE_URL+'/profile',{
          headers:{
            Authorization:Cookies.get('token'),
          }
        })
        const result = await reponse.json()
        if(result.message){
      
        }else {
            setLoggedIn(true)
        }
        }
    useEffect(() => {
        getuser()
        loadRules()
    }, [selectedTab])
    return (
        <div className='w-[17%] h-[calc(100%-1.25rem)] flex flex-col justify-start ml-[0.62rem] rounded-t-[0.625rem] font-sem2 overflow-hidden'>
            <TransferRule
                transferRule={fetchRule}
                setIsOpen={setTransferModalOpen}
                isOpen={isTransferModalOpen}
                id={id}
            />
            <div className='w[100%] h-[3.75rem] justify-start items-cneter  rounded-t-[0.625rem] bg-primary'>
                <div className=' text-white text-[1.5rem] mt-2 ml-[0.88rem]'>Library</div>
            </div>
            <div className='w-full'>
                <div className='w-full h-[3.125rem] flex justify-center items-center'>
                    <div id='system-rules' className='list-rules-tab-selected  text-[1rem]' onClick={() => {
                        setSelectedTab(1)
                        document.getElementById('system-rules').classList.add('list-rules-tab-selected')
                        document.getElementById('system-rules').classList.remove('list-rules-tab')

                        document.getElementById('my-rules').classList.add('list-rules-tab')
                        document.getElementById('my-rules').classList.remove('list-rules-tab-selected')
                    }}>System Rules</div>
                    <div id='my-rules' className='list-rules-tab text-[1rem]' onClick={() => {
                        setSelectedTab(2)
                        document.getElementById('my-rules').classList.add('list-rules-tab-selected')
                        document.getElementById('my-rules').classList.remove('list-rules-tab')

                        document.getElementById('system-rules').classList.add('list-rules-tab')
                        document.getElementById('system-rules').classList.remove('list-rules-tab-selected')
                    }}>My Rules</div>
                </div>
            </div>
            <div className='w-full bg-[#FFF] h-full flex-col justify-center items-start  '>
                <div className="relative">
                    <input type="text"
                        className="pl-10 pr-4 py-2 border-2 mt-[0.69rem] ml-[1.19rem] w-[90%] rounded-[5.3125rem] text-sm"
                        placeholder="Search" />
                    <div className="absolute inset-y-[1.9rem] left-4 pl-3.5  
                    flex items-center  
                    pointer-events-none">
                        <img src={'../../../public/search.png'} className='w-[1.25rem] h-[1.25rem] ' />
                    </div>
                </div>

                {loading ? (
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
                ) : (
                    <div>
                    {selectedTab==1&&(<div className='w-full flex flex-col justify-start items-start mt-[0.9rem] h-[70%] overflow-y-scroll'>
                    {rules.map((rule, index) => {
                        return (
                            <div key={index} onClick={() => {
                                setId(rule.id)
                                setTransferModalOpen(true)
                            }} className=' w-[80%] px-1 mb-[0.2rem] ml-4 flex items-center hover:bg-[#D9D9D9] rounded-[0.625rem]'>
                                <img src={'../../../public/file1.png'} className='w-[1.2rem] h-[1.2rem]'></img>
                                <div className="list-rules-rule text-[0.8rem]" key={index}>{rule.name}</div>
                            </div>
                        )
                    })}
                </div>)}
                {selectedTab==2&&(<div>{loggedIn?(<div className='w-full flex flex-col justify-start items-start mt-[0.9rem] h-[70%] overflow-y-scroll'>
                {rules.map((rule, index) => {
                    return (
                        <div key={index} onClick={() => {
                            setId(rule.id)
                            setTransferModalOpen(true)
                        }} className=' w-[80%] px-1 mb-[0.2rem] ml-4 flex items-center hover:bg-[#D9D9D9] rounded-[0.625rem]'>
                            <img src={'../../../public/file1.png'} className='w-[1.2rem] h-[1.2rem]'></img>
                            <div className="list-rules-rule text-[0.8rem]" key={index}>{rule.name}</div>
                        </div>
                    )
                })}
            </div>):(<PleaseSignIn></PleaseSignIn>)}</div>)}
                    </div>
                )}
            </div>
        </div>
    )
}
