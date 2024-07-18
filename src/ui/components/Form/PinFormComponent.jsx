// Dependencies
import React from 'react'
import {
  HStack,
  Input,
  Button,
  Text,
  Container,
  FormHelperText,
} from '@chakra-ui/react'
import { t } from 'i18next'
import { useSelector } from 'react-redux'

// Assets
import {
  ButtonDisableTheme,
  ButtonSecondaryTheme,
} from 'Assets/chakra/appStyle'

// Hooks
import useTimer from 'Utils/hooks/useTimer.jsx'
import usePinValidation from 'Utils/hooks/usePinValidation.jsx'
import { createMagicLinkService } from 'Utils/services/auth.js'

const PinFormComponent = ({
  name,
  length,
  darkTheme,
  handleChange,
  timerConfig,
  validatePin,
  fieldHint,
}) => {
  const { pin, errorMessage, isPinValid, handlePinChange, handlePaste } =
    usePinValidation(length, validatePin, handleChange)
  const userEmail = useSelector((store) => store.state.user.email)

  const [timeLeft, isTimerActive, resetTimer] = useTimer(
    timerConfig.duration,
    true
  )

  const handleResend = () => {
    resetTimer(timerConfig.duration)
    createMagicLinkService({
      email: userEmail,
    })
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
            onChange={(event) => handlePinChange(event.target, index)}
            onPaste={handlePaste}
            onFocus={(event) => event.target.select()}
            textAlign="center"
            w="100%"
            maxW="90px"
            height="95px"
            fontSize="3em"
            color={!darkTheme ? 'layout.white.white0' : 'layout.black.black850'}
            border="2px solid"
            borderColor={
              isPinValid === null
                ? 'layout.black.black0'
                : isPinValid
                  ? 'green.500'
                  : 'layout.darkRed.darkRed400'
            }
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
      <HStack spacing={2} justify="end" margin="0 54px 15px">
        {isTimerActive && (
          <Text
            color={!darkTheme ? 'layout.white.white0' : 'layout.black.black850'}
          >
            {t('registration.resend_pin', { timeLeft })}
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
    </Container>
  )
}

export default PinFormComponent
