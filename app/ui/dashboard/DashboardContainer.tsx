'use client'

import SearchForm from "./searchForm";
import ResultContainer from "./resultContainer";
import { useState } from "react";

export default function DashboardContainer(){
    const [searchTerm, setSearchTerm] = useState('')
    const [resultFound, setResultFound] = useState(false)
    const [result,setResult] = useState('')

return (
<>
<SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} setResultFound={setResultFound} setResult={setResult}/>
<ResultContainer resultFound={resultFound} result={result}/>
</>
)

}
