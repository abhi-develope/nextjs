import { Snippet } from '@prisma/client';
import Link from 'next/link';
import React from 'react'

interface SnippetListProps {
    snippet: Snippet;
  }

const SnippetList: React.FC<SnippetListProps> = ({ snippet }) => {
   
    
    
  return (
    <div className='flex justify-between items-center max-w-[60%] mx-auto shadow-xl border border-gray-200 bg-white p-6 rounded-md mt-10'>
      <h1 className='p-2 text-xl font-bold'>{snippet.title}</h1>
      <Link href={`/snippet/${snippet.id}`}><button  className='p-2 font-bold'>view</button></Link>
    </div>
  )
}

export default SnippetList
