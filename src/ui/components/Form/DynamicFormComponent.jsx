// Dependencies
import React, { useState } from 'react'
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
} from '@chakra-ui/react'
import { useGoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { t } from 'i18next'

// Styles
import {
  ButtonThemePrimary,
  InputThemePrimary,
  centerAnim,
} from '../../../assets/chakra/appStyle.js'

// Components
import NavbarComponent from '../Navbar/NavbarComponent.jsx'
import PinFormComponent from './PinFormComponent.jsx'

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
  animationType,
}) => {
  const [formData, setFormData] = useState({})
  const [selectedAvatar, setSelectedAvatar] = useState(null)
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
    setErrors((prevErrors) => ({ ...prevErrors, [name]: null }))
  }

  const validateField = (name, value, validation) => {
    if (validation.required && !value) {
      return validation.errorEmptyMessage || 'This field is required'
    }
    if (validation.pattern && !validation.pattern.test(value)) {
      return validation.errorPatternMessage || 'Invalid value'
    }
    return null
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let isValid = true
    const newErrors = {}

    formConfig.forEach((field) => {
      if (field.validation) {
        const error = validateField(
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

    if (isValid) {
      onSubmit({ ...formData, avatar: selectedAvatar })
    } else {
      setErrors(newErrors)
    }
  }

  const handleAvatarChange = (value) => {
    setSelectedAvatar(value)
  }

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
    flow: 'auth-code',
  })

  return (
    <Container w="100%" as="form" onSubmit={handleSubmit} maxW={maxW}>
      <motion.div
        style={{ ...centerAnim, display: 'flex', flexDirection: 'column' }}
        {...animationType}
        transition={{ duration: '0.3' }}
        w="100%"
      >
        {showLogo && <NavbarComponent navbarType="logo" isDark={darkTheme} />}
        <Box>
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
        {formConfig.map((field, index) => {
          switch (field.type) {
            case 'select':
              return (
                <FormControl key={index} isInvalid={errors[field.name]}>
                  <FormLabel
                    marginTop="10px"
                    marginBottom="5px"
                    color={
                      !darkTheme ? 'layout.white.white0' : 'layout.black.black0'
                    }
                  >
                    {field.label}
                  </FormLabel>
                  <Select
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
                  {errors[field.name] && (
                    <Text color="red.500" fontSize="sm">
                      {errors[field.name]}
                    </Text>
                  )}
                </FormControl>
              )
            case 'text':
              return (
                <FormControl
                  key={index}
                  isInvalid={errors[field.name]}
                  w="100%"
                >
                  <FormLabel
                    marginTop="10px"
                    marginBottom="5px"
                    color={
                      !darkTheme ? 'layout.white.white0' : 'layout.black.black0'
                    }
                  >
                    <Flex>
                      {field.validation.required && (
                        <Text color="layout.orange.orange500">*</Text>
                      )}
                      <Flex>{field.label}</Flex>
                    </Flex>
                  </FormLabel>
                  <Input
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
                  {errors[field.name] && (
                    <Text color="red.500" fontSize="sm">
                      {errors[field.name]}
                    </Text>
                  )}
                </FormControl>
              )
            case 'pin':
              return (
                <FormControl
                  key={index}
                  isInvalid={errors[field.name]}
                  w="100%"
                >
                  <FormLabel
                    textAlign="center"
                    marginTop="10px"
                    marginBottom="10px"
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
                  />
                  {errors[field.name] && (
                    <Text color="red.500" fontSize="sm">
                      {errors[field.name]}
                    </Text>
                  )}
                </FormControl>
              )
            case 'avatar':
              return (
                <FormControl
                  key={index}
                  isInvalid={errors[field.name]}
                  w="100%"
                >
                  <FormLabel
                    marginTop="10px"
                    marginBottom="5px"
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
                  {errors[field.name] && (
                    <Text color="red.500" fontSize="sm">
                      {errors[field.name]}
                    </Text>
                  )}
                </FormControl>
              )
            case 'button':
              return (
                <VStack key={index} spacing={4} mt={4} w="100%">
                  {field.buttons.map((button, idx) => {
                    if (button.type === 'google') {
                      return (
                        <Button
                          key={idx}
                          aria-label="Google Login"
                          onClick={() => login()}
                          {...button.colorScheme}
                          w="100%"
                          background="layout.black.black850"
                          border="2px"
                          borderColor="layout.black.black700"
                          _hover={{ background: 'layout.black.black800' }}
                        >
                          <Text
                            color={
                              !darkTheme
                                ? 'layout.white.white0'
                                : 'layout.black.black0'
                            }
                          >
                            {t('login_google_quicklink_label')} 🚀
                          </Text>
                        </Button>
                      )
                    }
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
            colorScheme="blue"
          >
            {submitText || t('login_submit_button')}
          </Button>
        )}
        <VStack spacing={2} mt={4} w="100%">
          {formConfig.map((field) => {
            if (field.type === 'links') {
              return field.links.map((link, idx) => (
                <Button
                  key={idx}
                  colorScheme="teal"
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
      </motion.div>
    </Container>
  )
}

export default DynamicFormComponent
