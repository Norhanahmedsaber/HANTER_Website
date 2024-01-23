import React from 'react'

const Sidebar = () => {
  return (
    <div className='h-full w-[17.125rem] flex flex-col justify-start items-start bg-primary'>
      <div className='w-full h-[6.5rem] border border-red'>username</div>
      <div className='w-full h-full  border border-red'>maincomponet</div>
      <div className='w-full h-[5rem] border flex justify-center items-center' >
        <img src={"../../../../public/logo.png"} className='w-[3.6875rem] h-[3.6875rem] m '/>
        <div className='text-[2.1875rem] font-Jomolhari'>HANTER</div>
      </div>
    </div>
  )
}
export default Sidebar