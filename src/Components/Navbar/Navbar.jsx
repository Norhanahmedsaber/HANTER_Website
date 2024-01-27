import React from 'react'
import Logo from "../../Components/Logo"
import Item from './Item'
import Cookies from 'js-cookie'



function Navbar({ selected }) {
    return (
        <div className="flex w-full h-[4.35rem] items-center justify-between border ">
            <div className=' flex flex-row justify-start items-center ml-[1.5rem]'>
                <img src={'../../../public/logo2.png'} className=' w-[3rem] h-[3rem] ' />
                <div className='font-Jomolhari text-[1.5rem] ml-[1rem]'>HANTER</div>
            </div>
            <div className='flex flex-row justify-between items-center h-full mb-[2rem] mt-[2rem]'>
                {selected == "team" ? (<Item text={"Team"} path={'/team'} selected={true} />) : <Item text={"Team"} path={'/team'} />}
                {selected == "Docs" ? (<Item text={"Docs"} path={'/docs'} selected={true} />) : <Item text={"Docs"} path={'/docs'} />}
                {selected == "playground" ? (<Item text={"Playground"} path={'/playground'} selected={true} />) : <Item text={"Playground"} path={'/playground'} />}
                {selected == "signin" ? (<Item text={"Sign In"} path={'/login'} selected={true} />) : <Item text={"Sign In"} path={'/login'} />}
            </div>
        </div>
    )
}

export default Navbar
