import Link from "next/link"

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