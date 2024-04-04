'use client'

import { useState } from "react"
import clsx from "clsx"
import { postPost } from "@/app/lib/data"

const PostForm = () =>{
    const[question, setQuestion] = useState('')
    const[body, setBody] = useState('')

    const handleQuestion = (event:any) => {
        setQuestion(event.target.value)
        
    }

    const handleDetails = (event:any) => {
        setBody(event.target.value)
        
    }

    const handleSubmit = async (event:any) => {
        event.preventDefault()
        const postBody ={
            title: question,
            body:body
        }
        const newPost = await postPost(postBody)
    
    }
    return(
      <>
      <h1 className="font-lemonRegular text-3xl text-center mb-9">FORUM</h1>
      <form className="bg-gray-100 shadow-xl p-5 mb-8 border-2 border-neutral-900 rounded-lg" onSubmit={handleSubmit}>
        <h1 className="font-lemonRegular text-xl text-center mb-4">Ask a Question</h1>
        <label className="font-lemonLight text-xl text-center mb-4">Question</label>
        <input className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 mb-8"
        placeholder=''
        value={question} onChange={handleQuestion} />
        <label className="font-lemonLight text-xl text-center mb-4">Details</label>
         <textarea className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 mb-2"
        placeholder=''
        value={body} onChange={handleDetails} />
      <button type="submit"
        className={clsx(
          'btn btn-wide btn-warning mt-4',
          
        )}
      >
        Submit
      </button>
      </form>
      </>
    )
}
export default PostForm