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
import LoadingScreenComponent from 'Components/Globals/LoadingScreenComponent.jsx'

// Hooks
import userErrorAlertHandler from 'Utils/hooks/userErrorAlertHandler.jsx'
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
import { googleAuthService } from 'Utils/services/auth.js'

const LoginComponent = () => {
  const [showContinueRegisModal, setThowContinueRegisModal] = useState(false)
  const [showQuickCreateAccountModal, setShowQuickCreateAccountModal] =
    useState(false)
  const [showLoading, setShowLoading] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const RegisterLastStep = useSelector(
    (store) => store.state.user.regis_last_step
  )
  const googleUserStored = useSelector(
    (store) => store.state.user.googleTempInformation
  )

  useEffect(() => {
    if (RegisterLastStep) {
      setThowContinueRegisModal(true)
    }
  }, [RegisterLastStep])

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

  // Here we handle the quick login with Google
  // Should we redirect to the PIN SECTION and validate
  // Using the prop to know if the user finished the registration
  // we can know if the user is already registered if not send it to PIN VALIDATION
  const handleQuickGoogleLogin = async () => {
    setShowQuickCreateAccountModal(false)
    setShowLoading(true)
    const req = await googleAuthService(googleUserStored, 'register')

    const response = await req.json()

    setShowLoading(false)
    userErrorAlertHandler(response.status)

    if (response.user_created) {
      console.log('redirect to dashboard')
    }
  }

  const handleEmailRegister = () => {
    navigate('/sign-up')
  }

  return (
    <Container maxW="100vw" h="100vh" p={0}>
      {showLoading && <LoadingScreenComponent />}
      {showQuickCreateAccountModal && (
        <CreateAccountByGoogleAuth
          handleOpenModal={showQuickCreateAccountModal}
          handleAccept={handleQuickGoogleLogin}
          handleCancel={handleEmailRegister}
        />
      )}

      {showContinueRegisModal && (
        <ContinueRegisModal
          handleOpenModal={showContinueRegisModal}
          handleCancel={handleCancelTimer}
          handleTimerEnd={handleTimerEnd}
        />
      )}

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
          minW={{ base: '100%', md: '550px' }}
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
          bg="layout.white.white0"
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
              marginBottom="20px"
              marginTop="10px"
              darkTheme
              showLogo
              handleThirdPartyChange={(value) => {
                const { user_exist } = value.payload

                setShowQuickCreateAccountModal(!user_exist)
                setThirdPartyResponse(value)
              }}
              enableSubmit
              margin={5}
              maxW="500px"
              formConfig={formConfig}
              onSubmit={handleSubmit}
              authMethod="login"
              title={`${t('login_select_pin_field_title')}`}
              subtitle={t('login_select_pin_field_subtitle')}
            />
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default LoginComponent
