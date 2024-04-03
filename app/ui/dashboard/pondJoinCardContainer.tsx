import PondJoinCard from "./pondJoinCard"

type Props = {
    result: any;
    summaryDone:any;
    isFirstRequest:boolean;
    searchTerm:string;
}

export default function PondJoinCardContainer({result, summaryDone, isFirstRequest, searchTerm}:Props){
return summaryDone? <PondJoinCard result={result} isFirstRequest={isFirstRequest} searchTerm={searchTerm}/> : null
}