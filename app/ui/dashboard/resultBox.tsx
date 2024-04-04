import Typing from 'react-typing-animation';
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
    <div className="bg-green-400 rounded-lg p-5">
        <Typing
        onFinishedTyping={()=>setSummaryDone(true)}
        speed={300}
        className='result-text'
        >{result.summary}</Typing>
    </div>
    <div>
        <PondJoinCardContainer result={result} summaryDone={summaryDone} isFirstRequest={isFirstRequest} searchTerm={searchTerm}/>
    </div>
    </>
    )
}