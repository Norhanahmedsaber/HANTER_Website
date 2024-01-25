import React, { useState } from 'react'
import DeleteRule from '../../Modals/NewRule/DeleteRule'

export default function Rule({ ruleName, uuid, id, getRules }) {
  const [uploadModelOpen, setUploadModelOpen] = useState(false)
  return (
    <div>
      <div className='h-[3.6875rem] flex justify-center items-center font-sem2 text-[1.25rem] text-[#000] w-full'>
        <DeleteRule isOpen={uploadModelOpen} setIsOpen={setUploadModelOpen} uuid={uuid} getRules={getRules} />
        <div className='w-[40%] pl-[1.06rem]'>{ruleName}</div>
        <div className='w-[15%] text-center'>last Edit</div>
        <div className='w-[15%] text-center'>Severity</div>
        <div className='w-[15%] text-center'>Private</div>
        <div className='w-[15%] flex justify-center cursor-pointer'>
          <img src="../../../../public/delete.png" className='w-[1.875rem] h-[1.875rem] cursor-pointer' onClick={() => {
            setUploadModelOpen(true)
          }}></img>
        </div>
      </div>
    </div>
  )
}
