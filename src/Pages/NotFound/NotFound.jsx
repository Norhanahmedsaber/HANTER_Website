import React from 'react'
import Button from '../../Components/NavigationButton'
import Navbar from '../../Components/Navbar/Navbar'

function NotFound() {
    return (
        <div className='flex flex-col h-screen w-screen'>
            <Navbar />
            <div className="flex justify-start items-center h-[90%]">
                <div className='flex flex-col justify-center items-center w-1/2'>
                    <div className='flex flex-col justify-center items-center w-1/2'>
                        <div>Error 404</div>
                        <div>Page not found</div>
                        <Button className="bg-red-500 p-5 rounded-md cursor-pointer" text={'Back to homepage'} path={'/projects'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NotFound
