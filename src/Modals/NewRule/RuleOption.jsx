import React from 'react'
import Modal from 'react-modal'
import { useState, useEffect } from 'react'
import UploadRule from './UploadRule';
import { useNavigate } from 'react-router-dom';

function RuleOption({ isOpen, setIsOpen, getRules }) {
    
    const close = () => {
        setIsOpen(false);
    }
    const nav = useNavigate()
    const [uploadModalOpen, setUploadModalOpen] = useState(false)
    return (
        <div className=' flex flex-col justify-center items-center'>
            <UploadRule
                getRules={getRules}
                isOpen={uploadModalOpen}
                setIsOpen={setUploadModalOpen}
            />
            <Modal
                isOpen={isOpen}
                appElement={document.getElementById('roor')}
                className={' transition: opacity 2000ms ease-in-out shadow-xl shadow-slate-300 bg-[#EEE] h-[27.25rem] w-[50rem]  left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 absolute flex flex-col justify-between items-center rounded-[0.3125rem] text-black'}
                shouldFocusAfterRender={false}
                onRequestClose={close}
                closeTimeoutMS={200}
                ReactModal__Overlay

            >
                <div className='felx w-[28.815rem] h-[3.5rem] mt-[2.37rem]  text-[1.8rem] font-set2 flex-row justify-center items-center'>
                    How do you want to create a rule?
                </div>
                <div className=' flex justify-center items-center h-full w-full'>
                    <div onClick={() => {
                        nav('../new_rule')
                    }} className='bg-[#FFF] flex flex-col justify-center items-center h-[15.75rem]  w-[17.5rem] bg-opacity-70 text-black hover:cursor-pointer rounded-[1.25rem]'>
                        <img className='w-[4.375rem] h-[4.6875rem] ' src='../../../write.png'></img>
                        <div className='font-sem2 mt-[0.31rem] text-[1.5rem]'>Write</div>
                        <div className='text-[1rem] mt-[0.63rem] text-center font-sem2'>Write your own rule using <br></br> our rules writer</div>
                    </div>
                    <div className='w-[6.35rem]'></div>
                    <div className='bg-[#FFF] flex flex-col justify-center items-center h-[15.75rem] w-[17.5rem] bg-opacity-70 text-black hover:cursor-pointer rounded-[1.25rem]' onClick={() => {
                        close()
                        setUploadModalOpen(true)
                    }}>
                        <img className='w-[4.375rem] h-[4.6875rem] ' src='../../../UploadYaml.png'></img>
                        <div className='font-sem2 mt-[0.31rem] text-[1.5rem]'>Upload</div>
                        <div className='text-[1rem] mt-[0.63rem] text-center font-sem2'>Upload from your device <br></br> (.YML file)</div>
                    </div>
                </div>
            </Modal>
        </div>

    )
}

export default RuleOption
