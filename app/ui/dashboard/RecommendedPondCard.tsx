/* eslint-disable react/jsx-no-comment-textnodes */
'use client'

import { UserGroupIcon } from "@heroicons/react/24/outline";
import Link from "next/link"
import { lusitana } from '@/app/ui/fonts';
import CreateJoinButton from "./CreateJoinButton";

export default function RecommendedPondCard(props:any){
    const {mappedPond} = props
    const {id, topic_name, summary} = mappedPond

    const Icon = UserGroupIcon

    return (

        <div key={id} className="rounded-xl bg-gray-50 p-2 shadow-sm flex flex-col justify-start border-solid border-2 mt-3">
        <div className="p-4">
        <Link href={`/dashboard/ponds/${id}`}>
            <div className="flex">
                <Icon className="h-8 w-8 text-gray-700" />
                <h3 className="ml-2 text-2xl font-lemonLight">{topic_name}</h3>
            </div>
        <p className={`line-clamp-1 rounded-xl bg-white p-5 py-5 mt-2 mb-10 text-center text-sm`}>{summary}</p>
        </Link>
        <CreateJoinButton id={id} isFirstRequest={false} searchTerm={""}>children={undefined}</CreateJoinButton>
        </div>
        </div>
    )
}