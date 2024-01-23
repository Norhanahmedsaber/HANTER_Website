import React from 'react'
import Field from '../../Pages/SignUp/Field'
import { Oval } from 'react-loader-spinner'
export default function SignupForm({
    firstName, 
    setFirstName, 
    lastName, 
    setLastName, 
    email, 
    setEmail, 
    password, 
    setPassword,
    submitHandler,
    loading }) {
  return (
    <div className='flex flex-col items-center justify-start pt-[1.37rem] h-[22.375rem] w-[22.5rem] mt-[0.31rem] bg-[#F6F8FA] border border-[#E3E8EC] rounded-[0.9375rem]'>
        <Field label={"First Name"} value={firstName} setValue={setFirstName}/>
        <Field label={"Last Name"} value={lastName} setValue={setLastName}/>
        <Field label={"Email"} value={email} setValue={setEmail}/>
        <Field type={"password"} label={"Password"} value={password} setValue={setPassword}/>
        <div className='border-2 , border-[#096ADA] w-[18.6875rem] h-[2.5rem] text-center cursor-pointer mt-[1.25rem] bg-[#096ADA] rounded-[0.3125rem] mp-[1.44rem]' onClick={submitHandler}>
            <div className='text-[#FFF] text-[0.9375rem] mt-[0.38rem] flex justify-center items-center'>
              {loading?(
                <Oval
                  visible={true}
                  height="30"
                  width="30"
                  color="#ffffff"
                  ariaLabel="oval-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  />
              ):("SignUp")}
            </div>
        </div>

    </div>
  )
}
