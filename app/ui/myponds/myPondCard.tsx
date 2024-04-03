'use client'

import { UserGroupIcon } from "@heroicons/react/24/outline";
import Link from "next/link"
import { lusitana } from '@/app/ui/fonts';

export default function MyPondCard(props:any){
    const {mappedPond} = props
    const {id, topic_name, summary} = mappedPond

    const Icon = UserGroupIcon

    return (

        <div key={id} className="rounded-xl bg-gray-50 p-2 shadow-sm flex flex-col justify-start border-solid border-2 m-3">
        <div className="p-4">
        <Link href={`/dashboard/ponds/${id}`}>
        <Icon className="h-5 w-5 text-gray-700" />
        <h3 className="ml-2 text-2xl font-medium">{topic_name}</h3>
        <p className={`${lusitana.className}
    truncate rounded-xl bg-white px-4 py-8 text-center text-sm`}>{summary}</p>
        </Link>
        </div>
        </div>
    )
}