import React from 'react'
import Logo from "../../Components/Logo"
import Item from './Item'
import Cookies from 'js-cookie'



function Navbar({isAuth}) {
    return (
        <div className="flex text-white items-center justify-between border h-[10%]">
        <div className='w-[5%] rounded-full ml-20'>
            <img src={'../../../public/logo.png'} className='rounded-full'/>
        </div>
            <div className='flex justify-center items-center mr-10'>
                <Item text={"Team"} path={'/parent'}/>
                <Item text={"Docs"} path={'/parent'}/>
                <Item text={"Playground"} path={'/parent'}/>
                <Item text={"Log in"} path={'/login'}/>
                <Item text={"Sign up"} path={'/signup'}/>
                {!isAuth?(
                    <div className='flex justify-center items-center'>
                        <Item text={"Log in"} path={'/login'}/>
                        <Item text={"Sign up"} path={'/signup'}/>
                    </div>
                ):(
                    <div onClick={()=>{
                        Cookies.remove('token')
                    }}> 
                        <Item text={"Logout"} path={0}></Item>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar