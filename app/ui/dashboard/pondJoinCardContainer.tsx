import PondJoinCard from "./pondJoinCard"

type Props = {
    result: any;
    summaryDone:any;
    isFirstRequest:boolean;
}

export default function PondJoinCardContainer({result, summaryDone, isFirstRequest}:Props){
return summaryDone? <PondJoinCard result={result} isFirstRequest={isFirstRequest}/> : null
}