'use client'

import { getUserById, postPond, putUserById } from '@/app/lib/data';
import clsx from 'clsx';
import { useState } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isFirstRequest:boolean;
  id:string
  searchTerm:string;
}

export default function CreateJoinButton({ children, className, isFirstRequest, id, searchTerm}: ButtonProps){

  const [buttonClicked, setButtonClicked] = useState(clsx(
    'flex h-10 items-center rounded-lg bg-orange-400 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
    className,
  ))

  let [buttonText,setButtonText] = useState(isFirstRequest? 'Create & Join' : 'Join')

  const handleClick = (event) =>{
    getUserById('660d70386114563bf754fb5d')
    .then(({data})=>{
      const userTopicsArr = data[0].user_topics
      return userTopicsArr
    })
    .then((userTopicsArr)=>{
      console.log(id,"topic id")
      putUserById('660d70386114563bf754fb5d','mkelling0','rdimbleby0@surveymonkey.com', id)
      .then(()=>{
        console.log("user updated")
        setButtonClicked(clsx('flex h-10 items-center rounded-lg bg-green-400 px-4 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'))
        event.target.disabled=true
        setButtonText('Joined')
      })
    })
  }

  const handleClickToCreateAndJoin = (event) =>{
    postPond(searchTerm)
    .then(()=>{
      console.log("new pond created")
      getUserById('660d70386114563bf754fb5d')
      .then(({data})=>{
        const userTopicsArr = data[0].user_topics
        return userTopicsArr
      })
      .then((userTopicsArr)=>{
        console.log(id,"topic id")
        putUserById('660d70386114563bf754fb5d','mkelling0','rdimbleby0@surveymonkey.com', id)
        .then(()=>{
          console.log("user updated")
          setButtonClicked(clsx('flex h-10 items-center rounded-lg bg-green-400 px-4 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'))
          event.target.disabled=true
          setButtonText('Joined')
        })
      })
    })
  }

    return (
      isFirstRequest? <button type="submit" onClick={handleClickToCreateAndJoin}
      className={buttonClicked}
    >
      {children}{buttonText}
    </button>: 
    <button type="submit" onClick={handleClick}
    className={buttonClicked}>
    {children}{buttonText}
  </button>

    );
  }