'use client'

import RecommendedPondCard from "./RecommendedPondCard";
import { getPonds, getUserById } from "@/app/lib/data";
import { Suspense } from "react";
import Loading from "@/app/dashboard/ponds/loading";
import { useEffect, useState } from "react";

export default function RecommendedPondsContainer(){
    const [pondsArr, setPondsArr] = useState([])
    const [userPondsArr, setUserPondsArr] = useState([])

    useEffect(()=>{
        getPonds()
        .then(({data})=>{
            setPondsArr(data[0])
        })
        getUserById('660d70386114563bf754fb5d')
        .then(({data})=>{
            setUserPondsArr(data[0].user_topics)
        })
    },[])

    const pondsArrFilter = pondsArr.filter((pond)=>{
        return !userPondsArr.includes(pond.id)
    })

    const filteredPondsMap = pondsArrFilter.map((mappedPond)=>{
        return (
          <>
          <Suspense fallback={<Loading/>}>
            <RecommendedPondCard key={mappedPond.id} mappedPond={mappedPond}/>
          </Suspense>
          </>
        )
    })
    return filteredPondsMap
}