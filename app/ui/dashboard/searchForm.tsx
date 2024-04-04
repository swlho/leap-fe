'use client'

import { getPonds, postPond } from "@/app/lib/data"
import SearchBar from "./searchBar"
import SearchButton from "./SearchButton"

type Props = {
    searchTerm: string;
    setSearchTerm: any;
    setResultFound: any;
    setResult: any;
    setSummaryDone:any;
    setIsFirstRequest:any;
}

export default function SearchForm ({searchTerm, setSearchTerm, setResultFound, setResult, setSummaryDone, setIsFirstRequest}:Props) {

    const handleSubmit = async (event:any) => {
        event.preventDefault()
        setSearchTerm(searchTerm)
        setResultFound(false)
        setSummaryDone(false)
        setIsFirstRequest(false)
        //api call
        await getPonds()
        .then(({data})=>{
            const pondData = data[0].filter((pond:any) => pond.topic_name.toLowerCase() === searchTerm.toLowerCase())            
            if(pondData.length !== 0){
                setResult(pondData[0])
                setResultFound(true)
                console.log('topic found in database!!!');
            }
            else{
            postPond(searchTerm)
                .then(({data})=>{
                    console.log("generating AI response")
                    setIsFirstRequest(true)
                    setResult(data[0])
                    setResultFound(true)
            })
            }
        })
    }

    const handleChange = (event:any) => {
        setSearchTerm(event.target.value)
    }

return (
<>
<form className="bg-gray-100 p-5 border-2 border-neutral-900 rounded-lg" onSubmit={handleSubmit} >
<SearchBar placeholder="Use Leap AI to search for anything" searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleChange = {handleChange}/>
<SearchButton placeholder="search-button"/>
</form>
</>
)
}
