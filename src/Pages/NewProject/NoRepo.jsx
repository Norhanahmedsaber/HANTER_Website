
import React, { useEffect, useState } from 'react'
import GithubAuth from '../../Modals/Github/GithubAuth'
import config from '../../../config'
import Cookies from 'js-cookie'

function NoRepo() {
    const [authModal, setAuthModal] = useState(false)
    async function checkAuth() {
        const response = await fetch(config.BASE_URL + '/profile', {
            headers: {
                "Authorization": Cookies.get('token')
            }
        })
        const result = await response.json()
        if(result.message) {
            Cookies.remove('token')
            nav('./login')
        }else {
            if(result.github_account) {
                nav(0)
            }
        }
    }
    useEffect(()=>{
        checkAuth()
    },[])
    return (
        <div className='flex h-full w-full flex-col justify-center items-center'>
            <GithubAuth checkAuth={checkAuth} isOpen={authModal} setIsOpen={setAuthModal} />
            <img src={'../../../public/ghost1.png'} className=' w-[calc(0.75*12.5rem)] h-[calc(0.75*12.5rem)]'/>
            <div className=' flex flex-col justify-center items-center mt-[1.25rem]'>
                <div className='text-[2rem] mt-[1.5rem]'>Your Github Account isn't Connected</div>
                <div className='text-[1rem] mt-[1.5rem] text-center w-[62rem] justify-center items-center'>Hanter can't find any additional repositories in this account.<br/>You may need to sync your projects from Github or update which repositories Hanter’s GitHub app can access.</div>
                <div className='flex  mt-[1.5rem] justify-around items-center bg-[#1C7ED6] w-[calc(0.75*25rem)] h-[3.125rem] rounded-[0.625rem] cursor-pointer'  onClick={()=>{setAuthModal(true)}}>
                    <div className='text-[#FFF] '>Connect</div>
                </div>
            </div>
        </div>
    )
}

export default NoRepo
