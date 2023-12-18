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
            className={'shadow-xl shadow-slate-300 bg-white h-fit w-1/3 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 absolute flex flex-col justify-between items-center border p-5 rounded-md bg-secondary-2 text-black'}
            shouldFocusAfterRender={false}
            onRequestClose={close}
            closeTimeoutMS={200}
        >
            <div><span className='text-sm ml-1 text-red-600 font-bold'>{error}</span></div>
            <div className='w-full'>
            <div><label htmlFor="Res-Name" id='Res-Name-Lable' className='text-sm ml-1'>Name</label></div>
            <input
                id='Res-Name'
                className='text-sm w-full my-1 h-8 py-1 px-2 border border-primary-1 rounded-md bg-secondary-3 '
                type='text'
                onChange={(e) => {
                    setName(e.target.value)
                }}
            />
            </div>

            <div className='w-full'>
            <div><label htmlFor="Res-Text" className='text-sm ml-1'>File</label></div>
            <input id='Res-Text' className='resize-none text-sm w-full max-h-md my-1 h-16 py-1 px-2 border border-primary-1 rounded-md bg-secondary-3 '
                type='file'
                accept='.yml'
                onChange={changeHandler} />
            </div>

            <div className='w-full'>
            <div className="w-full my-2 h-9 rounded-md border text-sm bg-blue-500 hover:bg-blue-800 trans flex justify-center items-center hover:cursor-pointer text-white"
                onClick={() => {
                if (name) {
                    handleSubmission();
                }
                else {
                    setError('Please provide a name for the rule to be created!')
                }
                }}
            >Create Rule</div>
            </div>
        </Modal>
    </div>
  )
}
