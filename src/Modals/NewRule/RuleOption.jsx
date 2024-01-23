import React from 'react'
import Modal from 'react-modal'
import { useState ,useEffect} from 'react'
import UploadRule from './UploadRule';
function RuleOption({isOpen,setIsOpen}) {
    const close = () => {
        setIsOpen(false);
    }
    const [uploadModalOpen, setUploadModalOpen] = useState(false)
    return (
        <div className=' flex flex-col justify-center items-center'>
        <UploadRule
          isOpen={uploadModalOpen}
          setIsOpen={setUploadModalOpen}
        />
        <Modal
        isOpen = {isOpen}
        appElement={document.getElementById('roor')}
        className={' transition: opacity 2000ms ease-in-out shadow-xl shadow-slate-300 bg-[#EEE] h-[37.5rem] w-[71.875rem]  left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 absolute flex flex-col justify-between items-center rounded-[0.3125rem] text-black'}
        shouldFocusAfterRender={false}
        onRequestClose={close}
        closeTimeoutMS={200}
        ReactModal__Overlay
        
        >
            <div className='felx w-[33.815rem] h-[3.5rem] mt-[2.94rem] mb-[1.25rem] text-[2.1875rem] font-Jomolhari flex-row justify-center items-center'>
                How do you want to create a rule?
            </div>
                <div className=' flex justify-center items-center h-full w-full'>
                <div className='bg-[#FFF] flex flex-col justify-center items-center h-[25rem] w-[25rem] bg-opacity-70 text-black hover:cursor-pointer rounded-[1.25rem]'>
                    <img  className='w-[6.25rem] h-[6.25rem]' src='../../../public/write.png'></img>
                    <div className='font-Jomolhari mt-[0.31] text-[1.875rem]'>Write</div>
                    <div className='text-[1.5625rem] mt-[2.5rem] text-center font-Jomolhari'>Write your own rule using <br></br> our rules writer</div>
                </div>
                <div className='w-[6.35rem]'></div>
                <div className='bg-[#FFF] flex flex-col justify-center items-center h-[25rem] w-[25rem] bg-opacity-70 text-black hover:cursor-pointer rounded-[1.25rem]' onClick={() => {
                    close()
                    setUploadModalOpen(true)
                   }}>
                   <img  className='w-[6.25rem] h-[6.25rem]' src='../../../public/upload.png'></img>
                    <div className='font-Jomolhari mt-[0.31] text-[1.875rem]'>Upload</div>
                    <div className='text-[1.5625rem] mt-[2.5rem] text-center font-Jomolhari'>Upload from your device <br></br> (.YML file)</div>
                </div>
                </div>
        </Modal>
        </div>
        
    )
}

export default RuleOption
