import React from 'react'
import Field from '../../Components/Field'
export default function SignupForm({
    firstName, 
    setFirstName, 
    lastName, 
    setLastName, 
    email, 
    setEmail, 
    password, 
    setPassword,
    submitHandler }) {
  return (
    <div className='flex flex-col items-center justify-center'>
        <Field label={"First Name"} value={firstName} setValue={setFirstName}/>
        <Field label={"Last Name"} value={lastName} setValue={setLastName}/>
        <Field label={"Email"} value={email} setValue={setEmail}/>
        <Field label={"Password"} value={password} setValue={setPassword}/>
        <div className='border-2 , border-emerald-950 rounded-md w-[70%] text-center' onClick={submitHandler}>SignUp</div>

    </div>
  )
}
