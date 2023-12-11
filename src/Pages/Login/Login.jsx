import React, { useState } from "react";
import Button from "../../Components/Button";
export default function Login() {
    const [counter, setCounter] = useState(0)
    function anasFetch() {
        console.log(counter)
    }
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <Button 
                counter={counter} 
                setCounter={setCounter} 
            />
            <div onClick={anasFetch} className="hover:cursor-pointer">
                Send
            </div>
        </div>
    )
}