'use client'

import { getPonds, postPond } from "@/app/lib/data"
import SearchBar from "./searchBar"
import SearchButton from "./SearchButton"

type Props = {
    searchTerm: string;
    setSearchTerm: any;
    setResultFound: any;
    setResult: any;
}

export default function SearchForm ({searchTerm, setSearchTerm, setResultFound, setResult}:Props) {

    const handleSubmit = async (event:any) => {
        event.preventDefault()
        setSearchTerm(searchTerm)
        setResultFound(false)
        //api call
        await getPonds()
        .then(({data})=>{
            const pondData = data[0].filter((pond:any) => pond.topic_name === searchTerm)            
            if(pondData.length !== 0){
                setResult(pondData[0].summary)
                setResultFound(true)
                console.log('found!!!');
            }
            else{
            postPond(searchTerm)
                .then(({data})=>{
                    console.log("generating AI response")
                    const summaryData = data[0].summary
                    setResult(summaryData)
                    setResultFound(true)
            })
            }
        })
    }

    const handleChange = (event:any) => {
        setSearchTerm(event.target.value)
        console.log(event.target.value)
    }

return (
<>
<form onSubmit={handleSubmit}>
<SearchBar placeholder="Search for anything" searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleChange = {handleChange}/>
<SearchButton placeholder="search-button"/>
</form>
</>
)
}
