import ResultBox from "./resultBox";
import LoadingAI from "../loadingAI";

type Props = {
    resultFound:boolean;
    result:any;
    summaryDone:any;
    setSummaryDone:any;
    isFirstRequest:boolean;
    searchTerm:string;
    isLoading:boolean;
}

export default function ResultContainer({resultFound, result, summaryDone,setSummaryDone, isFirstRequest, searchTerm, isLoading}:Props){

return (
    isLoading?
    <>
    <div className="flex justify-center">
    <div className="flex flex-col">
    <h2>LeapAI is generating a response...</h2>
    <LoadingAI/>
    </div>
    </div>
    </> :
        resultFound?
        <div className="mt-4 mb-0.5">
        <p className="mb-4">Here is a summary of that topic:</p>
        <ResultBox result={result} summaryDone={summaryDone} setSummaryDone={setSummaryDone} isFirstRequest={isFirstRequest} searchTerm={searchTerm} />
        </div>
    : null

)
}