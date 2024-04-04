import MyPondsContainer from '@/app/ui/myponds/myPondsContainer';
import { Suspense } from 'react';
import Loading from '../../ui/loading';

export default function Page() {
  return (
    <>
      <p className="p-4 pb-6 text-center font-lemonRegular text-4xl">
        My Ponds
      </p>
      <Suspense fallback={<Loading />}>
        <MyPondsContainer />
      </Suspense>
    </>
  );
}
