
import { Post } from "@/app/classes";
import PostCard from "@/app/ui/posts/postcard";
import { getPosts } from "@/app/lib/data";
import { Suspense } from "react";
import Loading from "@/app/dashboard/ponds/loading";

export default async function Page() {
  const {data} = await getPosts()
  
  const postMap = data[0].map((post:any)=>{
  post = new Post(
        post.id,
        post.topic_id, 
        post.post_body, 
        post.title,
        post.user_id,
        post.votes,
        post.post_image,
        post.type
        )
  return (
    <>
    <Suspense fallback={<Loading/>}>
      <PostCard key={post.id} post={post}/>
    </Suspense>
    </>
  )
  })
return postMap
}