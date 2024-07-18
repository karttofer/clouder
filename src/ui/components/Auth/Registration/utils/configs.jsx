import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { t } from 'i18next'

// Components
import DynamicFormComponent from 'Components/Form/DynamicFormComponent.jsx'

// Anims
import { topBottomAnim } from 'Assets/chakra/appStyle.js'

// Utils
import showErrorToast from 'Utils/hooks/userErrorAlertHandler.jsx'
import userErrorAlertHandler from 'Utils/hooks/userErrorAlertHandler.jsx'
import {
  registrationService,
  createMagicLinkService,
} from 'Utils/services/auth.js'
import { saveUserRegistrationAction } from 'Utils/store/action.js'

const regisStepOneConfig = [
  {
    type: 'google',
  },
  {
    type: 'text',
    inputType: 'text',
    name: 'nickname',
    label: t('registration.nickname'),
    placeholder: t('registration.nick_placeholder'),
    validation: {
      required: true,
      errorEmptyMessage: t('errors.error_empty_nickname'),
    },
  },
  {
    type: 'text',
    inputType: 'email',
    name: 'email',
    label: t('registration.email'),
    placeholder: t('registration.email_placeholder'),
    required: true,
    validation: {
      required: true,
      errorEmptyMessage: t('errors.error_emty_email'),
    },
  },
  {
    type: 'links',
    links: [
      {
        label: t('common.back_to_login'),
        path: '/login',
      },
    ],
  },
]

const regisStepThreeConfig = [
  {
    type: 'pin',
    name: 'pin',
    length: 4,
    hint: t('registration.pin_hint'),
    timer: {
      duration: 50,
      resendLabel: t('buttons.resend_pin_button_label'),
    },
  },
  {
    type: 'links',
    links: [
      {
        label: t('common.back_to_login'),
        path: '/login',
      },
    ],
  },
]

export const stepConfig = [
  {
    title: t('registration.registration_title_step'),
    component: ({ onComplete }) => {
      const dispatch = useDispatch()

      const handleSubmit = async (formData) => {
        const { email, nickname } = formData

        if (!email || !nickname)
          return console.error('Ups! You need to fill all the fields')

        try {
          const res = await registrationService({ email, nickname })

          const { message, messageType, status, user } = await res.json()

          userErrorAlertHandler({
            errTitle: messageType,
            errMessage: t(message),
            alertType: messageType,
          })

          if (status === 200) {
            dispatch(
              saveUserRegistrationAction({
                nickname: user.nickname,
                email: user.email,
                user_token: user.user_id,
              })
            )
            onComplete()
            return
          }
        } catch (error) {
          console.error('Fetch error:', error)
        }
      }
      return (
        <DynamicFormComponent
          animationType={topBottomAnim}
          onSubmit={handleSubmit}
          showLogo
          darkTheme
          enableSubmit
          submitText={t('buttons.next')}
          title={`${t('registration.title')}`}
          subtitle={t('registration.subtitle')}
          margin={5}
          maxW="500px"
          formConfig={regisStepOneConfig}
          marginTop="55px"
          marginBottom="20px"
          authMethod="register"
          handleThirdPartyChange={(value) => {
            console.log(value)
            const { messageType, message, status, user_exist } = value.payload

            userErrorAlertHandler({
              errTitle: messageType,
              errMessage: t(message),
              alertType: status,
            })

            if (user_exist) {
              console.log('redirect to pin section')
            }
            // User always will be redirect to PIN section
          }}
        />
      )
    },
  },
  {
    title: t('registration.pin_confirmation_title_step'),
    component: ({ onComplete }) => {
      const userEmail = useSelector((store) => store.state.user.email)

      useEffect(() => {
        createMagicLink()
      }, [])

      const createMagicLink = async () => {
        try {
          createMagicLinkService({
            email: userEmail,
          })
        } catch (error) {
          console.error('Fetch error:', error)
          showErrorToast(500)
        }
      }

      const handleSubmit = (formData) => {
        console.log('Form Data:', formData)
        onComplete()
      }
      return (
        <DynamicFormComponent
          darkTheme
          animationType={topBottomAnim}
          onSubmit={handleSubmit}
          showLogo
          submitText={t('buttons.next')}
          title={`${t('login_form.select_pin_field_title')}`}
          subtitle={t('login_form.select_pin_field_subtitle')}
          margin={5}
          maxW="500px"
          formConfig={regisStepThreeConfig}
        />
      )
    },
  },
  {
    title: t('registration.done_title_step'),
  },
]
