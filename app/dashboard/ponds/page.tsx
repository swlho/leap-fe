import { Pond } from "@/app/classes";
import PondCard from "@/app/ui/ponds/pondCard";
import { getPonds } from "@/app/lib/data";
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export default async function Page() {
  const {data} = await getPonds()
  const pondMap = data[0].map((pond:any)=>{
  pond = new Pond(pond.id,pond.topic_name,pond.summary)
  return (
    <PondCard key={pond.id} pond={pond}/>

  )
  })
return pondMap
}