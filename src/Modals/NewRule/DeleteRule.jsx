import React, { useState } from 'react'
import Cookies from 'js-cookie';
import Modal from 'react-modal'
import config from '../../../config';
import { useNavigate } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
export default function DeleteRule({ isOpen, setIsOpen, close , uuid, getRules }) {
    const nav = useNavigate()
    const [loading , setLoading] = useState(false)

    function deleteRuleHandler() {
        if(!loading){
            setLoading(true)
            fetch(config.BASE_URL + '/rules/' + uuid, {
                method: "DELETE",
                headers: {
                    "Content-Type": "Application/json",
                    "Authorization": "Bearer " + Cookies.get('token')
                }
            }).then(response => response.json())
                .then((result) => {
                    if (result.message) {
                        getRules()
                        close("deleted")
                    } else {
                        console.log('ERROORRRR')
                    }
                    setLoading(false)
                })
        }
    }

    return (
        <div>
            <Modal
                isOpen={isOpen}
                appElement={document.getElementById('roor')}
                className={'shadow-xl shadow-slate-300 bg-white w-[28rem] h-[12rem] left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 absolute flex flex-col justify-between items-center border p-5 rounded-md bg-secondary-2 text-black'}
                shouldFocusAfterRender={false}
                onRequestClose={close}
                closeTimeoutMS={200}
            >
                <div className='flex flex-col items-center'>
                    <div className='w-full text-center text-[2.1875rem]'>Are you sure?</div>
                    <div className='mt-[2.5rem] flex w-[21.87rem] justify-between'>
                        <div className='bg-[#da1309] w-[9.375rem] h-[2.413rem] rounded-[0.6rem] text-[1.25rem] cursor-pointer flex justify-center items-center text-white' onClick={close}>Cancel</div>
                        {
                            !loading?(<div className='bg-[#096ADA] w-[9.375rem] h-[2.413rem] rounded-[0.6rem] text-[1.25rem] cursor-pointer flex justify-center items-center text-white' onClick={() => {
                                deleteRuleHandler()
                                
                            }}>Yes</div>)
                            :(<div className='bg-[#096ADA] w-[9.375rem] h-[2.413rem] rounded-[0.6rem] text-[1.25rem] cursor-pointer flex justify-center items-center text-white'>
                                <Oval 
                                visible={true}
                                height="20"
                                width="20"
                                color="#000"
                                ariaLabel="oval-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                />
                            </div>)
                        }
                        
                    </div>
                </div>

            </Modal>
        </div>
    )
}
