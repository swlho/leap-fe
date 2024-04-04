
import { Book } from "@/app/classes";
import BookCard from "@/app/ui/readingList/bookCard"
import { getBooksByTopicId, } from "@/app/lib/data";
import { Suspense } from "react";
import Loading from "@/app/dashboard/ponds/loading";

export default async function Page({params}:{params:{pondId:string}}) {
    
  const {data} = await getBooksByTopicId(params.pondId)
  console.log("🚀 ~ Page ~ data:", data)
  
  const BookMap = data.map( (book:any)=>{
        book = new Book(book.id, book.title, book.snippet, book.link, book.authors)
  return (
    <>
    <Suspense fallback={<Loading/>}>
       {<BookCard key= {book.id} book= {book}/>}
    </Suspense>
    </>
  )
  })
return BookMap
}