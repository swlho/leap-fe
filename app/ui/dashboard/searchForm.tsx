'use client'

import { getPonds } from "@/app/lib/data"
import SearchBar from "./searchBar"
import SearchButton from "./SearchButton"
import { useState } from "react"

type Props = {
    searchTerm: string;
    setSearchTerm: any;
    setResultFound: any;
    setResult: any;
}

export default function SearchForm ({searchTerm, setSearchTerm, setResultFound, setResult}:Props) {


    // const [testState, setTestState] = useState('')

    const handleSubmit = async (event:any) => {
        event.preventDefault()

        setSearchTerm(searchTerm)
        //api call
        await getPonds()
        .then(({data})=>{
            const result = data[0].filter((pond:any) => pond.topic_name === searchTerm)
            if(result.length !== 0){
                setResult(result)
            }
            else{
                console.log('no pond found')
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
{/* <p>{testState}</p> */}
</>
)
}
