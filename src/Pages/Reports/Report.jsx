import React from 'react'

export default function Report({filePath ,line , col}) {
  return (
    <div className="w-full h-[1.9625rem] pl-4 border border-b-[#8F8C8C]">
      {filePath}
    </div>
  )
}
