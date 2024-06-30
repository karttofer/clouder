// Dependencies
import React from 'react'
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

export const formConfig = [
  {
    type: 'google',
  },
  {
    type: 'text',
    label: '',
    name: 'name',
    placeholder: t('login_form_username_placeholder'),
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

// Utils Components
export const ContinueRegisModal = ({
  handleOpenModal,
  handleCancel,
  timeLeft,
}) => {
  return (
    <ModalComponent
      autoOpen={handleOpenModal}
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
          <Button width="100%" {...ButtonCancelTheme} onClick={handleCancel}>
            <Text color="layout.white.white0">
              {t('use_another_account_to_login')}
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
      modalTitle={t('want_to_crate_account_by_google_auth_title')}
      jsxContent={<Text>{t('want_to_crate_account_by_google_auth')}</Text>}
      jsxBottom={
        <VStack width="100%">
          <Button
            {...ButtonAcceptTheme}
            color="layout.black.black0"
            width="100%"
            onClick={handleAccept}
          >
            <Text>
              {t('want_to_crate_account_by_google_auth_acccept_button')}
            </Text>
          </Button>
          <Button width="100%" {...ButtonCancelTheme} onClick={handleCancel}>
            <Text color="layout.white.white0">
              {t('want_to_crate_account_by_google_auth_denied_button')}
            </Text>
          </Button>
        </VStack>
      }
    />
  )
}
