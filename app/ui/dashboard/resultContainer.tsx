import ResultBox from "./resultBox";
import Loading from "../loading";

type Props = {
    resultFound:boolean;
    result:any;
    summaryDone:any;
    setSummaryDone:any;
    isFirstRequest:boolean;
    searchTerm:string;
    isLoading:boolean;
    setIsLoading:any;
}

export default function ResultContainer({resultFound, result, summaryDone,setSummaryDone, isFirstRequest, searchTerm, isLoading, setIsLoading}:Props){

return (
    isLoading?
    <Loading/> :
        resultFound?
        <div className="mt-4 mb-0.5">
        <p className="mb-4">Here is a summary of that topic:</p>
        <ResultBox result={result} summaryDone={summaryDone} setSummaryDone={setSummaryDone} isFirstRequest={isFirstRequest} searchTerm={searchTerm} isLoading={isLoading} setIsLoading={setIsLoading}/> 
        </div>
    : null

)
}