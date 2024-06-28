// Dependencies
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

// Assets
import { ButtonDisableTheme, ButtonCancelTheme } from 'Assets/chakra/appStyle'

// Components
import LoginMessageComponent from 'Components/Auth/Login/LoginMessageComponent.jsx'
import DynamicFormComponent from 'Components/Form/DynamicFormComponent.jsx'
import ModalComponent from 'Components/Globals/ModalComponent.jsx'

// Hooks
import useTimer from 'Utils/hooks/useTimer.jsx'

// Utils
import { formConfig } from 'Components/Auth/Login/utils/config.js'
import { saveRegistrationStep } from 'Utils/store/action.js'

const LoginComponent = () => {
  const [showContinueRegisModal, setThowContinueRegisModal] = useState(false)
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
    cancelTimer()
  }

  const [timeLeft, isTimerActive, resetTimer, cancelTimer] = useTimer(
    200,
    true,
    handleTimerEnd
  )

  return (
    <Container>
      <ModalComponent
        autoOpen={showContinueRegisModal}
        modalTitle={t('incomplete_registration_modal_title')}
        jsxContent={<Text>{t('incomplete_registration_modal_message')}</Text>}
        jsxBottom={
          <VStack width="100%">
            <Button
              isLoading
              {...ButtonDisableTheme}
              color="layout.black.black0"
              width="100%"
              loadingText={t('redirect_counter', { timeLeft })}
            ></Button>
            <Button
              width="100%"
              {...ButtonCancelTheme}
              onClick={handleCancelTimer}
            >
              <Text color="layout.white.white0">
                {t('use_another_account_to_login')}
              </Text>
            </Button>
          </VStack>
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
