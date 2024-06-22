import React, { useState, useEffect } from 'react'
import {
  HStack,
  Input,
  Button,
  Text,
  Container,
  FormHelperText,
} from '@chakra-ui/react'
import {
  ButtonDisableTheme,
  ButtonSecondaryTheme,
} from '../../../assets/chakra/appStyle' // adjust the import path as needed
import { t } from 'i18next'

const PinFormComponent = ({
  name,
  length,
  darkTheme,
  handleChange,
  timerConfig,
  validatePin,
  fieldHint,
}) => {
  const [pin, setPin] = useState(new Array(length).fill(''))
  const [timeLeft, setTimeLeft] = useState(timerConfig.duration)
  const [isTimerActive, setIsTimerActive] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const [isPinValid, setIsPinValid] = useState(false)

  useEffect(() => {
    if (isTimerActive && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0) {
      setIsTimerActive(false)
    }
  }, [timeLeft, isTimerActive])

  const handlePinChange = async (element, index) => {
    if (isNaN(element.value)) return false

    const newPin = [...pin.map((d, idx) => (idx === index ? element.value : d))]
    setPin(newPin)
    handleChange({ target: { name, value: newPin.join('') } })

    if (element.nextSibling) {
      element.nextSibling.focus()
    }

    if (newPin.every((digit) => digit !== '')) {
      const isValid = await validatePin(newPin.join(''))
      if (!isValid) {
        setErrorMessage('Invalid PIN, please try again.')
        setIsPinValid(false)
        setPin(new Array(length).fill(''))
      } else {
        setErrorMessage('')
        setIsPinValid(true)
        document.activeElement.blur()
      }
    }
  }

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData('text')
    const pinArray = paste.split('').slice(0, length)
    setPin(pinArray)
    handleChange({ target: { name, value: pinArray.join('') } })
  }

  const handleResend = () => {
    setTimeLeft(timerConfig.duration)
    setIsTimerActive(true)
  }

  return (
    <Container>
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
            maxW="90px"
            height="95px"
            fontSize="3em"
            color={!darkTheme ? 'layout.white.white0' : 'layout.black.black850'}
            border="2px solid"
            borderColor={isPinValid ? 'green.500' : 'layout.black.black700'}
          />
        ))}
        <input
          type="hidden"
          name={name}
          value={pin.join('')}
          onChange={handleChange}
        />
      </HStack>
      <FormHelperText
        textAlign="center"
        marginTop="10px"
        marginBlock="10px"
        color={!darkTheme ? 'layout.white.white0' : 'layout.black.black0'}
        fontWeight="300"
      >
        {fieldHint}
      </FormHelperText>
      {errorMessage && (
        <Text
          color="layout.darkRed.darkRed400"
          textAlign="center"
          mt={2}
          w="100%"
        >
          {errorMessage}
        </Text>
      )}
      <HStack spacing={2} justify="end" mt={4}>
        {isTimerActive && (
          <Text
            color={!darkTheme ? 'layout.white.white0' : 'layout.black.black850'}
          >
            {t('resend_pin', { timeLeft })}
          </Text>
        )}
        <Button
          onClick={handleResend}
          disabled={isTimerActive}
          isDisabled={isTimerActive}
          {...(isTimerActive ? ButtonDisableTheme : ButtonSecondaryTheme)}
        >
          {timerConfig.resendLabel}
        </Button>
      </HStack>
    </Container>
  )
}

export default PinFormComponent
