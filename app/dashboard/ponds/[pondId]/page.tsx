//NEED TO REFACTOR TO USE USEEFFECT INSTEAD?

import { getPondById } from "@/app/lib/data"

const PondPage = async ({params}:{params:{id:string}})=>{
    const pondData = await getPondById(params.pondId)
    .then(({data})=>{
        return data[0]
    })
    .catch((err)=>{
        console.log(err)
    })
return (
    <>
    <h2>{pondData.topic_name}</h2>
    <br></br>
    <p>{pondData.summary}</p>
    </>
)
}

export default PondPage