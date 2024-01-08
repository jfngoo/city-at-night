'use client'
import Intro from '@/app/intro'
import Experiment from '@/app/experiment'
import { useState } from 'react'
export default function App() {
  const [userStarted, setUserStarted] = useState(false)

  const handleStart = () => {
    if (userStarted) return
    setUserStarted(true)
  }

  return (
    <div>
      {userStarted === false ?
        <Intro onClick={handleStart}/>
        : <Experiment />
      }
    </div>
  )
}
