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
    'flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
    className,
  ))

  const handleClick = () =>{
    getUserById('660d383ed53a3ca35a0ff9d9')
    .then(({data})=>{
      const userTopicsArr = data[0].user_topics
      return userTopicsArr
    })
    .then((userTopicsArr)=>{
      console.log(id,"topic id")
      putUserById('660d383ed53a3ca35a0ff9d9','mkelling0','rdimbleby0@surveymonkey.com', userTopicsArr, id)
      .then(()=>{
        console.log("user updated")
        setButtonClicked(clsx('flex h-10 items-center rounded-lg bg-green-400 px-4 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'))
      })
    })
  }

  const handleClickToCreateAndJoin = () =>{
    postPond(searchTerm)
    .then(()=>{
      console.log("new pond created")
      getUserById('660d383ed53a3ca35a0ff9d9')
      .then(({data})=>{
        const userTopicsArr = data[0].user_topics
        return userTopicsArr
      })
      .then((userTopicsArr)=>{
        console.log(id,"topic id")
        putUserById('660d383ed53a3ca35a0ff9d9','mkelling0','rdimbleby0@surveymonkey.com', userTopicsArr, id)
        .then(()=>{
          console.log("user updated")
          setButtonClicked(clsx('flex h-10 items-center rounded-lg bg-green-400 px-4 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'))
        })
      })
    })
  }

    return (
      isFirstRequest? <button type="submit" onClick={handleClickToCreateAndJoin}
      className={buttonClicked}
    >
      {children}Create & Join
    </button>: 
    <button type="submit" onClick={handleClick}
    className={buttonClicked}
  >
    {children}Join
  </button>

    );
  }