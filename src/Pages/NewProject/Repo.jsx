import React from 'react'

function Repo({ name, date, privacy }) {
    return (
        <div className='w-full h-[4.867rem] flex bg-[#D9D9D9] border-b border-black justify-start items-center text-[1.2rem]'>
            <div className='w-[10%] pl-[1.56rem]'>
                <img src={"../../../public/github1.png"} className='w-[3.125rem] h-[3.125rem]' />
            </div>
            <div className='w-[60%] pl-[1.56rem]'>{name}</div>
            <div className='w-[15%]'>{date}</div>
            <div className='w-[15%]'>{privacy}</div>


        </div>
    )
}

export default Repo
