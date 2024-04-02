import Link from "next/link"
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

const PondCard = (props:any) => {
    const {pond} = props
    const {id, topic_name, summary} = pond
    return (
        <Link href={`ponds/${id}`}>
        <div key={id}>
            <p>{topic_name}</p>
            <p>{summary}</p>
            <br></br>
        </div>
        </Link>
    )
}

export default PondCard