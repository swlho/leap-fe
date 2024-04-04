'use client'

import { Post } from "@/app/classes";
import PostCard from "@/app/ui/Posts/postCard";
import { getPostsByTopicId, getComments } from "@/app/lib/data";
import { Suspense, useEffect } from "react";
import Loading from "@/app/dashboard/ponds/loading";
import PostForm from "@/app/ui/Posts/postForm";
import { useState } from "react"

export default function PostsContainer({params}: any) {
  const[question, setQuestion] = useState('')
  const[body, setBody] = useState('')
  const[posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  const[postBody, setPostBody] = useState(
    {
      title: "",
      post_body: "",
      topic_id: "",
      user_id: "",
      post_image: "",
      type: "",
      votes: 0
    }
  )
  
  const {pondId} = params

  useEffect(() => {
    getPostsByTopicId(pondId)
    .then(({data}) => {
      setPosts(data[0])      
    })
  },[postBody])

  useEffect(() => {
    getComments()
    .then(({data}) => {
      setComments(data[0])
    })
  }, [])
  
  const PostMap = posts.map( (post:any)=>{
    post = new Post(post.id, post.topic_id, post.post_body, post.title, post.user_id,  post.votes, post.post_image, post.type)
    return (
      <>
      <Suspense  fallback={<Loading/>}>
        <PostCard key= {post.id} post= {post} comments={'test'}/>
      </Suspense>
      </>
    )
  })


  return (
    <div>
      <PostForm question={question} 
                setQuestion={setQuestion}
                body={body}
                setBody={setBody}
                postBody={postBody}
                setPostBody={setPostBody}
                pondId={pondId}/>
      {PostMap.reverse()}
    </div>
    )
}