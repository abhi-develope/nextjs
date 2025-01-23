
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';
import React from 'react'

const page = () => {

    
    async function createSnippet(formdata:FormData) {
        "use server" // use server directive
        const title = formdata.get("title") as string;
        const code = formdata.get("code") as string;

        const snippet = await prisma.snippet.create({
            data:{
                title,
                code
            }
        })
       
        
        // console.log("snippet is ", snippet);
        redirect('/')
        
        
    }
  return (
    <div className='p-4 w-[60%] mx-auto'>
        <form action={createSnippet}>
    <div className='flex justify-between   items-center'>
      <label className='text-2xl font-bold'>Title:</label>
      <input name='title' id='title' type="text" className=' shadow-sm ml-4 w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow' />
      
    </div>
    <div className='flex justify-around   items-center'>
      <label className='text-2xl font-bold'>Code:</label>
      <textarea name='code' id='code' className='mt-3 shadow-lg ml-4 w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow h-[486px]'  />
      
    </div>
    <div className='flex float-end mt-1'>

    <button  
      
      className='   bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add</button>
    </div>
    </form>
    </div>
  )
}

export default page
