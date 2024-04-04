import { Suspense } from 'react';
import DashboardContainer from '../ui/dashboard/DashboardContainer';
import Loading from '../ui/loading';

export default function Page() {

    return (
      <>
      <p className= 'font-lemonRegular text-4xl text-center p-4 pb-6'>My Dashboard</p>
      <h1 className="font-lemonLight text-center">Welcome <span className="font-lemonBold">Toad</span>! What would you like to leap to?</h1>
      <br></br>
      <Suspense fallback={<Loading />}>
        <DashboardContainer />
      </Suspense>
    </>
  );
}
