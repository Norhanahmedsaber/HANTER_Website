import React, { useState } from "react";
import Button from "../../Components/Button";
import LoginForm from "./LoginForm";
import Footer from "../../Components/Footer";
export default function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword]=useState("")
    function Fetch() {
        console.log(email,password)
    }
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="w-[12%] ">
                <img className="w-full h-full" src="../../../public/logo.png " />
            </div>
            <LoginForm
                email={email}
                setEmail={setEmail} 
                password={password} 
                setPassword={setPassword} 
                setDone={Fetch}
                />
            <Footer
            text={"Doesnot have an account ?"}
            path={'/signup'}
            pressableText={"Sign Up"}
            />    
        </div>

    )
}