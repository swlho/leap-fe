//USERS

export async function getUsers(){
  const res = await fetch("https://leap-backend-k05h.onrender.com/user")
  if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}

export async function getUserById(id:string){
  const res = await fetch(`https://leap-backend-k05h.onrender.com/user/${id}`)
  if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json()
}

//PONDS

export async function getPonds(){
  const res = await fetch("https://leap-backend-k05h.onrender.com/topic")
  if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    
    return res.json()
}

export async function getPondById(id:string){
  const res = await fetch(`https://leap-backend-k05h.onrender.com/topic/${id}`)
  if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json()
}

//querying Render/MongoDB get pond by pond name
//if pond doesn't exist, BE will make a api call to AI to generate a new topic/pond summary and return this to the FE
export async function getPondByName(pond:string){
  try {
    const res = await fetch(`https://leap-backend-k05h.onrender.com/topic/${pond}`)
    const data = await res.json()
    return data

  } catch(error){
    throw new Error('Failed to fetch data')
  }
}

export async function postPond(pond:string){
  const res = await fetch(`https://leap-backend-k05h.onrender.com/topic/${pond}`, {method: 'POST', mode: 'cors'})
  const data = await res.json()
  if (res.status !== 200) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
  return data
}


//POSTS

  export async function getPosts(){
    const res = await fetch("https://leap-backend-k05h.onrender.com/post")
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
      
      return res.json()
}

export async function getPostById(id:string){
  const res = await fetch(`https://leap-backend-k05h.onrender.com/post/${id}`)
  if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json()
}

//COMMENTS

export async function getComments(){
  const res = await fetch("https://leap-backend-k05h.onrender.com/comment")
  if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    
    return res.json()
}

export async function getCommentById(id:string){
  const res = await fetch(`https://leap-backend-k05h.onrender.com/comment/${id}`)
  if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json()
}

//Readinglist

export async function getBooksByTopicId(id:string){
  const res = await fetch(`https://leap-backend-k05h.onrender.com/book/${id}`)
  if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json()
}

