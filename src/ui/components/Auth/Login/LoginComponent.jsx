// Dependencies
import React from 'react'
import { Container, Grid, GridItem, Flex } from '@chakra-ui/layout'

// Components
import DynamicFormComponent from '../../DynamicFormComponent.jsx'
import LoginMessageComponent from './LoginMessageComponent.jsx'

// Icons
import googleIcon from '../../../../assets/images/google_logo.svg'

const formConfig = [
  {
    type: 'text',
    inputType: 'text',
    label: 'Username',
    name: 'name',
    placeholder: 'Enter your name',
  },
  {
    type: 'text',
    inputType: 'password',
    label: 'Password',
    name: 'password',
    placeholder: 'You should have a password mate',
  },
  {
    type: 'button',
    buttons: [
      {
        textContainer: 'Login with Google',
        label: 'Google Login',
        colorScheme: {},
        imgIcon: googleIcon,
        onClick: () => alert('Google Login Clicked'),
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
        label: `You don't have an account yet?`,
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
