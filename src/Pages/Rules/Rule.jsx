import React, { useState } from 'react'
import DeleteRule from '../../Modals/NewRule/DeleteRule'
import {toast} from 'react-toastify'
export default function Rule({ ruleName, ruleSeverity , rulePublic,  uuid, id, getRules }) {
  const [uploadModelOpen, setUploadModelOpen] = useState(false)
  const close = (status) => {
    if(status == "deleted") {
      toast("Rule Deleted Successfully!")
      console.log(rulePublic)
    }
    setUploadModelOpen(false);
  }
  return (
    <div>
      <div className='h-[2.8rem] flex justify-center items-center font-sem2 text-[1rem] text-[#000] w-full hover:bg-[#eeeeee] cursor-pointer'>
        <DeleteRule isOpen={uploadModelOpen} close={close} setIsOpen={setUploadModelOpen} uuid={uuid} getRules={getRules} />
        <div className='w-[50%] pl-[1.06rem]'>{ruleName}</div>
        <div className='w-[15%] pl-[1rem] text-center'>{}</div>
        {
          ruleSeverity == 'INFO'?(<div className='w-[15%] pl-[1.5rem] flex justify-center items-center'>
            <img src='../../../public/info.png' className='w-[1.5rem] h-[1.5rem]'></img>
          </div>)
          :ruleSeverity == 'WARNING'?(<div className='w-[15%] pl-[1.5rem] flex justify-center items-center'>
            <img src='../../../public/warning.png' className='w-[1.5rem] h-[1.5rem]'></img>
          </div>)
          :(<div className='w-[15%] pl-[1.5rem] flex justify-center items-center'>
            <img src='../../../public/error.png' className='w-[1.5rem] h-[1.5rem]'></img>
          </div>)
        }
        {
          
          rulePublic == 0?(<div className='w-[15%] pl-[1.8rem] flex justify-center items-center'>
            <img src='../../../public/private.png' className='w-[1.5rem] h-[1.5rem]'></img>
          </div>)
          :(<div className='w-[15%] pl-[1.8rem] text-center'> - </div>)
        }
        
        
        <div className='w-[10%] flex justify-center cursor-pointer'>
          <img src="../../../../public/delete.png" className='w-[1.25rem] h-[1.25rem] cursor-pointer' onClick={() => {
            setUploadModelOpen(true)
          }}></img>
        </div>
      </div>
    </div>
  )
}
