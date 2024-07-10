import React, { useEffect, useState } from 'react'
import { Container, Grid, GridItem, Flex } from '@chakra-ui/layout'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { t } from 'i18next'

// Components
import LoginMessageComponent from 'Components/Auth/Login/LoginMessageComponent.jsx'
import DynamicFormComponent from 'Components/Form/DynamicFormComponent.jsx'
import LoadingScreenComponent from 'Components/Globals/LoadingScreenComponent.jsx'

// Hooks
import userErrorAlertHandler from 'Utils/hooks/userErrorAlertHandler.jsx'
import useAPI from 'Utils/hooks/useAPI.jsx'
// Utils
import { formConfig } from 'Components/Auth/Login/utils/config.jsx'
import {
  saveRegistrationStep,
  isThirdPartyRegisAction,
  deleteAllUnserInformationFromStoreAction,
} from 'Utils/store/action.js'
import {
  ContinueRegisModal,
  CreateAccountByGoogleAuth,
} from 'Components/Auth/Login/utils/config.jsx'
import { googleAuthService, getUserService } from 'Utils/services/auth.js'

const LoginComponent = () => {
  const [showContinueRegisModal, setThowContinueRegisModal] = useState(false)
  const [showQuickCreateAccountModal, setShowQuickCreateAccountModal] =
    useState(false)
  const [showLoading, setShowLoading] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { nickname, email, picture } = useSelector((store) => store.state.user)

  const userValidationCall = async () => {
    if (email) {
      const userService = await getUserService({
        email,
      })

      const { status, data, user_exist } = await userService.json()

      if (data && user_exist && !data.user_completed_registration) {
        setThowContinueRegisModal(true)
      }

      userErrorAlertHandler(status)

      return userService
    }
  }

  useEffect(() => {
    userValidationCall()
  }, [email])

  const handleSubmit = (data) => {
    console.log('Form Data:', data)
  }

  const handleTimerEnd = () => {
    dispatch(isThirdPartyRegisAction(true))
    dispatch(saveRegistrationStep(1))
    navigate('/sign-up')
  }

  const handleCancelTimer = () => {
    setThowContinueRegisModal(false)
    dispatch(saveRegistrationStep(0))
    dispatch(isThirdPartyRegisAction(false))
    dispatch(deleteAllUnserInformationFromStoreAction())
  }

  const handleQuickGoogleLogin = async () => {
    setShowQuickCreateAccountModal(false)
    setShowLoading(true)
    const req = await googleAuthService(
      {
        nickname,
        email,
        picture,
      },
      'register'
    )

    const response = await req.json()

    setShowLoading(false)

    if (response.user_created) {
      dispatch(isThirdPartyRegisAction(true))
      console.log('SIGN UP REDIRECT')
      navigate('/sign-up')
    }

    userErrorAlertHandler(response.status)
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
