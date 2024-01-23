import React from 'react'
import Components from './Components'

export const Sidebar = ({selected}) => {
  return (
    <div className='h-full w-[17.125rem] flex flex-col justify-start items-start bg-primary'>
      <div className='w-full h-[6.5rem] flex justify-center items-center border'>
        <img src="../../../public/menu.png" className=' w-[1.375rem] h-[1.375rem] hover:cursor-pointer'/>
        <div className='text-[#FFF] font-Jomolhari w-[12.785rem] h-[1.625rem] ml-[0.44rem] mr-[0.19rem]'>norhan3182001@gmail.com</div>
        <img src="../../../public/down-arrow.png" className='w-[1.5rem] h-[1.5rem] hover:cursor-pointer'/>
      </div>
      <div className='flex w-full h-full flex-col items-between justify-between mb-[1.13rem]'>
          <div className='mt-[1.13rem]'>
            {selected=="dashboard"?(<Components iconPath={"../../../public/dashboard.png"} text={"Dashboard"} selected={true}/>):(<Components iconPath={"../../../public/dashboard.png"} text={"Dashboard"} />)}
            {selected=="projects"?(<Components iconPath={"../../../public/projects.png"} text={"Projects"} selected={true}/>):(<Components iconPath={"../../../public/projects.png"} text={"Projects"} />)}
            {selected=="rules"?(<Components iconPath={"../../../public/Rules.png"} text={"Rules"} selected={true}/>):(<Components iconPath={"../../../public/Rules.png"} text={"Rules"} />)}
          </div>
          <div>
            <Components iconPath={"../../../public/playground.png"} text={"Playground"}/>
            <Components iconPath={"../../../public/help.png"} text={"Help"}/>
            <Components iconPath={"../../../public/docs.png"} text={"Docs"}/>
          </div>
      </div>
      <div className='w-full h-[6.5rem] border flex justify-center items-center' >
        <img src={"../../../../public/logo.png"} className='w-[3.6875rem] h-[3.6875rem] m '/>
        <div className='text-[2.1875rem] font-Jomolhari'>HANTER</div>
      </div>
    </div>
  )
}
export default Sidebar