'use server'
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"


export const saveSnippet = async (id:number, code:string, title:string) =>{
    await prisma.snippet.update({
        where:{
            id
           
        },
        data:{
            title,
            code
        }
    })

    redirect(`/snippet/${id}`)
}


export const deleteSnippet = async (id:number) =>{
    await prisma.snippet.delete({
        where:{
            id
        }
    })

    redirect(`/`)
}


export async function createSnippet(prevState:{message:string}, formdata:FormData) {
    const title = formdata.get("title") as string;
    const code = formdata.get("code") as string;
    
        if(!title){
            return {message:"title must required"}
        }
        if(!code){
            return {message:"code must required"}
        }
    
    const snippet = await prisma.snippet.create({
        data:{
            title,
            code
        }
    })
   
    
    // console.log("snippet is ", snippet);
    redirect('/')
    
    
}

