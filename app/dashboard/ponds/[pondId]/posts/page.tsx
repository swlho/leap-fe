import PostsContainer from "@/app/ui/Posts/postsContainer";

export default function Page({params}:{params:{pondId:string}}) {
  return (
    <>
    <p className= 'font-lemonRegular text-4xl text-center p-4 pb-6'>Q&A</p>
      <PostsContainer params={params}/>
    </>
  )
}