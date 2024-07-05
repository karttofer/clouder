import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { t } from 'i18next'

// Components
import DynamicFormComponent from 'Components/Form/DynamicFormComponent.jsx'

// Anims
import { topBottomAnim } from 'Assets/chakra/appStyle.js'
import { LOCAL_BASE_URL } from '../../../../../../enviroment.js'

// Utils
import showErrorToast from 'Utils/hooks/userErrorAlertHandler.jsx'
import { CONFIRM_EMAIL } from 'Utils/constants/store.js'
import userErrorAlertHandler from 'Utils/hooks/userErrorAlertHandler.jsx'

// Store
import store from 'Utils/store/state.js'
import { SAVE_USER_REGISTRATION_INFORMATION } from 'Utils/constants/store.js'

const regisStepOneConfig = [
  {
    type: 'google',
  },
  {
    type: 'text',
    inputType: 'text',
    name: 'nickname',
    label: t('registration_nickname'),
    placeholder: t('registration_nick_placeholder'),
    validation: {
      required: true,
      errorEmptyMessage: 'Ups! You need to enter a nickname',
    },
  },
  {
    type: 'text',
    inputType: 'email',
    name: 'email',
    label: t('registration_email'),
    placeholder: t('registration_email_placeholder'),
    required: true,
    validation: {
      required: true,
      errorEmptyMessage: 'Ups, you need to enter an email address.',
    },
  },
  {
    type: 'text',
    inputType: 'password',
    name: 'password',
    label: t('registration_password'),
    placeholder: t('registration_password_placeholder'),
    required: true,
    hint: 'Password must be 12+ chars, include upper & lower case letters, a number, and a special character (event.g., P@ssw0rd123!).',
    validation: {
      required: true,
      errorEmptyMessage: `Ups! You need to enter a password`,
      errorPatternMessage: `Password isn't strong enough, add more characters, numbers, and special characters`,
      pattern:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+\[\]{}|;:,.<>?/~]).{12,}$/,
    },
    debounce: 500,
  },

  {
    type: 'links',
    links: [
      {
        label: t('back_to_login'),
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
    hint: "Sometimes PIN email can take a few minutes to arrive. If you don't receive it, please wait until the timer ends to request a new one.",
    timer: {
      duration: 3,
      resendLabel: t('resend_pin_button_label'),
    },
  },
  {
    type: 'links',
    links: [
      {
        label: t('back_to_login'),
        path: '/login',
      },
    ],
  },
]

export const stepConfig = [
  {
    title: 'Registration',
    component: ({ onComplete }) => {
      const handleSubmit = async (formData) => {
        const dispatch = useDispatch()
        const { email, nickname, password } = formData

        if (!email || !nickname || !password)
          return console.log('Ups! You need to fill all the fields')

        try {
          const res = await fetch(`${LOCAL_BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email,
              nickname,
              password,
            }),
          })

          if (!res.ok) {
            // Handle HTTP errors
            const errorText = await res.json()
            console.error('Error:', errorText)
            return
          }

          const { status, payload } = await res.json()
          showErrorToast(status)

          if (status === 200) {
            dispatch(
              save_user_registration({
                nickname: payload.user_nickname,
                email: payload.user_email,
                user_token: payload.user_id,
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
          submitText={t('next')}
          title={`${t('registration.title')}`}
          subtitle={t('registration_subtitle')}
          margin={5}
          maxW="500px"
          formConfig={regisStepOneConfig}
          marginTop="55px"
          marginBottom="20px"
          authMethod="register"
          handleThirdPartyChange={(value) => {
            const {
              messageType,
              message,
              status,
              user_exist,
              user_completed_registration,
            } = value.payload

            userErrorAlertHandler({
              errTitle: messageType,
              errMessage: t(message),
              alertType: status,
            })

            if (user_exist) {
              console.log('redirect to pin section')
            }
          }}
        />
      )
    },
  },
  {
    title: 'PIN Confirmation',
    component: ({ onComplete }) => {
      const userEmail = useSelector((store) => store.state.user.email)

      useEffect(() => {
        createMagicLink()
      }, [])

      const createMagicLink = async () => {
        try {
          const res = await fetch(`${LOCAL_BASE_URL}/auth/magic-link`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: userEmail,
              verification_type: CONFIRM_EMAIL,
            }),
          })

          console.log(res.json())
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
          submitText={t('next')}
          title={`${t('registration_select_pin_field_title')}`}
          subtitle={t('registration_select_pin_field_subtitle')}
          margin={5}
          maxW="500px"
          formConfig={regisStepThreeConfig}
        />
      )
    },
  },
]
