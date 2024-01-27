import React from 'react'
import Cookies from 'js-cookie';
import Modal from 'react-modal'
import config from '../../../config';
import { useNavigate } from 'react-router-dom';
export default function TransferRule({ isOpen, setIsOpen , id, transferRule }) {
    const nav = useNavigate()
    function transfer() {
        transferRule(id)
    }
    return (
        <div>
            <Modal
                isOpen={isOpen}
                appElement={document.getElementById('roor')}
                className={'shadow-xl shadow-slate-300 bg-white w-[28rem] h-[12rem] left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 absolute flex flex-col justify-between items-center border p-5 rounded-md bg-secondary-2 text-black'}
                shouldFocusAfterRender={false}
                onRequestClose={() => {setIsOpen(false)}}
                closeTimeoutMS={200}
                ariaHideApp={false}
            >
                <div className='flex flex-col items-center'>
                    <div className='w-full text-center font-sem2 text-[1.5rem]'>Are you sure you want to overwrite the written rule?</div>
                    <div className='mt-[1.5rem] flex w-[18rem] justify-between'>
                        <div className='bg-[#096ADA] w-[8rem] h-[2.413rem] rounded-[0.6rem] text-[1.25rem] cursor-pointer flex justify-center items-center text-white' onClick={() => {
                            transfer()
                            setIsOpen(false)
                        }}>Yes</div>
                        <div className='bg-[#da1309] w-[8rem] h-[2.413rem] rounded-[0.6rem] text-[1.25rem] cursor-pointer flex justify-center items-center text-white' onClick={() => {setIsOpen(false)}}>Cancel</div>
                    </div>
                </div>

            </Modal>
        </div>
    )
}
