//NEED TO REFACTOR TO USE USEEFFECT INSTEAD?

import { getPondById } from "@/app/lib/data"

const PondPage = async ({params}:{params:{id:string}})=>{
    const pondData = await getPondById(params.pondId)
    .then(({data})=>{
        return data
    })
    .catch((err)=>{
        console.log(err)
    })
return (
    <h2>{pondData[0].topic_name}</h2>
)
}

export default PondPage