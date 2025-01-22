import React from 'react'

const page = () => {
  return (
    <div className='p-4 w-[60%] mx-auto'>
    <div className='flex justify-between   items-center'>
      <h1 className='text-2xl font-bold'>Title:</h1>
      <input type="text" className=' shadow-sm ml-4 w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow' />
      
    </div>
    <div className='flex justify-around   items-center'>
      <h1 className='text-2xl font-bold'>Code:</h1>
      <textarea className='mt-3 shadow-lg ml-4 w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow h-[486px]'  />
      
    </div>
    <div className='flex float-end mt-1'>

    <button className='   bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add</button>
    </div>
    </div>
  )
}

export default page
