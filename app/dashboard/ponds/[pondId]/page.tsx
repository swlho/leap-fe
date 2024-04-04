//NEED TO REFACTOR TO USE USEEFFECT INSTEAD?
import {
    BookOpenIcon,
    QuestionMarkCircleIcon
    } from '@heroicons/react/24/outline';

import { getPondById } from "@/app/lib/data"
import ResourceLinks from "@/app/ui/ponds/resources"

const PondPage = async ({params}:{params:{pondId:string}})=>{;
    
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
        <div className='border-solid border-2 mt-3 p-5 rounded-lg'>
            <h2 className="font-lemonRegular text-center text-3xl">{pondData.topic_name}</h2>
            <br></br>
            <p>{pondData.summary}</p>
        </div>
        <div>
            <ResourceLinks links={links}/>
        </div>
    </>
)
}

export default PondPage