
import { Post } from "@/app/classes";
import PostCard from "@/app/ui/Posts/postCard";
import { getBooksByTopicId, } from "@/app/lib/data";
import { Suspense } from "react";
import Loading from "@/app/dashboard/ponds/loading";

export default async function Page({params}:{params:{pondId:string}}) {
    
  const {data} = await getBooksByTopicId(params.pondId)
  
  const BookMap = data[0].map( (book:any)=>{
        book = new book(book.id, book.title, book.snippet, book.link, book.authors)
  return (
    <>
    <Suspense fallback={<Loading/>}>
       {/* <BookCard key= {book.id} book= {book}/> */}
    </Suspense>
    </>
  )
  })
return BookMap
}