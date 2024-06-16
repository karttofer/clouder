// Dependencies
import React from 'react'
import { Container, Grid, GridItem } from '@chakra-ui/layout'

// Components
import DynamicForm from '../../DynamicFormComponent.jsx'
import LoginMessageComponent from './LoginMessageComponent.jsx'

const formConfig = [
  {
    type: 'select',
    label: 'Country',
    placeholder: 'Select country',
    options: [
      { value: 'uae', label: 'United Arab Emirates' },
      { value: 'nigeria', label: 'Nigeria' },
    ],
  },
  {
    type: 'text',
    label: 'Name',
    placeholder: 'Enter your name',
  },
  // Add more fields as needed
]

const LoginComponent = () => {
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
          Login
        </GridItem>
      </Grid>
    </Container>
  )
}
export default LoginComponent
