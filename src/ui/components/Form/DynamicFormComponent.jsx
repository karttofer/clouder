import React, { useState, useEffect, useRef } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Container,
  VStack,
  FormHelperText,
  Text,
  Image,
  Box,
  HStack,
  Flex,
  Divider,
  AbsoluteCenter,
} from '@chakra-ui/react'
import { useGoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { t } from 'i18next'
import { GoogleLogin } from '@react-oauth/google'

// Assets
import {
  ButtonThemePrimary,
  ButtonDisableTheme,
  InputThemePrimary,
  centerAnim,
} from 'Assets/chakra/appStyle.js'

// Components
import NavbarComponent from 'Components/Navbar/NavbarComponent.jsx'
import PinFormComponent from 'Components/Form/PinFormComponent.jsx'

// Hook
import useTimer from 'Utils/hooks/useTimer.jsx'
import userErrorAlertHandler from 'Utils/hooks/userErrorAlertHandler.jsx'

// Env
import { LOCAL_BASE_URL } from 'Env'
import { useDispatch, useSelector } from 'react-redux'
import {
  isThirdPartyRegisAction,
  saveUserRegistrationAction,
} from 'Utils/store/action.js'

const DynamicFormComponent = ({
  title,
  subtitle,
  formConfig,
  onSubmit,
  maxW,
  submitText,
  enableSubmit,
  darkTheme,
  showLogo,
}) => {
  const [formData, setFormData] = useState({})
  const [selectedAvatar, setSelectedAvatar] = useState(null)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isFormValid, setIsFormValid] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const [timeLeft, isTimerActive, resetTimer] = useTimer(10, false)
  const navigate = useNavigate()
  const debounceTimeoutRef = useRef({})
  const dispatch = useDispatch()
  const userEmail = useSelector((store) => store.state.user.email)

  useEffect(() => {
    handleValidationForm()
  }, [formData])

  const handleUpdateForm = (event, fieldConfig) => {
    const { name, value } = event.target

    setFormData((prevData) => ({ ...prevData, [name]: value }))
    setTouched((prevTouched) => ({ ...prevTouched, [name]: true }))
    setErrors((prevErrors) => ({ ...prevErrors, [name]: null }))

    if (fieldConfig && fieldConfig.validation) {
      handleValidationField(name, value, fieldConfig.validation)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    const fieldConfig = formConfig.find((field) => field.name === name)
    const debounceTime = fieldConfig?.debounce || 0

    if (debounceTimeoutRef.current[name]) {
      clearTimeout(debounceTimeoutRef.current[name])
    }

    if (!value) {
      handleUpdateForm(event, fieldConfig)
    }

    return debounceTime
      ? (debounceTimeoutRef.current[name] = setTimeout(() => {
          handleUpdateForm(event, fieldConfig)
        }, debounceTime))
      : handleUpdateForm(event, fieldConfig)
  }

  const handleValidationField = (name, value, validation) => {
    let error = null

    if (validation.required && !value) {
      error =
        validation.errorEmptyMessage || t('error_empty_field_default_message')
    } else if (validation.pattern && !validation.pattern.test(value)) {
      error =
        validation.errorPatternMessage || t('error_regex_field_default_message')
    }

    if (name === 'repeated_password' && formData.password !== value) {
      error = validation.errorPatternMessage || t('error_password_match')
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }))
    return error
  }

  const handleValidationForm = () => {
    let isValid = true
    const newErrors = {}

    formConfig.forEach((field) => {
      if (field.validation) {
        const error = handleValidationField(
          field.name,
          formData[field.name],
          field.validation
        )
        if (error) {
          isValid = false
          newErrors[field.name] = error
        }

        if (
          field.name === 'repeated_password' &&
          formData.password !== formData.repeated_password
        ) {
          isValid = false
          newErrors.repeated_password = field.validation.errorPatternMessage
        }
      }
    })

    setErrors(newErrors)
    setIsFormValid(isValid)
  }

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault()
    }

    if (isSubmitting || isTimerActive) return

    const newTouched = {}

    formConfig.forEach((field) => {
      newTouched[field.name] = true
    })

    setTouched(newTouched)
    handleValidationForm()

    if (isFormValid) {
      setIsSubmitting(true)
      try {
        await onSubmit({ ...formData, avatar: selectedAvatar })
      } finally {
        setIsSubmitting(false)
        setClickCount((prevCount) => prevCount + 1)
        if (clickCount + 1 >= 5) {
          resetTimer(10)
        }
      }
    }
  }

  const handleAvatarChange = (value) => {
    setSelectedAvatar(value)
  }

  const handleValidatePIN = async (pin) => {
    console.log(JSON.stringify({ user_pin: pin, email: formData.email }))
    const pinValidation = await fetch(
      `${LOCAL_BASE_URL}/auth/pin-verification`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_pin: pin, email: userEmail }),
      }
    )

    const { is_valid_pin } = await pinValidation.json()

    return is_valid_pin
  }

  return (
    <Container w="100%" as="form" onSubmit={handleSubmit} maxW={maxW}>
      <Box margin="55px 0 55px 0">
        {showLogo && <NavbarComponent navbarType="logo" isDark={darkTheme} />}
        {title && (
          <Text
            textAlign="center"
            color={!darkTheme ? 'layout.white.white0' : 'layout.black.black0'}
            marginBottom="10px"
            fontSize="2xl"
            fontWeight="bold"
          >
            {title}
          </Text>
        )}
        {subtitle && (
          <Text
            textAlign="center"
            opacity=".7"
            color={!darkTheme ? 'layout.white.white0' : 'layout.black.black0'}
            marginBottom="10px"
          >
            {subtitle}
          </Text>
        )}
      </Box>
      <Box>
        {formConfig.map((field, index) => {
          const hasError = touched[field.name] && errors[field.name]
          switch (field.type) {
            case 'google':
              return (
                <Flex
                  flexDir="column"
                  justify="center"
                  align="center"
                  key={index}
                >
                  <Box>
                    <GoogleLogin
                      onSuccess={async (credentialResponse) => {
                        const { credential } = credentialResponse

                        const jwtRegis = await fetch(
                          `${LOCAL_BASE_URL}/auth/jwt-auth-registration`,
                          {
                            method: 'GET',
                            headers: {
                              'Content-Type': 'application/json',
                              Authorization: `${credential}`,
                            },
                          }
                        )
                        const { status, payload } = await jwtRegis.json()

                        if (status === 200 || status === 409) {
                          dispatch(
                            isThirdPartyRegisAction(
                              (status === 200) | (status === 409)
                            )
                          )
                          dispatch(
                            saveUserRegistrationAction({
                              email: payload.user_email,
                            })
                          )
                        }
                      }}
                      onError={() => {
                        console.log('Login Failed')
                      }}
                      theme={!darkTheme ? 'filled_black' : 'filled_blue'}
                      text="continue_with"
                      width="500px"
                    />
                  </Box>
                  <Box width="100%" position="relative" padding="10">
                    <Divider />
                    <AbsoluteCenter
                      background={
                        !darkTheme
                          ? 'layout.black.black800'
                          : 'layout.white.white0'
                      }
                      px="4"
                    >
                      <Text
                        color={
                          !darkTheme
                            ? 'layout.white.white0'
                            : 'layout.black.black0'
                        }
                      >
                        {t('or')}
                      </Text>
                    </AbsoluteCenter>
                  </Box>
                </Flex>
              )
            case 'select':
              return (
                <FormControl key={index} isInvalid={hasError}>
                  <FormLabel
                    color={
                      !darkTheme ? 'layout.white.white0' : 'layout.black.black0'
                    }
                  >
                    {field.label}
                  </FormLabel>
                  <Select
                    marginBottom="10px"
                    {...InputThemePrimary}
                    name={field.name}
                    placeholder={field.placeholder}
                    onChange={handleChange}
                  >
                    {field.options.map((option, idx) => (
                      <option key={idx} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Select>
                  <FormHelperText
                    color={
                      !darkTheme ? 'layout.white.white0' : 'layout.black.black0'
                    }
                    fontWeight="300"
                  >
                    {field.hint}
                  </FormHelperText>
                  {hasError && (
                    <Text color="layout.darkRed.darkRed400" fontSize="sm">
                      {errors[field.name]}
                    </Text>
                  )}
                </FormControl>
              )
            case 'text':
              return (
                <FormControl key={index} isInvalid={hasError} w="100%">
                  <FormLabel
                    color={
                      !darkTheme ? 'layout.white.white0' : 'layout.black.black0'
                    }
                  >
                    <Flex>
                      {field.validation?.required && (
                        <Text color="layout.orange.orange500">*</Text>
                      )}
                      <Flex>{field.label}</Flex>
                    </Flex>
                  </FormLabel>
                  <Input
                    marginBottom="10px"
                    marginTop="10px"
                    {...InputThemePrimary}
                    _placeholder={{ color: 'white', opacity: 0.3 }}
                    type={field.inputType}
                    name={field.name}
                    placeholder={field.placeholder}
                    onChange={handleChange}
                  />
                  <FormHelperText
                    color={
                      !darkTheme ? 'layout.white.white0' : 'layout.black.black0'
                    }
                    fontWeight="300"
                  >
                    {field.hint}
                  </FormHelperText>
                  {hasError && (
                    <Text color="layout.darkRed.darkRed400" fontSize="sm">
                      {errors[field.name]}
                    </Text>
                  )}
                </FormControl>
              )
            case 'pin':
              return (
                <FormControl
                  key={index}
                  isInvalid={hasError}
                  w="100%"
                  marginBottom="10px"
                >
                  <FormLabel
                    textAlign="center"
                    color={
                      !darkTheme ? 'layout.white.white0' : 'layout.black.black0'
                    }
                  >
                    {field.label}
                  </FormLabel>
                  <PinFormComponent
                    darkTheme={darkTheme}
                    handleChange={handleChange}
                    name={field.name}
                    length={field.length}
                    timerConfig={field.timer}
                    validatePin={handleValidatePIN}
                    fieldHint={field.hint}
                  />
                </FormControl>
              )
            case 'avatar':
              return (
                <FormControl
                  key={index}
                  isInvalid={hasError}
                  w="100%"
                  marginBottom="10px"
                >
                  <FormLabel
                    color={
                      !darkTheme ? 'layout.white.white0' : 'layout.black.black0'
                    }
                  >
                    {field.label}
                  </FormLabel>
                  <HStack spacing="24px" marginTop="15px" marginBottom="15px">
                    {field.options.map((avatar, idx) => (
                      <Box
                        key={idx}
                        onClick={() => handleAvatarChange(avatar.value)}
                        border={
                          selectedAvatar === avatar.value
                            ? '2px solid #ff6000'
                            : '2px solid transparent'
                        }
                        borderRadius="full"
                        cursor="pointer"
                        padding="2px"
                      >
                        <Image
                          src={avatar.src}
                          alt={avatar.alt}
                          boxSize="50px"
                          borderRadius="full"
                        />
                      </Box>
                    ))}
                  </HStack>
                  <FormHelperText
                    color={
                      !darkTheme ? 'layout.white.white0' : 'layout.black.black0'
                    }
                    fontWeight="300"
                  >
                    {field.hint}
                  </FormHelperText>
                  {hasError && (
                    <Text color="layout.darkRed.darkRed400" fontSize="sm">
                      {errors[field.name]}
                    </Text>
                  )}
                </FormControl>
              )
            case 'button':
              return (
                <VStack key={index} spacing={4} mt={4} w="100%">
                  {field.buttons.map((button, idx) => {
                    return (
                      <Button
                        key={idx}
                        aria-label={button.label}
                        onClick={button.onClick}
                        {...button.colorScheme}
                        w="100%"
                        background="layout.black.black850"
                        border="2px"
                        borderColor="layout.black.black700"
                        _hover={{ background: 'layout.black.black800' }}
                      >
                        <Image
                          src={button.imgIcon}
                          alt="quick login"
                          marginRight="10px"
                        />
                        <Text color="layout.white.white0">
                          {button.textContainer}
                        </Text>
                      </Button>
                    )
                  })}
                </VStack>
              )
            default:
              return null
          }
        })}
        {enableSubmit && (
          <Button
            w="100%"
            marginTop="20px"
            {...ButtonThemePrimary}
            type="submit"
            isDisabled={!isFormValid || isSubmitting || isTimerActive}
            _disabled={ButtonDisableTheme}
          >
            {isTimerActive
              ? t('login_submit_button_timer_block', { timeLeft })
              : submitText || t('login_submit_button')}
          </Button>
        )}
        <VStack spacing={2} mt={4} w="100%">
          {formConfig.map((field) => {
            if (field.type === 'links') {
              return field.links.map((link, idx) => (
                <Button
                  key={idx}
                  variant="link"
                  _hover={{
                    textDecoration: 'underline',
                    textDecorationColor: 'layout.orange.orange500',
                    textDecorationStyle: 'wavy',
                    textUnderlineOffset: '5px',
                  }}
                  onClick={() => navigate(link.path)}
                >
                  <Text
                    color={
                      !darkTheme ? 'layout.white.white0' : 'layout.black.black0'
                    }
                  >
                    {link.label}
                  </Text>
                </Button>
              ))
            }
            return null
          })}
        </VStack>
      </Box>
    </Container>
  )
}

export default DynamicFormComponent
