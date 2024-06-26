import { UserGroupIcon } from "@heroicons/react/24/outline";
import Link from "next/link"
import { lusitana } from '@/app/ui/fonts';

const PondCard = (props:any) => {
    const {pond} = props
    const {id, topic_name, summary} = pond

    const Icon = UserGroupIcon

    return (

        <Link href={`ponds/${id}`}>
        <div key={id} className="rounded-xl bg-gray-50 p-2 shadow-sm flex flex-col justify-start border-solid border-2 m-3">
        <div className="p-4 ">
            <div className="flex">
                <Icon className="h-8 w-8 text-gray-700" />
                <h3 className="ml-2 text-2xl font-lemonLight">{topic_name}</h3>

            </div>
            <p className={`line-clamp-1 rounded-xl bg-white p-5 py-5 mt-2 mb-10 text-center text-sm`}>{summary}</p>
        </div>
        </div>
    </Link>


    )
}

export default PondCard