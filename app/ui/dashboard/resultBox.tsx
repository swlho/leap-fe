import { TypeAnimation } from "react-type-animation"
import PondJoinCardContainer from "./pondJoinCardContainer";

type Props = {
    result:any;
    summaryDone: any;
    setSummaryDone:any;
    isFirstRequest:boolean
    searchTerm:string;
}

export default function ResultBox ({result, summaryDone, setSummaryDone, isFirstRequest,searchTerm}:Props) {



    return (
    <>
    <div className="bg-green-100">
        <TypeAnimation
        sequence={[`${result.summary}`, ()=>setSummaryDone(true)]}
        omitDeletionAnimation={true}
        speed={125}
        wrapper='p'
        className='result-text'
        />
    </div>
    <div>
        <PondJoinCardContainer result={result} summaryDone={summaryDone} isFirstRequest={isFirstRequest} searchTerm={searchTerm}/>
    </div>
    </>
        )
}