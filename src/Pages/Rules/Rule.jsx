import React, { useState } from 'react'
import DeleteRule from '../../Modals/NewRule/DeleteRule'
import {toast} from 'react-toastify'
export default function Rule({ ruleName, uuid, id, getRules }) {
  const [uploadModelOpen, setUploadModelOpen] = useState(false)
  const close = (status) => {
    if(status == "deleted") {
      toast("Rule Deleted Successfully!")
    }
    setUploadModelOpen(false);
  }
  return (
    <div>
      <div className='h-[2.8rem] flex justify-center items-center font-sem2 text-[1rem] text-[#000] w-full hover:bg-[#eeeeee] cursor-pointer'>
        <DeleteRule isOpen={uploadModelOpen} close={close} setIsOpen={setUploadModelOpen} uuid={uuid} getRules={getRules} />
        <div className='w-[50%] pl-[1.06rem]'>{ruleName}</div>
        <div className='w-[15%] pl-[1rem] text-center'>last Edit</div>
        <div className='w-[15%] pl-[1.5rem] text-center'>Severity</div>
        <div className='w-[15%] pl-[1.8rem] text-center'>Private</div>
        <div className='w-[10%] flex justify-center cursor-pointer'>
          <img src="../../../../public/delete.png" className='w-[1.25rem] h-[1.25rem] cursor-pointer' onClick={() => {
            setUploadModelOpen(true)
          }}></img>
        </div>
      </div>
    </div>
  )
}
