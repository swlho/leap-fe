'use client'


import clsx from "clsx"
import { postPost } from "@/app/lib/data"

const PostForm = ({question, setQuestion, body, setBody, postBody, setPostBody, pondId}: any ) =>{
    

    const handleQuestion = (event:any) => {
        setQuestion(event.target.value)
        
    }

    const handleDetails = (event:any) => {
        setBody(event.target.value)
    }

    const handleSubmit = (event:any) => {
        event.preventDefault()
        const postcontent = {
          title: question,
          post_body:body,
          topic_id: pondId,
          user_id: "660d70386114563bf754fb5d",
          post_image: "",
          type: "post",
          votes: 0
        }
        
        setPostBody(postcontent)
        postPost(postcontent)
        .then(({data}) => {
          setBody('')
          setQuestion('')
          setPostBody({
            title: "",
            post_body: "",
            topic_id: "",
            user_id: "",
            post_image: "",
            type: "",
            votes: 0
          })
        })
        .catch((err:any) => {
          setBody('')
          setQuestion('')
          console.log(err)
        })
    }
      
    return(
      <form onSubmit={handleSubmit}>
        <h1>Ask a Question</h1>
        <label>Question</label>
        <input className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 mb-2"
        placeholder=''
        value={question} onChange={handleQuestion} />
        <label>Details</label>
         <textarea className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 mb-2"
        placeholder=''
        value={body} onChange={handleDetails} />
      <button type="submit"
        className={clsx(
          'flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
          
        )}
      >
        Submit
      </button>
      </form>
    )
}
export default PostForm