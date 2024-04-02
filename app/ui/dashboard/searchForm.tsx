'use client'

import SearchBar from "./searchBar"
import SearchButton from "./SearchButton"
import { useState } from "react"

type Props = {
    searchTerm: string;
    setSearchTerm: any;
    setResultFound: any;
    setResult: any;
}

export default function SearchForm ({searchTerm, setSearchTerm, setResultFound}:Props) {


    // const [testState, setTestState] = useState('')

    const handleSubmit = (event:any) => {
        event.preventDefault()
        console.log(searchTerm)
        setSearchTerm(searchTerm)
        //api call
        //getPondByName(searchTerm)
        //.then(({data})=>{
            //setResult(data)
            //setResultFound(true)
        // })
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
