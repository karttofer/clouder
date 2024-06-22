import { useState } from 'react'

const usePinValidation = (length, validatePin, handleChange) => {
  const [pin, setPin] = useState(new Array(length).fill(''))
  const [errorMessage, setErrorMessage] = useState('')
  const [isPinValid, setIsPinValid] = useState(false)

  const handlePinChange = async (element, index) => {
    if (isNaN(element.value)) return false

    const newPin = [...pin.map((d, idx) => (idx === index ? element.value : d))]
    setPin(newPin)
    handleChange({ target: { name: element.name, value: newPin.join('') } })

    if (element.nextSibling) {
      element.nextSibling.focus()
    }

    if (newPin.every((digit) => digit !== '')) {
      // FIXME: This validation here is wrong, it should be done
      // We need first to call backend get the user's pin and then compare it
      const isValid = await validatePin(newPin.join(''))
      if (!isValid) {
        setErrorMessage('Invalid PIN, please try again.')
        setIsPinValid(false)
        setPin(new Array(length).fill(''))
      } else {
        setErrorMessage('')
        setIsPinValid(true)
        document.activeElement.blur()
        console.log('PIN is correct. Redirecting...')
      }
    }
  }

  const handlePaste = (event) => {
    const paste = event.clipboardData.getData('text')
    const pinArray = paste.split('').slice(0, length)
    setPin(pinArray)
    handleChange({
      target: { name: event.target.name, value: pinArray.join('') },
    })
  }

  return {
    pin,
    errorMessage,
    isPinValid,
    handlePinChange,
    handlePaste,
  }
}

export default usePinValidation
