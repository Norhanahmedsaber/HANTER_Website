import React from 'react'

export default function Report({filePath ,line , col, goToRepo}) {
  return (
    <div onClick={()=>{
      goToRepo(filePath.split('\\').slice(1).join('\\').replace('\\','/').replace(/\\/g, '/'), line)
    }} className="w-full h-[1.9625rem] pl-4 border border-b-[#8F8C8C] text-blue-700 flex justify-between hover:bg-gray-200 cursor-pointer hover:underline bg-white">
      <div>{
        filePath.split('\\').slice(1).join('\\').replace('\\','/').replace(/\\/g, '/')
      }</div>
      <div className='mr-10'>{line}</div>
    </div>
  )
}
