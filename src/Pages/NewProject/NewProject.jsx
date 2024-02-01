import React, { useEffect } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import NoRepo from './NoRepo'
import States from './States'
import config from '../../../config'
import Cookies from 'js-cookie'
import { useState } from 'react'
export default function NewProject() {
const [githubAuth,setGithubAuth]=useState(false)
const [search , setSearch] = useState(false)
const [searchedRepo , setSearchedRepos] = useState([])
  async function getGithubAuth(){
  const reponse= await fetch(config.BASE_URL+'/profile',{
    headers:{
      Authorization:Cookies.get('token'),
    }
  })
  const result = await reponse.json()
  if(result.message){

  }else if(result.github_account){
    setGithubAuth(true)
  }
  else{
   setGithubAuth(false)
  }
  }
  useEffect(()=>{
    getGithubAuth()
},[])
return (
    <div className='flex flex-row justify-start w-screen h-screen items-start font-sem2'>
        <Sidebar/>
        <div className=' w-full h-full flex flex-col justify-start items-start'>
          <div className='w-full h-[3.75rem] flex flex-row justify-start items-center border-b border-[#8F8C8C]'>
            <div className='ml-[1.69rem] text-[2rem]'>New Project</div>
          </div>
          {githubAuth?(<States search={search} setSearch={setSearch} searchedRepo={searchedRepo} setSearchedRepos={setSearchedRepos}/>):(<NoRepo/>)}
        </div>
      </div>
  )
}
