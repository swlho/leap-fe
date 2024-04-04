/* eslint-disable react/no-unescaped-entities */
import { getPondById } from "@/app/lib/data";
import { useState } from "react";
import CreateJoinButton from "./CreateJoinButton";

type Props = {
    result: any;
    isFirstRequest:boolean;
    searchTerm:string;
}

export default function PondJoinCard({result, isFirstRequest, searchTerm}:Props){

    const style = "border-solid border-2 mt-3 p-5 rounded-lg"
    const [pondCardData, setPondCardData] = useState(null)

    // console.log(result)
    const pondDataById = () =>{
        getPondById(result.id)
        .then((data)=>{
            setPondCardData(data)
        })
    }

return isFirstRequest ? (
    <div className={style}>
      <span className="font-lemonLight">
        A pond for <span className="font-lemonBold">'{`${result.topic_name}`}' </span>does not exist.  Would you like to create one and join?
      </span>
      <CreateJoinButton isFirstRequest={isFirstRequest} searchTerm={searchTerm}/>
    </div>
  ) : (
    <div className={style}>
      A pond for '{`${result.topic_name}`}' already exists.  Would you like to join?
      <CreateJoinButton isFirstRequest={isFirstRequest}/>
    </div>
  );
}