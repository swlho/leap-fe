'use client'

import SearchForm from "./searchForm";
import ResultContainer from "./resultContainer";
import RecommendedPondsContainer from "./RecommendedPondsContainer";
import { useState } from "react";
// import LeapFrogLoader from "../LeapFrogLoader";

export default function DashboardContainer(){
    const [searchTerm, setSearchTerm] = useState('')
    const [resultFound, setResultFound] = useState(false)
    const [result,setResult] = useState(null)
    const [isFirstRequest, setIsFirstRequest] = useState(false)
    const [summaryDone, setSummaryDone] = useState(false)

return (
<>
<SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} setResultFound={setResultFound} setResult={setResult} setSummaryDone={setSummaryDone} setIsFirstRequest={setIsFirstRequest}/>
<ResultContainer resultFound={resultFound} result={result} summaryDone={summaryDone} setSummaryDone={setSummaryDone} isFirstRequest={isFirstRequest} searchTerm={searchTerm}/>
{/* <LeapFrogLoader/> */}
<p className="text-xl m-5 font-semibold">Your Recommended Ponds</p>
<RecommendedPondsContainer/>
</>
)

}
