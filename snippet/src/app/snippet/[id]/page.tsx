import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/prisma'
import React from 'react'

type dynamicSnippetProps = {
    params:Promise<{id:string}>    
}

const page: React.FC<dynamicSnippetProps> = async ({params}) => {
    const id = parseInt((await params).id)

    const snippet = await prisma.snippet.findUnique({
        where:{
            id,
        }
    })

    // if(!snippet) return <h1>Snippet not found</h1>

  
  return (
    <div className='max-w-[80%] mx-auto '>
      <div className='flex justify-end gap-4 mt-4'>
       <Button className='bg-green-600'>Edit</Button>
       <Button className='bg-red-600'>Delete</Button>
      </div>
      <div>
        <p className='text-2xl font-bold p-2'>{snippet?.title}</p>
      </div>
      <div className='border border-gray-400 rounded-md min-h-[400px] bg-black text-white p-6  '>
        <pre >
            <code>
            {snippet?.code}
            </code>
        </pre>
      </div>
    </div>
  )
}

export default page
