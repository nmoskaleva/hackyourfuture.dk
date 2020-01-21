import React, { useState, useEffect } from 'react'

export default function countdown(date) {
  const calculateTimeLeft = () => {
    const diff = +new Date(date) - +new Date()
    let timeLeft = {}

    if (diff > 0) {
      timeLeft = {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      }
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    }
    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  const countdownComponents = []

  Object.keys(timeLeft).forEach(item => {
    countdownComponents.push([timeLeft[item] + ` ` + item])
  })

  return countdownComponents
}
