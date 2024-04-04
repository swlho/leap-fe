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

export async function putUserById(id:string,userUsername:string, userEmail:string, userTopicId:string){
  
  const putBody = JSON.stringify({username:userUsername, email:userEmail, user_topics:[userTopicId]})
  
  const res = await fetch(`https://leap-backend-k05h.onrender.com/user/${id}`, {method: 'PUT', headers: {'Content-Type':'application/json'}, mode: 'cors', body: putBody})

  const data = await res.json()
  if (res.status !== 200) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
  return data
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

export async function postPost(postBody: any){
  const res = await fetch(`https://leap-backend-k05h.onrender.com/post`, {method: 'POST', body: postBody, mode: 'cors'})
  const data = await res.json()
  if (res.status !== 200) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
  return data
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
