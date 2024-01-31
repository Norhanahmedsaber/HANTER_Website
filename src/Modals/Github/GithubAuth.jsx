import React, { useState } from 'react'
import Modal from 'react-modal'
import config from '../../../config'
import Cookies from 'js-cookie'
import { Oval } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
export default function GithubAuth({ isOpen, setIsOpen }) {
    const nav = useNavigate()
    const [username, setUsername] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    function close() {
        setIsOpen(false)
        setUsername("")
        setError("")
    }
    async function auth() {
        setLoading(true)
        const response = await fetch(config.BASE_URL + '/github', {
            body: JSON.stringify({
                username
            }),
            method: "PUT",
            headers: {
                "Authorization": Cookies.get('token'),
                "Content-Type": "application/json"
            }
        })
        const result = await response.json()
        setLoading(false)
        if(result.message) {
            if(result.message  == "Authenticated Successfully") {
                close()
                nav(0)
            }else {
                setError(result.message)
            }
        }else {
            Cookies.remove('token')
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
                    <div className='text-red-500'>{error}</div>
                    <div className='w-full text-center text-[1.5rem]'>Enter Your Github Username</div>
                    <div className='mt-[2.5rem] flex w-[21.87rem] justify-between'>
                        <input
                            className='border pl-2'
                            value={username}
                            onChange={(e) => {setUsername(e.target.value)}}
                        />
                        {
                            !loading ? (<div className='bg-[#096ADA] w-[9.375rem] h-[2.413rem] rounded-[0.2rem] text-[1.25rem] cursor-pointer flex justify-center items-center text-white' onClick={() => {
                                auth()
                            }}>Check</div>)
                                : (<div className='bg-[#096ADA] w-[9.375rem] h-[2.413rem] rounded-[0.2rem] text-[1.25rem] cursor-pointer flex justify-center items-center text-white'>
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
[
    {
        name: "rule1",
        matches: [
            {
                fileName: "toka.js",
                line: 3,
                col: 2
            },
            {
                fileName: "anas.js",
                line: 34,
                col: 5
            }
        ]
    },
    {
        name: "rule1",
        matches: [
            {
                fileName: "toka.js",
                line: 7,
                col: 22
            },
        ]
    }
]