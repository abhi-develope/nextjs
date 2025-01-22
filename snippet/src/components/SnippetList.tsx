import React from 'react'

const SnippetList = () => {
  return (
    <div className='flex justify-between items-center max-w-[60%] mx-auto shadow-xl border border-gray-200 bg-white p-6 rounded-md mt-10'>
      <h1 className='p-2'>This is the title of snippet</h1>
      <button className='p-2 font-bold'>view</button>
    </div>
  )
}

export default SnippetList
