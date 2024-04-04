
import Link from "next/link"
import { lusitana } from '@/app/ui/fonts';

const BookCard = ({book}: any) => {
    const {id, title, snippet, link, authors} = book
    

    return (

        <Link href={link}>
            <div key={id} className="rounded-xl bg-gray-50 p-2 shadow-sm flex flex-col justify-start border-solid border-2 m-3">
            <div className="p-4">
            <h3 className="ml-2 text-2xl font-medium">{title}</h3>
                <p className={`${lusitana.className}
                    truncate rounded-xl bg-white px-4 py-8 text-center text-sm`}>{snippet}</p>
                <p className={`${lusitana.className}
                    truncate rounded-xl bg-white px-4 py-8 text-center text-sm`}>{...authors}</p>
            </div>
            </div>
        </Link>

    )
}

export default BookCard