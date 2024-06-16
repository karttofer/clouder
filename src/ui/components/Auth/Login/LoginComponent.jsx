// Dependencies
import React from 'react'
import { Container, Grid, GridItem, Flex } from '@chakra-ui/layout'

// Components
import DynamicFormComponent from '../../DynamicFormComponent.jsx'
import LoginMessageComponent from './LoginMessageComponent.jsx'

const formConfig = [
  {
    type: 'text',
    label: 'Name',
    name: 'name',
    placeholder: 'Enter your name',
  },
  {
    type: 'select',
    label: 'Country',
    name: 'country',
    placeholder: 'Select country',
    options: [
      { value: 'uae', label: 'United Arab Emirates' },
      { value: 'nigeria', label: 'Nigeria' },
    ],
  },
  {
    type: 'button',
    buttons: [
      {
        type: 'google',
      },
    ],
  },
  {
    type: 'links',
    links: [
      {
        label: 'Forgot Password?',
        path: '/forgot-password',
      },
      {
        label: 'Sign Up',
        path: '/sign-up',
      },
    ],
  },
]
const LoginComponent = () => {
  const handleSubmit = (data) => {
    console.log('Form Data:', data)
  }
  return (
    <Container>
      <Grid
        templateAreas={'msg log'}
        h="100%"
        gridTemplateRows={'100vh '}
        gridTemplateColumns={'50% 50%'}
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem
          rowSpan={1}
          colSpan={1}
          bg="layout.saffron.saffron100"
          area={'msg'}
        >
          <LoginMessageComponent />
        </GridItem>
        <GridItem
          rowSpan={1}
          colSpan={1}
          bg="layout.black.black800"
          area={'log'}
        >
          <Flex
            h="100%"
            display="flex"
            justify="center"
            align="center"
            w="100%"
          >
            <DynamicFormComponent
              margin={5}
              maxW="500px"
              formConfig={formConfig}
              onSubmit={handleSubmit}
            />
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  )
}
export default LoginComponent
