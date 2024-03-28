import { getUserById } from "../lib/data"

export default async function Page(){
    // const {data} = await getUser()
    const {data} = await getUserById('66043e3d00a35da262275be9')
    return (
      <div>
        <p>{data[0].username}</p>
        <p>{data[0].email}</p>
      </div>
    )
  }