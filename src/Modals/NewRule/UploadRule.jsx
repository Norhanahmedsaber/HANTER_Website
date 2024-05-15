import Cookies from 'js-cookie';
import React, { useState } from 'react'
import Modal from 'react-modal'
import config from '../../../config';
import { Oval } from "react-loader-spinner";
import {toast} from 'react-toastify'
export default function UploadRule({ isOpen, setIsOpen, getRules }) {
    const [loading , setloading] = useState(false)
    const [name, setName] = useState("")
    const [error, setError] = useState("")
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState();
    const close = (status) => {
        setIsOpen(false);
        setError("")
        setloading(false)
        setSelectedFile("")
        if(status == "submitted")
        {
            toast("Rule Uploaded Sucessfully")
        }
    }
    function handleSubmission() {
        if(!loading)
        {   setloading(true)
            if(!isFilePicked) {
                setError("Please Select a File to be Uploaded")
                setloading(false)
                return
            }
            const formData = new FormData();
            formData.append('name', name)
            formData.append('rule', selectedFile);
            fetch(
            config.BASE_URL + '/rules',
            {
                method: 'POST',
                headers:{
                    "Authorization": "Bearer " + Cookies.get('token')
                },
                body: formData,
            }
            )
            .then((response) => response.json())
            .then((result) => {
                if(result.message) {
                    setError(result.message)
                }else {
                    getRules()
                    close("submitted")
                }
                setloading(false)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
    }
    function changeHandler(event) {
        console.log(event.target.files[0].name.split('.').pop())
        if (event.target.files[0].name.split('.').pop() === 'yml') {
          setSelectedFile(event.target.files[0]);
          setIsFilePicked(true);
          setError("")
        } else {
          setError("File Type Must be YML")
        }
      };
  return (
    <div>
        <Modal
            isOpen = {isOpen}
            appElement={document.getElementById('roor')}
            className={'shadow-xl shadow-slate-300 bg-[#EEE] w-[40rem] h-[25.25rem] left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 absolute flex flex-col justify-start items-center border rounded-md bg-secondary-2 text-black'}
            shouldFocusAfterRender={false}
            onRequestClose={close}
            closeTimeoutMS={200}
        >
            <div className='mt-[1.5rem] text-[1.5rem]'>Upload Rule</div>
            <div className='text-sm text-[#E10808] w-[30rem] mt-[2.12rem]'>{error}</div>
            <div className='h-[2.125rem] m-2 flex'>
                <div className='w-[10.5rem] bg-[#8F8C8C] rounded-l-[1.25rem] flex justify-center items-center text-white text-[1rem]'>Name</div>
                <input
                    id='Res-Name'
                    className='w-[20.25rem] h-[2.125rem] bg-white rounded-r-[1.25rem] pl-3 text-[0.875rem]'
                    type='text'
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                />
            </div>
            <div className='h-[2.125rem] flex mt-[2.12rem]'>
                <div className='w-[10.5rem] bg-[#8F8C8C] rounded-l-[1.25rem] flex justify-center items-center text-white text-[1rem]'>Upload File</div>
                <div className='relative w-[20.25rem] bg-white rounded-r-[1.25rem] pl-4 text-[0.875rem] flex justify-start items-center'>
                    <div className='flex justify-start items-center'>{selectedFile?.name}</div>
                    <label htmlFor='Res-Text' className='w-[1.5rem] h-[1.5rem] bg-[#8F8C8C] rounded-full absolute right-[0.31rem] top-[0.31rem] flex justify-center items-center cursor-pointer'>
                        <img src="../../../upload.png" className='w-[0.9rem] h-[0.9rem]' alt="" />
                    </label>
                </div>
            </div>
                {
                    !loading?(  
                        <div className='w-[30.75rem] h-[2.125rem] bg-[#539A9F] mt-[3.12rem] rounded-[1.25rem] flex justify-center items-center text-white text-[1rem] cursor-pointer'
                        onClick={() => {
                        if (name) {
                            handleSubmission();
                        }
                        else {
                            setError('Please provide a name for the rule to be created!')
                        }
                        }}>Save Rule</div>)
                    :(
                        <div className='w-[30.75rem] h-[2.125rem] bg-[#539A9F] mt-[3.12rem] rounded-[1.25rem] flex justify-center items-center text-white text-[1rem] cursor-pointer'>
                            <Oval
                            visible={true}
                            height="20"
                            width="20"
                            color="#000"
                            ariaLabel="oval-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            />
                        </div>
                    )
                }
            
            <div className='w-full hidden'>
            <div><label htmlFor="Res-Text" className='text-sm ml-1'>File</label></div>
            <input id='Res-Text' className='resize-none text-sm w-full max-h-md my-1 h-2 py-1 px-2 border border-primary-1 rounded-md bg-secondary-3 '
                type='file'
                accept='.yml'
                onChange={changeHandler} />
            </div>

        </Modal>
    </div>
  )
}
