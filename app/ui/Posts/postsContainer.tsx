'use client'

import { Post } from "@/app/classes";
import PostCard from "@/app/ui/Posts/postCard";
import { getPosts } from "@/app/lib/data";
import { Suspense, useEffect } from "react";
import Loading from "@/app/dashboard/ponds/loading";
import PostForm from "@/app/ui/Posts/postForm";
import { useState } from "react"

export default function PostsContainer({params}: any) {
  const[question, setQuestion] = useState('')
  const[body, setBody] = useState('')
  const[posts, setPosts] = useState([])
  const[postBody, setPostBody] = useState(
    {
      title: null,
      body: null
    }
  )
  const {pondId} = params

  useEffect(() => {
    getPosts()
    .then(({data}) => {
      const filteredPosts = data[0].filter((post:any) => {
        post.topic_id === pondId
      })
      setPosts(filteredPosts)
    })
  },[postBody])


  
  const PostMap = posts.map( (post:any)=>{
    post = new Post(post.id, post.topic_id, post.title, post.post_body, post.votes, post.post_image, post.type, post.user_id)
    return (
      <>
      <Suspense fallback={<Loading/>}>
        <PostCard key= {post.id} post= {post}/>
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
                setPostBody={setPostBody}/>
      {PostMap}
    </div>
    )
}