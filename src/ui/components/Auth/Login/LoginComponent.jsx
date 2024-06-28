// Dependencies
import React, { useEffect, useState } from 'react'
import { Container, Grid, GridItem, Flex, Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { t } from 'i18next'

// Assets
import { ButtonSecondaryTheme } from 'Assets/chakra/appStyle'

// Components
import LoginMessageComponent from 'Components/Auth/Login/LoginMessageComponent.jsx'
import DynamicFormComponent from 'Components/Form/DynamicFormComponent.jsx'
import ModalComponent from 'Components/Globals/ModalComponent.jsx'

// Hooks
import useTimer from 'Utils/hooks/useTimer.jsx'

// Utils
import { formConfig } from 'Components/Auth/Login/utils/config.js'

const LoginComponent = () => {
  const [showContinueRegisModal, setThowContinueRegisModal] = useState(false)
  const navigate = useNavigate()
  const regis_last_step = useSelector(
    (store) => store.state.user.regis_last_step
  )

  useEffect(() => {
    if (regis_last_step) {
      setThowContinueRegisModal(true)
    }
  }, [regis_last_step])

  const handleSubmit = (data) => {
    console.log('Form Data:', data)
  }

  const handleTimerEnd = () => {
    navigate('/sign-up', { replace: true })
  }

  const [timeLeft] = useTimer(5, true, handleTimerEnd)

  return (
    <Container>
      <ModalComponent
        autoOpen={showContinueRegisModal}
        modalTitle="Continue Registration"
        jsxContent={
          <Text>
            We detected that you already have an account. Please complete the
            registration process. Confirm your email address to gain access.
          </Text>
        }
        jsxBottom={
          <Button
            isLoading
            {...ButtonSecondaryTheme}
            color="layout.black.black0"
            width="100%"
            loadingText={t('redirect_counter', { timeLeft })}
          ></Button>
        }
      />
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
