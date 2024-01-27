import React from 'react'

function Rule({id, name,checked, toggle}) {
    return (
        <div className=' flex justify-start items-center  pl-[0.5rem] w-full h-[3.125rem] border-b border-b-black'>
            <div className='w-[4%] flex items-center'>
                <input type='checkbox' checked={checked} onChange={()=> {toggle(id)}} className='w-[1.3rem] h-[1.3rem] ' />
            </div>  
            <div className='w-[4%] flex items-center'>    
              <img src="../../../public/file1.png" className='w-[1.5625rem] h-[1.5625rem]' />
            </div>
            <div className=' text-[1rem]'>{name}</div>
        </div>
    )
}

export default Rule
