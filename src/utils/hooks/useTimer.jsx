import { useState, useEffect } from 'react'

/**
 * @param {number} initialTime - Initial countdown time in seconds.
 * @param {boolean} isActive - Flag to determine if the timer is active.
 * @param {function} [onTimerEnd] - Optional callback to execute when the timer ends.
 */
const useTimer = (initialTime, isActive, onTimerEnd) => {
  const [timeLeft, setTimeLeft] = useState(initialTime)
  const [isTimerActive, setIsTimerActive] = useState(isActive)

  useEffect(() => {
    if (isTimerActive && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0) {
      setIsTimerActive(false)
      if (onTimerEnd) {
        onTimerEnd()
      }
    }
  }, [timeLeft, isTimerActive, onTimerEnd])

  const resetTimer = (newTime = initialTime) => {
    setTimeLeft(newTime)
    setIsTimerActive(true)
  }

  const cancelTimer = (resetTime = initialTime) => {
    setTimeLeft(resetTime)
    setIsTimerActive(false)
  }

  return [timeLeft, isTimerActive, resetTimer, cancelTimer]
}

export default useTimer
