import React, { useEffect, useState } from 'react';
import RecommendedPondCard from './RecommendedPondCard';
import { getPonds, getUserById } from '@/app/lib/data';
import Loading from '../loading';
import { Pond, User } from '@/app/classes';

export default function RecommendedPondsContainer() {
  const [pondsArr, setPondsArr] = useState<Pond[]>([]);
  const [userPondsArr, setUserPondsArr] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([getPonds(), getUserById('660d70386114563bf754fb5d')])
      .then(([pondsResponse, userResponse]) => {
        setPondsArr(pondsResponse.data[0]);
        setUserPondsArr(userResponse.data[0].user_topics);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);


  const pondsArrFilter = pondsArr.filter((pond: any) => {
    return !userPondsArr.includes(pond.id);
  });

  const filteredPondsMap = pondsArrFilter.map((mappedPond, index) => {
    return (
      <React.Fragment key={index}>
        <RecommendedPondCard mappedPond={mappedPond} />
      </React.Fragment>
    );
  });

  return isLoading ? <Loading /> : filteredPondsMap;
}

