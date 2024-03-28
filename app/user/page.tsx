
async function getUser(){
    const res = await fetch("https://leap-backend-k05h.onrender.com/user/66043e3d00a35da262275be9")
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
     
      return res.json()
    }

export default async function Page(){
    const {data} = await getUser()
    console.log(data[0])
    return (
      <div>
        <p>{data[0].username}</p>
        <p>{data[0].email}</p>
      </div>
    )
  }