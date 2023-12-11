import React, { useEffect, useState } from "react";
import Button from "../../Components/NavigationButton";
import LoginForm from "./LoginForm";
import Footer from "../../Components/Footer";
import Logo from "../../Components/Logo"
import config from "../../../config";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
export default function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword]=useState("")
    const [error, setError] = useState("")
    const nav = useNavigate()
    
    useEffect(()=>{
        if(Cookies.get('token'))
        {
            nav('/')
            nav(0)
        }else{
            nav('/login')
        }
    } , [])
    function handleLogin() {
        fetch(config.BASE_URL+'/login',{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                email,
                password
            })
        }).then(response => response.json())
        .then((result)=>{
            if(result.message){
                setError(result.message)
            }else {
                const token = result.token
                Cookies.set('token' , token , {expires:10 , secure:true})
                nav('/')
            }
        })
    }
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <Logo path={"../../../public/logo.png"}/>
            <div>{error}</div>
            <LoginForm
                email={email}
                setEmail={setEmail} 
                password={password} 
                setPassword={setPassword} 
                setDone={handleLogin}
            />
            <Footer
            text={"Doesnot have an account ?"}
            path={'/signup'}
            pressableText={"Sign Up"}
            />    
        </div>

    )
}