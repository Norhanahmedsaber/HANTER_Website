import React, { useEffect, useState } from "react";
import Button from "../../Components/NavigationButton";
import LoginForm from "./LoginForm";
import Footer from "../../Components/Footer";
import config from "../../../config";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
export default function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword]=useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const nav = useNavigate()
    
    useEffect(()=>{
        if(Cookies.get('token'))
        {
            nav('/projects')
            nav(0)
        }else{
            nav('/login')
        }
    } , [])
    function handleLogin() {
        if(!loading) {
            setLoading(true)
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
                    setError("")
                    nav('/projects')
                }
                setLoading(false)
            })
        }
    }
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-white font-sem2">
            <img src="../../../public/logo.png" className= "w-[5.875rem] h-[5.6875rem] mt-[1.25rem]" />
            <div className="text-[1.6875rem]">Sign in to HANTER</div>
            <div className="w-[22.5rem] mt-[1.37rem] text-[#E10808] text-[0.625rem]">{error}</div>
            <LoginForm
                email={email}
                setEmail={setEmail} 
                password={password} 
                setPassword={setPassword} 
                setDone={handleLogin}
                loading={loading}
            />

            <Footer
            text={"New to HANTER?"}
            path={'/signup'}
            pressableText={"Create an account"}
            />    
        </div>

    )
}