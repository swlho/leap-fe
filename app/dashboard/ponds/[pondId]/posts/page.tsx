import { Post } from "@/app/classes";
import PostCard from "@/app/ui/Posts/postCard";
import { getPosts } from "@/app/lib/data";
import { Suspense } from "react";
import Loading from "@/app/dashboard/ponds/loading";
import PostForm from "@/app/ui/Posts/postForm";

export default async function Page() {
  const {data} = await getPosts()
  
  const PostMap = data[0].map( (post:any)=>{
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
    <PostForm/>
    {PostMap}
  </div>
  )
}