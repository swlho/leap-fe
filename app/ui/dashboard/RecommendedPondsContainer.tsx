import React, { useEffect, useState } from 'react';
import RecommendedPondCard from './RecommendedPondCard';
import { getPonds, getUserById } from '@/app/lib/data';
import Loading from '../loading';
import { Pond } from '@/app/classes';


export default function RecommendedPondsContainer() {
  const [pondsArr, setPondsArr] = useState<Pond[]>([]); 
  const [userPondsArr, setUserPondsArr] = useState<UserPond[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPonds()
      .then(({ data }) => {
        setPondsArr(data[0]);
        setIsLoading(false);
      });
    getUserById('660d70386114563bf754fb5d')
      .then(({ data }) => {
        setUserPondsArr(data[0].user_topics);
        setIsLoading(false);
      });
  }, []);

  const pondsArrFilter = pondsArr.filter((pond) => {
    return !userPondsArr.includes(pond.id);
  });

  const filteredPondsMap = pondsArrFilter.map((mappedPond, index) => {
    return (
      <>
        {isLoading ? <Loading /> : <RecommendedPondCard key={index} mappedPond={mappedPond} />}
      </>
    );
  });

  return filteredPondsMap;
}
