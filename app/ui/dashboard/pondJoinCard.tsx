import { getPondById } from "@/app/lib/data";
import { useState } from "react";
import CreateJoinButton from "./CreateJoinButton";

type Props = {
    result: any;
    isFirstRequest:boolean;
}

export default function PondJoinCard({result, isFirstRequest}:Props){

    const style = "border-solid border-2 m-3"
    const [pondCardData, setPondCardData] = useState(null)

    // console.log(result)
    const pondDataById = () =>{
        getPondById(result.id)
        .then((data)=>{
            setPondCardData(data)
        })
    }

return isFirstRequest? 
<div className={`${style}`}>
    A pond for '{`${result.topic_name}`}' does not exist.  Would you like to create one and join?
    <CreateJoinButton isFirstRequest={isFirstRequest}/>
</div> : 
<div className={`${style}`}>
    A pond for '{`${result.topic_name}`}' already exists.  Would you like to join?
    <CreateJoinButton isFirstRequest={isFirstRequest}/>
</div>
}