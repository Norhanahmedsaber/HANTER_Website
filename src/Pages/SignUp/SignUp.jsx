import React, { useState } from 'react'
import SignupForm from './SignupForm'
import Logo from '../../Components/Logo'

export default function SignUp() {
  const [firstName , setFirstName]= useState("")
  const [lastName , setLastName] = useState("")
  const [email , setEmail] = useState("")
  const [password ,setPassword] = useState("")

    function submitHandler(){
      console.log(firstName , lastName , email ,password)
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
        submitHandler={submitHandler}
      ></SignupForm>
      
    </div>
  )
}
