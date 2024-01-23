import Cookies from 'js-cookie';
import React, { useState } from 'react'
import Modal from 'react-modal'
import config from '../../../config';
export default function UploadRule({ isOpen, setIsOpen }) {
    const [name, setName] = useState("")
    const [error, setError] = useState("")
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState();
    const close = () => {
        setIsOpen(false);
    }
    function handleSubmission() {
        if(!isFilePicked) {
            setError("Please Select a File to be Uploaded")
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
                alert("Uploaded Successfully")
                close()
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
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
            className={'shadow-xl shadow-slate-300 bg-[#EEE] w-[71.875rem] h-[37.5rem] left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 absolute flex flex-col justify-between items-center border p-5 rounded-md bg-secondary-2 text-black'}
            shouldFocusAfterRender={false}
            onRequestClose={close}
            closeTimeoutMS={200}
        >
            <div className='mt-[3rem] text-[2.1875rem]'>Upload Rule</div>
            <div className='text-sm ml-4 text-[#E10808] w-[55.875rem]'>{error}</div>
            <div className='h-[4.3125rem] flex'>
                <div className='w-[14.9375rem] bg-[#8F8C8C] rounded-l-[1.25rem] flex justify-center items-center text-white text-[2.5rem]'>Name</div>
                <input
                    id='Res-Name'
                    className='w-[40.9375rem] bg-white rounded-r-[1.25rem] pl-4 text-[1.875rem]'
                    type='text'
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                />
            </div>
            <div className='h-[4.3125rem] flex mt-[4rem]'>
                <div className='w-[14.9375rem] bg-[#8F8C8C] rounded-l-[1.25rem] flex justify-center items-center text-white text-[2.5rem]'>Upload File</div>
                <div className='relative w-[40.9375rem] bg-white rounded-r-[1.25rem] pl-4 text-[1.875rem] flex justify-start items-center'>
                    <div className='flex justify-start items-center'>{selectedFile?.name}</div>
                    <label htmlFor='Res-Text' className='w-[3.125rem] h-[3.125rem] bg-[#8F8C8C] rounded-full absolute right-[1rem] top-[0.62rem] flex justify-center items-center cursor-pointer'>
                        <img src="../../../public/upload.png" className='w-[2.5rem] h-[2.5rem]' alt="" />
                    </label>
                </div>
            </div>
            <div className='w-[55.875rem] h-[4.3125rem] bg-[#539A9F] mt-[4rem] rounded-[1.25rem] flex justify-center items-center text-white text-[2.5rem] cursor-pointer'
                onClick={() => {
                    if (name) {
                        handleSubmission();
                    }
                    else {
                        setError('Please provide a name for the rule to be created!')
                    }
                    }}>Save Rule</div>
            
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
