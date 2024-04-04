import DashboardContainer from "../ui/dashboard/DashboardContainer"

export default function Page() {
    return (
      <>
      <p className= 'font-lemonRegular text-4xl text-center p-4 pb-6'>My Dashboard</p>
      <h1 className="font-lemonLight text-center">Welcome <span className="font-lemonBold">Haz</span>! What would you like to leap to?</h1>
      <br></br>
      <DashboardContainer/>
      </>
    )
  }