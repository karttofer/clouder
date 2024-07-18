// Dependencies
import React, { useEffect } from 'react'
import { Button, Text, VStack } from '@chakra-ui/react'
import { t } from 'i18next'

// Componnets
import ModalComponent from 'Components/Globals/ModalComponent.jsx'

// Assets
import {
  ButtonAcceptTheme,
  ButtonDisableTheme,
  ButtonCancelTheme,
} from 'Assets/chakra/appStyle'

// Hooks
import useTimer from 'Utils/hooks/useTimer.jsx'

export const formConfig = [
  {
    type: 'google',
  },
  {
    type: 'text',
    inputType: 'email',
    label: '',
    name: 'email',
    placeholder: t('login_form.username_placeholder'),
    validation: {
      required: true,
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },
    debounce: 300,
  },
  {
    type: 'links',
    links: [
      {
        parentLabel: t('login_form.signup_title'),
        label: t('login_form.signup'),
        path: '/sign-up',
      },
    ],
  },
]

export const ContinueRegisModal = ({
  handleOpenModal,
  handleCancel,
  handleTimerEnd,
}) => {
  const [timeLeft, isTimerActive, resetTimer, cancelTimer] = useTimer(
    3,
    true,
    () => handleTimerEnd(cancelTimer)
  )

  useEffect(() => {
    if (isTimerActive && timeLeft === 0) {
      handleTimerEnd(cancelTimer)
    }
  }, [timeLeft, isTimerActive, handleTimerEnd, cancelTimer])

  return (
    <ModalComponent
      autoOpen={handleOpenModal}
      modalTitle={t('modals.incomplete_registration_title')}
      jsxContent={<Text>{t('modals.incomplete_registration_message')}</Text>}
      jsxBottom={
        <VStack width="100%">
          <Button
            isLoading={isTimerActive}
            {...ButtonDisableTheme}
            color="layout.black.black0"
            width="100%"
            loadingText={t('registration.redirect_counter', { timeLeft })}
          />
          <Button
            width="100%"
            {...ButtonCancelTheme}
            onClick={() => {
              handleCancel()
              cancelTimer()
            }}
          >
            <Text color="layout.white.white0">
              {t('modals.use_another_account_to_login')}
            </Text>
          </Button>
        </VStack>
      }
    />
  )
}

export const CreateAccountByGoogleAuth = ({
  handleOpenModal,
  handleAccept,
  handleCancel,
}) => {
  return (
    <ModalComponent
      autoOpen={handleOpenModal}
      modalTitle={t('modals.want_to_crate_account_by_google_auth_title')}
      jsxContent={
        <Text>{t('modals.want_to_crate_account_by_google_auth')}</Text>
      }
      jsxBottom={
        <VStack width="100%">
          <Button
            {...ButtonAcceptTheme}
            color="layout.black.black0"
            width="100%"
            onClick={handleAccept}
          >
            <Text>
              {t('modals.want_to_crate_account_by_google_auth_acccept_button')}
            </Text>
          </Button>
          <Button width="100%" {...ButtonCancelTheme} onClick={handleCancel}>
            <Text color="layout.white.white0">
              {t('modals.want_to_crate_account_by_google_auth_denied_button')}
            </Text>
          </Button>
        </VStack>
      }
    />
  )
}
