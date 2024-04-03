import ResultBox from "./resultBox";

type Props = {
    resultFound:boolean;
    result:any;
    summaryDone:any;
    setSummaryDone:any;
    isFirstRequest:boolean;
}

export default function ResultContainer({resultFound, result, summaryDone,setSummaryDone, isFirstRequest}:Props){
return resultFound? 
    <div className="mt-4 mb-0.5">
    <p className="mb-4">Here is a summary of that topic:</p>
    <ResultBox result={result} summaryDone={summaryDone} setSummaryDone={setSummaryDone} isFirstRequest={isFirstRequest}/> 
    </div>
: null
}