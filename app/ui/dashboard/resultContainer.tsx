import ResultBox from "./resultBox";

type Props = {
    resultFound:boolean;
    result:any;
}

export default function ResultContainer({resultFound, result}:Props){
return resultFound? <ResultBox result={result}/> : null
}