import React, { useState } from 'react'
import SignupForm from './SignupForm'
import Logo from '../../Components/Logo'
import Footer from '../../Components/Footer'
import config from '../../../config'
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [firstName , setFirstName]= useState("")
  const [lastName , setLastName] = useState("")
  const [email , setEmail] = useState("")
  const [password ,setPassword] = useState("")
  const [githubAccount , setGithubAccount] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()
    function submitHandler() {
        fetch(config.BASE_URL+'/signup',{
            method:"POST",
            headers:{
              "Content-Type": "application/json"
            },
            body:JSON.stringify({
              firstName,
              lastName,
              email,
              password,
              githubAccount
            })
        }).then(response => response.json())
          .then((result)=>{
            if(result.message)
            { 
              console.log(result.message)
              setError(result.message)
            }else{
              navigate("/")
            }
      })
      
    }
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Logo path={"../../../../public/logo.png"}/>
      <SignupForm 
        firstName={firstName} 
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        githubAccount={githubAccount}
        setGithubAccount={setGithubAccount}
        submitHandler={submitHandler}
      ></SignupForm>
      <Footer text={"Already Have an Account?"} pressableText={"Log in"} path={"/login"} />
      
    </div> 
  )
}
