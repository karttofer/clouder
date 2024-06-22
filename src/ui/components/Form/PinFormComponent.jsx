import React, { useState, useEffect } from 'react'
import { HStack, Input, Button, Text } from '@chakra-ui/react'
import {
  ButtonDisableTheme,
  ButtonSecondaryTheme,
} from '../../../assets/chakra/appStyle'

const PinFormComponent = ({
  name,
  length,
  darkTheme,
  handleChange,
  timerConfig,
}) => {
  const [pin, setPin] = useState(new Array(length).fill(''))
  const [timeLeft, setTimeLeft] = useState(timerConfig.duration)
  const [isTimerActive, setIsTimerActive] = useState(true)

  useEffect(() => {
    if (isTimerActive && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0) {
      setIsTimerActive(false)
    }
  }, [timeLeft, isTimerActive])

  const handlePinChange = (element, index) => {
    if (isNaN(element.value)) return false

    const newPin = [...pin.map((d, idx) => (idx === index ? element.value : d))]
    setPin(newPin)
    handleChange({ target: { name, value: newPin.join('') } })

    if (element.nextSibling) {
      element.nextSibling.focus()
    }
  }

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData('text')
    const pinArray = paste.split('').slice(0, length)
    setPin(pinArray)
    handleChange({ target: { name, value: pinArray.join('') } })
  }

  const handleResend = () => {
    setPin(new Array(length).fill(''))
    setTimeLeft(timerConfig.duration)
    setIsTimerActive(true)
    // Trigger resend PIN logic here
    console.log('Resend PIN')
  }

  return (
    <div>
      <HStack spacing={2} display="flex" justify="center">
        {pin.map((data, index) => (
          <Input
            key={index}
            maxLength="1"
            value={data}
            name={`${name}-${index}`}
            onChange={(e) => handlePinChange(e.target, index)}
            onPaste={handlePaste}
            onFocus={(e) => e.target.select()}
            textAlign="center"
            w="100%"
            height="95px"
            fontSize="3em"
            color={!darkTheme ? 'layout.white.white0' : 'layout.black.black850'}
            border="2px solid"
            borderColor="layout.black.black700"
          />
        ))}
        <input
          type="hidden"
          name={name}
          value={pin.join('')}
          onChange={handleChange}
        />
      </HStack>
      <HStack spacing={2} justify="end" mt={4}>
        {isTimerActive && (
          <Text
            color={!darkTheme ? 'layout.white.white0' : 'layout.black.black850'}
          >
            Resend PIN in {timeLeft} seconds
          </Text>
        )}
        <Button
          onClick={handleResend}
          {...(isTimerActive ? ButtonDisableTheme : ButtonSecondaryTheme)}
        >
          {timerConfig.resendLabel}
        </Button>
      </HStack>
    </div>
  )
}

export default PinFormComponent
