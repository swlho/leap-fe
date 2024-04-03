
import Link from "next/link"
import { lusitana } from '@/app/ui/fonts';

const PostCard = ({post}: any) => {
    const {id, title, topic_id, post_body, votes, post_image } = post
    

    return (

        <Link href={`post/${id}`}>
            <div key={id} className="rounded-xl bg-gray-50 p-2 shadow-sm flex flex-col justify-start border-solid border-2 m-3">
            <div className="p-4">
            <h3 className="ml-2 text-2xl font-medium">{title}</h3>
                <p className={`${lusitana.className}
                    truncate rounded-xl bg-white px-4 py-8 text-center text-sm`}>{post_body}</p>
            </div>
            </div>
        </Link>


    )
}

export default PostCard