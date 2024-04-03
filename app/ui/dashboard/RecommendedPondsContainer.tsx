import RecommendedPondCard from "./RecommendedPondCard";
import { Pond } from "@/app/classes";
import { getPonds } from "@/app/lib/data";
import { Suspense } from "react";
import Loading from "@/app/dashboard/ponds/loading";

export default async function RecommendedPondsContainer(){
    const {data} = await getPonds()
    const pondMap = data[0].map((pond:any)=>{
    pond = new Pond(pond.id,pond.topic_name,pond.summary)
    return (
      <>
      <Suspense fallback={<Loading/>}>
        <RecommendedPondCard key={pond.id} pond={pond}/>
      </Suspense>
      </>
    )
    })
  return pondMap
}