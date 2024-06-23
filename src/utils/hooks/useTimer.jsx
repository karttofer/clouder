/**
 * This hook will return the time left and if the timer is active,
 * common used in the dynamic forms more specific in the PIN Component
 */
import { useState, useEffect } from 'react'

const useTimer = (initialTime, isActive) => {
  const [timeLeft, setTimeLeft] = useState(initialTime)
  const [isTimerActive, setIsTimerActive] = useState(isActive)

  useEffect(() => {
    if (isTimerActive && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0) {
      setIsTimerActive(false)
    }
  }, [timeLeft, isTimerActive])

  const resetTimer = (newTime) => {
    setTimeLeft(newTime)
    setIsTimerActive(true)
  }

  return [timeLeft, isTimerActive, resetTimer]
}

export default useTimer
