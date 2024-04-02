import ResultBox from "./resultBox";

type Props = {
    resultFound:boolean;
    result:any;
}

export default function ResultContainer({resultFound, result}:Props){
return resultFound? 
    <div className="mt-4 mb-0.5">
    <p className="mb-4">Here is a summary of that topic:</p>
    <ResultBox result={result}/> 
    </div>
: null
}