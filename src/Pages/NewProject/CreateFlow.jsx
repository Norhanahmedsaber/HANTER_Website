import React from 'react'
import CreateFlow3 from './CreateFlow3'
import CreateFlow2 from './CreateFlow2'
import CreateFlow1 from './CreateFlow1'
function CreateFlow({CurrentStep,selectedRules,setSelectedRules,config,setConfig,selectedRepo,setSelectedRepo,search,setSearch,searchedRepo,setSearchedRepos}) {
    return (
        <div>
            {CurrentStep==1&&(<CreateFlow1 selectedRepo={selectedRepo} setSelectedRepo={setSelectedRepo} search={search} setSearch={setSearch} searchedRepo={searchedRepo} setSearchedRepos={setSearchedRepos}/>)}
            {CurrentStep==2&&(<CreateFlow2 setSelectedRules={setSelectedRules} selectedRules={selectedRules}/>)}
            {CurrentStep==3&&(<CreateFlow3 config={config} setConfig={setConfig}/>)}

        </div>
    )
}

export default CreateFlow