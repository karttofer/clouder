// Dependencies
import React from 'react'
import { Container, Grid, GridItem, Flex } from '@chakra-ui/layout'
import { t } from 'i18next'

// Components
import LoginMessageComponent from 'Components/Auth/Login/LoginMessageComponent.jsx'
import DynamicFormComponent from 'Components/Form/DynamicFormComponent.jsx'

const formConfig = [
  {
    type: 'google',
  },
  {
    type: 'text',
    label: t('login_form_username'),
    name: 'name',
    placeholder: t('login_form_username_placeholder'),
  },
  {
    type: 'text',
    inputType: 'password',
    label: t('login_form_password'),
    name: 'password',
    placeholder: t('login_form_password_placeholder'),
  },
  {
    type: 'links',
    links: [
      {
        label: t('login_forgot_password'),
        path: '/magic-link',
      },
      {
        label: t('login_signup'),
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
              enableSubmit
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
