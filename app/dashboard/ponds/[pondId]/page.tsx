//NEED TO REFACTOR TO USE USEEFFECT INSTEAD?
import {
    BookOpenIcon,
    QuestionMarkCircleIcon
    } from '@heroicons/react/24/outline';

import { getPondById } from "@/app/lib/data"
import ResourceLinks from "@/app/ui/ponds/resources"

const PondPage = async ({params}:{params:{pondId:string}})=>{
    console.log(params.pondId, '<<<<<<<<<<<<<<<<<<<<');
    
    const links = [
        { name: 'Q&A', href: `/dashboard/ponds/${params.pondId}/posts`, icon: QuestionMarkCircleIcon },
        { name: 'Reading List', href: `/dashboard/ponds/${params.pondId}/readinglist`, icon: BookOpenIcon },
      ];
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
    <ResourceLinks links={links}/>
    </>
)
}

export default PondPage