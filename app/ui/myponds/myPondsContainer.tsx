'use client';

import MyPondCard from './myPondCard';
import { getPonds, getUserById } from '@/app/lib/data';
import Loading from '../../ui/loading';
import React, { useEffect, useState } from 'react';
import { Pond, User } from '@/app/classes';

export default function MyPondsContainer() {
  const [pondsArr, setPondsArr] = useState<Pond[]>([]);
  const [userMyPondsArr, setUserMyPondsArr] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getPonds().then(({ data }) => {
      setIsLoading(false);
      setPondsArr(data[0]);
    });
    getUserById('660d70386114563bf754fb5d').then(({ data }) => {
      setUserMyPondsArr(data[0].user_topics);
      setIsLoading(false);
    });
  }, []);

  const pondsArrFilter = pondsArr.filter((pond: any) => {
    return userMyPondsArr.includes(pond.id);
  });

  const filteredPondsMap = pondsArrFilter.map((mappedPond) => {
    return (
      <React.Fragment key={mappedPond.id}>
        <MyPondCard mappedPond={mappedPond} />
      </React.Fragment>
    );
  });

  return isLoading ? <Loading /> : filteredPondsMap;
}
