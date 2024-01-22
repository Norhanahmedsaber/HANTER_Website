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
    githubAccount,
    setGithubAccount,
    submitHandler }) {
  return (
    <div className='flex flex-col items-center justify-center mt-[0.31rem]'>
        <Field label={"First Name"} value={firstName} setValue={setFirstName}/>
        <Field label={"Last Name"} value={lastName} setValue={setLastName}/>
        <Field label={"Email"} value={email} setValue={setEmail}/>
        <Field label={"Password"} value={password} setValue={setPassword}/>
        <Field label={"Github Account"} value={githubAccount} setValue={setGithubAccount}/>
        <div className='border-2 , border-emerald-950 rounded-md w-[70%] text-center cursor-pointer' onClick={submitHandler}>SignUp</div>

    </div>
  )
}
