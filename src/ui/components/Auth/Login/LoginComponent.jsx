import React, { useEffect, useState } from 'react'
import {
  Container,
  Grid,
  GridItem,
  Flex,
  Text,
  VStack,
} from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { t } from 'i18next'

// Components
import LoginMessageComponent from 'Components/Auth/Login/LoginMessageComponent.jsx'
import DynamicFormComponent from 'Components/Form/DynamicFormComponent.jsx'

// Hooks
import useTimer from 'Utils/hooks/useTimer.jsx'

// Utils
import { formConfig } from 'Components/Auth/Login/utils/config.jsx'
import {
  saveRegistrationStep,
  isThirdPartyRegisAction,
} from 'Utils/store/action.js'
import {
  ContinueRegisModal,
  CreateAccountByGoogleAuth,
} from 'Components/Auth/Login/utils/config.jsx'

const LoginComponent = () => {
  const [showContinueRegisModal, setThowContinueRegisModal] = useState(false)
  const [showQuickCreateAccountModal, setShowQuickCreateAccountModal] =
    useState(false)
  const [triggerGoogleAuth, setTriggerGoogleAuth] = useState(false)
  const dispatch = useDispatch()
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
    navigate('/sign-up')
  }

  const handleCancelTimer = () => {
    setThowContinueRegisModal(false)
    dispatch(saveRegistrationStep(0))
    dispatch(isThirdPartyRegisAction(false))
    cancelTimer()
  }

  const handleQuickGoogleLogin = () => {
    setTriggerGoogleAuth((prevState) => !prevState)
  }

  const handleEmailRegister = () => {
    navigate('/sign-up')
  }

  const [timeLeft, isTimerActive, resetTimer, cancelTimer] = useTimer(
    200,
    true,
    handleTimerEnd
  )

  return (
    <Container maxW="100vw" h="100vh" p={0}>
      <CreateAccountByGoogleAuth
        handleOpenModal={showQuickCreateAccountModal}
        handleAccept={handleQuickGoogleLogin}
        handleCancel={handleEmailRegister}
      />
      <ContinueRegisModal
        handleOpenModal={showContinueRegisModal}
        handleCancel={handleCancelTimer}
        timeLeft={timeLeft}
      />
      <Grid
        templateAreas={{
          base: `"msg" "log"`,
          md: `"msg log"`,
        }}
        h="100%"
        gridTemplateRows={{
          base: '1fr 1fr',
          md: '1fr',
        }}
        gridTemplateColumns={{
          base: '1fr',
          md: '1fr 1fr',
        }}
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem
          minW={{ base: '100%', md: '450px' }}
          rowSpan={1}
          colSpan={1}
          bg="layout.saffron.saffron100"
          area={'msg'}
        >
          <LoginMessageComponent />
        </GridItem>
        <GridItem
          minW={{ base: '100%', md: '800px' }}
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
              handleThirdPartyChange={(value) => {
                setShowQuickCreateAccountModal(true)
              }}
              triggerGoogleAuth={triggerGoogleAuth}
              enableSubmit
              margin={5}
              maxW="500px"
              formConfig={formConfig}
              onSubmit={handleSubmit}
              authMethod="login"
            />
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default LoginComponent
