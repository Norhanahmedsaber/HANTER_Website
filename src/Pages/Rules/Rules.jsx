import React from 'react'
import { useState ,useEffect} from 'react'
import RuleOption from '../../Modals/NewRule/RuleOption';
import Modal from 'react-modal'
import config from '../../../config';
const Rules = () => {
const [uploadModalOpen, setUploadModalOpen] = useState(false)
  return (
    <div>
      <div className='bg-red-500 p-10'>
      <RuleOption
      isOpen={uploadModalOpen}
      setIsOpen={setUploadModalOpen}
    />
          <div>create new rule</div>
           <div className='h-[60%] w-1/5 flex justify-center items-center bg-blue-700 bg-opacity-70 rounded-lg text-white font-bold hover:cursor-pointer hover:bg-opacity-100' onClick={() => {
            setUploadModalOpen(true)
           }}>NewRule</div>
        </div>
    </div>
  )
}
export default Rules