
import Link from "next/link"
import { lusitana } from '@/app/ui/fonts';

const PostCard = ({post}: any) => {
    const {id, title, topic_id, post_body, votes, post_image } = post
    

    return (

        <Link href={`post/${id}`}>
            <div key={id} className="rounded-xl bg-gray-50 p-2 shadow-sm flex flex-col justify-start border-solid border-2 mt-3">
            <div className="p-4">
            <h3 className="ml-2 text-2xl font-lemonLight">{title}</h3>
                <p className={`line-clamp-1 rounded-xl bg-white p-5 py-5 mt-2 mb-10 text-center text-sm`}>{post_body}</p>
            </div>
            </div>
        </Link>


    )
}

export default PostCard