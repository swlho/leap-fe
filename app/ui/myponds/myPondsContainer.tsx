'use client'

import MyPondCard from "./myPondCard";
import { getPonds, getUserById } from "@/app/lib/data";
import { Suspense } from "react";
import Loading from "@/app/dashboard/ponds/loading";
import { useEffect, useState } from "react";

export default function MyPondsContainer(){
    const [pondsArr, setPondsArr] = useState([])
    const [userMyPondsArr, setUserMyPondsArr] = useState([])

    useEffect(()=>{
        getPonds()
        .then(({data})=>{
            console.log(data)
            setPondsArr(data[0])
        })
        getUserById('660d70386114563bf754fb5d')
        .then(({data})=>{
            setUserMyPondsArr(data[0].user_topics)
        })
    },[])

    const pondsArrFilter = pondsArr.filter((pond)=>{
        return userMyPondsArr.includes(pond.id)
    })

    const filteredPondsMap = pondsArrFilter.map((mappedPond)=>{
        return (
          <>
          <Suspense fallback={<Loading/>}>
            <MyPondCard key={mappedPond.id} mappedPond={mappedPond}/>
          </Suspense>
          </>
        )
    })
    return filteredPondsMap
}