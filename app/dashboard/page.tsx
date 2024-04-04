import { Suspense } from 'react';
import DashboardContainer from '../ui/dashboard/DashboardContainer';
import Loading from '../ui/loading';

export default function Page() {
  return (
    <>
      <p className="p-4 pb-6 text-center font-lemonRegular text-4xl">
        My Dashboard
      </p>
      <p>Welcome Haz! What would you like to leap from?</p>
      <br></br>
      <Suspense fallback={<Loading />}>
        <DashboardContainer />
      </Suspense>
    </>
  );
}
