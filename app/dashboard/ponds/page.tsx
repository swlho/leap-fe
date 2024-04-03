import { Pond } from "@/app/classes";
import PondCard from "@/app/ui/ponds/pondCard";
import { getPonds } from "@/app/lib/data";
import { Suspense } from "react";
import Loading from "@/app/dashboard/ponds/loading";

export default async function Page() {
  const {data} = await getPonds()
  const pondMap = data[0].map((pond:any)=>{
  pond = new Pond(pond.id,pond.topic_name,pond.summary)
  return (
    <>
    <Suspense fallback={<Loading/>}>
      <PondCard key={pond.id} pond={pond}/>
    </Suspense>
    </>
  )
})
return (
<>
<p className= 'font-lemonRegular text-4xl text-center p-4 pb-6'>All Ponds</p>
{pondMap}
</>
)
}