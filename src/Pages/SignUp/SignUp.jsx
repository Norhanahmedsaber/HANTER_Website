import React, { useEffect , useState } from 'react'
import SignupForm from './SignupForm'
import Logo from '../../Components/Logo'
import Footer from '../../Components/Footer'
import config from '../../../config'
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'

export default function SignUp() {
  const [firstName , setFirstName]= useState("")
  const [lastName , setLastName] = useState("")
  const [email , setEmail] = useState("")
  const [password ,setPassword] = useState("")
  const [githubAccount , setGithubAccount] = useState("")
  const [error, setError] = useState("the Email and Password don’t match")
  const navigate = useNavigate()
  useEffect(()=>{
    if(Cookies.get('token'))
      {
          navigate('/')
          navigate(0)
      }else{
          navigate('/signup')
      }
  }, [])
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
            setError(result.message)
          }else{
            const token = result.token
            Cookies.set('token' , token , {expires:10 , secure:true})
            navigate("/Profile")
          }
    })
  }
  return (
    <div className='flex flex-col items-center justify-start h-screen'>
        <img src={"../../../../public/logo.png"} className='w-[5.875rem] h-[5.6875rem] mt-[1.25rem]'/>
        <div className='text-[#030303] text-[1.6875rem]'> Sign up to HANTER </div>
        <div className='text-[#E10808] text-[0.625rem] w-[22.5rem] mt-[1.5rem]'>{error}</div>
      <SignupForm
        firstName={firstName} 
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        submitHandler={submitHandler}
      ></SignupForm>
      <Footer text={"Already Have an Account?"} pressableText={"Log in"} path={"/login"} />
      
    </div> 
  )
}
