import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
  Container,
  VStack,
  FormHelperText,
  Text,
  Image,
} from '@chakra-ui/react'
import { useGoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import {
  ButtonThemePrimary,
  InputThemePrimary,
} from '../../assets/chakra/appStyle'

const DynamicFormComponent = ({ formConfig, onSubmit, margin, maxW }) => {
  const [formData, setFormData] = useState({})
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const handleNavigation = (path) => {
    navigate(path)
  }

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
    flow: 'auth-code',
  })

  return (
    <Container
      w="100%"
      as="form"
      onSubmit={handleSubmit}
      m={margin}
      maxW={maxW}
    >
      {formConfig.map((field, index) => {
        switch (field.type) {
          case 'select':
            return (
              <FormControl key={index}>
                <FormLabel
                  marginTop="10px"
                  marginBottom="5px"
                  color="layout.white.white0"
                >
                  {field.label}
                </FormLabel>
                <Select
                  {...InputThemePrimary}
                  name={field.name}
                  placeholder={field.placeholder}
                  onChange={handleChange}
                  className="select-option-bg-color-primary"
                >
                  {field.options.map((option, idx) => (
                    <option key={idx} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
                <FormHelperText color="layout.white.white0" fontWeight="300">
                  {field.hint}
                </FormHelperText>
              </FormControl>
            )
          case 'text':
            return (
              <FormControl key={index}>
                <FormLabel
                  marginTop="10px"
                  marginBottom="5px"
                  color="layout.white.white0"
                >
                  {field.label}
                </FormLabel>
                <Input
                  {...InputThemePrimary}
                  _placeholder={{ color: 'white' }}
                  type={field.inputType}
                  name={field.name}
                  placeholder={field.placeholder}
                  onChange={handleChange}
                />
                <FormHelperText color="layout.white.white0" fontWeight="300">
                  {field.hint}
                </FormHelperText>
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
                        _hover={{
                          background: 'layout.black.black800',
                        }}
                      >
                        <Text color="layout.white.white0">
                          Sign in with Google 🚀
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
                      _hover={{
                        background: 'layout.black.black800',
                      }}
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
      <Button
        w="100%"
        marginTop="20px"
        {...ButtonThemePrimary}
        type="submit"
        colorScheme="blue"
      >
        Submit
      </Button>
      <VStack spacing={2} mt={4} w="100%">
        {formConfig.map((field) => {
          if (field.type === 'links') {
            return field.links.map((link, idx) => (
              <Button
                key={idx}
                w="100%"
                colorScheme="teal"
                variant="link"
                onClick={() => handleNavigation(link.path)}
              >
                <Text color="layout.white.white0">{link.label}</Text>
              </Button>
            ))
          }
          return null
        })}
      </VStack>
    </Container>
  )
}

export default DynamicFormComponent
