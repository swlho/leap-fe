import Link from "next/link"
import { lusitana } from '@/app/ui/fonts';

const PostCard = (props:any) => {
    const {post} = props
    const {id, title, post_image, type} = post

    const Icon = post_image

    return (

        <Link href={`posts/${id}`}>
        <div key={id} className="rounded-xl bg-gray-50 p-2 shadow-sm flex flex-col justify-start border-solid border-2 m-3">
        <div className="p-4">
        <Icon className="h-5 w-5 text-gray-700" />
        <h3 className="ml-2 text-2xl font-medium">{title}</h3>
            <p className={`${lusitana.className}
    truncate rounded-xl bg-white px-4 py-8 text-center text-sm`}>{type}</p>
        </div>
        </div>
    </Link>


    )
}

export default PostCard