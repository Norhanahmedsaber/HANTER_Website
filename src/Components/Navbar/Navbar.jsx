import React from 'react'
import Logo from "../../Components/Logo"
import Item from './Item'
import Cookies from 'js-cookie'



function Navbar({selected}) {
    return (
        <div className="flex w-full h-[6.25rem] items-center justify-between border ">
        <div className=' flex flex-row justify-start items-center ml-[1.5rem]'>
            <img src={'../../../public/logo2.png'} className=' w-[4.1875rem] h-[4.0625rem] '/>
            <div className='font-Jomolhari text-[2.1875rem] h-[3.5rem] [w-[9.875rem] mt-[0.5rem]'>HANTER</div>
        </div>
            <div className='flex flex-row justify-between items-center mb-[2rem] mt-[2rem]'>
                {selected=="team"?(<Item text={"Teams"} path={'/parent'} selected={true}/>):<Item text={"Teams"} path={'/parent'}/>}
                {selected=="Docs"?(<Item text={"Docs"} path={'/parent'} selected={true}/>):<Item text={"Docs"} path={'/parent'}/>}
                {selected=="playground"?(<Item text={"Playground"} path={'/playground'} selected={true}/>):<Item text={"Playground"} path={'/playground'}/>}
                {selected=="signin"?(<Item text={"SignIn"} path={'/login'} selected={true}/>):<Item text={"SignIn"} path={'/login'}/>}
            </div>
        </div>
    )
}

export default Navbar
