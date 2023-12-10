import React, { useState } from "react";
import Button from "../../Components/Button";
import LoginForm from "./LoginForm";
export default function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword]=useState("")
    function anasFetch() {
        console.log(email,password)
    }
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <LoginForm
                email={email}
                setEmail={setEmail} 
                password={password} 
                setPassword={setPassword} 
                setDone={anasFetch}
                />
        </div>
    )
}