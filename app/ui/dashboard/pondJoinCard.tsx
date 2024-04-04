import { getPondById } from "@/app/lib/data";
import { useState } from "react";
import CreateJoinButton from "./CreateJoinButton";

type Props = {
    result: any;
    isFirstRequest:boolean;
    searchTerm:string;
}

export default function PondJoinCard({result, isFirstRequest, searchTerm}:Props){

    const style = "border-solid border-2 m-3 rounded-xl bg-green-300 shadow-sm"
    const [pondCardData, setPondCardData] = useState(null)

return isFirstRequest? 
<div className={style}>
    A pond for '{`${result.topic_name}`}' does not exist.  Would you like to create one and join?
    <CreateJoinButton isFirstRequest={isFirstRequest} searchTerm={searchTerm}/>
</div> : 
<div className={style}>
    A pond for '{`${result.topic_name}`}' already exists.  Would you like to join?
    <CreateJoinButton isFirstRequest={isFirstRequest}/>
</div>
}