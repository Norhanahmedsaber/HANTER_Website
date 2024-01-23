import React from 'react'
import Cookies from 'js-cookie';
import Modal from 'react-modal'
import config from '../../../../config';
import { useNavigate } from 'react-router-dom';

export default function DeleteProject({isOpen , setIsOpen , id}) {
    const nav = useNavigate()
    const close = () => {
        setIsOpen(false);
    }
    function deleteProjectHandler(){
        fetch(config.BASE_URL+"/project/"+ id,{
            method:"DELETE",
            headers:{
                "Content-Type":"Application/json",
                "Authorization":"Bearer "+Cookies.get('token')
            }
        }).then(response => response.json())
           .then((result)=>{
                if(result.message)
                {   nav(0)
                    console.log(result.message)
                }else{
                    console.log("ERRORRRRRRR")
                }
           }) 
    }

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
    <div className='flex justify-between'>
        <div>Are u sure?</div>
        <div className='bg-blue-600 w-[4.5rem] h-[1.5rem] rounded-md text-center cursor-pointer' onClick={()=>{
            deleteProjectHandler()
            close()
        }}>yes</div>
        <div className='bg-blue-600 w-[4.5rem] h-[1.5rem] rounded-md text-center cursor-pointer' onClick={close}>no</div>
    </div>

    </Modal>
    </div>
  )
}
