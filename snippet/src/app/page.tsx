import React from 'react'
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import SnippetList from '@/components/SnippetList';
import { Snippet } from '@prisma/client';


const  page = async () => {
 
  const snippet:Snippet[]= await prisma.snippet.findMany()
  return (
    <div>
      <h1 className='pl-4 pt-2 text-2xl font-bold'>Home</h1>
      <div className='flex justify-between max-w-[60%] mx-auto mt-20'>
        <h2 className='text-2xl underline'>Snippets</h2>
        <Link href="/snippet/new"  className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' >Add</Link>
       
      </div>
      {
        snippet.map((snippet)=>(
             <SnippetList snippet={snippet} key={snippet.id}/>
        ))
      }
      
    </div>
  )
}

export default page
