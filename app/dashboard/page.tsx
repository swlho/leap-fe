import DashboardContainer from "../ui/dashboard/DashboardContainer"

export default function Page() {
    return (
      <>
      <p className= 'font-lemonRegular text-4xl text-center p-4 pb-6'>My Dashboard</p>
      <p>Welcome Haz! What would you like to leap from?</p>
      <br></br>
      <DashboardContainer/>
      </>
    )
  }