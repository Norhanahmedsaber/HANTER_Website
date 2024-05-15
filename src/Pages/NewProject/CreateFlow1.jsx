import React, { useEffect, useState } from 'react'
import Repo from './Repo.jsx'
import config from '../../../config'
import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'

function CreateFlow1({selectedRepo,setSelectedRepo}) {
    const [repos, setRepos] = useState([])
    async function loadRepos(){
        const response = await fetch(config.BASE_URL + '/user/repos', {
            headers:{
                'Authorization':Cookies.get('token')
            }
        })
        const result = await response.json()
        if(result.message){
            
        }else {
            setRepos(result)
        }
        
    }
    useEffect(()=>{
        loadRepos()
    },[])
    return (
        <div className=' w-[53.12rem] h-[25rem] flex  flex-col justify-center items-center'>
            <div className="w-full flex justify-between items-center">
                <div className='text-[1.2rem] w-[50%]'>Choose a project to scan</div>
                <div class="relative">
                    <input
                        id='bar' 
                        type="text"
                        class="pl-10 pr-4 py-2 border-2 ml-[1.19rem] w-[26.5625rem] rounded-[5.3125rem]"
                        placeholder="Search"
                         />
                    <div class="absolute inset-y-2 left-4 pl-3.5  
                            flex items-center  
                            pointer-events-none">
                        <img src={'../../../search.png'} className='w-[1.25rem] h-[1.25rem] ' />
                    </div>
                </div>
            </div>
            <div className='w-full h-[20rem] flex flex-col overflow-y-scroll mt-6'>
                <div>
                    {
                        repos.map((r) => {
                            if(selectedRepo.id===r.id){
                                return <Repo selected={true} name={r.name} date={r.date} privacy={r.private} url={r.url} id={r.id} />
                            }
                            else{
                                return <Repo name={r.name} date={r.date} privacy={r.private} url={r.url} id={r.id} setSelectedRepo={setSelectedRepo} />
                            }
                        })
                    }
                </div>
            </div>
        </div>

    )
}

export default CreateFlow1
