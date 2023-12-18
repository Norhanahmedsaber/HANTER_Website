import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import ListRules from './ListRules'
import RuleEditor from './RuleEditor'
import SourceEditor from './SourceEditor'
import Reports from '../Reports/Reports'
export default function Playground() {
  return (
    <div className='w-screen h-screen flex justify-center items-center flex-col'>
      <Navbar />
      <div className='w-full h-[90%] flex justify-center items-center'>
        <div className='h-full w-[20%] border-2 border-black'><ListRules /></div>
        <div className='h-full w-[35%] border-2 border-black'><RuleEditor /></div>
        <div className='h-full w-[45%] border-2 border-black flex-col'>
          <div className='h-1/2 w-full border-2 border-black'><SourceEditor /></div>
          <div className='h-1/2 w-full border-2 border-black'><Reports /></div>
        </div>
      </div>
    </div>
  )
}
