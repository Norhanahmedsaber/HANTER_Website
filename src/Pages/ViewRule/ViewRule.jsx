import React from 'react'
import YamlViewer from './YamlViewer'
import './styles.css'
export default function ViewRule() {

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='btn-view-rule bg-red-400'>a</div>
      <div className='btn-view-rule bg-blue-400'>b</div>
      <YamlViewer />
    </div>
  )
}
